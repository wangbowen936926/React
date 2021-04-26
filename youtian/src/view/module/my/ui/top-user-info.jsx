import { useState, useEffect } from "react";
import styled from 'styled-components';
import avatar from "assets/my/avatar.png";
import R from "assets/find/R.png";
import vip from "assets/my/vip.png";
import privilege from "assets/my/privilege.png";
import wallet from "assets/my/wallet.png";
import { IconContext } from "react-icons";
import { IoChevronForwardOutline } from "react-icons/io5";

const RootWarp = styled.div`
    padding: 1rem;
    background-color: white;
`

const User = styled.div`
    display: flex;
    align-items: center;
    .avatar-warp{
        position: relative;
        img:first-child{
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
        }
        img:last-child{
            position: absolute;
            right: .45rem;
            bottom: 0;
            width: 1rem;
            height: 1rem;
        }
    }
    .nickName-warp{
        div{
            margin-left: .8rem;
            display: flex;
            align-items: center;
            h3{
                margin: 0 .5rem 0 0;
            }
            img{
                width: 2.2rem;
                height: .8rem;
            }
        }
        h6{
            text-align: left;
            margin: .2rem 0 .5rem .8rem;
        }
    }
`

const Count = styled.div`
    height: 3.3rem;
    margin-bottom: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    div{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        span:first-child{
            font-size: 1rem;
            font-weight: bold;
            margin-bottom: .2rem;
        }
        .count-title{
            font-size: .5rem;
            font-weight: bold;
        }
    }
    .like-my{
        div{
            position: relative;
            display: flex;
            align-items: center;
            img:first-child{
                width: 2.2rem;
                height: 2.2rem;
                filter: blur(1px);
                border-radius: 50%;
            }
            span{
                position: absolute;
                top: .2rem;
                right: -.3rem;
                display: flex;
                color: white;
                font-size: .5rem;
                padding: 0 .2rem;
                border-radius: .6rem;
                background-color: #F85543;
            }
        }
    }
`

const Module = styled.div`
    display: flex;
    justify-content: space-between;
    > div{
        width: 43%;
        color: white;
        padding: .6rem .6rem;
        display: flex;
        align-items: center;
        border-radius: .4rem;
        background-color: #FB992F;
        > div{
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .text{
                h5{
                    text-align: left;
                    margin: 0 0 .2rem .4rem;
                }
                h6{
                    color: #FDD7AD;
                    font-weight: normal;
                    text-align: left;
                    margin: 0 0 0 .4rem;
                }
            }
        }
    }
    .left{
        img{
            width: 2.4rem;
            height: 1.9rem;
        }
    }
    .right{
        img{
            width: 2.2rem;
            height: 2.2rem;
        }
    }

`

const TopUserInfo = (props) => {

    const [isAuthentication, setIsAuthentication] = useState(false);

    useEffect(() => {
        setIsAuthentication(true);
    }, [])

    const clickModule = (index) => {
        console.log(index);
    }

    return (
        <RootWarp>
            <User>
                <div className="avatar-warp">
                    <img src={avatar} alt="#"/>
                    <img src={R} alt="icon"/>
                </div>
                <div className="nickName-warp">
                    <div>
                        <h3>凯撒的猫</h3> 
                        { isAuthentication && <img src={vip} alt="vip"/> }
                    </div>
                    <h6>庐山烟雨浙江潮</h6>
                </div>
            </User>
            <Count>
                <div className="look-at-me">
                    <span>0</span>
                    <span className="count-title">谁看过我</span>
                </div>
                <div className="my-like">
                    <span>99+</span>
                    <span className="count-title">我喜欢的人</span>
                </div>
                <div className="like-my">
                    <div>
                        <img src={avatar} alt="#"/>
                        <span>99+</span>
                    </div>
                    <span className="count-title">喜欢我的人</span>
                </div>
            </Count>
            <Module>
                <div className="left" onClick={ () => clickModule(1) }>
                    <img src={privilege} alt="#"/>
                    <div>
                        <div className="text">
                            <h5>我的特权</h5>
                            <h6>开通超级权益</h6>
                        </div>
                        <IconContext.Provider value={{ size: 13, color: "#fff" }}><IoChevronForwardOutline /></IconContext.Provider>
                    </div>
                </div>
                <div className="right" onClick={ () => clickModule(2) }>
                    <img src={wallet} alt="#"/>
                    <div>
                        <div className="text">
                            <h5>钱包</h5>
                            <h6>1000</h6>
                        </div>
                        <IconContext.Provider value={{ size: 13, color: "#fff" }}><IoChevronForwardOutline /></IconContext.Provider>
                    </div>
                </div>
            </Module>
        </RootWarp>
    )
}

export default TopUserInfo;