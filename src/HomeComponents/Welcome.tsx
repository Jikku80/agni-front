import style from 'styled-components';
import firstImg from '../../public/wel1.png';
import secImg from '../../public/wel2.png';
import thirdImg from '../../public/wel3.png';
import img from '../../public/img1.png';
import brace from '../../public/brace.png';
import gap from '../../public/gap.png';
import fill from '../../public/filling.png';


const EmptyDiv = style.div`
  height: 70vh;
  width: 90vw;
`

const  Head = style.h1`
    font-size : 28px;
    margin-bottom : 16px;
    font-weight : 600;
`

const FlexDiv = style.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: 10vw;
    margin-right: 10vw;
`

const ToothImage = style.img`
    position : absolute;
    top : 110vh;
    left :2vw;
`

const BraceImage = style.img`
    position : absolute;
    top : 140vh;
    right :.5vw;
`

const FillImage = style.img`
    position : absolute;
    top : 150vh;
    left :45vw;
`

const GapImage = style.img`
    position : absolute;
    top : 155vh;
    left :20vw;
`

const Para = style.div`
    width: 50%;
    text-align : justify;
`

const CardDiv = style.div`
    display : flex;
    justify-content : space-around;
    width : 40%;
    z-index : 1;
`

const Card = style.div`
    width : fit-content;
    height : fit-content;
    display  : flex;
    flex-direction : column;
    margin-right : 0;
    justify-content : flex-end;
    text-align : right;
`

const CardTitle = style.p`
    font-size : 30px;
    font-weight : bolder;
    color  : #3182ce;
`

const BottomImage = style.img`
    height : 40vh;
    width: 10vw;
    margin-left : auto;
`

const TopImage = style.img`
    height : 40vh;
    width: 10vw;
    margin-left : auto;
`

const Blue = style.span`
    color :#3182ce;
`

const Welcome = () => {
  return (
    <>
        <EmptyDiv></EmptyDiv>
        <ToothImage className="welcome-tooth" src={img}/>
        <BraceImage className="welcome-brace" src={brace}/>
        <FillImage className="welcome-fill" src={fill}/>
        <GapImage className="welcome-gap" src={gap}/>
        <FlexDiv className='welcomeDiv'>
            <Para className='para'>
                <Head>Welcome to <Blue> Agni Dental</Blue></Head>
                <p>Our clinic offers a comprehensive range of dental treatments performed by well-trained and certified doctors, ensuring top-quality care at affordable prices. Whether you need routine check-ups, cosmetic procedures, or advanced dental surgeries, our team is dedicated to providing personalized and professional services to meet all your oral health needs.</p>
            </Para>
            <CardDiv className='cardDiv'>
                <Card className="bottomCard welcomCard">
                    <CardTitle>10</CardTitle>
                    <p>member <br></br> team</p>
                    <BottomImage className="cardImage" src={firstImg} />
                </Card>
                <Card className="welcomCard">
                    <CardTitle>+100</CardTitle>
                    <p>Happy <br></br> Customer</p>
                    <TopImage className="cardImage" src={secImg} />
                </Card>
                <Card className="bottomCard welcomCard">
                    <CardTitle>2</CardTitle>
                    <p>years <br></br> experience</p>
                    <BottomImage className="cardImage" src={thirdImg} />
                </Card>
            </CardDiv>
        </FlexDiv>
    </>
  )
}

export default Welcome
