import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Template from './template'
import Input from '../../../components/input'
import styled from 'styled-components'

const InputWarp = styled.div`
    margin-bottom: 1rem;
`

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            code: '',
            invitationCode: '',
            password: '',
            confirmPassword: ''
        }
    }

    static propTypes = {
        title: PropTypes.string,
        buttonText: PropTypes.string,
    }

    getInputPhone = (e) => {
        this.setState({phone: e.target.value});
    }

    sendCode = () => {
        console.log('code')
    }

    getInputPassword = (e) => {
        this.setState({password: e.target.value});
    }

    register = () => {
        console.log('提交')
    }

    render () {
        return (
            <Template title={this.props.title} buttonText={this.props.buttonText} onClick={ this.register }>
                <InputWarp>
                    <Input value={this.state.phone} mode="phoneNumber"  placeholder="请输入注册手机号" onChange={this.getInputPhone}></Input>
                </InputWarp>
                <InputWarp>
                    <Input value={this.state.code} phoneNumber={this.state.phone} mode="verificationCode"  placeholder="请输入验证码" onChange={this.getInputPassword} onClick={this.sendCode}></Input>
                </InputWarp>
                <InputWarp>
                    <Input value={this.state.invitationCode} placeholder="请输入邀请码" onChange={this.getInputPassword}></Input>
                </InputWarp>
                <InputWarp>
                    <Input value={this.state.password} placeholder="请输入登录密码" onChange={this.getInputPassword}></Input>
                </InputWarp>
                <InputWarp>
                    <Input value={this.state.confirmPassword} placeholder="请确认登录密码" onChange={this.getInputPassword}></Input>
                </InputWarp>
            </Template>
        )
    }
}

export default Register