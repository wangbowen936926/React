import styled from 'styled-components'
import NavBar from 'components/navbar'

const RootWarp = styled.div`

`

const LikeMy = (props) => {

    return (
        <RootWarp>
            <NavBar title="喜欢我的人"></NavBar>
        </RootWarp>
    )
}

export default LikeMy;