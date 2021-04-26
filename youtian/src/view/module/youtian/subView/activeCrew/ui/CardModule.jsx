import PropTypes from 'prop-types'
import { IconContext } from "react-icons";
import { IoGrid, IoFlag, IoFish, IoTelescope } from "react-icons/io5";
import styled from 'styled-components'

const RootWarp = styled.div`
    header{
        font-size: .9rem;
        font-weight: bold;
        text-align: left;
        letter-spacing: .06rem;
        padding: 1.5rem .9rem .8rem;
    }
    section{
        padding: 0 .9rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item{
            width: 48%;
            height: 8rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-bottom: calc((100vw - 1.8rem) - 96%);
            border-radius: .4rem;
            background-color: #32CCC9;
            .type{
                width: fit-content;
                display: flex;
                align-items: center;
                margin: .7rem .5rem;
                border-radius: .8rem;
                background: rgba(0, 0, 0, .2);
                div{
                    width: 1.3rem;
                    height: 1.3rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background-color: #000000;
                }
                span{
                    color: #F3F9F9;
                    font-size: .5rem;
                    margin: 0 .4rem 0 .2rem;
                }
            }
            .content{
                height: 2rem;
                color: #ffffff;
                font-size: .8rem;
                font-weight: bold;
                text-align: left;
                padding: 0 .5rem;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .count{
                display: flex;
                align-items: center;
                padding: .7rem .5rem;
                .userAvatar{
                    display: flex;
                    > div{
                        width: 1.4rem;
                        height: 1.4rem;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        border-radius: 50%;
                        background-color: white;
                    }
                    img{
                        width: 94%;
                        height: 94%;
                        border-radius: 50%;
                    }
                    > div:not(:first-child){
                        margin-left: -.5rem;
                    }
                }
                span{
                    color: white;
                    font-size: .5rem;
                    margin-left: .6rem;
                }
            }
        }
    }

`

const CardModule = (props) => {

    const Icon = (index) => {
        return (
            <IconContext.Provider value={{ size: 10, color: '#32CCC9' }}>
                {
                    index === 2 && <IoGrid></IoGrid>
                }
                {
                    index === 3 && <IoFish></IoFish>
                }
                {
                    index === 4 && <IoFlag></IoFlag>
                }
                {
                    index === 5 && <IoTelescope></IoTelescope>
                }
            </IconContext.Provider>
        )
    }

    return (
        <RootWarp>
            <header>{ props.moduleTitle }</header>
            <section>
                {
                    props.list.map((item, index) => {
                        return (
                            <div className="item" key={ index }>
                                <div className="type">
                                    <div>{ Icon(item.tabIndex) }</div>
                                    <span>{ item.tabLabel }</span>
                                </div>
                                <div className="content">
                                    { item.content }
                                </div>
                                <div className="count">
                                    <div className="userAvatar">
                                        {
                                            item.applicants.map((subItem, subIndex) => {
                                                return (
                                                    (subIndex <= 4) && <div key={ subIndex }><img src={subItem.avatar} alt="avatar"/></div>
                                                )
                                            })
                                        }
                                    </div>
                                    <span>
                                        { item.applicants.length }人报名
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </section>
        </RootWarp>
    )
}

CardModule.defaultProps = {
    moduleTitle: '',
    list: []
}

CardModule.propTypes = {
    moduleTitle: PropTypes.string,
    list: PropTypes.array
}

export default CardModule;