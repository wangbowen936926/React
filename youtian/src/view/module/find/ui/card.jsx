import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GroupSuspensionButton from 'components/group-suspension-button'
import R from 'assets/find/R.png'
import blackimage from 'assets/find/blackimage.png'
import okimg from 'assets/okimg.png'

const RootWarp = styled.div`
    position: relative;
    overflow: hidden;
    height: 85vh;
    width: calc(100% - 1.2rem);
    margin: 0 auto;
    border-radius: .5rem;
    background: url(${props => props.bg});
    background-size: 100% 100%;
    .top-left-verification{
        position: absolute;
        top: .6rem;
        left: 1.2rem;
        width: fit-content;
        color: #be9336;
        font-size: .5rem;
        font-weight: bold;
        padding: .2rem .2rem;
        display: flex;
        align-items: center;
        border-radius: 1rem;
        background: rgba(0, 0, 0, .5);
        img{
            width: 1.2rem;
            height: 1.2rem;
            margin-right: .2rem;
        }
    }

`

const TopRightCount = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 5rem;
    height: 5rem;
    background: url(${props => props.bg});
    background-size: 100% 100%;
    span{
        position: absolute;
        top: .38rem;
        right: .7rem;
        color: #ffffff;
        z-index: 99;
        transform: rotate(226deg)
    }
`

const UserInfo = styled.div`
    position: absolute;
    left: 1.2rem;
    bottom: 2rem;
    .isRealName{
        width: fit-content;
        font-size: .6rem;
        font-weight: bold;
        padding: .15rem .2rem;
        display: flex;
        align-items: center;
        border-radius: .2rem;
        background-color: white;
        img{
            width: .8rem;
            height: .8rem;
            margin-right: .2rem;
        }
    }
    h2{
        color: white;
        text-align: left;
        letter-spacing: .1rem;
        padding: 0;
        margin: .3rem 0 .5rem;
    }
    .coordinate{
        color: #fff;
        font-size: .5rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        span{
            height: .65rem;
            line-height: .65rem;
        }
        span:nth-child(1){
            padding-right: .3rem;
            border-right: 1px solid #cccccc;
        }
        span:nth-child(2){
            padding-left: .3rem;
        }

    }
    .info{
        color: #fff;
        font-size: .5rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        margin-top: .5rem;
        span{
            height: .65rem;
            line-height: .65rem;
        }
        span:nth-child(1){
            padding-right: .3rem;
        }
        span:nth-child(2){
            padding: 0 .3rem;
            border-left: 1px solid #cccccc;
            border-right: 1px solid #cccccc;
        }
        span:nth-child(3){
            padding-left: .3rem;
        }
    }

`

const Card = (props) => {

    const onTouchStart = (e) => {
        //props.onTouchStart(e);
    }

    const onTouchEnd = (e) => {
        props.onTouchEnd(e);
    }

    const suspensionBtn = (index) => {
        console.log(index, 'index')
    }

    return (
        <RootWarp bg='https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg' onTouchStartCapture={ (e) => onTouchStart(e) } onTouchEndCapture={ (e) => onTouchEnd(e) }>
            <div className="top-left-verification">
                <img src={R} alt="#"/>真实头像
            </div>
            <TopRightCount bg={blackimage}>
                <span>
                    { props.item.residualMatching }
                </span>
            </TopRightCount>
            <UserInfo>
                <div className="isRealName">
                    <img src={okimg} alt="#"/>完成实名
                </div>
                <h2>
                    { props.item.nickName }
                </h2>
                <div className="coordinate">
                    <span>
                        { props.item.distance }km
                    </span>
                    <span>
                        { props.item.city }，{ props.item.area }
                    </span>
                </div>
                <div className="info">
                    <span>{ props.item.sex === 0 ? '男' : '女' }</span>
                    <span>{ props.item.age }岁</span>
                    <span>{ props.item.constellation }</span>
                </div>
                <div className="album">

                </div>
            </UserInfo>
            <GroupSuspensionButton onClick={ suspensionBtn } />
        </RootWarp>
    )
}

Card.defaultProps = {
    item: {},
    onTouchStart: () => false,
    onTouchEnd: () => false
}

Card.propTypes = {
    item: PropTypes.object,
    onTouchStart: PropTypes.func,
    onTouchEnd: PropTypes.func,
}

export default Card;