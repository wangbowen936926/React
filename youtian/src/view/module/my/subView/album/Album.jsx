import styled from 'styled-components'
import NavBar from 'components/navbar'

const RootWarp = styled.div`

`

const Album = (props) => {

    return (
        <RootWarp>
            <NavBar title="相册"></NavBar>
        </RootWarp>
    )
}

export default Album;