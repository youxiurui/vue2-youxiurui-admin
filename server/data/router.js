module.exports=[
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
                    icon: "el-icon-turn-off"
                },
                component: "pages/BtnAuth/BtnAuth",
                // children: [
                //     {
                //         path: "btnAuth2",
                //         name: "btnAuth2",
                //         meta: {
                //             pathName: "按钮权限2",
                //             icon: "el-icon-turn-off"
                //         },
                //         component: "pages/BtnAuth/BtnAuth"
                //     }
                // ]
            }
        ]
    },
    {
        type:'all',
        path: "/tables",
        name: "tables",
        meta: {
            pathName: "表格案例",
            icon: "el-icon-film",
            stair: false
        },
        component: "Layout",
        children: [
            {
                path: "conditionTable",
                name: "conditionTable",
                meta: {
                    pathName: "复杂表格",
                    icon: "el-icon-film"
                },
                component: "pages/Tables/ConditionTable/ConditionTable"
            },
            {
                path: "routineTable",
                name: "routineTable",
                meta: {
                    pathName: "常规表格",
                    icon: "el-icon-film"
                },
                component: "pages/Tables/RoutineTable/RoutineTable"
            }
        ]
    },
    {
        type:'all',
        path: "/forms",
        name: "forms",
        meta: {
            pathName: "表单案例",
            icon: "el-icon-document",
            stair: false
        },
        component: "Layout",
        children: [
            {
                path: "conditionForm",
                name: "conditionForm",
                meta: {
                    pathName: "复杂表单",
                    icon: "el-icon-document"
                },
                component: "pages/Forms/ConditionForm/ConditionForm"
            },
            {
                path: "routineForm",
                name: "routineForm",
                meta: {
                    pathName: "常规表单",
                    icon: "el-icon-document"
                },
                component: "pages/Forms/RoutineForm/RoutineForm"
            }
        ]
    },
    {
        type:'all',
        path: "/setting",
        meta: {
            pathName: "系统配置",
            icon: "el-icon-setting",
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
            icon: "el-icon-s-operation",
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