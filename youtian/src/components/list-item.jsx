import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconContext } from "react-icons";
import { IoChevronForwardOutline } from "react-icons/io5";

const RootWarp = styled.div`
    height: 3rem;
    line-height: 3rem;
    padding: 0 .6rem 0 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    img{
        width: 1.1rem;
        height: 1.1rem;
        margin-right: .8rem;
    }
    .left{
        font-size: .8rem;
        font-weight: bold;
        padding: 0;
        display: flex;
        align-items: center;
    }
`

const ListItem = (props) => {

    return (
        <RootWarp className="item" onClick={() => props.onClick()}>
            <div className="left">
                {
                    props.icon
                }
                <span>
                    { props.title }
                </span>
            </div>
            {
                props.isArrow && <IconContext.Provider value={{ size: 16}}><IoChevronForwardOutline /></IconContext.Provider> 
            }
        </RootWarp>
    )
}

ListItem.defaultProps = {
    title: '',
    icon: <></>,
    isArrow: true,
    onClick: () => false
}

ListItem.propTypes = {
    title: PropTypes.string,
    icon: PropTypes.element,
    isArrow: PropTypes.bool,
    onClick: PropTypes.func
}

export default ListItem;