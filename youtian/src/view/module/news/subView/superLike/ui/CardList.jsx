import PropTypes from 'prop-types'
import styled from 'styled-components'

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
            overflow: hidden;
            margin-bottom: .6rem;
            border-radius: .4rem;
            background-color: white;
            .album{
                width: 100%;
                height: 21rem;
                img{
                    width: 100%;
                    height: 100%;
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
                        justify-content: space-around;
                        > span{
                            text-align: left;
                            margin-left: .5rem;
                            padding: .1rem;
                        }
                        > span:first-child{
                            font-size: .8rem;
                            font-weight: bold;
                        }
                        > span:last-child{
                            color: #6C6C6C;
                            font-size: .5rem;
                            font-weight: bold;
                        }
                    }
                }
                .action{
                    font-size: .5rem;
                    font-weight: bold;
                    padding: .2rem .5rem;
                    border-radius: 1rem;
                    border: 1.5px solid #000000;
                    img{
                        width: 1rem;
                        height: 1rem;
                    }
                }
            }
        }
    } 
`


const Card = (props) => {

    return (
        <RootWarp>
           <section>
               {
                   props.list.map(item => {
                       return (
                           <div className="item" key={item.id}>
                               <div className="album">
                                    <img src={item.album[0]}></img>
                               </div>
                               <div className="bottomAction">
                                    <div className="user">
                                        <img src={item.avatar} alt="avatar"/>
                                        <div>
                                            <span>{ item.nickName }</span>
                                            <span>{ '她超级喜欢了你' }</span>
                                        </div>
                                    </div>
                                    <div className="action">
                                        <img src="#" alt="#"></img>
                                        <span>喜欢</span>
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