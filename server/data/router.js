module.exports=[
    {
        type:'all',
        path: "components",
        name: "components",
        meta: {
            pathName: "组件",
            icon: "icon-kaifazujian",
        },
        component: "pages/Components/index",
        children: [
            {
                type:'all',
                path: "tables",
                name: "tables",
                meta: {
                    pathName: "表格",
                    icon: "icon-biaoge",
                },
                component: "pages/Components/Tables/index",
                children:[
                    {
                        type:'all',
                        path: "routineTable",
                        name: "routineTable",
                        meta: {
                            pathName: "基础表格",
                            icon: "icon-biaoge",
                        },
                        component: "pages/Components/Tables/RoutineTable/RoutineTable",
                    },
                    {
                        type:'all',
                        path: "configurableTable",
                        name: "configurableTable",
                        meta: {
                            pathName: "可配置表格",
                            icon: "icon-biaoge",
                        },
                        component: "pages/Components/Tables/ConfigurableTable/ConfigurableTable",
                    }
                ]
            },
            {
                type:'all',
                path: "forms",
                name: "forms",
                meta: {
                    pathName: "表单",
                    icon: "icon-biaodan",
                },
                component: "pages/Components/Forms/index",
                children:[
                    {
                        type:'all',
                        path: "routineForm",
                        name: "routineForm",
                        meta: {
                            pathName: "基础表单",
                            icon: "icon-biaodan",
                        },
                        component: "pages/Components/Forms/RoutineForm/RoutineForm",
                    }
                ]
            }
        ]
    },
    {
        type:'all',
        path: "authManage",
        name: "authManage",
        meta: {
            pathName: "权限管理",
            icon: "icon-quanxian",
        },
        component: "pages/AuthManage/index",
        children: [
            {
                type:'all',
                path: "btnAuth",
                name: "btnAuth",
                meta: {
                    pathName: "按钮权限",
                    icon: "icon-anniu",
                },
                component: "pages/AuthManage/BtnAuth/BtnAuth",
            },
            {
                type:'admin',
                path: "menuAuth",
                name: "menuAuth",
                meta: {
                    pathName: "菜单权限",
                    icon: "icon-anniu",
                },
                component: "pages/AuthManage/MenuAuth/MenuAuth",
            }
        ]
    },
    {
        type:'all',
        path: "setting",
        name:'setting',
        meta: {
            pathName: "系统配置",
            icon: "icon-shezhipeizhi",
        },
        component:"pages/Setting/Setting",
    },
    {
        type:'admin',
        path: "menu",
        name:'menu',
        meta: {
            pathName: "菜单管理",
            icon: "icon-caidan1",
        },
        component: "pages/Menu/Menu",
    }
]