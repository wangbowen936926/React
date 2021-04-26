import { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavBar from 'components/navbar'
import Empty from 'components/empty'
import PersonList from 'view/module/news/ui/PersonList'

const RootWarp = styled.div`
    height: 100vh;
    background-color: #f4f6fa; 
    section{
        padding-top: 57px;
    }
`


const MailList = (props) => {

    const [person, setPerson] = useState([]);

    useEffect(() => {
        setPerson([
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
        ])
    }, [])

    const relieve = (id) => {
        console.log('解除：' + id);
    }


    return (
        <RootWarp>
            <NavBar title="通讯录"></NavBar>
            <section>
                {
                    person.length === 0 
                    ? 
                    <Empty title="暂无好友" subtitle="快去首页和喜欢页面去发现好友吧" height="100vh" />
                    :
                    <PersonList list={person} actionText="解除绑定" actionBgColor="#FF2556" onAction={ relieve } />
                }
            </section>
        </RootWarp>
    )
}

export default MailList;