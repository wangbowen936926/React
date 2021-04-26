import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const RootWarp = styled.div`
    > div{
        height: 4.5rem;
        padding: 0 .9rem;
        display: grid;
        grid-template-columns: calc(100vw - .9rem) 6rem;
        overflow-x: auto;
        border-bottom: 1px solid #F4F6FA;
        background-color: white;
        ::-webkit-scrollbar{
            display: none;
        }
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
            background-color: ${props => props.actionBgColor};
        }
    }
`

const PersonList = (props) => {

    const history = useHistory();

    const toChat = (userId) => {
        history.push(`/news/chat/${userId}`);
    }

    return (
        <RootWarp actionBgColor={props.actionBgColor}>
            {
                props.list.map((item, index) => {
                    return (
                        <div key={index} onClick={() => toChat(item.id)}>
                            <div className="content">
                                <div>
                                    <img src={ item.avatar } alt="#"/>
                                </div>
                                <div className="text">
                                    <div>
                                        <h5>{ item.nickName }</h5>
                                        {
                                            item.count && <span className="count">{ item.count }</span>
                                        }
                                    </div>
                                    <div>
                                        <span>{ item.content }</span>
                                        <span className="time">{ item.time || item.distance }</span>
                                    </div>
                                </div>
                            </div>
                            <div className="action" onClick={() => props.onAction(item.id) }>
                                {
                                    props.actionText
                                }
                            </div>
                        </div>
                    )
                })
            }
        </RootWarp>
    )
}

PersonList.defaultProps = {
    item: {},
    actionBgColor: '#BABABA',
    onAction: () => false
}

PersonList.propTypes = {
    item: PropTypes.object,
    actionBgColor: PropTypes.string,
    onAction: PropTypes.func
}

export default PersonList;