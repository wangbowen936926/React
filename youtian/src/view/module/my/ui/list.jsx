import styled from 'styled-components'
import Group from 'components/list-group';
import Item from 'components/list-item';
import friends from 'assets/my/friends.png'
import invitation from 'assets/my/invitation.png'
import invitationCode from 'assets/my/invitationCode.png'
import knapsack from 'assets/my/knapsack.png'
import album from 'assets/my/album.png'
import like from 'assets/my/like.png'
import auth from 'assets/my/auth.png'
import setting from 'assets/my/setting.png'

const RootWarp = styled.div`
    height: fit-content;
    margin-top: .6rem;
`

const List = (props) => {

    const currClickItem = (index) => {
        console.log(index)
    }

    return (
        <RootWarp>
            <Group>
                <Item title="我的好友" icon={<img src={friends} alt="icon"/>} onClick={ () => currClickItem(1) }></Item>
                <Item title="邀请好友" icon={<img src={invitation} alt="icon"/>} onClick={ () => currClickItem(2) }></Item>
                <Item title="我的邀请码" icon={<img src={invitationCode} alt="icon"/>} onClick={ () => currClickItem(3) }></Item>
            </Group>
            <Group>
                <Item title="背包" icon={<img src={knapsack} alt="icon"/>} onClick={ () => currClickItem(4) }></Item>
                <Item title="相册" icon={<img src={album} alt="icon"/>} onClick={ () => currClickItem(5) }></Item>
            </Group>
            <Group>
                <Item title="100人喜欢了你" icon={<img src={like} alt="icon"/>} onClick={ () => currClickItem(6) }></Item>
                <Item title="认证中心" icon={<img src={auth} alt="icon"/>} onClick={ () => currClickItem(7) }></Item>
            </Group>
            <Group>
                <Item title="设置" icon={<img src={setting} alt="icon"/>} onClick={ () => currClickItem(8) }></Item>
            </Group>
        </RootWarp>
    )
}

export default List;