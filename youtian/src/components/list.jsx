import PropTypes from "prop-types";
import styled from 'styled-components'
import Group from 'components/list-group';
import Item from 'components/list-item';
import { useHistory } from "react-router-dom";

const RootWarp = styled.div`
    height: fit-content;
    margin-top: .6rem;
`

const List = (props) => {

    const history = useHistory();

    const currClickItem = (path, index, sonIndex = null) => {

        if(sonIndex !== null)props.onClick(index + '-' + sonIndex);

        if(sonIndex === null)props.onClick(index);
        
        if(path) history.push(path);

    }

    return (
        <RootWarp>
            {
                props.list.map((item, index) => {
                    return (
                        item.children 
                        ?
                        <Group key={ index }>
                            {
                                item.children.map((sonItem, sonIndex) => {
                                    return (
                                        <Item key={sonItem.title} title={ sonItem.title } icon={ sonItem.icon } onClick={ () => currClickItem(sonItem.path, index, sonIndex) }></Item>
                                    )
                                })
                            }
                        </Group>
                        :
                        <Item title={ item.title } icon={ item.icon } onClick={ () => currClickItem(item.path, index) }></Item>
                    )
                })
            }
        </RootWarp>
    )
}

List.defaultProps = {
    list: [],
    onClick: () => false
}

List.propTypes = {
    list: PropTypes.array,
    onClick: PropTypes.func
}

export default List;