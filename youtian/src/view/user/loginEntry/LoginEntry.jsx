import React from 'react'
import Button from 'components/button'
import mobilePhoneIcon from 'assets/mobilePhone.png'
import weixinIcon from 'assets/wenxin.png'
import {RootWrap} from './styled'

const Login = (props) => {

    const mobilePhone = () => {
        return <img src={mobilePhoneIcon} alt="手机图标"></img>
    }

    const weixin = () => {
        return <img src={weixinIcon} alt="微信图标"></img>
    }

    const mobilePhoneLogin = () => {
        props.history.push('/accountLogin');
    }

    const  weixinLogin = () => {
        props.history.push('/wechatBinding');
    }

    return (
        <RootWrap>
            <header>
                <h1>优甜</h1>
                <h5>赚个约会钱</h5>
            </header>
            <section>
                <Button color="#5f81eb" icon={mobilePhone()} marginTop="1" onClick={mobilePhoneLogin}>手机登录</Button>
                <Button color="#28c074" icon={weixin()} marginTop="1" onClick={weixinLogin}>微信登录</Button>
            </section>
            <footer>
                <span>登录即同意</span>
                <span>《优用户及隐私协议》</span>
            </footer>
        </RootWrap>
    )
}

export default Login