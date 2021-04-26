import PropTypes from 'prop-types'
import styled from 'styled-components'
import address from 'assets/find/address.png'
import more from 'assets/find/more.png'

const RootWarp = styled.div`
    padding: .5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-address{
        font-size: .6rem;
        font-weight: bold;
        padding: .2rem .4rem;
        display: flex;
        align-items: center;
        border-radius: 1rem;
        background-color: #e5e5e5;
        img{
            width: .65rem;
            height: .8rem;
            margin-right: .2rem;
        }
    }
    .right-avatar-map{
        position: relative;
        font-size: .6rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        div{
            display: flex;
            .avatar-warp{
                div{
                    img{
                        width: 1.5rem;
                        height: 1.5rem;
                        filter: blur(.1rem);
                        border-radius: 50%;
                    }
                }
                div::after{
                    position: absolute;
                    content: '';
                    width: 1.5rem;
                    height: 1.5rem;
                    border-radius: 50%;
                    background: rgba(0, 0, 0, .3);
                }
            }
            .avatar-warp{
                width: 1.7rem;
                height: 1.7rem;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background-color: #CCCCCC;
            }
            .avatar-warp:not(:last-child){
                margin-right: -.5rem;
            }
        }
    }
    .right-avatar-map::before{
        position: absolute;
        right: -.3rem;
        bottom: .75rem;
        z-index: 99;
        content: '';
        width: 1.1rem;
        height: .8rem;
        background: url(${props => props.more});
        background-size: 100% 100%;
    }
`

const Header = (props) => {

    return (
        <RootWarp {...props} more={more}>
            <div className="left-address">
                <img src={ address } alt="坐标" />
                { props.item.city }
            </div>
            <div className="right-avatar-map">
                谁喜欢我：
                <div>
                    {
                        props.item.like && props.item.like.map((url, index) => {
                            return (
                                <div className="avatar-warp" key={index}>
                                    <div><img src={url} alt="头像"></img></div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </RootWarp>
    )
}

Header.defaultProps = {
    item: {}
}

Header.propTypes = {
    item: PropTypes.object
}

export default Header;