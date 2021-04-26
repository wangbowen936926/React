import styled from 'styled-components'

const RootWrap = styled.div`
    height: 100vh;
    overflow-y: hidden;
    background-image: linear-gradient(#f95a57, #f72f69);
    header{
        h1{
            color: #ffffff;
            font-size: 3.6rem;
            font-family: cursive;
            letter-spacing: .3rem
        }
        h5{
            color: #ffffff;
            font-size: 1rem;
            font-family: cursive;
            letter-spacing: .2rem;
            margin-top: -1.5rem;
        }
    }
    section{
        position: absolute;
        bottom: 20%;
    }
    footer{
        position: fixed;
        bottom: 5%;
        width: 100%;
        text-align: center;
        font-size: .6rem;
        font-weight: bold;
        span:first-child{
            color: #fc819b
        }
        span:last-child{
            color: #fcbfd1
        }
    }
`

export {
    RootWrap
}