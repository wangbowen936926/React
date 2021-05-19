import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './header'
import Empty from 'components/empty'
import UserCard from './UserCard'

const RootWarp = styled.div`
    height: calc(100vh);
    overflow: hidden;
    background-color: #F4F6FA;
    section{
        height: calc(100vh - 7rem);
        overflow-y: auto;
        padding-top: 3.5rem;
    }
    section::-webkit-scrollbar{
        display: none;
    }
`

const SquareUi = (props) => {

    const [tab, setTab] = useState(1);

    const [recommend] = useState([
        {
            id: 1,
            nickName: 'Nice marry',
            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
            city: '合肥市',
            area: '瑶海区',
            distance: '3km',
            time: '今天 18:01',
            content: '有一起看电影的嘛',
            comments: 9,
            fabulous: 666,
            album: [
                'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
            ]
        },{
            id: 2,
            nickName: '一个人出发',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
            city: '合肥市',
            area: '瑶海区',
            distance: '3km',
            time: '今天 18:01',
            content: '好无聊～谁来陪我？',
            comments: 66,
            fabulous: 888,
            album: [
                'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
            ]
        },{
            id: 3,
            nickName: '秋天的奶茶',
            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
            city: '合肥市',
            area: '瑶海区',
            distance: '3km',
            time: '今天 18:01',
            content: '有一起看电影的嘛',
            comments: 999,
            fabulous: 12,
            album: [
                'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
            ]
        },{
            id: 4,
            nickName: '八爪鱼子酱',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
            city: '合肥市',
            area: '瑶海区',
            distance: '3km',
            time: '今天 18:01',
            content: '好无聊～谁来陪我？',
            comments: 9,
            fabulous: 6,
            album: [
                'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
            ]
        },{
            id: 5,
            nickName: '小雨',
            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
            city: '合肥市',
            area: '瑶海区',
            distance: '3km',
            time: '今天 18:01',
            content: '有一起看电影的嘛',
            comments: 12,
            fabulous: 666,
            album: [
                'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
            ]
        },{
            id: 6,
            nickName: '一个阿野',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
            city: '合肥市',
            area: '瑶海区',
            distance: '3km',
            time: '今天 18:01',
            content: '好无聊～谁来陪我？',
            comments: 9,
            fabulous: 999,
            album: [
                'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
            ]
        }
    ])

    const changeSwitch = (index) => setTab(index);

    const release = () => {
        console.log('发布')
    }

    return (
        <RootWarp>
            <Header onChange={changeSwitch} onRelease={ release }></Header>
            <section>
                {
                    tab === 1 && <UserCard list={ recommend }/>
                }
                {
                    tab === 2 && <Empty title="暂无动态" subtitle="快去发布动态，让更多人认识你吧" height="100%" isShowButton={true} buttonText="去发布" onClick={ release } />
                }
            </section>
        </RootWarp>
    )
}

export default SquareUi