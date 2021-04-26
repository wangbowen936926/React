import styled from 'styled-components'

const RootWarp = styled.div`
    padding: .9rem;
    margin-top: .6rem;
    background-color: white;
    .top-title{
        font-size: .9rem;
        font-weight: bold;
        text-align: left;
        padding-bottom: 1rem;
        display: flex;
        align-items: center;
        span{
            width: .8rem;
            height: .8rem;
            color: white;
            font-size: .5rem;
            padding: .1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: .6rem;
            border-radius: 50%;
            background-color: #F84460;
        }
    }
    .person{
        overflow-x: auto;
        display: flex;
        div{
            position: relative;
            margin-right: 1rem;
            img{
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
            }
            span{
                width: 3rem;
                font-size: .5rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap; 
                margin-top: .8rem;
                display: flex;
                justify-content: center;
            }
        }
        .newMatch::before{
            position: absolute;
            right: .35rem;
            content: '';
            width: .5rem;
            height: .5rem;
            border-radius: 50%;
            background-color: #F84460;
        }
    }
    .person::-webkit-scrollbar{
        display: none;
    }
`


const Matching = (props) => {


    return (
        <RootWarp>
           <div className="top-title">
               新匹配<span>3</span>
           </div>
           <div className="person">
               <div className="newMatch">
                   <img src="https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                   <span>小可爱</span>
               </div>
               <div className="newMatch">
                   <img src="https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                   <span>安安</span>
               </div>
               <div className="newMatch">
                   <img src="https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                   <span>Judy</span>
               </div>
               <div>
                   <img src="https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                   <span>爱吃香菜</span>
               </div>
               <div>
                   <img src="https://gtd.alicdn.com/sns_logo/i1/TB1_f_PLXXXXXbVXpXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                   <span>一个人的城堡</span>
               </div>
               <div>
                   <img src="https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                   <span>干饭王</span>
               </div>
               <div>
                   <img src="https://gtd.alicdn.com/sns_logo/i1/TB124_3NXXXXXasXVXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                   <span>小可爱</span>
               </div>
               <div>
                   <img src="https://gtd.alicdn.com/sns_logo/i7/TB1IWtgQFXXXXcmXFXXSutbFXXX.jpg_240x240xz.jpg" alt="#"/>
                   <span>小可爱</span>
               </div>
           </div>
        </RootWarp>
    )
}

export default Matching