import PropTypes from 'prop-types'
import styled from 'styled-components'

const RootWarp = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: ${props => props.show ? 6666 : -1};
    background: rgba(0, 0, 0, .8);
    transition: 1s;
    opacity: ${props => props.show ? 1 : 0};
    > div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        width: 77%;
        border-radius: .6rem;
        background-color: white;
        .content{
            > div{
                color: #7F7F7F;
                font-size: .6rem;
                padding: 0 11% 1rem;
            }
        }
        .action{
            height: 3rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-top: 1px solid #C3C3C3;
            h5{
                width: 50%;
                margin: 0;
            }
            .line{
                width: .01rem;
                height: 2rem;
                background-color: #C3C3C3;
            }
        }
    }
`

const Popup = (props) => {

    return (
        <RootWarp show={props.show}>
            <div>
                <div className="content">
                    <h4>{ props.title }</h4>
                    <div>{ props.titleContent }</div>
                </div>
                <div className="action">
                    <h5>
                        <span onClick={ () => props.onCancel() }>{ props.cancelText }</span>
                    </h5>
                    <span className="line"></span>
                    <h5>
                        <span onClick={ () => props.onConfirm() }>{ props.confirmText }</span>
                    </h5>
                </div>
            </div>
        </RootWarp>
    )
}

Popup.defaultProps = {
    show: false,
    title: '温馨提示',
    titleContent: '空空如也',
    confirmText: '确定',
    cancelText: '取消',
    isBackground: true,
    position: 'center',
    onCancel: () => false,
    onConfirm: () => false,
}

Popup.propTypes = {
    show: PropTypes.bool,
    title: PropTypes.string,
    titleContent: PropTypes.string,
    confirmText: PropTypes.string,
    cancelText: PropTypes.string,
    isBackground: PropTypes.bool,
    position: PropTypes.oneOf(['center', 'bottom']),
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func,
}

export default Popup;