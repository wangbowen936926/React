import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import okimg from '../../../../assets/okimg.png'

const RootWrap = styled.div`
    padding: .5rem 1rem;
    .content{
        overflow: hidden;
        border-radius: .3rem;
        .top-album{
            height: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            .top-left-avatar{
                flex: 3.2;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: ${props => props.colour.avatarBg};
                div{
                    width: 3.5rem;
                    height: 3.5rem;
                    border-radius: 50%;
                    padding: .1rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: white;
                    img{
                        width: 3.5rem;
                        height: 3.5rem;
                        border-radius: 50%;
                    }
                }
            }
            .top-right-album{
                flex: 8.8;
                height: 100%;
                display: flex;
                div{
                    flex: 1;
                    display: flex;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
        .bottom-info{
            color: #f2eceb;
            padding-bottom: .7rem;
            background-image: ${props => `linear-gradient(${props.colour.textInfoBg1}, ${props.colour.textInfoBg2})`};
            > div{
                padding-top: .7rem;
                margin-left: 1rem;
            }
            .nickName-coordinate{
                display: flex;
                align-items: center;
                h4{
                    margin: -.3rem 0 0;
                }
                div{
                    font-size: .5rem;
                    padding: .1rem .2rem;
                    margin-left: .5rem;
                    display: flex;
                    align-items: center;
                    border-radius: .6rem;
                    background: rgba(0, 0, 0, .2);
                    img{
                        width: .8rem;
                        height: .8rem;
                        margin-right: .2rem;
                    }
                }
            }
            .basic-data{
                font-size: .5rem;
                display: flex;
                justify-content: flex-start;
                span{
                    height: .7rem;
                    line-height: .7rem;
                    padding-right: .4rem;
                }
                span:not(:first-child){
                    padding-left: .4rem;
                }
                span:not(:last-child){
                    border-right: 1px solid #CCCCCC;
                }
            }
        }
        .person-description{
            text-align: left;
            font-size: .9rem;
        }
    }
`

const InfoCard = ({item}) => {

    const [colour, setColour] = useState([]);

    useEffect(() => {
        setColour([
            {
                avatarBg: '#a796c7',
                textInfoBg1: '#a3838e',
                textInfoBg2: '#816085'
            },{
                avatarBg: '#d89b89',
                textInfoBg1: '#bb9998',
                textInfoBg2: '#ac8f8c'
            },{
                avatarBg: '#d889bb',
                textInfoBg1: '#b980af',
                textInfoBg2: '#af79a6'
            }
        ])
    }, [])

    const randomColour = () => {
        let bgColor = colour[Math.floor(Math.random()*colour.length)]
        if(bgColor){
            return bgColor;
        }else{
            return {}
        }
    }

    // 预览相册
    const previewAlbum = (index) => {
        console.log(index, 'index');
    }

    return (
        <RootWrap colour={ randomColour() }>
            <div className="content">
                {/* 顶部相册 */}
                <div className="top-album">
                    <div className="top-left-avatar">
                        <div><img src={item.avatar} alt="头像"/></div>
                    </div>
                    <div className="top-right-album">
                        {
                            item.album.map((url, index) => {
                                return (
                                    <div key={index} onClick={() => previewAlbum(index) }><img src={url} alt="相册"/></div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* 底部文本资料 */}
                <div className="bottom-info">
                    <div className="nickName-coordinate">
                        <h4>{ item.nickName }</h4>
                        <div><img src={okimg} alt="城市"/>现居{ item.city }</div>
                    </div>
                    <div className="basic-data">
                        <span>{ item.distance }km</span>
                        <span>{ item.city }，{ item.area }</span>
                        <span>{ item.age }岁</span>
                        <span>{ item.constellation }</span>
                    </div>
                    <div className="person-description">{ item.description }</div>
                </div>
            </div>
        </RootWrap>
    )
}

InfoCard.defaultProps = {
    item: {}
}

InfoCard.propsTypes = {
    item: PropTypes.object
}

export default InfoCard;