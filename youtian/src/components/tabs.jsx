import { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RootWarp = styled.div`
    position: relative;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 .9rem;
    background-color: #ffffff;
    span{
        font-size: .8rem;
    }
    .active{
        color: ${props => props.activeColor !== '' ? props.activeColor : 'unset'};
        font-weight: ${props => props.activeColor === '' ? 600 : 'unset'};
    }
    .inactive{
        color: ${props => props.inactiveColor};
    }
    .tab{
        width: .6rem;
        height: .13rem;
        transition: .2s;
        border-radius: 45%;
        background-color: #000000;
        position: absolute;
        bottom: .4rem;
        left: ${props => props.tabOffsetLeft + 'px'}
    }


`

const Tabs = (props) => {

    const [tabOffsetLeft, setTabOffsetLeft] = useState();
    const tabsItem = useRef(null);

    useEffect(() => {
        if(tabsItem.current !== null){
            let offsetLeft = (((tabsItem.current.offsetWidth - 9.6) / 2) +  tabsItem.current.offsetLeft);
            setTabOffsetLeft(offsetLeft);
        }
    })

    return (
        <RootWarp tabOffsetLeft={tabOffsetLeft} activeColor={ props.activeColor } inactiveColor={ props.inactiveColor }>
            {
                props.list.map((item, index) => {
                    return (
                        <span key={index} className={ props.current === index ? 'active' : 'inactive' } ref={ props.current === index ? tabsItem : null } onClick={() => props.onChange(index) }>
                            { item.label } 
                        </span>
                    )
                })
            }
            <span className="tab"></span>
        </RootWarp>
    )
}

Tabs.defaultProps = {
    list: [],
    current: 0,
    activeColor: '',
    inactiveColor: '#666666',
    onChange: () => false
}

Tabs.propTypes = {
    list: PropTypes.array,
    current: PropTypes.number,
    onChange: PropTypes.func,
    activeColor: PropTypes.string,
    inactiveColor: PropTypes.string
}

export default Tabs;