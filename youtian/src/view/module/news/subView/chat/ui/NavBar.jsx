import PropTypes from 'prop-types'
import styled from 'styled-components'

const RootWarp = styled.div`

`

const NavBar = (props) => {

    return (
        <RootWarp></RootWarp>
    )
}

NavBar.defaultProps = {
    user: {}
}

NavBar.propTypes = {
    user: PropTypes.object
}

export default NavBar;