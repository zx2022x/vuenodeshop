
export default [
    {
        //默认位置
        path: '/',
        redirect: '/home'
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
                path:'/edititem/:goods_name/:goods_price/:goods_num/:goods_img/:goods_fm/:goods_detail',
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
                path:'/changepw/:id/:user_name/:mark',
                component:()=>import('@/pages/admin/adminHome/UserMage/Changepw')
            }


            
        ]
    },
   
    //首页
   {
       name:'home',
       path:'/home',
       component:()=>import('@/pages/Home')
   },
   //用户登录
   {
      name:"userlogin",
      path:'/userlogin/:mark',
      component:()=>import('@/pages/Login'),
      children:[
          //用户登录内部
          {
              name:'loginInner',
              path:'/loginInner/:user_name/:password',
              component:()=>import('@/pages/Login/LoginInner')
          },
          //用户注册
        //   {
        //       name:'resiger',
        //       path:'/resiger',
        //       conponent:()=>import('@/pages/Resigster')
        //   }
      ]
},


    

    
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

