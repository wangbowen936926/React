import styled from 'styled-components'
import NavBar from 'components/navbar'

const RootWarp = styled.div`

`

const MyFriends = (props) => {

    return (
        <RootWarp>
            <NavBar title="我喜欢的人"></NavBar>
        </RootWarp>
    )
}

export default MyFriends;