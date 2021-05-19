import styled from 'styled-components'
import NavBar from 'components/navbar'

const RootWarp = styled.div`

`

const Blacklist = (props) => {

    return (
        <RootWarp>
            <NavBar title="绑定微信"></NavBar>
        </RootWarp>
    )
}

export default Blacklist;