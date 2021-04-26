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
            path: '/youtian/active',
            component: lazy(() => import('view/module/youtian/subView/activeCrew/container/ActiveCrew.jsx'))
        },{
            path: '/news/mailList',
            component: lazy(() => import('view/module/news/subView/mailList/container/MailList'))
        },{
            path: '/news/superLike',
            component: lazy(() => import('view/module/news/subView/superLike/container/SuperLike'))
        }
    ]
}

export default config;