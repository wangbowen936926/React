import styled from 'styled-components'
import NavBar from 'components/navbar'

const RootWarp = styled.div`

`

const Knapsack = (props) => {

    return (
        <RootWarp>
            <NavBar title="我的背包"></NavBar>
        </RootWarp>
    )
}

export default Knapsack;