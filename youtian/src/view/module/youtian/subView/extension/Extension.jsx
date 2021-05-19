import { useState } from 'react'
import styled from 'styled-components'
import NavBar from 'components/navbar'
import Button from 'components/button'

const RootWarp = styled.div`
    height: 100vh;
    background-image: linear-gradient(#421D5E, #310F51);
    section{
        padding: 3.6rem 2rem 0;
        .title-warp{
            h4{
                color: #FFFFFF;
                text-align: left;
                font-size: .9rem;
                margin: 0;
                
            }
            > div{
                display: flex;
                align-items: center;
                margin: .5rem;
                h4{
                    font-weight: 200;
                    margin-left: .5rem;
                }
            }
        }
        .person-list{
            height: 60vh;
            overflow-y: auto;
            margin-top: 2rem;
            border-radius: .6rem;
            background: rgba(255,255,255, .1);
            .person-item{
                padding: 1rem;
                .left-info{
                    display: flex;
                    align-items: center;
                    img{
                        width: 2.9rem;
                        height: 2.9rem;
                        margin-right: .5rem;
                        border-radius: 50%;
                    }
                    .text-top{
                        color: #FFFFFF;
                        display: flex;
                        align-items: center;
                        font-size: .8rem;
                        div{
                            color: #50A2FF;
                            font-size: .6rem;
                            transform-origin: left;
                            transform: scale(.7);
                            display: flex;
                            align-items: center;
                            padding: .3rem .5rem;
                            margin-left: .5rem;
                            border-radius: 1rem;
                            background-color: white;
                            .line{
                                width: .1rem;
                                height: .8rem;
                                margin: 0 .5rem;
                                background-color: #BDDCFF;
                            }
                        }
                    }
                    .text-bottom{
                        display: flex;
                        align-items: center;
                        color: #C0B9CB;
                        font-size: .6rem;
                        text-align: left;
                        margin-top: .2rem;
                        .line{
                            display: flex;
                            width: .1rem;
                            height: .7rem;
                            margin: 0 .8rem;
                            background-color: #998DAA;
                        }
                    }
                }
            }
        }
        .person-list::-webkit-scrollbar{
            display: none;
        }
    }
    .btn-warp{
        position: fixed;
        width: 100%;
        bottom: 2rem;
    }

`

const Extension = (props) => {

    const [person] = useState([
        {
            id: 1,
            nickName: '林墨',
            age: 22,
            constellation: '金牛座',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
        },{
            id: 2,
            nickName: '林墨',
            age: 23,
            constellation: '金牛座',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
        },{
            id: 3,
            nickName: '林墨',
            age: 19,
            constellation: '金牛座',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
        },{
            id: 4,
            nickName: '林墨',
            age: 22,
            constellation: '金牛座',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
        },{
            id: 5,
            nickName: '林墨',
            age: 20,
            constellation: '金牛座',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
        },{
            id: 6,
            nickName: '林墨',
            age: 18,
            constellation: '金牛座',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
        },{
            id: 7,
            nickName: '林墨',
            age: 22,
            constellation: '金牛座',
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
        }
    ])

    const greet = () => {
        console.log('招呼一下')
    }

    return (
        <RootWarp>
            <NavBar arrowColor="#fff" bgColor="none"></NavBar>
            <section>
                <div className="title-warp">
                    <div>👋 <h4>欢迎回来</h4></div>
                    <h4>你们看起来很般配哦～</h4>
                </div>
                <div className="person-list">
                    {
                        person.map(item => {
                            return (
                                <div className="person-item" key={item.id}>
                                    <div className="left-info">
                                        <img src={item.avatar} alt="头像"/>
                                        <div className="text">
                                            <div className="text-top">
                                                { item.nickName } 
                                                <div>
                                                    刚刚活跃 
                                                    <span className="line"></span> 
                                                    ♈️星座很合拍
                                                </div>
                                            </div>
                                            <div className="text-bottom">
                                                { item.age }岁
                                                <span className="line"></span>
                                                { item.constellation }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
            <div className="btn-warp">
                <Button style={{width: '77vw', backgroundImage: 'linear-gradient(to right, #FD3574, #FD645D)'}} onClick={ greet }>招呼一下</Button>
            </div>
        </RootWarp>
    )
}

export default Extension;