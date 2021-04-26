import Navbar from 'components/navbar'
import Button from 'components/button'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const RootWarp = styled.div`
    .content{
        padding: 0 2rem
    }

`
const Title = styled.h1`
    color: #4d4c4c;
    text-align: left;
    font-size: 1.3rem;
    letter-spacing: .1rem;
    margin: 2.2rem 0 1.8rem 0;
`


const template = (props) => {
    return (
        <RootWarp>
            <Navbar></Navbar>
            <div className="content">
                <Title {...props}>
                    { props.title }
                </Title>
                { props.children }
            </div>
            <Button size="medium" color="#fff" style={{backgroundImage: 'linear-gradient(to right, #f72f69, #f95a57)'}} onClick={() => props.onClick()}>
                { props.buttonText }
            </Button>
        </RootWarp>
    )
}

template.defaultProps = {
    title: '',
    buttonText: '确定',
    onClick: () => false
}

template.propTypes = {
    title: PropTypes.string,
    buttonText: PropTypes.string,
    onClick: PropTypes.func
}

export default template;