import { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'
import ChatContent from './ChatContent'
import SendContent from './SendContent'
import { useParams } from 'react-router-dom'

const RootWarp = styled.div`

`

const Chat = (props) => {

    const [userList] = useState([
        {
            id: 1,
            nickName: '啦啦啦',
            age: 18,
            constellation: '天枰座',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
            distance: '100'
        },{
            id: 2,
            nickName: 'Nice marry',
            age: 25,
            constellation: '射手座',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
            distance: '100'
        },{
            id: 3,
            nickName: '告白草莓',
            age: 22,
            constellation: '金牛座',
            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
            distance: '100'
        }
    ]);

    const [currUser, setCurrUser] = useState({});

    const [message, setMessage] = useState('');

    let { id } = useParams();

    useEffect(() => {
        queryUser(); 
    })

    // 查询当前用户
    const queryUser = () => {
        let user = userList.find(item => item.id === ~~id);
        setCurrUser(user);
    }

    // 发送信息
    const sendMessage = (val) => {
        console.log('发送内容：' + val);
        setMessage(val);
    }

    return (
        <RootWarp>
            <NavBar user={currUser}></NavBar>
            <ChatContent user={currUser} message={message}></ChatContent>
            <SendContent onSend={ sendMessage }></SendContent>
        </RootWarp>
    )
}

export default Chat;