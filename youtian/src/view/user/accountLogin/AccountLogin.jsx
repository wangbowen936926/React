import React, { Component, createRef } from 'react'
import Template from '../ui/template'
import Input from '../../../components/input'
import Toast from 'components/toast'
import {InputWarp, ForgetPassword, Footer} from './styled'
import request from 'service/request'

class AccountLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: {
                phone: '',
                password: ''
            },
            buttonStyle: {
                background: '#C7C7C7'
            },
            toast: createRef(null)
        }
    }

    toFindPassword = () => this.props.history.push('/forgetPassword');

    toRegister = () => this.props.history.push('/phoneNumberRegister');

    getInputVal = (name, e) => {

        const newData = Object.assign({}, this.state.account, { [name]: e.target.value });

        this.setState({account: newData}, this.buttonStatus);

    }

    buttonStatus = () => {

        let values = Object.values(this.state.account);

        let status = values.some(item => item === '');

        if(status){
            this.setState({buttonStyle: {background: '#C7C7C7'}});
        }else{
            this.setState({buttonStyle: {backgroundImage: 'linear-gradient(to right, #f72b6a, #f96254)'}});
        }
        return status

    }

    login = () => {

        const status = this.buttonStatus();

        if(status){
            this.state.toast.current.show({icon: false, title: '手机号或密码不能为空!'});
        }else{
            request.login({data: this.state.account}).then(res => {
                if(res.code === 0){
                    this.state.toast.current.show({icon: false, title: '登录成功', url: '/youtian'});
                }else{
                    this.state.toast.current.show({icon: false, title: '登录失败， 稍后重试!'});
                }
            }).catch(err => {
                console.log(err);
                this.state.toast.current.show({icon: false, title: '登录失败， 稍后重试!'});
            })
        }
  
    } 

    render () {

        let { phone, password } = this.state.account;

        return (
            <>
                <Template title="登录" buttonText="进入优甜" buttonStyle={ this.state.buttonStyle } onClick={ this.login }>
                    <InputWarp>
                        <Input mode="phoneNumber" value={phone} placeholder="请输入注册手机号" onChange={ this.getInputVal.bind(this, 'phone') }></Input>
                    </InputWarp>
                    <InputWarp>
                        <Input value={password} placeholder="请输入登录密码" onChange={ this.getInputVal.bind(this, 'password') }></Input>
                    </InputWarp>
                    <ForgetPassword onClick={this.toFindPassword}>忘记密码</ForgetPassword>
                </Template>
                <Footer>
                    没有账号?<span onClick={this.toRegister}>立即注册</span>
                </Footer>
                {/* 提示 */}
                <Toast ref={this.state.toast}></Toast>
            </>
        )
    }
}

export default AccountLogin