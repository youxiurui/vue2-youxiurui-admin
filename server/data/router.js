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
                path: "tables",
                name: "tables",
                meta: {
                    pathName: "表格",
                    icon: "icon-biaoge",
                },
                component: "pages/Components/Tables/index",
                children:[
                    {
                        path: "routineTable",
                        name: "routineTable",
                        meta: {
                            pathName: "基础表格",
                            icon: "icon-biaoge",
                        },
                        component: "pages/Components/Tables/RoutineTable/RoutineTable",
                    },
                    {
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
                path: "forms",
                name: "forms",
                meta: {
                    pathName: "表单",
                    icon: "icon-biaodan",
                },
                component: "pages/Components/Forms/index",
                children:[
                    {
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
                path: "btnAuth",
                name: "btnAuth",
                meta: {
                    pathName: "按钮权限",
                    icon: "icon-anniu",
                },
                component: "pages/AuthManage/BtnAuth/BtnAuth",
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