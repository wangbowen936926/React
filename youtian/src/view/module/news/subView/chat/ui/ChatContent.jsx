import { useState, useEffect } from 'react'
import styled from 'styled-components'

const RootWarp = styled.div`
    height: calc(100vh - 12.5rem);
    padding: 5.5rem .9rem 0;
    overflow-y: auto;
    ::-webkit-scrollbar{
        display: none;
    }
    div{
        margin: 1rem 0;
    }
    .my-info{
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        span{
            display: flex;
            max-width: 60vw;
            color: #2C5501;
            font-size: .6rem;
            transform-origin: top right;
            transform: scale(.9);
            /* -webkit-text-stroke: medium; */
            font-weight: bold;
            padding: .6rem .8rem;
            border-radius: 2rem 0 2rem 2rem;
            background-color: #BFFE7C;
        }
        img{
            width: 2.2rem;
            height: 2.2rem;
            border-radius: 50%;
            margin-left: .5rem;
        }
    }
`

const ChatContent = (props) => {

    const [mySendMessage, setMySendMessage] = useState([]);

    useEffect(() => {

        if(props.message !== ''){
            setMySendMessage(data => [...data, props.message]);
        }

    }, [props.message])

    return (
        <RootWarp>
            { 
                mySendMessage.length !== 0 && mySendMessage.map((item, index) => {
                    return (
                        <div className="my-info" key={index}>
                            <span>{ item }</span>
                            <img src={props.user.avatar} alt="头像"/>
                        </div>
                    )
                })
            
            }
        </RootWarp>
    )
}

export default ChatContent;