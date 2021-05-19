import styled from 'styled-components'
import { useState } from 'react'
import NavBar from 'components/navbar'
import Button from 'components/button'
import RewardList from './ui/RewardList'

const RootWarp = styled.div`
    section{
        position: absolute;
        top: 4rem;
        left: 50%;
        transform: translateX(-50%);
        width: calc(100vw - 1.8rem);
        height: calc(100vh - 4rem);
        overflow-y: auto;
        .code{
            > div{
                border-radius: .5rem;
                background-color: #F4F6FA;
            }
            > div:first-child{
                padding: 1.1rem 0 1.5rem;
                h1{
                    font-size: 2.2rem;
                    margin: 0;
                }
            }
            > div:last-child{
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-top: 1px solid #E7E9ED;
                .line{
                    display: flex;
                    width: 1px;
                    height: 2.3rem;
                    background-color: #E7E9ED;
                }
                > div{
                    width: 50%;
                    padding: 1.1rem 0;
                    h2{
                        margin: 0;
                    }
                    span{
                        color: #797A7C;
                        font-size: .6rem;
                    }
                }
            }
        }
        .bottom-btn-warp{
            position: absolute;
            bottom: 1rem;
            width: 100%;
        }
    }
    section::-webkit-scrollbar{
        display: none;
    }

`

const InvitationCode = (props) => {
 
    const [woman] = useState([
        {
            stagePerson: '00',
            reward: 750
        },{
            stagePerson: '95',
            reward: 600
        },{
            stagePerson: '90',
            reward: 300
        },{
            stagePerson: '85',
            reward: 150
        },{
            stagePerson: '80',
            reward: 30
        }
    ]);

    const [man] = useState([
        {
            stagePerson: '00',
            reward: 500
        },{
            stagePerson: '95',
            reward: 400
        },{
            stagePerson: '90',
            reward: 200
        },{
            stagePerson: '85',
            reward: 100
        },{
            stagePerson: '80',
            reward: 20
        }
    ]);

    const copyCode = () => {
        console.log('code');
    }

    return (
        <RootWarp>
            <NavBar title="我的邀请码"></NavBar>
            <section>
                <div className="code">
                    <div>
                        <h1>30407717</h1>
                        <Button size="mini" style={{width: '5rem', marginTop: '.8rem', backgroundImage: 'linear-gradient(to right, #f72b6a, #f96254)'}} onClick={ copyCode }>
                            复制
                        </Button>
                    </div>
                    <div>
                        <div>
                            <h2>1</h2>
                            <span>直邀好友</span>
                        </div>
                        <span className="line"></span>
                        <div>
                            <h2>0</h2>
                            <span>二级好友</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h4>邀请奖励规则</h4>
                    <div>1.有效好友定义：完成实名认证的用户才算</div>
                    <div>1.有效好友定义：完成实名认证的用户才算</div>
                </div>
                <div>
                    <RewardList list={woman} />
                </div>
                <div>
                    <RewardList list={man} />
                </div>
                <div>
                    <div>1.有效好友定义：完成实名认证的用户才算</div>
                    <div>1.有效好友定义：完成实名认证的用户才算</div>
                </div>
                <div className="bottom-btn-warp">
                    <Button style={{width: '100%', marginTop: '.8rem', borderRadius: '.5rem', backgroundImage: 'linear-gradient(to right, #f72b6a, #f96254)'}}>
                        邀请好友
                    </Button>
                </div>
            </section>
        </RootWarp>
    )
}

export default InvitationCode;