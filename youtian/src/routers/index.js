import {lazy} from 'react'

const config = {
    routes: [
        {
            path: '/LoginEntry',
            component: lazy(() => import('view/user/loginEntry/LoginEntry'))
        },{
            path: '/accountLogin',
            component: lazy(() => import('view/user/accountLogin/AccountLogin'))
        },{
            path: '/forgetPassword',
            component: lazy(() => import('view/user/forgetPassword/ForgetPassword'))
        },{
            path: '/phoneNumberRegister',
            component: lazy(() => import('view/user/phoneNumberRegister/phoneNumberRegister'))
        },{
            path: '/wechatBinding',
            component: lazy(() => import('view/user/wechatBinding/wechatBinding'))
        },{
            path: '/youtian',
            exact: true,
            component: lazy(() => import('view/Main'))
        },{
            path: '/youtian/extension',
            component: lazy(() => import('view/module/youtian/subView/extension/Extension'))
        },{
            path: '/youtian/smallClass',
            exact: true,
            component: lazy(() => import('view/module/youtian/subView/smallClass/SmallClass'))
        },{
            path: '/youtian/smallClass/details/:id',
            component: lazy(() => import('view/module/youtian/subView/classDetails/ClassDetails'))
        },{
            path: '/youtian/active',
            component: lazy(() => import('view/module/youtian/subView/activeCrew/container/ActiveCrew'))
        },{
            path: '/news/mailList',
            component: lazy(() => import('view/module/news/subView/mailList/container/MailList'))
        },{
            path: '/news/superLike',
            component: lazy(() => import('view/module/news/subView/superLike/container/SuperLike'))
        },{
            path: '/news/chat/:id',
            component: lazy(() => import('view/module/news/subView/chat/container/Chat'))
        },{
            path: '/my/myFriends',
            component: lazy(() => import('view/module/my/subView/myFriends/MyFriends'))
        },{
            path: '/my/knapsack',
            component: lazy(() => import('view/module/my/subView/knapsack/Knapsack'))
        },{
            path: '/my/album',
            component: lazy(() => import('view/module/my/subView/album/Album'))
        },{
            path: '/my/likeMy',
            component: lazy(() => import('view/module/my/subView/likeMy/LikeMy'))
        },{
            path: '/my/ivitationCode',
            component: lazy(() => import('view/module/my/subView/ivitationCode/InvitationCode'))
        },{
            path: '/my/setting',
            exact: true,
            component: lazy(() => import('view/module/my/subView/setting/container/Setting'))
        },{
            path: '/my/setting/editPassword',
            component: lazy(() => import('view/module/my/subView/updatePassword/UpdatePassword'))
        },{
            path: '/my/setting/editPhoneNumber',
            component: lazy(() => import('view/module/my/subView/updatePhoneNumber/UpdatePhoneNumber'))
        },{
            path: '/my/setting/blacklist',
            component: lazy(() => import('view/module/my/subView/blacklist/Blacklist'))
        },{
            path: '/my/setting/aboutUs',
            component: lazy(() => import('view/module/my/subView/aboutUs/AboutUs'))
        },{
            path: '/my/setting/bindingWechat',
            component: lazy(() => import('view/module/my/subView/bindingWechat/BindingWechat'))
        }
    ]
}

export default config;