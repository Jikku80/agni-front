import style from 'styled-components';
import braces from '../../public/braces.png';
import white from '../../public/whitening.png';
import rootcanal from '../../public/rootcanal.png';
import implant from '../../public/implants.png';
import gap from '../../public/gap.png';
import fill from '../../public/filling.png';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const EmptyDiv = style.div`
  height: 10vh;
  width: 90vw;
`

const HeadFlex = style.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 100%;
`

const  Head = style.h1`
    font-size : 28px;
    margin-bottom : 16px;
    font-weight : 600;
    display : flex;
`

const HeadP = style.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    color : #3182ce;
    cursor : pointer;
    width : fit-content;
    z-index : 2;
`

const RightMargin = style.p`
    margin-right : 1vw;
    &:hover{
        cursor : pointer;
    }
`

const FlexDiv = style.div`
    margin-left: 10vw;
    margin-right: 10vw;
`

const CardDiv = style.div`
    margin-top : 16px;
    display : flex;
    flex-direction : row;
    justify-content : space-between;
`

const Card = style.div`
    height : 18vw;
    position : relative;

    &:hover{
        cursor: pointer;
    }
`

const CardImage = style.img`
    height : 100%;
`

const Caption = style.p`
    position : absolute;
    padding : 4%;
    bottom : 0vh;
    width : 100%;
    background-color : #0000008c;
    text-align : center;
    color : white;
    border-bottom-left-radius : .5rem;
    border-bottom-right-radius : .5rem;

`
const GapImage = style.img`
    position : absolute;
    top : 190vh;
    right : 1%;
`

const FillImage = style.img`
    position : absolute;
    top : 223vh;
    left : 15vw;
`

const Blue = style.span`
    color :#3182ce;
    margin-right : 8px;
`

const Premier = () => {
    const navigate = useNavigate();
  return (
    <>
        <EmptyDiv></EmptyDiv>    
        <GapImage className="pre-gap" src={gap}/>
        <FillImage className="pre-fill" src={fill}/>
        <FlexDiv>
            <HeadFlex className='flexDiv'>
                <Head className="alignLeft"><Blue>Premier</Blue>Dental Services</Head>
                <HeadP onClick={() => navigate('/services')}>
                    <RightMargin>View All Services</RightMargin>
                    <FaArrowRight/>
                </HeadP>
            </HeadFlex>
            <p>Get the best care with our top dental services, designed for all your oral health needs.</p>
            <CardDiv className='preDiv'>
                <Card className='pre-card' onClick={() => navigate('/services/10')}>
                    <CardImage className="pre-image" src={braces} />
                    <Caption className="cap">Braces</Caption>
                </Card>
                <Card className='pre-card' onClick={() => navigate('/services/11')}>
                    <CardImage className="pre-image" src={implant} />
                    <Caption className="cap">Dental Implants</Caption>
                </Card>
                <Card className='pre-card' onClick={() => navigate('/services/6')}>
                    <CardImage className="pre-image" src={rootcanal} />
                    <Caption className="cap">Root Canal</Caption>
                </Card>
                <Card className='pre-card' onClick={() => navigate('/services/4')}>
                    <CardImage className="pre-image" src={white} />
                    <Caption className="cap">Teeth Whitening</Caption>
                </Card>
            </CardDiv>
        </FlexDiv>
    </>
  )
}

export default Premier
