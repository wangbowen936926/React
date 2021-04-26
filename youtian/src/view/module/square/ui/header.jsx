import { useState } from 'react'
import styled from 'styled-components'
import { IconContext } from "react-icons";
import { IoAddSharp } from "react-icons/io5";
import notice from "../../../../assets/square/notice.png"

const RootWarp = styled.div`
    position: fixed;
    top: 0;
    width: fill-available;
    z-index: 1000;
    height: 2.5rem;
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
`

const LeftIdentification = styled.div`
    z-index: 99;
    display: flex;
    align-items: center;
    img{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
    }
    .admirer{
        font-size: .6rem;
        font-weight: bold;
        padding: .15rem .3rem .15rem .2rem;
        display: flex;
        align-items: center;
        border-radius: 2rem;
        background-color: #fbdb2e;
        div{
            display: flex;
            padding: .1rem;
            margin-right: .2rem;
            border-radius: 50%;
            background-color: white;
        }
    }

`

const Switch = styled.div`
    position: absolute;
    z-index: 1;
    width: calc(100% - 2rem);
    height: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    span{
        width: 2rem;
        height: .8rem;
        line-height: .8rem;
    }
    span:first-child{
        text-align: right;
    }
    span:last-child{
        text-align: left;
    }
    .line{
        width: 1px;
        height: .75rem;
        margin: 0 1rem;
        background-color: #b4b4b4;
    }
    .tabText{
        color: #b4b4b4;
        font-size: .7rem;
        font-weight: bold;
    }
    .avtive{
        transition: .1s;
        font-size: .9rem;
        font-weight: bold;
    }

`

const ReleaseButton = styled.div`
    z-index: 99;
    display: inline-flex;
    align-items: center;
    padding: .3rem .6rem;
    border-radius: 1rem;
    background-image: linear-gradient(to right, #f72c6a, #f96254);
    span{
        color: #ffffff;
        font-size: .6rem;
    }
`

const Header = (props) => {

    const [current, setCurrent] = useState(1); 

    const dynamicRender = () => {
        if(current === 1){
            return (
                <img src={notice} alt="推荐"/>
            )
        }
        if(current === 2){
            return (
                <div className="admirer">
                    <div><img src="https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg" alt="头像"/></div>
                    有人点赞
                </div>
            )
        }
    }

    const changeSwitch = (index) => {
        setCurrent(index);
        props.onChange(index);
    }

    return (
        <RootWarp>
            <LeftIdentification>
                { dynamicRender() }
            </LeftIdentification>
            {/* 中间tabs */}
            <Switch>
                <span className={ current === 1 ? 'avtive' : 'tabText'} onClick={() => changeSwitch(1) }>推荐</span>
                <span className="line"></span>
                <span className={ current === 2 ? 'avtive' : 'tabText'} onClick={() => changeSwitch(2) }>好友</span>
            </Switch>
            {/* 右边按钮 */}
            <ReleaseButton onClick={() => props.onRelease()}>
                <IconContext.Provider value={{color: 'white'}}>
                    <IoAddSharp/>
                </IconContext.Provider>
                <span>发布</span>
            </ReleaseButton>
        </RootWarp>
    )
}

export default Header;