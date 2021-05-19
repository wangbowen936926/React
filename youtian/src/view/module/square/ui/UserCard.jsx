import styled from 'styled-components'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
import { IoEllipsisVerticalSharp, IoLocationOutline, IoChatbubbleOutline, IoChatbubbleEllipsesOutline, IoCopy } from 'react-icons/io5'

const RootWarp = styled.div`
    .item{
        padding: 0 .9rem;
        margin-top: .6rem;
        background-color: white;
        .top{
            padding: .8rem .2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .top-left{
                display: flex;
                align-items: center;
                img{
                    width: 2.2rem;
                    height: 2.2rem;
                    border-radius: 50%;
                }
                > div{
                    margin-left: .5rem;
                    h5{
                        margin: 0 0 .2rem;
                        text-align: left;
                    }
                    > div{
                        color: #B6B6B6;
                        font-size: .6rem;
                        transform: scale(.8);
                        transform-origin: left;
                    }
                }
            }
        }
        .center{
            margin-bottom: .5rem;
            .content-text{
                color: #333333;
                font-size: .8rem;
                text-align: left;
                margin: 1rem 0;
            }
            .coordinate{
                width: fit-content;
                color: #4D80EA;
                font-size: .6rem;
                transform: scale(.7);
                transform-origin: 0;
                display: flex;
                align-items: center;
                padding: .4rem .5rem;
                border-radius: 1rem;
                background-color: #F6F9FE;
            }
        }
        .bottom{
            padding: .8rem 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #F4F4F4;
            .count{
                display: flex;
                align-items: center;
                .fabulous{
                    color: #7F7F7F;
                    font-size: .8rem;
                    display: flex;
                    align-items: center;
                    span{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 1.36rem;
                        height: 1.36rem;
                        font-size: .6rem;
                        transform: scale(.8);
                        transform-origin: 0;
                        border-radius: 50%;
                        border: 1px solid #000000;
                    }
                }
                .comments{
                    margin-left: 2rem;
                    display: flex;
                    align-items: center;
                    span{
                        color: #7F7F7F;
                        font-size: .8rem;
                        margin-left: .3rem;
                    }
                }
            }
            .private-chat{
                font-size: .6rem;
                font-weight: bold;
                display: flex;
                align-items: center;
                padding: .2rem .4rem;
                border-radius: 1rem;
                border: 1px solid #000000;
                span{
                    margin-left: .2rem;
                }
            }
        }
    }
`

const AlbumWarp = styled.div`
    .imgWarp1{
        width: 65%;
        img{
            width: 100%;
            height: 13.6rem;
            border-radius: .6rem;
        }
    }
    .imgWarp2{
        width: 100%;
        display: flex;
        justify-content: space-between;
        img{
            width: 49.8%;
            height: calc((100vw - 1.8rem) / 49.8%);
        }
        > img:first-child{
            border-radius: .4rem 0 0 .4rem;
        }
        > img:last-child{
            border-radius: 0 .4rem .4rem 0;
        }
    }
    .imgWarp3{
        width: 100%;
        height: 13.6rem;
        display: flex;
        justify-content: space-between;
        > img{
            width: 64.8%;
            height: 100%;
            border-radius: .3rem 0 0 .3rem;
        }
        > div{
            position: relative;
            width: 34.8%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            > img{
                width: 100%;
                height:  49.7%;
                border-radius: 0 .3rem .3rem 0;
            }
            .count{
                position: absolute;
                bottom: .3rem;
                right: -.5rem;
                color: white;
                font-size: .7rem;
                transform: scale(.7);
                transform-origin: 0;
                display: flex;
                align-items: center;
                padding: .3rem;
                border-radius: .25rem;
                background-color: #000000;
                span{
                    margin-left: .3rem;
                }
            }
        }
    }
`

const UserCard = (props) => {

    return (
        <RootWarp>
            {
                props.list.map(item => {
                    return (
                        <div className="item" key={item.id}>
                            <div className="top">
                                <div className="top-left">
                                    <img src={item.avatar} alt="avatar"/>
                                    <div>
                                        <h5>{ item.nickName }</h5>
                                        <div>
                                            { item.time }.{ item.city }{ item.distance }
                                        </div>
                                    </div>
                                </div>
                                <IconContext.Provider value={{size: 16, color: '#7F7F7F'}}>
                                    <IoEllipsisVerticalSharp/>
                                </IconContext.Provider>
                            </div>
                            <div className="center">
                                <AlbumWarp>
                                    {
                                        item.album.length === 1 && <div className="imgWarp1"><img src={item.album[0]} alt="相册" /></div>
                                    }
                                    {
                                        item.album.length === 2 && (
                                            <div className="imgWarp2">
                                                <img src={item.album[0]} alt="相册" />
                                                <img src={item.album[1]} alt="相册" />
                                            </div>
                                        ) 
                                    }
                                    {
                                        item.album.length >= 3 && (
                                            <div className="imgWarp3">
                                                <img src={item.album[0]} alt="相册" />
                                                <div>
                                                    <img src={item.album[1]} alt="相册" />
                                                    <img src={item.album[2]} alt="相册" />
                                                    <IconContext.Provider value={{size: 14, color: '#ffffff'}}>
                                                        <div className="count">
                                                            <IoCopy/>
                                                            <span>{ item.album.length }张</span>
                                                        </div>
                                                    </IconContext.Provider>
                                                </div>
                                            </div>
                                        ) 
                                    }
                                </AlbumWarp>
                                <div className="content-text">
                                    { item.content }
                                </div>
                                <div>
                                    <IconContext.Provider value={{size: 15, color: '#4D80EA'}}>
                                        <div className="coordinate">
                                            <IoLocationOutline/>
                                            <span>{ item.city }{ item.area }</span>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="count">
                                    <div className="fabulous">
                                        <span>赞</span>{ item.fabulous }
                                    </div>
                                    <IconContext.Provider value={{size: 20, color: '#808080'}}>
                                        <div className="comments">
                                            <IoChatbubbleOutline/>
                                            <span>{ item.comments }</span>
                                        </div>
                                    </IconContext.Provider>
                                </div>
                                <IconContext.Provider value={{size: 16}}>
                                    <div className="private-chat">
                                        <IoChatbubbleEllipsesOutline/>
                                        <span>私聊</span>
                                    </div>
                                </IconContext.Provider>
                            </div>
                        </div>
                    )
                })
            }
        </RootWarp>
    )
}

UserCard.defaultProps = {

}

UserCard.propTypes = {
    list: PropTypes.array
}

export default UserCard;