/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 966:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ CanvasDialog; }
});

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/CanvasDialog/index.vue?vue&type=template&id=3a5ed87c&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-dialog', {
    staticClass: "vue-canvas-element-dialog",
    staticStyle: {
      "font-size": "18px"
    },
    attrs: {
      "visible": true,
      "title": "图片编辑",
      "width": "1400px",
      "close-on-click-modal": false,
      "append-to-body": ""
    },
    on: {
      "close": _vm.closeDialog
    }
  }, [_c('div', {
    staticClass: "modal-body"
  }, [_c('div', {
    staticClass: "container",
    style: 'height:' + _vm.dialogHeight + 'px;',
    on: {
      "&scroll": function ($event) {
        return _vm.getScrollData($event);
      }
    }
  }, [_c('canvas', {
    ref: "canvas",
    attrs: {
      "id": "canvas",
      "width": _vm.canvasWidth,
      "height": _vm.canvasHeight
    }
  }), _c('textarea', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isShowText,
      expression: "isShowText"
    }],
    staticClass: "text-style",
    attrs: {
      "id": "textarea",
      "name": "textBox",
      "cols": "9",
      "rows": "1",
      "placeholder": "请输入"
    }
  })]), _c('div', {
    staticClass: "tool-container"
  }, [_c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        _vm.isShowDrawPane = !_vm.isShowDrawPane;
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-tiaosepan"
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.filterObject('erase');
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-rubber-full"
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.filterObject('undefined');
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-quxian"
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.filterObject('line');
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-xiantiao"
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.filterObject('arrows');
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-jiantou_youshang_o"
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.filterObject('rect');
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-24gl-rectangle"
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.filterObject('circle');
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-xingzhuang-tuoyuanxing"
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.filterObject('text');
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-wenben"
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.clearCanvas();
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-shanchu"
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.redo();
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-chehui",
    style: _vm.historyImageData.length > 0 ? '' : 'color: #ddd;'
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.cancelRedo();
      }
    }
  }, [_c('i', {
    staticClass: "iconfont icon-zhongzuo",
    style: _vm.newHistoryImageData.length > 0 ? '' : 'color: #ddd;'
  })]), _c('div', {
    staticClass: "icon-div icon",
    on: {
      "click": function ($event) {
        return _vm.downLoad();
      }
    }
  }, [_c('i', {
    staticClass: "el-icon-download"
  })]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isShowDrawPane,
      expression: "isShowDrawPane"
    }],
    staticClass: "drawPane"
  }, [_c('div', {
    on: {
      "click": function ($event) {
        _vm.isShowDrawPane = false;
      }
    }
  }, [_c('el-icon', {
    staticClass: "el-icon-circle-close close-draw-pane",
    attrs: {
      "scale": "3"
    }
  })], 1), _c('div', {
    staticClass: "colorClass"
  }, [_vm._v("画笔大小")]), _c('input', {
    attrs: {
      "id": "lwRange",
      "type": "range",
      "min": "1",
      "max": "10",
      "value": "2"
    },
    on: {
      "change": _vm.LwRangeBtn
    }
  }), _c('div', {
    staticClass: "colorClass"
  }, [_vm._v("画笔颜色")]), _c('input', {
    attrs: {
      "id": "lcolor",
      "type": "color",
      "value": "#ff0000"
    },
    on: {
      "change": _vm.LcolorBtn
    }
  })])])]), _c('div', {
    staticClass: "dialog-footer",
    attrs: {
      "slot": "footer"
    },
    slot: "footer"
  }, [_c('el-button', {
    attrs: {
      "plain": ""
    },
    on: {
      "click": _vm.closeDialog
    }
  }, [_vm._v("取 消")]), _c('el-button', {
    staticClass: "g-background00BCD4",
    attrs: {
      "type": "primary",
      "disable": _vm.loading,
      "loading": _vm.loading
    },
    on: {
      "click": _vm.submitBtn
    }
  }, [_vm._v("保 存")])], 1)]);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/CanvasDialog/index.vue?vue&type=script&lang=js
// 画笔颜色选择引入
// import pickerColor from './pickerColor'
/* harmony default export */ var CanvasDialogvue_type_script_lang_js = ({
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
    };
  },
  watch: {
    color() {
      this.context.strokeStyle = this.color;
      // this.pickerVisible = false//颜色改变后消失
    }
  },

  mounted() {
    const self = this;
    self.init();
    window.onresize = function () {
      self.init();
    };
    this.listen();
  },
  methods: {
    getScrollData(e) {
      this.canvasScrollTop = e.target.scrollTop;
      this.canvasScrollLeft = e.target.scrollLeft;
    },
    LwRangeBtn() {
      this.context.lineWidth = parseInt(document.getElementById('lwRange').value);
      this.lwidth = parseInt(document.getElementById('lwRange').value);
    },
    LcolorBtn() {
      this.context.fillStyle = document.getElementById('lcolor').value;
      this.context.strokeStyle = document.getElementById('lcolor').value;
      this.textColor = document.getElementById('lcolor').value;
    },
    closeDialog() {
      this.$emit('onClose');
    },
    dataURLtoFile(dataURI, type) {
      const binary = atob(dataURI.split(',')[1]);
      const array = [];
      for (let i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {
        type: type
      });
    },
    // 初始化画布
    init() {
      this.$nextTick(() => {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.textColor = '#ff0000';
        this.context.lineWidth = '2';
        this.context.fillStyle = '#ff0000';
        this.context.strokeStyle = '#ff0000';
        this.imageData && this.context.putImageData(this.imageData, 0, 0);
        const img = new Image();
        img.setAttribute('crossOrigin', 'anonymous');
        const url = this.imgBase64; // 重点之重，这是要编辑的图片base64，如图一
        img.src = url;
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
            this.canvas.setAttribute('width', img.width);
            this.canvas.setAttribute('height', img.height);
            this.context.drawImage(img, 0, 0, img.width, img.height);
            this.img = img;
            // 初始化，避免画图重影
            this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
          }
        };
      });
    },
    // 监听鼠标,用于画笔任意绘制和橡皮擦
    listen() {
      this.$nextTick(() => {
        const self = this;
        let lastPoint = {
          x: undefined,
          y: undefined
        };
        const rect = self.canvas.getBoundingClientRect();
        var scaleX = self.canvas.width / rect.width;
        var scaleY = self.canvas.height / rect.height;
        let textPoint = {
          x: undefined,
          y: undefined
        };
        self.canvas.onmousedown = function (e) {
          self.paintTypeArr['painting'] = true;
          let x1 = e.clientX;
          let y1 = e.clientY;
          x1 -= rect.left;
          y1 -= rect.top;
          x1 += self.canvasScrollLeft;
          y1 += self.canvasScrollTop;
          lastPoint = {
            x: x1 * scaleX,
            y: y1 * scaleY
          };
          if (self.paintTypeArr['text']) {
            const textarea = document.getElementById('textarea');
            if (self.isShowText) {
              const textContent = textarea.value;
              self.isShowText = false;
              textarea.value = '';
              self.drawText(textPoint.x, textPoint.y, textContent);
            } else if (!self.isShowText) {
              self.isShowText = true;
              textarea.style.left = e.clientX - rect.left + 'px';
              textarea.style.top = e.clientY - rect.top + 160 + 'px';
              textarea.style.color = self.textColor;
              textPoint = {
                x: lastPoint.x,
                y: lastPoint.y
              };
              // textarea.style['z-index'] = 6
            }
          }

          if (self.paintTypeArr['erase']) {
            const ctx = self.context;
            ctx.save();
            ctx.globalCompositeOperation = 'destination-out';
            ctx.beginPath();
            const radius = self.lWidth / 2 > 5 ? self.lWidth / 2 : 5;
            ctx.arc(lastPoint.x, lastPoint.y, radius, 0, 2 * Math.PI);
            ctx.clip();
            ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
            ctx.restore();
          }
          var thee = e || window.event;
          self.stopBubble(thee);
        };
        self.canvas.onmousemove = function (e) {
          let x2 = e.clientX;
          let y2 = e.clientY;
          x2 -= rect.left;
          y2 -= rect.top;
          x2 += self.canvasScrollLeft;
          y2 += self.canvasScrollTop;
          const newPoint = {
            x: x2 * scaleX,
            y: y2 * scaleY
          };
          if (self.isPainting()) {
            self.drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
            lastPoint = newPoint;
          } else if (self.paintTypeArr['erase']) {
            if (!lastPoint.x && !lastPoint.y) {
              return;
            }
            self.handleErase(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
            lastPoint = newPoint;
          } else if (self.paintTypeArr['line']) {
            // self.clearCanvas()
            self.imageData && self.context.putImageData(self.imageData, 0, 0);
            self.drawLine(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
          } else if (self.paintTypeArr['arrows']) {
            // self.clearCanvas()
            self.imageData && self.context.putImageData(self.imageData, 0, 0);
            self.drawArrow(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
          } else if (self.paintTypeArr['rect']) {
            // self.clearCanvas()
            self.imageData && self.context.putImageData(self.imageData, 0, 0);
            self.drawRect(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
          } else if (self.paintTypeArr['circle']) {
            // self.clearCanvas()

            self.imageData && self.context.putImageData(self.imageData, 0, 0);
            self.drawCircle(lastPoint.x, lastPoint.y, newPoint.x, newPoint.y);
          }
          var thee = e || window.event;
          self.stopBubble(thee);
        };
        self.canvas.onmouseup = function () {
          lastPoint = {
            x: undefined,
            y: undefined
          };
          self.canvasDraw();
          self.filterObject(self.filterType);
        };
      });
    },
    // 更新绘画类型数组paintTypeArr的状态
    filterObject(type) {
      this.filterType = type;
      if (!type) {
        for (const key in this.paintTypeArr) {
          this.paintTypeArr[key] = false;
        }
      } else {
        for (const key in this.paintTypeArr) {
          key === type ? this.paintTypeArr[key] = true : this.paintTypeArr[key] = false;
        }
      }
    },
    // 阻止事件冒泡
    stopBubble(evt) {
      if (evt.stopPropagation) {
        evt.stopPropagation();
      } else {
        // ie
        evt.cancelBubble = true;
      }
    },
    // 判断是否是自由绘画模式
    isPainting() {
      for (const key in this.paintTypeArr) {
        if (key !== 'painting' && this.paintTypeArr[key]) {
          return false;
        }
      }
      if (this.paintTypeArr['painting']) {
        return true;
      }
      return false;
    },
    // 橡皮擦
    handleErase(x1, y1, x2, y2) {
      const ctx = this.context;
      // 获取两个点之间的剪辑区域四个端点
      var asin = radius * Math.sin(Math.atan((y2 - y1) / (x2 - x1)));
      var acos = radius * Math.cos(Math.atan((y2 - y1) / (x2 - x1)));
      var x3 = x1 + asin;
      var y3 = y1 - acos;
      var x4 = x1 - asin;
      var y4 = y1 + acos;
      var x5 = x2 + asin;
      var y5 = y2 - acos;
      var x6 = x2 - asin;
      var y6 = y2 + acos; // 保证线条的连贯，所以在矩形一端画圆

      ctx.save();
      ctx.beginPath();
      ctx.globalCompositeOperation = 'destination-out';
      const radius = this.lWidth / 2 > 5 ? this.lWidth / 2 : 5;
      ctx.arc(x2, y2, radius, 0, 2 * Math.PI);
      ctx.clip();
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.restore(); // 清除矩形剪辑区域里的像素

      ctx.save();
      ctx.beginPath();
      ctx.globalCompositeOperation = 'destination-out';
      ctx.moveTo(x3, y3);
      ctx.lineTo(x5, y5);
      ctx.lineTo(x6, y6);
      ctx.lineTo(x4, y4);
      ctx.closePath();
      ctx.clip();
      ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      ctx.restore();
    },
    // 画线
    drawLine(fromX, fromY, toX, toY) {
      const ctx = this.context;
      ctx.beginPath();
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();
      ctx.closePath();
    },
    // 画箭头
    drawArrow(fromX, fromY, toX, toY) {
      const ctx = this.context;
      var headlen = 10; // 自定义箭头线的长度
      var theta = 45; // 自定义箭头线与直线的夹角，个人觉得45°刚刚好
      var arrowX, arrowY; // 箭头线终点坐标
      // 计算各角度和对应的箭头终点坐标
      var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI;
      var angle1 = (angle + theta) * Math.PI / 180;
      var angle2 = (angle - theta) * Math.PI / 180;
      var topX = headlen * Math.cos(angle1);
      var topY = headlen * Math.sin(angle1);
      var botX = headlen * Math.cos(angle2);
      var botY = headlen * Math.sin(angle2);
      ctx.beginPath();
      // 画直线
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      arrowX = toX + topX;
      arrowY = toY + topY;
      // 画上边箭头线
      ctx.moveTo(arrowX, arrowY);
      ctx.lineTo(toX, toY);
      arrowX = toX + botX;
      arrowY = toY + botY;
      // 画下边箭头线
      ctx.lineTo(arrowX, arrowY);
      ctx.stroke();
      ctx.closePath();
    },
    // 绘制矩形
    drawRect(topLeftX, topLeftY, botRightX, botRightY) {
      const ctx = this.context;
      ctx.strokeRect(topLeftX, topLeftY, Math.abs(botRightX - topLeftX), Math.abs(botRightY - topLeftY));
    },
    // 画圆
    drawCircle(circleX, circleY, endX, endY) {
      const ctx = this.context;
      const radius = Math.sqrt((circleX - endX) * (circleX - endX) + (circleY - endY) * (circleY - endY));
      ctx.beginPath();
      ctx.arc(circleX, circleY, radius, 0, Math.PI * 2, true);
      ctx.stroke();
    },
    // 画文字
    drawText(startX, startY, content) {
      const ctx = this.context;
      ctx.save();
      ctx.beginPath();
      ctx.font = '25px orbitron';
      ctx.textBaseline = 'top';
      ctx.fillText(content, parseInt(startX), parseInt(startY));
      ctx.restore();
      ctx.closePath();
    },
    // 清屏
    clearCanvas() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.init();
    },
    // 定格画布图片
    canvasDraw() {
      this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
      this.historyImageData.push(this.imageData);
    },
    // 撤销
    redo() {
      const historyImageData = this.historyImageData;
      const newHistoryImageData = this.newHistoryImageData;
      if (historyImageData.length > 0) {
        const hisImg = historyImageData.pop();
        newHistoryImageData.push(hisImg);
        if (historyImageData.length === 0) {
          this.imageData = null;
          this.clearCanvas();
          this.init();
        } else {
          this.context.putImageData(historyImageData[historyImageData.length - 1], 0, 0);
        }
      }
    },
    // 反撤销
    cancelRedo() {
      if (this.newHistoryImageData.length > 0) {
        const newHisImg = this.newHistoryImageData.pop();
        this.imageData = newHisImg;
        this.context.putImageData(newHisImg, 0, 0);
        this.historyImageData.push(newHisImg);
      }
    },
    // 保存图片
    downLoad() {
      const imgUrl = this.canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = imgUrl;
      a.download = '绘图保存记录' + new Date().getTime();
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
    submitBtn() {
      // 防止多次点击提交
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 3000);
      const fileObj = {
        relativeType: 3,
        name: '编辑图片'
      };
      console.log(fileObj);
      const canvas = document.getElementById('canvas');
      var file = canvas.toDataURL('image/png');
      this.$emit('onSubmit', file);
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
});
;// CONCATENATED MODULE: ./src/plugins/CanvasDialog/index.vue?vue&type=script&lang=js
 /* harmony default export */ var plugins_CanvasDialogvue_type_script_lang_js = (CanvasDialogvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/CanvasDialog/index.vue?vue&type=style&index=0&id=3a5ed87c&prod&scoped=true&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugins/CanvasDialog/index.vue?vue&type=style&index=0&id=3a5ed87c&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./node_modules/mini-css-extract-plugin/dist/loader.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/plugins/CanvasDialog/index.vue?vue&type=style&index=1&id=3a5ed87c&prod&lang=css
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/plugins/CanvasDialog/index.vue?vue&type=style&index=1&id=3a5ed87c&prod&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./src/plugins/CanvasDialog/index.vue



;



/* normalize component */

var component = normalizeComponent(
  plugins_CanvasDialogvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "3a5ed87c",
  null
  
)

/* harmony default export */ var CanvasDialog = (component.exports);

/***/ }),

/***/ 523:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./index.vue": 966
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 523;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./src/plugins/index.js
// 入口文件 => 插件的入口 => 统一管理组件

// 动态引入文件
const requireComponent = __webpack_require__(523);
// 插件
const install = Vue => {
  if (install.installed) return;
  install.installed;
  requireComponent.keys().forEach(fileName => {
    // 第i个组件
    const config = requireComponent(fileName);
    // 组件名
    const componentName = config.default.name;
    Vue.component(componentName, config.default || config);
  });
};

// 环境测试
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var plugins = ({
  install
});
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (plugins);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=vue-canvas-element-dialog.common.js.map