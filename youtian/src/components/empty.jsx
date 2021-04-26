import PropTypes from 'prop-types'
import styled from 'styled-components'
import circles from 'assets/circles.png'
import Button from 'components/button'


const RootWarp = styled.div`
    height: ${props => props.height};
    min-height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f4f6fa;
    img{
        width: 4rem;
        height: 4rem;
    }
    .text{
        h5{
            font-size: .95rem;
            margin: .8rem;
        }
        h6{
            color: #b2b4b6;
            margin: -.5rem 0 0 0;
        }
    }
`

const Empty = (props) => {

    return (
        <RootWarp height={props.height}>
            <div>
                {
                    props.icon
                }
                <div className="text">
                    <h5>{ props.title }</h5>
                    {
                        props.subtitle && <h6>{ props.subtitle }</h6>
                    }
                </div>
                {
                    props.isShowButton 
                    && 
                    <Button size="mini" style={{width: '5rem', backgroundImage: 'linear-gradient(to right, #f72b6a, #f96254)'}} onClick={() => props.onClick() }>
                        { props.buttonText }
                    </Button>
                }
            </div>
        </RootWarp>
    )
}

Empty.defaultProps = {
    height: '40vh',
    icon: <img src={circles} alt="图标"/>,
    iconSize: 5,
    title: '空空如也',
    subtitle: '',
    isShowButton: false,
    buttonText: '确认',
    onClick: () => false
}

Empty.propTypes = {
    height: PropTypes.string,
    // 图标
    icon: PropTypes.element,
    // 图标大小
    iconSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    // 主题
    title: PropTypes.string,
    // 副标题
    subtitle: PropTypes.string,
    // 是否显示按钮
    isShowButton: PropTypes.bool,
    // 按钮文本
    buttonText: PropTypes.string,
    //
    onClick: PropTypes.func
}

export default Empty;