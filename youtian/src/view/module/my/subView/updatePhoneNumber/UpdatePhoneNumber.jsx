import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from 'components/navbar'

const RootWarp = styled.div`


`

class UpdatePhoneNumber extends Component {

    constructor (props) {
        super(props);
        this.state = {
            
        }
    }


    render () {
        return (
            <RootWarp>
                <NavBar title="修改手机号"></NavBar>
            </RootWarp>
        )
    }

}

export default UpdatePhoneNumber;