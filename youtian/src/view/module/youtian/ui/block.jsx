import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const RootWarp = styled.div`
    padding: .6rem 1rem;
    display: flex;
    justify-content: space-between;
    div{
        padding: .9rem .5rem;
        width: 27.3%;
        border-radius: .3rem;
        h5,h6{
            margin: 0;
            text-align: left;
        }
        h5:first-child{
            color: #ffffff;
            font-size: .85rem;
        }
        h6:last-child{
            color: #e9e9e9;
            font-size: .3rem;
            padding-top: .2rem;
        }
    }
    div:nth-child(1){
        background-image: linear-gradient(to right, #8277e6, #ad7cea);
    }
    div:nth-child(2){
        background-image: linear-gradient(to right, #f25377, #fc836d);
    }
    div:nth-child(3){
        background-image: linear-gradient(to right, #0a58ff, #38bfff);
    }
`


const Block = (props) => {

    const history = useHistory();

    const clickBlock = (index) => {
        switch(index){
            case 1:
                break;
            case 2:
                break;
            case 3:
                console.log(history, '111')
                history.push('/youtian/active');
                break;
            default:
                break;
        }
    }

    return (
        <RootWarp>
            <div onClick={() => clickBlock(1) }>
                <h5>瞬间扩列</h5>
                <h6>心动跨越山海</h6>
            </div>
            <div onClick={() => clickBlock(2) }>
                <h5>语音连麦</h5>
                <h6>TA就在这里</h6>
            </div>
            <div onClick={() => clickBlock(3) }>
                <h5>活动剧组</h5>
                <h6>心动跨越山海</h6>
            </div>
        </RootWarp>
    )
}

export default Block;