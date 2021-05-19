import { useState } from 'react'
import styled from 'styled-components'
import NavBar from "components/navbar";
import List from 'components/list'
import Popup from 'components/popup'

const RootWarp = styled.div`
    height: 100vh;
    padding-top: 3rem;
    background-color: #F4F6FA;
    .logOut{
        height: 3rem;
        font-size: .8rem;
        font-weight: bold;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
    }
`

const Setting = (props) => {

    const [list] = useState([
        {
            children: [
                {
                    title: '清理缓存',
                }
            ]
        },{
            children: [
                {
                    title: '修改绑定手机号',
                    path: '/my/setting/editPhoneNumber'
                },{
                    title: '修改密码',
                    path: '/my/setting/editPassword'
                },{
                    title: '绑定微信',
                    path: '/my/setting/bindingWechat'
                }
            ]
        },{
            children: [
                {
                    title: '黑名单',
                    path: '/my/setting/blacklist'
                }
            ]
        },{
            children: [
                {
                    title: '关于我们',
                    path: '/my/setting/aboutUs'
                }
            ]
        }
    ])

    const [show, setShow] = useState(false);

    const logOut = () => {
        setShow(true);
    } 

    const logOutCancel = () => {
        setShow(false);
    }

    const logOutConfirm = () => {
        props.history.replace('/LoginEntry');
    }


    return (
        <RootWarp>
            <NavBar title="设置"></NavBar>
            <List list={list}></List>
            <div className="logOut" onClick={ logOut }> 
                退出登录 
            </div>
            <Popup show={show} title="提示" titleContent="是否退出登录" onCancel={ logOutCancel }  onConfirm={ logOutConfirm }></Popup>
        </RootWarp>
    )
}

export default Setting;