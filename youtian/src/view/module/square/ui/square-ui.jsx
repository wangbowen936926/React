import React from 'react'
import styled from 'styled-components'
import Header from './header'
import Empty from 'components/empty'

const RootWarp = styled.div`

`

const SquareUi = (props) => {

    const changeSwitch = (index) => {
        console.log(index, 'index')
    }

    const release = () => {
        console.log('发布')
    }

    return (
        <RootWarp>
            <Header onChange={changeSwitch} onRelease={ release }></Header>
            <section>
                <Empty title="暂无动态" subtitle="快去发布动态，让更多人认识你吧" height="100vh" isShowButton={true} buttonText="去发布" onClick={ release }></Empty>
            </section>
        </RootWarp>
    )
}

export default SquareUi