import styled from 'styled-components'
import Navbar from 'components/navbar'
import Matching from './matching'
import News from './news'
import mailList from 'assets/news/mailList.png'
import { useHistory } from 'react-router-dom'

const RootWarp = styled.div`
    background-color: #F4F6FA;
    section{
        padding-top: 48px;
        height: calc(100vh - 103px);
        overflow-y: auto;
        ::-webkit-scrollbar{
            display: none;
        }
    }
`


const NewsUi = (props) => {

    const history = useHistory();

    const seeMore = () => {
        history.push('/news/mailList');
    }

    return (
        <RootWarp>
            <Navbar title="聊天" isArrow={false} right={ <img src={mailList} alt="#"/>} onClick={ seeMore }></Navbar>
            <section>
                <Matching></Matching>
                <News></News>
            </section>
        </RootWarp>
    )
}

export default NewsUi