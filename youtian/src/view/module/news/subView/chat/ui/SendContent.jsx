import { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { IconContext } from 'react-icons'
import { IoHappyOutline } from 'react-icons/io5'
import Upload from 'components/upload'
import album from 'assets/news/album.png'
import language from 'assets/news/language.png'
import camera from 'assets/news/camera.png'
import Telephone from 'assets/news/Telephone.png'
import coordinate from 'assets/news/coordinate.png'
import gift from 'assets/news/gift.png'

const RootWarp = styled.div`
    position: fixed;
    bottom: 0;
    z-index: 99;
    width: 100vw;
    background: white;
    .input-warp{
        width: 82%;
        margin: 0 auto 1rem;
        padding: .6rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 2rem;
        background: #F7F7F7;
        input{
            flex: 1;
            font-size: .6rem;
            outline: none;
            border: none;
            background: none;
            ::-webkit-input-placeholder{
                color: #949494;
            }
        }
        > div{
            display: flex;
            align-items: center;
            > span{
                color: #12C270;
                font-size: .8rem;
                font-weight: bold;
                margin-left: .5rem;
            }
        }
    }
    .icon-event-warp{
        width: 82%;
        margin: 0 auto;
        padding: 0 0 1.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > img:nth-child(1){
            width: 1.4rem;
            height: 1.1rem;
        }
        > img:nth-child(2){
            width: .95rem;
            height: 1.2rem;
        }
        > img:nth-child(3){
            width: 1.4rem;
            height: 1.2rem;
        }
        > img:nth-child(4){
            width: 1.2rem;
            height: 1.2rem;
        }
        > img:nth-child(5){
            width: .95rem;
            height: 1.2rem;
        }
        > img:nth-child(6){
            width: 1.2rem;
            height: 1.2rem;
        }
    }

`

const SendContent = (props) => {

    const [inputVal, setInputVal] = useState('');

    const getInputValue = (e) => {
        setInputVal(e.target.value);
    }

    const send = () => {
        props.onSend(inputVal);
        setInputVal('');
    }

    const seeIcon = () => {
        console.log('查克拉');
    }

    const currIconEvent = (index) => {
        console.log('当前事件：' + index);
    }

    return (
        <RootWarp>
            <div className="input-warp">
                <input type="text" placeholder="撩点什么呢...." value={inputVal} onChange={ getInputValue }></input>
                <div>
                    <IconContext.Provider value={{ size: 20 }} >
                        <IoHappyOutline onClick={ seeIcon }></IoHappyOutline>
                    </IconContext.Provider>
                    {
                        inputVal !== '' && <span onClick={ send }>发送</span>
                    }
                </div>
            </div>
            <div className="icon-event-warp">
                <img src={album} alt="相册" onClick={ () => currIconEvent(1) } />
                <img src={language} alt="语音" onClick={ () => currIconEvent(2) } />
                <img src={camera} alt="相机" onClick={ () => currIconEvent(3) } />
                <img src={Telephone} alt="电话" onClick={ () => currIconEvent(4) } />
                <img src={coordinate} alt="坐标" onClick={ () => currIconEvent(5) } />
                <img src={gift} alt="礼物" onClick={ () => currIconEvent(6) } />
            </div>
        </RootWarp>
    )
}

SendContent.defaultProps = {
    onSend: () => false
}

SendContent.propTypes = {
    onSend: PropTypes.func
}

export default SendContent;