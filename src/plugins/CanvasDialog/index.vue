<template>
  <el-dialog
    class="vue-canvas-element-dialog"
    :visible="true"
    title="图片编辑"
    style="font-size: 18px"
    width="1400px"
    :close-on-click-modal="false"
    append-to-body
    @close="closeDialog"
  >
    <div class="modal-body">
      <div class="container" :style="'height:' + dialogHeight + 'px;'" @scroll.passive="getScrollData($event)">
        <canvas
          id="canvas"
          ref="canvas"
          :width="canvasWidth"
          :height="canvasHeight"
        >
        </canvas>
        <textarea
          v-show="isShowText"
          id="textarea"
          name="textBox"
          cols="9"
          rows="1"
          class="text-style"
          placeholder="请输入"
        ></textarea>
      </div>
      <div class="tool-container">
        <div class="icon-div icon" @click="isShowDrawPane = !isShowDrawPane">
          <i class="iconfont icon-tiaosepan"></i>
        </div>
        <div class="icon-div icon" @click="filterObject('erase')">
          <i class="iconfont icon-rubber-full"></i>
        </div>
        <div class="icon-div icon" @click="filterObject('undefined')">
          <i class="iconfont icon-quxian"></i>
        </div>
        <div class="icon-div icon" @click="filterObject('line')">
          <i class="iconfont icon-xiantiao"></i>
        </div>
        <div class="icon-div icon" @click="filterObject('arrows')">
          <i class="iconfont icon-jiantou_youshang_o"></i>
        </div>
        <div class="icon-div icon" @click="filterObject('rect')">
          <i class="iconfont icon-24gl-rectangle"></i>
        </div>
        <div class="icon-div icon" @click="filterObject('circle')">
          <i class="iconfont icon-xingzhuang-tuoyuanxing"></i>
        </div>
        <div class="icon-div icon" @click="filterObject('text')">
          <i class="iconfont icon-wenben"></i>
        </div>
        <div class="icon-div icon" @click="clearCanvas()">
          <i class="iconfont icon-shanchu"></i>
        </div>
        <div class="icon-div icon" @click="redo()">
          <i class="iconfont icon-chehui" :style="historyImageData.length > 0 ? '' : 'color: #ddd;'"></i>
        </div>
        <div class="icon-div icon" @click="cancelRedo()">
          <i class="iconfont icon-zhongzuo" :style="newHistoryImageData.length > 0 ? '' : 'color: #ddd;'"></i>
        </div>
        <div class="icon-div icon" @click="downLoad()">
          <i class="el-icon-download"></i>
        </div>
        <div v-show="isShowDrawPane" class="drawPane">
          <div @click="isShowDrawPane = false">
            <el-icon class="el-icon-circle-close close-draw-pane" scale="3"></el-icon>
          </div>
          <div class="colorClass">画笔大小</div>
          <input id="lwRange" type="range" min="1" max="10" value="2" @change="LwRangeBtn" />
          <div class="colorClass">画笔颜色</div>
          <input id="lcolor" type="color" value="#ff0000" @change="LcolorBtn" />
        </div>
      </div>
    </div>
    <div slot="footer" class="dialog-footer">
      <el-button plain @click="closeDialog">取 消</el-button>
      <el-button type="primary" class="g-background00BCD4" :disable="loading" :loading="loading" @click="submitBtn">保 存</el-button>
    </div>
  </el-dialog>
</template>
<script>
// 画笔颜色选择引入
// import pickerColor from './pickerColor'
export default {
  name: 'vue-canvas-element-dialog',
  props: {
    imgBase64: {
      type: String,
      default: ''
    },
    dialogHeight: {
      type: Number,
      default: 520
    }
  },
  // components:{pickerColor},
  data() {
    return {
      form: {},
      isShowDrawPane: false,
      canvas: null,
      context: null,
      // 线宽
      lwidth: 2,
      // 画笔颜色
      lcolor: '#ff0000',
      textColor: '#ff0000',
      // 维护绘画状态的数组
      paintTypeArr: {
        painting: false,
        erase: false,
        line: false,
        arrows: false,
        rect: false,
        circle: false,
        text: false
      },
      // 最近一次的canvas图片的数据
      imageData: null,
      // 是否显示文字编写框
      isShowText: false,
      // 保存画布图片历史的数据
      historyImageData: [],
      // 保存已被撤销的历史画布图片数据
      newHistoryImageData: [],
      socket: null,
      img: null,
      filterType: undefined,
      loading: false,
      canvasWidth: 940,
      canvasHeight: 500,
      canvasScrollTop: 0,
      canvasScrollLeft: 0
    }
  },
  watch: {
    color() {
      this.context.strokeStyle = this.color
      // this.pickerVisible = false//颜色改变后消失
    }
  },
  mounted() {
    const self = this
    self.init()
    window.onresize = function() {
      self.init()
    }
    this.listen()
  },
  methods: {
    getScrollData(e) {
      this.canvasScrollTop = e.target.scrollTop
      this.canvasScrollLeft = e.target.scrollLeft
    },
    LwRangeBtn() {
      this.context.lineWidth = parseInt(document.getElementById('lwRange').value)
      this.lwidth = parseInt(document.getElementById('lwRange').value)
    },
    LcolorBtn() {
      this.context.fillStyle = document.getElementById('lcolor').value
      this.context.strokeStyle = document.getElementById('lcolor').value
      this.textColor = document.getElementById('lcolor').value
    },

    closeDialog() {
      this.$emit('onClose')
    },
    dataURLtoFile(dataURI, type) {
      const binary = atob(dataURI.split(',')[1])
      const array = []
      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i))
      }
      return new Blob([new Uint8Array(array)], { type: type })
    },
    // 初始化画布
    init() {
      this.$nextTick(() => {
        this.canvas = document.getElementById('canvas')
        this.context = this.canvas.getContext('2d')
        this.textColor = '#ff0000'
        this.context.lineWidth = '2'
        this.context.fillStyle = '#ff0000'
        this.context.strokeStyle = '#ff0000'

        this.imageData && this.context.putImageData(this.imageData, 0, 0)
        const img = new Image()
        img.setAttribute('crossOrigin', 'anonymous')
        const url = this.imgBase64 // 重点之重，这是要编辑的图片base64，如图一
        img.src = url
        img.onload = () => {
          if (img.complete) {
            // let width = 0
            // let height = 0
            // if (this.canvasWidth < img.width) {
            //   if ((this.canvasWidth * (img.height / img.width)) > this.canvasHeight) {
            //     width = (this.canvasHeight *(img.width / img.height))
            //     height = this.canvasHeight
            //   } else {
            //     width = this.canvasWidth
            //     height = (this.canvasWidth * (img.height / img.width))
            //   }
            // } else if (this.canvasHeight < img.height) {
            //   if ((this.canvasHeight *(img.width / img.height)) > this.canvasWidth) {
            //     width = this.canvasWidth
            //     height = (this.canvasWidth * (img.height / img.width))
            //   } else {
            //     width = (this.canvasHeight *(img.width / img.height))
            //     height = this.canvasHeight
            //   }
            // } else {
            //   width = img.width
            //   height = img.height
            // }
            // this.context.drawImage(img, 0, 0, width, height)
            this.canvas.setAttribute('width', img.width)
            this.canvas.setAttribute('height', img.height)
            this.context.drawImage(img, 0, 0, img.width, img.height)
            this.img = img
            // 初始化，避免画图重影
            this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
          }
        }
      })
    },
    // 监听鼠标,用于画笔任意绘制和橡皮擦
    listen() {
      this.$nextTick(() => {
        const self = this
        let lastPoint = { x: undefined, y: undefined }
        const rect = self.canvas.getBoundingClientRect()
        var scaleX = self.canvas.width / rect.width
        var scaleY = self.canvas.height / rect.height
        let textPoint = { x: undefined, y: undefined }

        self.canvas.onmousedown = function(e) {
          self.paintTypeArr['painting'] = true

          let x1 = e.clientX
          let y1 = e.clientY
          x1 -= rect.left
          y1 -= rect.top
          x1 += self.canvasScrollLeft
          y1 += self.canvasScrollTop
          lastPoint = { x: x1 * scaleX, y: y1 * scaleY }
          if (self.paintTypeArr['text']) {
            const textarea = document.getElementById('textarea')
            if (self.isShowText) {
              const textContent = textarea.value
              self.isShowText = false
              textarea.value = ''
              self.drawText(textPoint.x, textPoint.y, textContent)
            } else if (!self.isShowText) {
              self.isShowText = true
              textarea.style.left = (e.clientX - rect.left) + 'px'
              textarea.style.top = (e.clientY - rect.top) + 160 + 'px'
              textarea.style.color = self.textColor
              textPoint = { x: lastPoint.x, y: lastPoint.y }
              // textarea.style['z-index'] = 6
            }
          }

          if (self.paintTypeArr['erase']) {
            const ctx = self.context
            ctx.save()
            ctx.globalCompositeOperation = 'destination-out'
            ctx.beginPath()
            const radius = self.lWidth / 2 > 5 ? self.lWidth / 2 : 5
            ctx.arc(lastPoint.x, lastPoint.y, radius, 0, 2 * Math.PI)
            ctx.clip()
            ctx.clearRect(0, 0, self.canvas.width, self.canvas.height)
            ctx.restore()
          }

          var thee = e || window.event
          self.stopBubble(thee)
        }
        self.canvas.onmousemove = function(e) {
          let x2 = e.clientX
          let y2 = e.clientY
          x2 -= rect.left
          y2 -= rect.top
          x2 += self.canvasScrollLeft
          y2 += self.canvasScrollTop
          const newPoint = { x: x2 * scaleX, y: y2 * scaleY }

          if (self.isPainting()) {
            self.drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint
          } else if (self.paintTypeArr['erase']) {
            if (!lastPoint.x && !lastPoint.y) { return }
            self.handleErase(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
            lastPoint = newPoint
          } else if (self.paintTypeArr['line']) {
            // self.clearCanvas()
            self.imageData && self.context.putImageData(self.imageData, 0, 0)
            self.drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
          } else if (self.paintTypeArr['arrows']) {
            // self.clearCanvas()
            self.imageData && self.context.putImageData(self.imageData, 0, 0)
            self.drawArrow(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
          } else if (self.paintTypeArr['rect']) {
            // self.clearCanvas()
            self.imageData && self.context.putImageData(self.imageData, 0, 0)
            self.drawRect(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
          } else if (self.paintTypeArr['circle']) {
            // self.clearCanvas()

            self.imageData && self.context.putImageData(self.imageData, 0, 0)
            self.drawCircle(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y)
          }

          var thee = e || window.event
          self.stopBubble(thee)
        }
        self.canvas.onmouseup = function() {
          lastPoint = { x: undefined, y: undefined }
          self.canvasDraw()
          self.filterObject(self.filterType)
        }
      })
    },
    // 更新绘画类型数组paintTypeArr的状态
    filterObject(type) {
      this.filterType = type
      if (!type) {
        for (const key in this.paintTypeArr) {
          this.paintTypeArr[key] = false
        }
      } else {
        for (const key in this.paintTypeArr) {
          key === type
            ? (this.paintTypeArr[key] = true)
            : (this.paintTypeArr[key] = false)
        }
      }
    },
    // 阻止事件冒泡
    stopBubble(evt) {
      if (evt.stopPropagation) {
        evt.stopPropagation()
      } else {
        // ie
        evt.cancelBubble = true
      }
    },
    // 判断是否是自由绘画模式
    isPainting() {
      for (const key in this.paintTypeArr) {
        if (key !== 'painting' && this.paintTypeArr[key]) {
          return false
        }
      }
      if (this.paintTypeArr['painting']) {
        return true
      }
      return false
    },
    // 橡皮擦
    handleErase(x1, y1, x2, y2) {
      const ctx = this.context
      // 获取两个点之间的剪辑区域四个端点
      var asin = radius * Math.sin(Math.atan((y2 - y1) / (x2 - x1)))
      var acos = radius * Math.cos(Math.atan((y2 - y1) / (x2 - x1)))
      var x3 = x1 + asin
      var y3 = y1 - acos
      var x4 = x1 - asin
      var y4 = y1 + acos
      var x5 = x2 + asin
      var y5 = y2 - acos
      var x6 = x2 - asin
      var y6 = y2 + acos // 保证线条的连贯，所以在矩形一端画圆

      ctx.save()
      ctx.beginPath()
      ctx.globalCompositeOperation = 'destination-out'
      const radius = this.lWidth / 2 > 5 ? this.lWidth / 2 : 5
      ctx.arc(x2, y2, radius, 0, 2 * Math.PI)
      ctx.clip()
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      ctx.restore() // 清除矩形剪辑区域里的像素

      ctx.save()
      ctx.beginPath()
      ctx.globalCompositeOperation = 'destination-out'
      ctx.moveTo(x3, y3)
      ctx.lineTo(x5, y5)
      ctx.lineTo(x6, y6)
      ctx.lineTo(x4, y4)
      ctx.closePath()
      ctx.clip()
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      ctx.restore()
    },
    // 画线
    drawLine(fromX, fromY, toX, toY) {
      const ctx = this.context
      ctx.beginPath()
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.moveTo(fromX, fromY)
      ctx.lineTo(toX, toY)
      ctx.stroke()
      ctx.closePath()
    },
    // 画箭头
    drawArrow(fromX, fromY, toX, toY) {
      const ctx = this.context
      var headlen = 10 // 自定义箭头线的长度
      var theta = 45 // 自定义箭头线与直线的夹角，个人觉得45°刚刚好
      var arrowX, arrowY // 箭头线终点坐标
      // 计算各角度和对应的箭头终点坐标
      var angle = (Math.atan2(fromY - toY, fromX - toX) * 180) / Math.PI
      var angle1 = ((angle + theta) * Math.PI) / 180
      var angle2 = ((angle - theta) * Math.PI) / 180
      var topX = headlen * Math.cos(angle1)
      var topY = headlen * Math.sin(angle1)
      var botX = headlen * Math.cos(angle2)
      var botY = headlen * Math.sin(angle2)
      ctx.beginPath()
      // 画直线
      ctx.moveTo(fromX, fromY)
      ctx.lineTo(toX, toY)

      arrowX = toX + topX
      arrowY = toY + topY
      // 画上边箭头线
      ctx.moveTo(arrowX, arrowY)
      ctx.lineTo(toX, toY)

      arrowX = toX + botX
      arrowY = toY + botY
      // 画下边箭头线
      ctx.lineTo(arrowX, arrowY)

      ctx.stroke()
      ctx.closePath()
    },
    // 绘制矩形
    drawRect(topLeftX, topLeftY, botRightX, botRightY) {
      const ctx = this.context
      ctx.strokeRect(
        topLeftX,
        topLeftY,
        Math.abs(botRightX - topLeftX),
        Math.abs(botRightY - topLeftY)
      )
    },
    // 画圆
    drawCircle(circleX, circleY, endX, endY) {
      const ctx = this.context
      const radius = Math.sqrt(
        (circleX - endX) * (circleX - endX) +
          (circleY - endY) * (circleY - endY)
      )
      ctx.beginPath()
      ctx.arc(circleX, circleY, radius, 0, Math.PI * 2, true)
      ctx.stroke()
    },
    // 画文字
    drawText(startX, startY, content) {
      const ctx = this.context
      ctx.save()
      ctx.beginPath()
      ctx.font = '25px orbitron'
      ctx.textBaseline = 'top'
      ctx.fillText(content, parseInt(startX), parseInt(startY))
      ctx.restore()
      ctx.closePath()
    },
    // 清屏
    clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.init()
    },
    // 定格画布图片
    canvasDraw() {
      this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height)
      this.historyImageData.push(this.imageData)
    },
    // 撤销
    redo() {
      const historyImageData = this.historyImageData
      const newHistoryImageData = this.newHistoryImageData
      if (historyImageData.length > 0) {
        const hisImg = historyImageData.pop()
        newHistoryImageData.push(hisImg)
        if (historyImageData.length === 0) {
          this.imageData = null
          this.clearCanvas()
          this.init()
        } else {
          this.context.putImageData(historyImageData[historyImageData.length - 1], 0, 0)
        }
      }
    },
    // 反撤销
    cancelRedo() {
      if (this.newHistoryImageData.length > 0) {
        const newHisImg = this.newHistoryImageData.pop()
        this.imageData = newHisImg
        this.context.putImageData(newHisImg, 0, 0)
        this.historyImageData.push(newHisImg)
      }
    },
    // 保存图片
    downLoad() {
      const imgUrl = this.canvas.toDataURL('image/png')
      const a = document.createElement('a')
      a.href = imgUrl
      a.download = '绘图保存记录' + (new Date()).getTime()
      a.target = '_blank'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },
    submitBtn() {
      // 防止多次点击提交
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)

      const fileObj = {
        relativeType: 3,
        name: '编辑图片'
      }
      console.log(fileObj)
      const canvas = document.getElementById('canvas')
      var file = canvas.toDataURL('image/png')
      this.$emit('onSubmit', file)
      // var formData = new FormData()
      // const blob = this.dataURLtoFile(file, 'image/jpg')
      // const fileOfBlob = new File([blob], new Date() + '.jpg')
      // formData.append('file', fileOfBlob)
      // formData.append('relativeType', 3)
      // formData.append('name', '编辑图片')
      // 上传图片后提交保存，根据实际开发需求编写
      // this.$axios
      //     .postUpload('/uxxxoad', formData)
      //     .then((response) => {
      //     this.$api.creatxxxxRule({ taskBreakRule }).then((response) => {
      //       if (response.success) {
      //         this.$message({
      //           message: '保存成功',
      //           type: 'success'
      //         })
      //         this.$emit('onClose', true)
      //       } else {
      //         this.$message({
      //           message: response.info,
      //           type: 'error'
      //         })
      //       }
      //     })
      //   })
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  /* height: 100%;
  height: 600px;
  overflow: hidden; */
  margin: 10px auto;
  overflow: auto;
}
.tool-container {
  width: 580px;
  border: 2px solid orange;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  position: relative;
}
.drawPane {
  padding: 25px 20px;
  height: 120px;
  position: absolute;
  top: -120px;
  left: 0px;
  border-radius: 5px;
  border: 2px solid orangered;
  background-color: #fff;
}
.close-draw-pane {
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 24px;
}
.icon-div {
  margin: 4px 12px;
}
.icon-div i {
  font-size: 24px;
  color: #ffa500;
}
.icon :hover {
  cursor: pointer;
}
input[type="range"] {
  /* -webkit-appearance: none; */
  width: 180px;
  height: 24px;
  outline: none;
  margin-bottom: 3px;
}
input[type="range"]::-webkit-slider-runnable-track {
  background-color: orangered;
  height: 4px;
  border-radius: 5px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: orange;
  cursor: pointer;
  margin-top: -4px;
}
.text-style {
  float: left;
  position: absolute;
  word-break: break-all;
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.5;
  box-sizing: border-box;
  width: 200px;
  height: 80px;
  font-size: inherit;
  color: #606266;
  background-color: #fff;
  background-image: none;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.colorClass {
  color: orange;
}
.svg-icon {
  font-size: 24px;
}

@font-face {
    font-family: 'iconfont';
    src: url('data:font/woff2;charset=utf-8;base64,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') format('woff2'),
        url('data:font/woff;charset=utf-8;base64,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') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-shanchu:before {
  content: "\f013f";
}

.icon-wenben:before {
  content: "\e649";
}

.icon-xingzhuang-tuoyuanxing:before {
  content: "\eb99";
}

.icon-jiantou_youshang_o:before {
  content: "\eb94";
}

.icon-24gl-rectangle:before {
  content: "\ea98";
}

.icon-chehui:before {
  content: "\e643";
}

.icon-quxian:before {
  content: "\e636";
}

.icon-xiantiao:before {
  content: "\e701";
}

.icon-rubber-full:before {
  content: "\ea15";
}

.icon-zhongzuo:before {
  content: "\e60b";
}

.icon-tiaosepan:before {
  content: "\e62f";
}
</style>
<style>
.vue-canvas-element-dialog .el-dialog .el-dialog__body {
  padding: 0 20px;
}
</style>
