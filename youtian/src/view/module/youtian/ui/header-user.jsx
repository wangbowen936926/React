import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import changeimage from '../../../../assets/home/changeimage.png'

const RootWarp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .6rem 1rem;
    img{
        width: 2.2rem;
        height: 2.2rem;
    }
    .left{
        font-size: .5rem;
        display: flex;
        align-items: center;
        img{
            border-radius: 50%;
        }
        p{
            text-align: left;
            margin: 0;
            margin-left: .3rem;
        }
        p:first-child{
            font-size: .85rem;
            font-weight: bold;
        }
        p:last-child{
            color: #999999;
            font-size: 12px;
        }
    }
    .right{
        display: flex
    }
`

const HeaderUser = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        setUser({
            avatar: changeimage,
            nickName: '告白草莓',
            age: 20,
            constellation: '水瓶座'
        })
    }, [])

    return (
        <RootWarp>
            <div className="left">
                <img src='https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg' alt="切换"/>
                <div>
                    <p>{ user.nickName }</p>
                    <p>{ user.age}.{ user.constellation}</p>
                </div>
            </div>
            <div className="right">
                <img src={changeimage} alt="切换"/>
            </div>
        </RootWarp>
    )
}

export default HeaderUser;