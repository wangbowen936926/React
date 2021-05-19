import React, { Component, createRef } from 'react'
import styled from 'styled-components'
import NavBar from 'components/navbar'
import Input from 'components/input'
import Button from 'components/button'
import Toast from 'components/toast'

const RootWarp = styled.div`
    section{
        padding-top: 6rem;
        > div{
            padding: 0 2rem;
            margin-bottom: .8rem;
        }
    }

`

class UpdatePassword extends Component {

    constructor (props) {
        super(props);
        this.state = {
            password: {
                oldPassword: '',
                newPassword: '',
                newPasswordConfirm: ''
            },
            buttonStyle: {
                background: '#C7C7C7'
            },
            toast: createRef(null)
        }
    }


    // 获取输入框值
    getInputVal (name, e) {
        
        let data = Object.assign({}, this.state.password, { [name]: e.target.value })
        
        this.setState({password: data}, this.inputState);

    }

    // 保存新密码按钮事件
    savePassword () {
        let state = this.inputState();
        if(state){
            this.state.toast.current.show({icon: false, title: '信息填写不完整~'});
        }else{
            console.log('保存')
        }
    }

    // 当前输入框是否为空状态
    inputState () {
        let password = Object.values(this.state.password);
        let state = password.some(item => item === '');
        if(state){
            this.setState({buttonStyle: {background: '#C7C7C7'}});
        }else{
            this.setState({buttonStyle: {backgroundImage: 'linear-gradient(to right, #f72b6a, #f96254)'}});
        }
        return state;
    }


    render () {
        return (
            <RootWarp>
                <NavBar title="修改密码"></NavBar>
                <section>
                    <div>
                        <Input value={ this.state.password.oldPassword } placeholder="请输入旧密码" onChange={ this.getInputVal.bind(this, 'oldPassword') }/>
                    </div>
                    <div>
                        <Input value={ this.state.password.newPassword } placeholder="请输入新密码" onChange={ this.getInputVal.bind(this, 'newPassword') }/>
                    </div>
                    <div>
                        <Input value={ this.state.password.newPasswordConfirm } placeholder="请确认新密码" onChange={ this.getInputVal.bind(this, 'newPasswordConfirm') }/>
                    </div>
                </section>
                <Button size="medium" style={this.state.buttonStyle} onClick={ this.savePassword }></Button>
                {/* 提示 */}
                <Toast ref={this.state.toast}></Toast>
            </RootWarp>
        )
    }

}

export default UpdatePassword;