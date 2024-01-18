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
  MessageBox,
  Popover,
  Dropdown,
  DropdownMenu, 
  DropdownItem,
  Row,
  Col,
  Table,
  TableColumn,
  Pagination,
  Dialog,
  Select,
  Option,
  Popconfirm,
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
Vue.use(Dialog)
Vue.use(Select)
Vue.use(Option)
Vue.use(Popconfirm)

Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox
Vue.prototype.$confirm = MessageBox.confirm

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
