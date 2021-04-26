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
            content: '和TA匹配与02月02日',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
            distance: '100m'
        },{
            id: 2,
            nickName: 'Nice marry',
            content: '和TA匹配与02月14日',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
            distance: '100m'
        },{
            id: 3,
            nickName: '告白草莓',
            content: '和TA匹配与07月07日',
            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
            distance: '100m'
        }
    ]);

    const [currUser, setCurrUser] = useState({});

    let { id } = useParams();

    useEffect(() => {

        queryUser(id);
        
    }, [id])

    // 查询当前用户
    const queryUser = (id) => {
        let user = userList.find(item => item.id === ~~id);
        setCurrUser(user);
    }

    return (
        <RootWarp>
            <NavBar user={currUser}></NavBar>
            <ChatContent></ChatContent>
            <SendContent></SendContent>
        </RootWarp>
    )
}

export default Chat;