import React, { Component } from 'react'
import Template from '../ui/template'
import Input from '../../../components/input'
import {InputWarp, ForgetPassword, Footer} from './styled'

class AccountLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: ''
        }
    }

    getInputPhone = (e) => {
        this.setState({phone: e.target.value});
    }

    getInputPassword = (e) => {
        this.setState({password: e.target.value});
    }

    toFindPassword = () => {
        this.props.history.push('/forgetPassword');
    }

    login = () => {
        console.log('aaaaaaaa')
        this.props.history.push('/youtian');
    }

    render () {
        return (
            <>
                <Template title="登录" buttonText="进入优甜" onClick={ this.login }>
                    <InputWarp>
                        <Input mode="phoneNumber" value={this.state.phone} placeholder="请输入注册手机号" onChange={this.getInputPhone}></Input>
                    </InputWarp>
                    <InputWarp>
                        <Input value={this.state.password} placeholder="请输入登录密码" onChange={this.getInputPassword}></Input>
                    </InputWarp>
                    <ForgetPassword onClick={this.toFindPassword}>忘记密码</ForgetPassword>
                </Template>
                <Footer>
                    没有账号?<span onClick={this.toRegister}>立即注册</span>
                </Footer>
            </>
        )
    }
}

export default AccountLogin