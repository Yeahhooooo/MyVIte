import SvgIcon from './SvgIcon/SvgIcon.vue'
import * as ElementPlusIconVue from '@element-plus/icons-vue'

const globalComponents = {
  SvgIcon,
}
export default {
  install(app) {
    Object.keys(globalComponents).forEach((key) => {
      app.component(key, globalComponents[key])
    })

    for (const [key, component] of Object.entries(ElementPlusIconVue)) {
      app.component(key, component)
    }
  },
}
