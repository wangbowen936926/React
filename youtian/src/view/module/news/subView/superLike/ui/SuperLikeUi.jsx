import { useState, useEffect } from 'react'
import styled from 'styled-components'
import NavBar from 'components/navbar'
import CardList from './CardList'

const RootWarp = styled.div`
    height: 100vh;
    background-color: #f4f6fa; 
`


const SuperLikeUi = (props) => {

    const [cardList, setCardList] = useState([]);

    useEffect(() => {
        setCardList([
            {
                id: 1,
                nickName: '告白草莓',
                avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
                album: [
                    'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
                    'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
                    'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
                ]
            },{
                id: 2,
                nickName: '安安',
                avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
                album: [
                    'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
                    'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
                    'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
                ]
            }
        ])
    }, [])

    return (
        <RootWarp>
            <NavBar title="超级喜欢"></NavBar>
            <CardList list={cardList}></CardList>
        </RootWarp>
    )
}

export default SuperLikeUi;