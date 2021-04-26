import PropTypes from 'prop-types'
import styled from 'styled-components'
import arrowLeft from '../assets/arrow-left.png'
import { useHistory } from 'react-router-dom'

const RootWrap = styled.div`
    position: fixed;
    top: 0;
    width: -webkit-fill-available;
    height: 3rem;
    font-size: .9rem;
    padding: 0 .9rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${props => props.bgColor};
    .title{
        position: absolute;
        width: calc(100% - 1.8rem);
        font-weight: ${props => props.isTitleWeight ? 'bold' : 100};
    }
    .right-content{
        position: absolute;
        right: .9rem;
        z-index: 99;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img{
            width: 1.1rem;
            height: 1.15rem;
        }
    }
`
const BackIcon = styled.div`
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 1.2rem;
        height: 1.2rem;
    }

`

const Navbar = (props) => {

    let history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <RootWrap bgColor={props.bgColor} isArrow={props.isArrow} isTitleWeight={props.isTitleWeight}>
            {
                props.isArrow && <BackIcon onClick={ goBack }>{ props.left }</BackIcon>
            }
            <div className="title">
                {
                    props.title ? props.title : props.children
                }
            </div>
            <div className='right-content' onClick={ () => props.onClick() }>{ props.right }</div>
        </RootWrap>
    )
}

Navbar.defaultProps = {
    left: <img src={arrowLeft} alt="arrow-left"/>,
    title: '',
    right: '',
    isArrow: true,
    isTitleWeight: true,
    bgColor: '#ffffff',
    onClick: () => false
}

Navbar.propTypes = {
    left: PropTypes.element,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    right: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    isTitleWeight: PropTypes.bool,
    isArrow: PropTypes.bool,
    bgColor: PropTypes.string,
    onClick: PropTypes.func
}

export default Navbar;