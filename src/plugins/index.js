// 入口文件 => 插件的入口 => 统一管理组件

// 动态引入文件
const requireComponent = require.context('./CanvasDialog', true, /\.vue$/)
// 插件
const install = (Vue) => {
  if (install.installed) return
  install.installed
  requireComponent.keys().forEach(fileName => {
    // 第i个组件
    const config = requireComponent(fileName)
    // 组件名
    const componentName = config.default.name

    Vue.component(componentName, config.default || config)
  });
}

// 环境测试
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}