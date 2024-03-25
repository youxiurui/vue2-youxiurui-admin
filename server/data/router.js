module.exports=[
    {
        type:'all',
        path: "/components",
        name: "components",
        meta: {
            pathName: "组件",
            icon: "icon-kaifazujian",
        },
        component: 'Layout',
        children: [
            {
                path: "tables",
                name: "tables",
                meta: {
                    pathName: "表格",
                    icon: "icon-biaoge",
                },
                component: "pages/Tables/index",
                children:[
                    {
                        path: "table",
                        name: "table",
                        meta: {
                            pathName: "常用表格",
                            icon: "icon-biaoge",
                        },
                        component: "pages/Tables/RoutineTable/RoutineTable",
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
                component: "pages/Forms/index",
                children:[
                    {
                        path: "form",
                        name: "form",
                        meta: {
                            pathName: "常用表单",
                            icon: "icon-biaodan",
                        },
                        component: "pages/Forms/RoutineForm/RoutineForm",
                    }
                ]
            }
        ]
    },
    {
        type:'all',
        path: "/authManage",
        name: "authManage",
        meta: {
            pathName: "权限管理",
            icon: "icon-quanxian",
            stair: false,
        },
        component: "Layout",
        children: [
            {
                path: "btnAuth",
                name: "btnAuth",
                meta: {
                    pathName: "按钮权限",
                    icon: "icon-anniu",
                },
                component: "pages/BtnAuth/BtnAuth",
            }
        ]
    },
    {
        type:'all',
        path: "/setting",
        meta: {
            pathName: "系统配置",
            icon: "icon-shezhipeizhi",
            stair: true
        },
        component: "Layout",
        children: [
            {
                path: "",
                name: "setting",
                component: "pages/Setting/Setting"
            }
        ]
    },
    {
        type:'admin',
        path: "/menu",
        meta: {
            pathName: "菜单管理",
            icon: "icon-caidan1",
            stair: true
        },
        component: "Layout",
        children: [
            {
                path: "",
                name: "menu",
                component: "pages/Menu/Menu"
            }
        ]
    }
]