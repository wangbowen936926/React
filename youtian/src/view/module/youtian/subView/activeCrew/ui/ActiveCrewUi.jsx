import { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavBar from 'components/navbar'
import CardModule from './CardModule'
import Tabs from 'components/tabs'
import Button from 'components/button'

const RootWarp = styled.div`
    > section{
        height: calc(100vh - 88px);
        overflow-y: auto;
        ::-webkit-scrollbar{
            display: none;
        }

    }

`

const ActiveCrewUi = () => {
    
    const [tabs, setTabs] = useState([]);
    const [current, setCurrent] = useState(0);
    const [active, setActive] = useState({});

    useEffect(() => {
        setTabs([
            {
                label: '全部',
            },{
                label: '精选',
            },{
                label: '看电影',
            },{
                label: '轰叭',
            },{
                label: '开黑',
            },{
                label: 'K歌',
            }
        ]);
        setActive({
            official: [
                {
                    tabIndex: 2,
                    tabLabel: '看电影',
                    content: '《一朵小红花》首映走一波呀。坐标之心城《一朵小红花》首映走一波呀。坐标之心城',
                    applicants: [],
                },{
                    tabIndex: 5,
                    tabLabel: 'K歌',
                    content: '周末约ktv，戳我报名 上车啦',
                    applicants: [
                        {
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        }
                    ]
                },{
                    tabIndex: 3,
                    tabLabel: '轰叭',
                    content: '元旦轰趴，有超大泳池哦',
                    applicants: [
                        {
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        }
                    ]
                },{
                    tabIndex: 4,
                    tabLabel: '开黑',
                    content: '带小姐姐们上王者，速度哦',
                    applicants: [
                        {
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        }
                    ]
                }
            ],
            selected: [
                {
                    tabIndex: 2,
                    tabLabel: '看电影',
                    content: '《一朵小红花》首映走一波呀。坐标之心城',
                    applicants: [],
                },{
                    tabIndex: 5,
                    tabLabel: 'K歌',
                    content: '周末约ktv，戳我报名 上车啦',
                    applicants: [
                        {
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        }
                    ]
                },{
                    tabIndex: 3,
                    tabLabel: '轰叭',
                    content: '元旦轰趴，有超大泳池哦',
                    applicants: [
                        {
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        }
                    ]
                },{
                    tabIndex: 4,
                    tabLabel: '开黑',
                    content: '带小姐姐们上王者，速度哦',
                    applicants: [
                        {
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg'
                        },{
                            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg'
                        }
                    ]
                }
            ]
        });
    }, [])

    const tabChange = (index) => {
        setCurrent(index);
    }

    const createActive = () => {
        console.log('创建活动')
    }

    return (
        <RootWarp>
            <NavBar title="活动剧组"></NavBar>
            <Tabs list={tabs} current={current} onChange={ tabChange }></Tabs>
            <section>
                <CardModule moduleTitle="官方活动" list={active.official}></CardModule>
                <CardModule moduleTitle="精选" list={active.selected}></CardModule>
            </section>
            <Button size="mini" color="#000000" isSuspension={ true } isShadow={true} style={{fontSize: '.8rem', padding: '.76rem 0'}} onClick={ createActive }>
                创建活动
            </Button>
        </RootWarp>
    )
}

export default ActiveCrewUi;