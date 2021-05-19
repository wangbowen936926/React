import { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavBar from 'components/navbar'
import Tabs from 'components/tabs'

const RootWarp = styled.div`
    height: 100vh;
    overflow: hidden;
    background-color: #F4F6FA;
    .tabs-warp{
        padding-top: 3rem;
    }
    section{
        height: calc(100vh - 5.6rem);
        overflow-y: auto;
        padding: .9rem;
        h4{
            margin: 0 0 .6rem;
            text-align: left;
            letter-spacing: .1rem;
        }
        .content{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            > div{
                width: 48.5%;
                overflow: hidden;
                margin-bottom: calc((100vw - 1.8rem) - 97%);
                border-radius: .3rem;
                box-shadow: 1px .3rem .5rem #E5E7EB;
                background-color: white;
                > .cover{
                    height: 6.6rem;
                    background-color: #32CCC9;
                }
                > .text{
                    padding: .6rem .6rem 1rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    .courseName{
                        font-size: .9rem;
                        font-weight: bold;
                        text-align: left;
                        margin-bottom: 1rem;
                    }
                    .count{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        > span:first-child{
                            color: #FF2556;
                            font-weight: bold;
                        }
                        > span:last-child{
                            color: #575757;
                            font-size: .6rem;
                            font-weight: bold;
                        }
                    }
                }
            }
        }
        
    }
    section::-webkit-scrollbar{
        display: none;
    }
`

const SmallClass = (props) => {

    const [tabs] = useState([
        {
            label: '脱单技巧',
        },{
            label: '恋爱技巧',
        },{
            label: '聊天技巧',
        },{
            label: '搭讪技巧',
        }
    ]);

    const [currTab, setCurrTab] = useState(0);

    const [currTabContent, setCurrTabContent] = useState([]);

    const [classroom] = useState([
        {
            id: 1,
            type: 0,
            courseName: '恋爱技巧/情感聊天技巧/婚姻情感挽回',
            price: 9.9,
            count: 999
        },{
            id: 2,
            type: 1,
            courseName: '恋爱技巧/情感聊天技巧/婚姻情感挽回',
            price: 6.6,
            count: 1000
        },{
            id: 3,
            type: 1,
            courseName: '恋爱技巧/情感聊天技巧/婚姻情感挽回',
            price: 12.9,
            count: 1000
        },{
            id: 4,
            type: 2,
            courseName: '恋爱技巧/情感聊天技巧/婚姻情感挽回',
            price: 9.9,
            count: 1000
        },{
            id: 5,
            type: 3,
            courseName: '恋爱技巧/情感聊天技巧/婚姻情感挽回',
            price: 2.9,
            count: 666
        },{
            id: 6,
            type: 3,
            courseName: '恋爱技巧/情感聊天技巧/婚姻情感挽回',
            price: 19.9,
            count: 1000
        },{
            id: 7,
            type: 3,
            courseName: '恋爱技巧/情感聊天技巧/婚姻情感挽回',
            price: 9.9,
            count: 888
        },{
            id: 8,
            type: 0,
            courseName: '恋爱技巧/情感聊天技巧/婚姻情感挽回',
            price: 16.6,
            count: 1000
        },{
            id: 9,
            type: 1,
            courseName: '恋爱技巧/情感聊天技巧/婚姻情感挽回',
            price: 8.8,
            count: 999
        }
    ]);

    useEffect (() => {
        tabContent();
    }, [currTab])

    const tabChange = (index) => {
        setCurrTab(index);
    }

    const tabContent = () => {
        const data = classroom.filter(item => item.type === currTab);
        setCurrTabContent(data);
    }

    const goDetails = (id) => props.history.push(`/youtian/smallClass/details/${id}`);

    return (
        <RootWarp>
            <NavBar title="优甜小课堂" isBottomBorder={true}></NavBar>
            <div className="tabs-warp">
                <Tabs list={tabs} current={currTab} onChange={ tabChange }></Tabs>
            </div>
            <section>
                <h4> { tabs[currTab].label } </h4>
                <div className="content">
                    {
                        currTabContent.map(item => {
                            return (
                                <div key={item.id} onClick={() => goDetails(item.id)}>
                                    <div className="cover"></div>
                                    <div className="text">
                                        <div className="courseName">{ item.courseName }</div>
                                        <div className="count">
                                            <span>￥{ item.price }</span>
                                            <span>{ item.count }人报名</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </RootWarp>
    )
}

export default SmallClass;