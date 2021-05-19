import React, { useState, useImperativeHandle, forwardRef } from 'react'
import styled from 'styled-components'
import Loading from './loading'
import { IconContext } from "react-icons";
import { IoCheckmarkSharp, IoCloseSharp, IoAlertOutline } from "react-icons/io5";
import { useHistory } from 'react-router-dom'
import deepMerge from '../utils/deepMerge'

const RootWarp = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: ${props => props.isShow ? 99 : -1};;
    width: ${props => props.icon ? '6rem' : 'unset'};
    height: ${props => props.icon ? '6rem' : 'unset'};
    /* visibility: ${props => props.isShow ? 'unset' : 'hidden'}; */
    transition: 0.4s;
    opacity: ${props => props.isShow ? 1 : 0};
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 50%;
    padding: ${props => !props.icon ? '.55rem 1rem' : 'unset'};
    border-radius: .25rem;
    background: #222222;
    .icon{
        display: flex;
        margin-bottom: .5rem;
    }
    span{
        color: #ffffff;
        font-size: .7rem;
        text-align: center;
        height: ${props => props.icon ? '.9rem' : 'auto'};
        max-width:  ${props => props.icon ? '85%' : 'unset'};
        overflow: ${props => props.icon ? 'hidden' : 'unset'};

    }
`

const Toast = forwardRef((props, ref) => {

    const [isShow, setIsShow] = useState(false);
    const [config, setConfig] = useState({
        title: '操作成功',
        // success；error；warning；loading；
        type: 'success',  
        icon: true,
        url: '',
        goBack: false,
        param: {},
        duration: 2000,
        position: 'center'
    })

    let history = useHistory();

    // 暴露需要项
    useImperativeHandle(ref, () => ({ show }))

    // 消息图标
    const icon = () => {
        return (
            <>
                {
                    config.type === 'loading' && <Loading color="#fff" size="2"></Loading>
                }
                {
                    config.type !== 'loading' && (
                        <IconContext.Provider value={{size: 30, color: '#fff'}}>
                            <div className="icon">
                                {
                                    config.type === 'success' && <IoCheckmarkSharp />
                                }
                                {
                                    config.type === 'error' && <IoCloseSharp />
                                }
                                {
                                    config.type === 'warning' && <IoAlertOutline />
                                }
                            </div>
                        </IconContext.Provider>
                    )
                }
            </>
        )
    }

    const show = (options) => {
        setIsShow(true);
        let newConfig = deepMerge(config, options);
        setConfig(newConfig);
        setTimeout(() => {
            timeEnd(newConfig);
        }, config.duration)
    }

    const timeEnd = (newConfig) => {
        if(newConfig.url) return history.push(newConfig.url);
        if(newConfig.goBack) return history.goBack();
        setIsShow(false);
    }

    return (
        <>
            <RootWarp isShow={isShow} {...config}>
                {
                    config.icon && icon()
                }
                <span>
                    { config.title }
                </span>
            </RootWarp>
        </>
    )
}) 

export default Toast;