import React, { useState, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Toast from './toast'
import { checkPhone } from '../utils/verification'

const RootWarp = styled.div`
    position: relative;
    overflow: hidden;
    padding: 0 1rem;
    display: flex;
    align-items: center;
    border-style: solid;
    border-width: ${props => props.borderWidth + 'rem'};
    border-radius: ${props => props.borderRadius + 'rem'};
    .phoneType{
        font-weight: bold;
        padding: .08rem 1rem 0 0;
        margin-right: 1rem;
        border-right: .1rem solid #000;
    }
    input{
        height: 2.5rem;
        border: none;
        outline: unset;
    }
    .countDown{
        font-size: .8rem;
    }
    .countDown,.getCodeBtn{
        position: absolute;
        right: 1rem;
    }
    .getCodeBtn{
        color: #fff;
        font-size: .5rem;
        padding: .4rem .6rem;
        border-radius: 1rem;
        background-image: linear-gradient(to right, #f72f69, #f95a57);
    }
`

const Input = (props) => {

    const [countDown, setCountDown] = useState(props.seconds);
    const [isShowBtn, setIsShowBtn] = useState(true);
    const toastRef = useRef(null);

    const sendVerificationCode = () => {
        const result = checkPhone(props.phoneNumber);
        if(!result){
            toastRef.current.show({icon: false, title: '手机号格式有误'});
        }else{
            startCountDown();
        }
    }

    const startCountDown = () => {
        setIsShowBtn(false);
        let count = countDown;
        let clear = setInterval(() => {
            count--
            setCountDown(count);
            if(count === 0){
                clearInterval(clear);
                setCountDown(count);
                setIsShowBtn(true);
            }
        }, 1000)
    }

    return (
        <>
            <RootWarp {...props}>
                {
                    props.mode === 'phoneNumber' && <span className="phoneType">+86</span>
                }
                <input value={props.value} placeholder={props.placeholder} onChange={(e) => props.onChange(e) }></input>
                {
                    props.mode === 'verificationCode' 
                    && 
                    ( 
                        !isShowBtn 
                        ? 
                        <span className="countDown">重新发送({countDown}s)</span>
                        : 
                        <span className="getCodeBtn" onClick={sendVerificationCode} >获取验证码</span>
                    )
                }
            </RootWarp>
            {/* 消息 */}
            <Toast ref={toastRef}></Toast>
        </>
    )
}

Input.defaultProps = {
    //
    value: '',
    // 输入框模型(default;verificationCode; phoneNumber)
    mode: 'default',
    // 输入框类型
    type: 'text',
    // 是否显示边框
    showBorder: true,
    // 边框颜色
    borderColor: '#000000',
    // 边框宽度
    borderWidth: .1,
    // 边框半径
    borderRadius: .3,
    // 倒计时秒数
    seconds: 60,
    //
    isShowBtn: true,
    placeholder: '请输入内容',
    placeholderColor: '#cccccc',
    onChange: () => false,
    onClick: () => false,
}

Input.propTypes = {
    //
    value: PropTypes.any,
    // 输入框模型
    mode: PropTypes.string,
    // 输入框类型
    type: PropTypes.string,
    // 是否显示边框
    showBorder: PropTypes.bool,
    // 边框颜色
    borderColor: PropTypes.string,
    // 边框宽度
    borderWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    // 边框半径
    borderRadius: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    // 手机号参数
    phoneNumber: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    // 倒计时秒数
    seconds: PropTypes.number,
    placeholder: PropTypes.string,
    placeholderColor: PropTypes.string,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
}

export default Input;