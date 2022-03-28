
export default [
    {
        //默认位置
        path: '/',
        redirect: '/adminLogin'
    },
    //管理员登录
    {
        path:'/adminLogin',
        component:()=>import('@/pages/admin/Login')
    },
    {
        path:'/adminHome',
        component:()=>import('@/pages/admin/adminHome'),
        children:[
            // 订单列表
            {   
                name:'orderInfo',
                path:'/orderInfo',
                component:()=>import('@/pages/admin/adminHome/orderInfo')
            },
            //上传商品
            {
                name:'upload',
                path:'/uploadshop',
                component:()=>import('@/pages/admin/adminHome/ShopMage/UploadShop')
            },
            //商品列表
            {
                name:'items',
                path:'/items',
                component:()=>import('@/pages/admin/adminHome/ShopMage/Items')
            },
            //编辑商品
            {
                name:'edititem',
                path:'/edititem/:goods_name/:goods_price/:goods_num/:goods_img/:goods_fm',
                component:()=>import('@/pages/admin/adminHome/ShopMage/EditItem')
            },
            //上架商品
            {
                name:'validitem',
                path:'/validitem',
                component:()=>import('@/pages/admin/adminHome/ShopMage/ItemsValid')
            },
            //用户列表
            {
                name:'usermage',
                path:'/usermage',
                component:()=>import('@/pages/admin/adminHome/UserMage')
            },
            //修改用户的密码
            {
                name:'changepw',
                path:'/changepw/:id/:user_name',
                component:()=>import('@/pages/admin/adminHome/UserMage/Changepw')
            }


            
        ]
    },
    //订单列表
    
]
    //admin后台路由
    // {
    //     name: 'admin',
    //     path: '/admin',
    //     component: () => import('@/pages/admin'),
    //     children: [
    //         //默认显示
    //         {
    //             path: '',
    //             redirect: () => import('@/pages/admin/Login')

    //         },

    //         //子路由login

    //         {
    //             name: 'login',
    //             path: '/login',
    //             component: () => import('@/pages/admin/Login')
                
    //         }
    //     ]

    // }

