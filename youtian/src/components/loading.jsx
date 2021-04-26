import PropTypes from 'prop-types'
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { ImSpinner6 } from "react-icons/im";

const RootWarp = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .loading{
        color: ${props => props.color};
        font-size: ${props => props.size + 'rem'};
        transition: 0.5s;
        transform: rotate(360deg);
        animation: rotate 2s linear infinite;  /*开始动画后无限循环，用来控制rotate*/
    }
    @keyframes rotate{
        0%{
            transform: rotate(0);
        }
        50%{
            transform:rotate(180deg);
        }
        100%{
            transform: rotate(360deg);
        }
	}

`

const Loading = (props) => {
    return (
        <RootWarp {...props}>
            <IconContext.Provider value={{ className: "loading" }}> 
                 <div><ImSpinner6/></div>
            </IconContext.Provider>
        </RootWarp>
    )
}

Loading.defaultProps = {
    color: '#f95a57',
    size: 2
}

Loading.propTypes = {
    color: PropTypes.string,
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
}

export default Loading;