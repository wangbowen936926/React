import styled from 'styled-components'
import NavBar from 'components/navbar'

const RootWarp = styled.div`

`

const AboutUs = (props) => {

    return (
        <RootWarp>
            <NavBar title="关于我们"></NavBar>
        </RootWarp>
    )
}

export default AboutUs;