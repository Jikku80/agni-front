import  style from 'styled-components';
import bond from '../../public/serv-bond.png';
import braces from '../../public/serv-brace.png';
import scaling from '../../public/serv-scaling.png';
import rct from '../../public/serv-rct.png';
import polish from '../../public/serv-polishing.png';
import filing from '../../public/serv-filing.png';
import teeth from '../../public/serv-teeth.png';
import check from '../../public/serv-check.png';
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

import gap from '../../public/gap.png';
import fill from '../../public/disect.png';
import specs from '../../public/specs.png';

const FlexDiv = style.div`
    margin-top: 10vh;
    margin-left: 10vw;
    margin-right: 10vw;
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
    
    &:hover{
        cursor : pointer;
    }
`

const Blue = style.span`
    color :#3182ce;
`

const SevDiv = style.div`
    display : flex;
    flex-wrap : wrap;
    justify-content : space-between;
`

const CardDiv =style.div`
    display : flex;
    width : 23%;
    align-items : center;
    justify-content: space-between;
    margin-top: 2%;
    margin-bottom: 2%;
    padding : 4%;
    cursor : pointer;
    background-color : #107FC31C;;
    border-radius : .5rem;

    &:hover{
        box-shadow: 1px 1px 5px 5px #107FC363;
    }
`

const CardImage = style.img`
    width : 80%;
`
const GapImage = style.img`
    position : absolute;
    top : 385vh;
    right : 3%;
`

const SpecsImage = style.img`
    position : absolute;
    top : 345vh;
    right : 35%;
`

const FillImage = style.img`
    position : absolute;
    top : 400vh;
    right : 25vw;
`

const HeadFlex = style.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
    width : 100%;
`

const RightMargin = style.p`
    margin-right : 1vw;
    &:hover{
        cursor : pointer;
    }
`

const OurService = () => {
    const navigate = useNavigate();
    const data = [
        {
            id : 1,
            name : "Dental Binding",
            image : bond
        },
        {
            id : 2,
            name : "Braces binding",
            image : braces
        },
        {
            id : 3,
            name : "Scaling",
            image : scaling
        },
        {
            id : 4,
            name : "RCT",
            image : rct
        },
        {
            id : 5,
            name : "Polishing",
            image : polish
        },
        {
            id : 6,
            name : "Filling",
            image : filing
        },
        {
            id : 7,
            name  : "Teeth Implant",
            image : teeth
        },
        {
            id : 8,
            name : "Check Ups",
            image : check
        }
    ]
  return (
    <FlexDiv>
        <GapImage className="serv-gap" src={gap}/>
        <FillImage className="serv-fill" src={fill}/>
        <SpecsImage className="serv-spec" src={specs} />
        <HeadFlex className='flexDiv'>
            <Head className="alignLeft">Our <Blue className='Mr'>Services</Blue></Head>
            <HeadP onClick={() => navigate('/services')}>
                <RightMargin>View All Services</RightMargin>
                <FaArrowRight/>
            </HeadP>
        </HeadFlex>
        <p>We provide a wise range of high quality dental services.</p>
        <SevDiv className="flexDiv">
            {
                data.map(data => <CardDiv className="serv-carddiv" key={data.name + data.image}>
                    <CardImage className="serv-img" key={data.image} src={data.image} />
                </CardDiv>)
            }
        </SevDiv>
        
    </FlexDiv>
  )
}

export default OurService
