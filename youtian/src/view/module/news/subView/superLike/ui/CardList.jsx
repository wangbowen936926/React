import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { IoClose } from "react-icons/io5";
import Like from 'assets/my/like.png'
import SuperLike from 'assets/tabbar/find-sel.png'

const RootWarp = styled.div`
    padding: 48px .9rem 0;
    section{
        height: calc(100vh - 48px);
        overflow-y: auto;
        background: none;
        ::-webkit-scrollbar{
            display: none;
        }
        .item:not(:first-child){
            margin-top: .6rem;
        }
        .item{
            position: relative;
            overflow: hidden;
            margin-bottom: .6rem;
            border-radius: .4rem;
            background-color: white;
            .delete{
                position: absolute;
                top: 0;
                right: 0;
                z-index: 99;
                padding: .1rem .1rem .3rem .3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 0 0 0 1.3rem;
                background: rgba(0, 0, 0, .5);
            }
            .album{
                width: 100%;
                .sign{
                    position: absolute;
                    width: 100%;
                    padding: 1rem 0;
                    display: flex;
                    justify-content: center;
                    span{
                        display: flex;
                        width: .6rem;
                        height: .2rem;
                        margin: 0 .1rem;
                        border-radius: 34%;
                        background: #FFFFFF;
                    }
                }
            }
            .bottomAction{
                padding: .5rem .9rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                background-color: white;
                .user{
                    display: flex;
                    align-items: center;
                    img{
                        width: 3rem;
                        height: 3rem;
                        border-radius: 50%
                    }
                    div{
                        display: flex;
                        flex-direction: column;
                        align-items: left;
                        justify-content: space-around;
                        > span{
                            text-align: left;
                            letter-spacing: .06rem;
                            margin-left: .5rem;
                            padding: .1rem;
                        }
                        > span:first-child{
                            font-size: .8rem;
                            font-weight: bold;
                        }
                        > span:last-child{
                            color: #6C6C6C;
                            font-size: .3rem;
                            font-weight: bold;
                            transform-origin: 0;
                            transform: scale(0.8);
                        }
                    }
                }
                .action{
                    font-size: .5rem;
                    font-weight: bold;
                    padding: .2rem .5rem;
                    display: flex;
                    align-items: center;
                    border-radius: 1rem;
                    border: 1.5px solid #000000;
                    img{
                        width: .9rem;
                        height: .9rem;
                        margin-right: .1rem;
                    }
                }
            }
        }
    } 
`

const Swiper = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.length}, calc(100vw - 1.8rem));
    overflow-x: auto;
    ::-webkit-scrollbar{
        display: none;
    }
    img{
        width: 100%;
        height: 21rem;
    }
`


const Card = (props) => {

    const [superLikeUser, setSuperLikeUser] = useState([]);

    // 是否喜欢操作按钮
    const isLike = (id) => {
        let index = superLikeUser.indexOf(id);
        if(index === -1){
            setSuperLikeUser([...superLikeUser, id]);
            return findCurrUserLikeStatus(id);
        }else{
            setSuperLikeUser(superLikeUser.filter(item => item !== id));
            return findCurrUserLikeStatus(id);
        }
    }

    // 查找当前用户是否已存在此喜欢的对象
    const findCurrUserLikeStatus = (id) => {
        let index = superLikeUser.indexOf(id);
        if(index === -1){
            return false;
        }else{
            return true;
        }
    }

    const swiperTouchStart = (e) => {
        console.log(e, 'e');
    }

    const swiperTouchEnd = (e) => {
        console.log(e, 'e11');
    }

    const deleteUser = (id) => {
        console.log('删除当前用户：' + id);
    }

    return (
        <RootWarp>
           <section>
               {
                   props.list.map(item => {
                       return (
                           <div className="item" key={item.id}>
                               <span className="delete" onClick={() => deleteUser(item.id) }>
                                    <IconContext.Provider value={{ size: 18, color: 'white'}}>
                                        <IoClose></IoClose>
                                    </IconContext.Provider>
                               </span>
                               <div className="album">
                                    <div className="sign">
                                        {
                                            item.album.map(e => {
                                                return (
                                                    <span key={e}></span>
                                                )
                                            })
                                        }
                                    </div>
                                    <Swiper length={ item.album.length } onTouchStart={ swiperTouchStart } onTouchEnd={ swiperTouchEnd }>
                                        {
                                            item.album.map((src, index) => {
                                                return (
                                                    <img key={index} src={src} alt="相册"></img>
                                                )
                                            })
                                        }
                                    </Swiper>
                               </div>
                               <div className="bottomAction">
                                    <div className="user">
                                        <img src={item.avatar} alt="avatar"/>
                                        <div>
                                            <span>{ item.nickName }</span>
                                            <span>
                                                { 
                                                    findCurrUserLikeStatus(item.id) ? '你对她发出了超级喜欢' : '她超级喜欢了你' 
                                                }
                                            </span>
                                        </div>
                                    </div>
                                    <div className="action">
                                        <img src={ findCurrUserLikeStatus(item.id) ? SuperLike : Like } alt="#"></img>
                                        <span onClick={() => isLike(item.id) }>
                                            {
                                                findCurrUserLikeStatus(item.id) ? '超级喜欢' : '喜欢'
                                            }
                                        </span>
                                    </div>
                               </div>
                           </div>
                       )
                   })
               }
           </section>
        </RootWarp>
    )
}

Card.defaultProps = {
    list: []
}

Card.propTypes = {
    list: PropTypes.array
}

export default Card;