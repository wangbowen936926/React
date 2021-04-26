import React, { memo } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RootWrap = styled.div`
    .item-box{
        position: fixed;
        bottom: 0;
        z-index: 1000;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        padding: .4rem 0;
        background-color: white;
        .item{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            img{
                width: 1.3rem;
                height: 1.3rem;
                margin-bottom: .3rem;
            }
            span{
                font-size: .5rem;
                font-weight: bold;
            }
        }
    }
`


const tabbar = memo((props) => {

    const ItemView = () => {
        let ItemView = props.list[props.current].componentView
        return <ItemView {...props}></ItemView>
    }

    return (
        <RootWrap>
            <div className="item-view">
                {
                    ItemView()
                }
            </div>
            <div className="item-box">
                {
                    props.list.map((item, index) => {
                        return (
                            <div className="item" key={index} onClick={() => props.onClick(index)}>
                                {
                                    (item.iconPath || item.selectedIconPath) && <img src={props.current === index ? item.selectedIconPath : item.iconPath} alt={item.label} />
                                }
                                {
                                    item.label && <span style={{color: index === props.current ? props.activeColor : props.inactiveColor}}>{ item.label }</span>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </RootWrap>
    )
})

tabbar.defaultProps = {
    list: [],
    current: 0,
    activeColor: '#000000',
    inactiveColor: '#999999',
}

tabbar.propTypes = {
    list: PropTypes.array,
    current: PropTypes.number,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string
}

export default tabbar;