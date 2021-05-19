import { Component, createRef } from 'react'
import styled from 'styled-components'
import Template from '../ui/template'
import Input from 'components/input'
import Toast from 'components/toast'
import request from 'service/request'

const InputWarp = styled.div`
    margin-bottom: 1rem;
`


class PhoneNumberRegister extends Component {

    constructor (props) {
        super (props);
        this.state = {
            user: {
                phone: '',
                code: '',
                invitationCode: '',
                password: '',
                confirmPassword: ''
            },
            buttonStyle: {
                background: '#C7C7C7'
            },
            toast: createRef(null)
        }
    }

    sendCode = () => {
        console.log('code')
    }

    getInputVal = (name, e) => {
        let newObj = Object.assign({}, this.state.user, { [name]: e.target.value });
        this.setState({user: newObj}, this.buttonStatus);
    }

    // 当前按钮状态
    buttonStatus = () => {

        let value = Object.values(this.state.user);

        let status = value.some(item => item === '');

        if(status){
            this.setState({buttonStyle: {background: '#C7C7C7'}});
        }else{
            this.setState({buttonStyle: {backgroundImage: 'linear-gradient(to right, #f72b6a, #f96254)'}});
        }
        return status
    }

    register = () => {

        const status = this.buttonStatus();

        if(status) {
            this.state.toast.current.show({icon: false, title: '信息填写不完整~'});
        }else{
            let { phone, password, confirmPassword } = this.state.user;
            if(password !== confirmPassword){
                return this.state.toast.current.show({icon: false, title: '两次密码输入不一致!'});
            }
            let data = {
                phone: phone,
                password: password
            }
            request.register({data: data}).then(res => {
                if(res.code === 0){
                    this.state.toast.current.show({icon: false, title: '注册成功~', goBack: true});
                }else{
                    this.state.toast.current.show({icon: false, title: '注册失败， 稍后重试!'});
                }
            }).catch(err => {
                console.log(err, 'err')
                this.state.toast.current.show({icon: false, title: '注册失败， 稍后重试!'});
            })
        }
    
    }

    render () {

        let { phone, code, invitationCode, password, confirmPassword } = this.state.user;

        return (
            <>
                <Template title="手机号注册" buttonText="进入优甜" buttonStyle={ this.state.buttonStyle } onClick={ this.register }>
                    <InputWarp>
                        <Input value={phone} mode="phoneNumber"  placeholder="请输入注册手机号" onChange={ this.getInputVal.bind(this, 'phone') } />
                    </InputWarp>
                    <InputWarp>
                        <Input value={code} mode="verificationCode" phoneNumber={phone} placeholder="请输入验证码" onChange={ this.getInputVal.bind(this, 'code') } onClick={ this.sendCode } />
                    </InputWarp>
                    <InputWarp>
                        <Input value={invitationCode} placeholder="请输入邀请码" onChange={ this.getInputVal.bind(this, 'invitationCode') }></Input>
                    </InputWarp>
                    <InputWarp>
                        <Input value={password} placeholder="请输入登录密码" onChange={ this.getInputVal.bind(this, 'password') }></Input>
                    </InputWarp>
                    <InputWarp>
                        <Input value={confirmPassword} placeholder="请确认登录密码" onChange={ this.getInputVal.bind(this, 'confirmPassword') }></Input>
                    </InputWarp>
                </Template>
                {/* 提示 */}
                <Toast ref={this.state.toast}></Toast>
            </>
        )
     }
}

export default PhoneNumberRegister;