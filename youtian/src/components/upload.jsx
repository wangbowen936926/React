import styled from 'styled-components'
import PorpTypes from 'prop-types'

const RootWarp = styled.div`
    position: relative;
    width: 1.4rem;
    height: 1.1rem;
    > img{
        width: 1.4rem;
        height: 1.1rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
    }
    input{
        width: 1.4rem;
        height: 1.1rem;
        display: none;
        z-index: 1000;
    }
`

const Upload = (props) => {

    return (
        <RootWarp>
            { props.icon }
            <input  type="file" accept={ props.accept + '/*' } onClick={() => props.onClick() }></input>
        </RootWarp>
    )
}

Upload.defaultProps = {
    accept: 'image',
    icon: <></>
}

Upload.propTypes = {
    accept: PorpTypes.string,
    icon: PorpTypes.element
}

export default Upload;