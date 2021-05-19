import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { IoChevronBack, IoEllipsisHorizontal } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'

const RootWarp = styled.div`
    position: fixed;
    top: 0;
    z-index: 99;
    width: calc(100% - 1.5rem);
    padding: 1rem .9rem 1rem .6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #B6B6B6;
    background: white;
    .left{
        display: flex;
        align-items: center;
        .user{
            display: flex;
            align-items: center;
            img{
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                margin-left: .4rem;
            }
            .user-info{
                margin-left: .5rem;
                > div:first-child{
                    display: flex;
                    align-items: center;
                    h5{
                        width: fit-content;
                        margin: 0;
                        text-align: left;
                    }
                    span{
                        display: flex;
                        color: #12C270;
                        font-size: .5rem;
                        transform: scale(.7);
                        font-weight: bold;
                        padding: .2rem .5rem;
                        border-radius: 1rem;
                        background: #EAFBF4;
                    }
                }
                > span{
                    label{
                        color: #B6B6B6;
                        font-size: .2rem;
                        transform: scale(.5);
                    }
                }
            }
        }
    }

`

const NavBar = (props) => {

    let history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    const more = () => {
        console.log('更多')
    }

    return (
        <RootWarp>
            <div className="left">
                <IconContext.Provider value={{size: 22}}>
                    <IoChevronBack onClick={ goBack }/>
                </IconContext.Provider>
                <div className="user">
                    <img src={props.user.avatar} alt="avatar"/>
                    <div className="user-info">
                        <div>
                            <h5>{ props.user.nickName }</h5>
                            <span>在线</span>
                        </div>
                        <span>
                            <label>{ props.user.distance }km，</label>
                            <label>{ props.user.age }岁. </label>
                            <label>{ props.user.constellation }</label>
                        </span>
                    </div>
                </div>
            </div>
            <div className="right">
                <IconContext.Provider value={{size: 22}}>
                    <IoEllipsisHorizontal onClick={ more }/>
                </IconContext.Provider>
            </div>
        </RootWarp>
    )
}

NavBar.defaultProps = {
    user: {}
}

NavBar.propTypes = {
    user: PropTypes.object
}

export default NavBar;