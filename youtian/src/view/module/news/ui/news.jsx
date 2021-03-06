import styled from 'styled-components'
import like from 'assets/tabbar/find-sel.png'
import activeCircles from 'assets/activeCircles.png'
import { useHistory } from 'react-router-dom'

const RootWarp = styled.div`
    margin-top: .6rem;
    margin-bottom: 3rem;
    background-color: white;
    .top-title{
        padding: .9rem .9rem .5rem;
        font-size: .9rem;
        font-weight: bold;
        text-align: left;
        display: flex;
        align-items: center;
        div{
            display: flex;
            align-items: center;
        }
    }
    .count{
        width: .8rem;
        height: .8rem;
        color: white;
        font-size: .5rem;
        padding: .1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: .6rem;
        border-radius: 50%;
        background-color: #F84460;
    }
    .news{
        > div{
            height: 4.5rem;
            padding: 0 .9rem;
            border-bottom: 1px solid #F4F6FA;
            .text{
                h5{
                    color: #222222;
                    text-align: left;
                    margin: 0 0 0 .5rem;
                }
                > span, > div > span{
                    color: #9E9E9E;
                    font-size: .6rem;
                    margin-left: .5rem;
                    label{
                        color: #000000;
                        font-weight: bold;
                    }
                }
            }
        }
        .like-me{
            display: flex;
            align-items: center;
            justify-content: space-between;
            .left{
                display: flex;
                align-items: center;
                .avatar-warp{
                    position: relative;
                    width: 3.5rem;
                    height: 3.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    border: .1rem solid #F84460;
                    img{
                        width: 85%;
                        height: 85%;
                        filter: blur(1px);
                        border-radius: 50%
                    }
                    span{
                        color: white;
                        position: absolute;
                    }
                }
            }
            .right{
                color: white;
                font-size: .6rem;
                padding: .2rem .6rem;
                border-radius: 1rem;
                background-image: linear-gradient(to right, #F7246E, #FA6A51);
            }
        }
        .like{
            display: grid;
            grid-template-columns: calc(100vw - .9rem) 6rem;
            overflow-x: auto;
            .content{
                display: flex;
                align-items: center;
                > div:first-child{
                    width: 3.5rem;
                    height: 3.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    > img{
                        width: 3rem;
                        height: 3rem;
                        border-radius: 50%;
                    }
                    .super{
                        width: 3rem;
                        height: 3rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background-color: #FED80F;
                        > img{
                            width: 55%;
                            height: 47%;
                        }
                    }
                    .system{
                        width: 3rem;
                        height: 3rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background-color: #FFEDED;
                        img{
                            width: 70%;
                            height: 70%; 
                        }
                    }
                }
                .text{
                    flex: 1;
                    padding-right: .9rem;
                    div{
                        margin: .4rem 0;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        .count{
                            color: white;
                        }
                    }
                }
            }
            .action{
                height: 100%;
                color: #FFFFFF;
                font-size: .6rem;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #BABABA;
            }
        }
        .like::-webkit-scrollbar{
            display: none;
        }
    }
`


const News = (props) => {

    const history = useHistory();

    const seeLikeMe = () => {
        console.log('??????')
    }

    const superLike = () => {
        history.push('/news/superLike');
    }

    const deleteRecord = (id) => {
        console.log('?????????' + id);
    }

    return (
        <RootWarp>
           <div className="top-title">
               <div>
                   ??????
                   <span className="count">2</span>
                </div>
           </div>
           <div className="news">
                <div className="like-me">
                    <div className="left">
                        <div className="avatar-warp">
                            <img src="https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                            <span>99+</span>
                        </div>
                        <div className="text">
                            <h5>????????????:????????????????????????</h5>
                            <span>?????????????????????????????????<label>100</label>???</span>
                        </div>
                    </div>
                    <div className="right" onClick={ seeLikeMe }>
                        ??????
                    </div>
                </div>
                <div className="like" onClick={ superLike }>
                    <div className="content">
                        <div>
                            <div className="super">
                                <img src={like} alt="#"/>
                            </div>
                        </div>
                        <div className="text">
                            <div>
                                <h5>???????????????</h5>
                                <span className="count">1</span>
                            </div>
                            <div>
                                <span>??????????????????</span>
                                <span className="time">?????? 06:03</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="like">
                    <div className="content">
                        <div>
                            <div className="system">
                                <img src={activeCircles} alt="#"/>
                            </div>
                        </div>
                        <div className="text">
                            <div>
                                <h5>????????????</h5>
                            </div>
                            <div>
                                <span></span>
                                <span className="time">?????? 06:03</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="like">
                    <div className="content">
                        <div>
                            <img src="https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                        </div>
                        <div className="text">
                            <div>
                                <h5>????????????</h5>
                                {/* <span className="count">1</span> */}
                            </div>
                            <div>
                                <span>hi??????????????????</span>
                                <span className="time">?????? 06:03</span>
                            </div>
                        </div>
                    </div>
                    <div className="action" onClick={() => deleteRecord(1) }>
                        ??????????????????
                    </div>
                </div>
                <div className="like">
                    <div className="content">
                        <div>
                            <img src="https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                        </div>
                        <div className="text">
                            <div>
                                <h5>?????????</h5>
                                <span className="count">1</span>
                            </div>
                            <div>
                                <span>????????????</span>
                                <span className="time">??????</span>
                            </div>
                        </div>
                    </div>
                    <div className="action" onClick={() => deleteRecord(2) }>
                        ??????????????????
                    </div>
                </div>
           </div>
        </RootWarp>
    )
}

export default News