import { useRef } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import rfresh from 'assets/find/rfresh.png'
import like from 'assets/find/like.png'

const RootWarp = styled.div`
    position: ${props => props.position};
    right: 1rem;
    bottom: ${props => props.position === 'fixed' ? '4rem' : '.8rem'};
    div{
        margin: 1rem 0;
        img{
            width: 3rem;
            height: 3rem;
        }
    }
`


const GroupSuspensionButton = (props) => {

    const button = useRef(null);

    const test = (e, index) => {
        // console.log(e, 'but')
        props.onClick(index);
        // e.nativeEvent.stopImmediatePropagation();
        // document.body.addEventListener('click', e => {
        //     // 通过e.target判断阻止冒泡
        //     if(e.target&&e.target.matches('a')){
        //         return;
        //     }
        //     console.log('body');
        //     props.onClick(index);
        // })  
    }
    
    return (
        <RootWarp position={props.position}>
            <div ref={button} onClickCapture={(e) => test(e, 1)}>
                { props.btnIconOne }
            </div>
            <div ref={button} onClickCapture={(e) => test(e, 2)}>
                { props.btnIconTwo }
            </div>
        </RootWarp>
    )
}

GroupSuspensionButton.defaultProps = {
    btnIconOne: <img src={rfresh} alt="one"/>,
    btnIconTwo: <img src={like} alt="two"/>,
    bgColor: '#ffffff',
    isShadow: false,
    position: 'absolute',
    onClick: () => false
}

GroupSuspensionButton.propTypes = {
    btnIconOne: PropTypes.element,
    btnIconTwo: PropTypes.element,
    bgColor: PropTypes.string,
    isShadow: PropTypes.bool,
    position: PropTypes.oneOf(['fixed', 'absolute']),
    onClick: PropTypes.func
}

export default GroupSuspensionButton;