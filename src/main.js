import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Button,
  Input,
  Switch,
  Form,
  FormItem,
  Menu,
  MenuItem,
  Submenu,
  MenuItemGroup,
  RadioButton,
  Breadcrumb,
  BreadcrumbItem,
  Avatar,
  RadioGroup,
  Tooltip,
  Message,
  Popover,
  Dropdown,
  DropdownMenu, 
  DropdownItem,
  Row,
  Col,
  Table,
  TableColumn,
  Pagination
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Button)
Vue.use(Input)
Vue.use(Switch)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(RadioButton)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Avatar)
Vue.use(RadioGroup)
Vue.use(Tooltip)
Vue.use(Popover)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

Vue.prototype.$message = Message

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
