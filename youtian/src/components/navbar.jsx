import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { IoChevronBack } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'

const RootWrap = styled.div`
    position: fixed;
    top: 0;
    z-index: 99;
    width: -webkit-fill-available;
    height: 3rem;
    font-size: .9rem;
    padding: 0 .9rem 0 .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: ${props => props.isBottomBorder ? '1px solid #F4F6FA' : 0};
    background: ${props => props.bgColor};
    .arrowIcon-warp{
        display: flex;
        z-index: 99;
    }
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

const Navbar = (props) => {

    let history = useHistory();

    const goBack = () => history.goBack();

    return (
        <RootWrap bgColor={props.bgColor} isArrow={props.isArrow} isTitleWeight={props.isTitleWeight} isBottomBorder={props.isBottomBorder}>
            {
                props.isArrow && <IconContext.Provider value={{size: 22, color: props.arrowColor}}>
                    <div className="arrowIcon-warp" onClick={ goBack }>{ props.left }</div>
                </IconContext.Provider>
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
    left: <IoChevronBack/>,
    title: '',
    right: '',
    isArrow: true,
    arrowColor: '#222222',
    isTitleWeight: true,
    bgColor: '#ffffff',
    isBottomBorder: false,
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
    isBottomBorder: PropTypes.bool,
    onClick: PropTypes.func
}

export default Navbar;