import React, { useState, useEffect } from 'react'
import HeaderUser from './header-user'
import Block from './block'
import Card from './info-card'
import styled from 'styled-components'

const RootWarp = styled.div`
    overflow-y: auto;
    max-height: 100vh;
    ::-webkit-scrollbar{
        display: none;
    }
    .card-warp{
        padding-bottom: 4rem;
    }
`

const YoutianUi = (props) => {

    const [card, setCard] = useState([]);

    useEffect(() => {
        setCard([{
            id: 1,
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
            album: [
                'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
            ],
            nickName: '林茉',
            city: '乌鲁木齐',
            area: '天山区',
            distance: '1000.0',
            age: 22,
            sex: 0,
            constellation: '水平座',
            description: '事事有回应，件件有着落'
        },{
            id: 2,
            avatar: 'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
            album: [
                'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
            ],
            nickName: '林茉',
            city: '广州',
            area: '花都区',
            distance: '1000.0',
            age: 22,
            sex: 0,
            constellation: '水平座',
            description: '事事有回应，件件有着落'
        },{
            id: 3,
            avatar: 'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
            album: [
                'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
            ],
            nickName: '林茉',
            city: '合肥',
            area: '蜀山区',
            distance: '1000.0',
            age: 22,
            sex: 0,
            constellation: '水平座',
            description: '事事有回应，件件有着落'
        }])
    }, [])

    return (
        <RootWarp>
            <HeaderUser></HeaderUser>
            <Block></Block>
            <div className="card-warp">
                {
                    card.map(item => <Card key={item.id} item={item}></Card>)
                }
            </div>
        </RootWarp>
    )
}

export default YoutianUi