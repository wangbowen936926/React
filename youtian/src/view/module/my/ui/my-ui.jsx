import styled from 'styled-components'
import TopUserInfo from "./top-user-info";
import React from 'react'
import List from './list'

const RootWarp = styled.div`
    height: calc(100vh - 3.5rem);
    overflow-y: auto;
    ::-webkit-scrollbar{
        display: none;
    }
    background-color: #F4F6FA;
`

const myUi = (props) => {
    return (
        <RootWarp>
            <TopUserInfo></TopUserInfo>
            <List></List>
        </RootWarp>
    )
}

export default myUi