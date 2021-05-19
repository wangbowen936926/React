import { useEffect } from 'react'
import styled from 'styled-components'
import NavBar from 'components/navbar'

const RootWarp = styled.div`

`

const ClassDetails = (props) => {

    const id = props.match.params.id;

    useEffect(() => {
        console.log(id, '详情id');
    }, [id])

    return (
        <RootWarp>
            <NavBar title="课堂详情"></NavBar>
        </RootWarp>
    )
}

export default ClassDetails;