import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ButtonWrap = styled.div`
    position: ${props => props.isSuspension ? 'fixed' : 'static'};
    bottom: ${props => props.isSuspension ? '3rem' : 'unset'};
    left: ${props => props.isSuspension ? '50%' : 'unset'};
    transform: ${props => props.isSuspension ? 'translate(-50%)' : 'unset'};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.color};
    font-weight: bold;
    font-size: ${props => props.size === 'default' ? '.9rem' : props.size === 'medium' ? '.8rem' : props.size === 'mini' ? '.6rem' : '.9rem'};
    width: ${props => props.size === 'default' ? '88vw' : props.size === 'medium' ? '65vw' : props.size === 'mini' ? '55vw' : '.88vw'};
    padding: ${props => props.size === 'default' ? '.9rem 0' : props.size === 'medium' ? '.8rem 0' : props.size === 'mini' ? '.4rem 0' : '.8rem 0'};
    /* padding: ${props => props.size === 'default' ? '.9rem 7.3rem' : props.size === 'medium' ? '.8rem 6rem' : props.size === 'mini' ? '.4rem 1.8rem' : '.8rem 2rem'}; */
    margin-top: ${props => props.marginTop + 'rem'};
    margin-bottom: ${props => props.marginBottom + 'rem'};
    border-radius: ${props => props.shape === 'circle' ? '3rem' : '0'};
    background-color: ${props => props.bgColor};
    box-shadow: ${props => props.isShadow ? '.1rem .1rem .5rem #999999' : 'unset'};
    ${props => props.style}
    img {
        width: ${props => props.size === 'default' ? '1.2rem' : props.size === 'medium' ? '1rem' : props.size === 'mini' ? '.8rem' : '1.2rem'};;
        height: ${props => props.size === 'default' ? '1.2rem' : props.size === 'medium' ? '1rem' : props.size === 'mini' ? '.8rem' : '1.2rem'};;
        margin-right: .3rem;
    }
`


const button = (props) => {

    return (
        <ButtonWrap {...props} onClick={() => props.onClick()}>
            { props.icon }
            { props.children }
        </ButtonWrap>
    )
}

button.defaultProps = {
    // 字体色
    color: '#ffffff',
    // 背景色
    bgColor: '#ffffff',
    // 模型(circle：圆形；default：矩形)
    shape: 'circle',     
    // 按钮大小(default; medium; mini)
    size: 'default',
    //
    icon: <></>,
    //
    marginTop: 0,
    //
    marginBottom: 0,

    style: {},

    isSuspension: false,

    isShadow: false,

    //
    onClick: () => false
}

button.propTypes = {
    // 字体色
    color: PropTypes.string,
    // 背景色
    bgColor: PropTypes.string,
    // 按钮大小
    size: PropTypes.string,
    // 按钮形状
    shape: PropTypes.oneOf(['default', 'circle']),
    // 按钮图标
    icon: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.element
    ]),
    
    marginTop: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    marginBottom: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),

    style: PropTypes.object,

    isSuspension: PropTypes.bool,

    isShadow: PropTypes.bool,

    onClick: PropTypes.func
}

export default button;