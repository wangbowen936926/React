import React, { Component, createRef } from 'react'
import Template from '../ui/template'
import Input from '../../../components/input'
import {InputWarp} from './styled'
import Toast from '../../../components/toast'

class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            code: '',
            invitationCode: '',
            password: '',
            confirmPassword: '',
            toastRef: createRef()
        }
    }

    getInputPhone = (e) => {
        this.setState({phone: e.target.value});
    }

    getInputPassword = (e) => {
        this.setState({password: e.target.value});
    }

    update = () => {
        this.state.toastRef.current.show({title: '已修改', goBack: true});
    }

    render () {
        return (
            <>
                <Template title="忘记密码" onClick={ this.update }>
                    <InputWarp>
                        <Input value={this.state.phone} mode="phoneNumber"  placeholder="请输入注册手机号" onChange={this.getInputPhone}></Input>
                    </InputWarp>
                    <InputWarp>
                        <Input value={this.state.code} mode="verificationCode"  placeholder="请输入验证码" onChange={this.getInputPassword}></Input>
                    </InputWarp>
                    <InputWarp>
                        <Input value={this.state.password} placeholder="请输入登录密码" onChange={this.getInputPassword}></Input>
                    </InputWarp>
                    <InputWarp>
                        <Input value={this.state.confirmPassword} placeholder="请确认登录密码" onChange={this.getInputPassword}></Input>
                    </InputWarp>
                </Template>
                <Toast ref={this.state.toastRef}></Toast>
            </>
        )
    }
}

export default ForgetPassword