import { useState } from 'react'
import styled from 'styled-components'
// import Group from 'components/list-group';
// import Item from 'components/list-item';
import friends from 'assets/my/friends.png'
import invitation from 'assets/my/invitation.png'
import invitationCode from 'assets/my/invitationCode.png'
import knapsack from 'assets/my/knapsack.png'
import album from 'assets/my/album.png'
import like from 'assets/my/like.png'
import auth from 'assets/my/auth.png'
import setting from 'assets/my/setting.png'
import ListCom from 'components/list'

const RootWarp = styled.div`
    height: fit-content;
    margin-top: .6rem;
`

const List = (props) => {

    const [list] = useState([
        {
            children: [
                {
                    title: '我的好友',
                    icon: <img src={friends} alt="icon"/>,
                    path: '/my/myFriends'
                },{
                    title: '邀请好友',
                    icon: <img src={invitation} alt="icon"/>,
                },{
                    title: '我的邀请码',
                    icon: <img src={invitationCode} alt="icon"/>,
                    path: '/my/ivitationCode'
                }
            ]
        },{
            children: [
                {
                    title: '背包',
                    icon: <img src={knapsack} alt="icon"/>,
                    path: '/my/knapsack'
                },{
                    title: '相册',
                    icon: <img src={album} alt="icon"/>,
                    path: '/my/album'
                }
            ]
        },{
            children: [
                {
                    title: '100人喜欢了你',
                    icon: <img src={like} alt="icon"/>,
                    path: '/my/likeMy'
                },{
                    title: '认证中心',
                    icon: <img src={auth} alt="icon"/>,
                }
            ]
        },{
            children: [
                {
                    title: '设置',
                    icon: <img src={setting} alt="icon"/>,
                    path: '/my/setting'
                }
            ]
        }
    ])

    return (
        <RootWarp>
            <ListCom list={list}></ListCom>
        </RootWarp>
    )
}

export default List;