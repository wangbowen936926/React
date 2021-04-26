import React, {useState, useEffect} from 'react'
import Header from './header'
import Card from './card'

const FindUi = (props) => {

    const [userInfo, setUserInfo] = useState({});

    useEffect(() => {
        setUserInfo({
            nickName: '憨憨的呆呆',
            sex: 0,
            age: 20,
            distance: 1000.00,
            constellation: '金牛座',
            city: '合肥市',
            area: '蜀山区',
            residualMatching: 99,
            like: [
                'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
            ],
            album: [
                'https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg',
                'https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg',
            ]
        })
    }, [])

    const onTouchStartCard = (e) => {
        console.log(e, '触摸开始')
    }

    const onTouchEndCard = (e) => {
        console.log(e, '触摸结束')
    }

    return (
        <div>
            <Header item={userInfo}></Header>
            <Card item={userInfo} onTouchStart={ onTouchStartCard } onTouchEnd={ onTouchEndCard }></Card>
        </div>
    )
}

export default FindUi