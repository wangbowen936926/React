import styled from 'styled-components'
import PropTypes from 'prop-types'

const RootWarp = styled.div`

`

const RewardList = (props) => {

    return (
        <RootWarp></RootWarp>
    )
}

RewardList.defaultProps = {
    list: []
}

RewardList.propTypes = {
    list: PropTypes.array
}

export default RewardList;