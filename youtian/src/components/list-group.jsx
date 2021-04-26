import PropTypes from 'prop-types'
import styled from 'styled-components'

const RootWarp = styled.div`
    margin-bottom: ${props => props.marginBottom + 'rem'};
    .group-title{
        font-size: .6rem;
        padding: ${props => props.title && '.8rem;'};
    }
    .item:not(:first-child){
        border-bottom: 1px solid #F4F6FA;
    }
`

const ListGroup = (props) => {

    return (
        <RootWarp {...props}>
            <div className="group-title">
                { props.title }
            </div>
            {
                props.children && props.children
            }
        </RootWarp>
    )
}

ListGroup.defaultProps = {
    title: '',
    marginBottom: .5,
    children: <></>
}

ListGroup.propTypes = {
    title: PropTypes.string,
    marginBottom: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    children: PropTypes.node
}

export default ListGroup;