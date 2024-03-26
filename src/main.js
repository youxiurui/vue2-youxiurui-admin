import Vue from 'vue'
import App from './App.vue'
import store from './store'
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
  Divider,
  Descriptions,
  DescriptionsItem,
  Tag,
  Tree,
  DatePicker
} from 'element-ui'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

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
Vue.use(Divider)
Vue.use(Descriptions)
Vue.use(DescriptionsItem)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(DatePicker)

Vue.prototype.$message = Message
Vue.prototype.$alert = MessageBox
Vue.prototype.$confirm = MessageBox.confirm

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')
