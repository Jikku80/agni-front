import style from 'styled-components';
import bond from '../../public/serv-bond.png';
import braces from '../../public/serv-brace.png';
import scaling from '../../public/serv-scaling.png';
import rct from '../../public/serv-rct.png';
import polish from '../../public/serv-polishing.png';
import filing from '../../public/serv-filing.png';
import teeth from '../../public/serv-teeth.png';
import check from '../../public/serv-check.png';
import crown from '../../public/crown.png';
import extract from '../../public/extract.png';
import surgery from '../../public/surgery.png';
import others from '../../public/others.png';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const FlexDiv = style.div`
    margin-left : 5%;
    margin-right : 5%;
`

const Head = style.h1`
    font-size : 24px;
    margin-top : 2%;
    margin-bottom : 1%;
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
    justify-content: center;
    margin-top: 3%;
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

const AllServices = () => {
    const navigate = useNavigate();
    const data = [
        {
            id : 2,
            name : "Dental Denture",
            image : bond
        },
        {
            id : 10,
            name : "Braces binding",
            image : braces
        },
        {
            id : 3,
            name : "Scaling",
            image : scaling
        },
        {
            id : 6,
            name : "RCT",
            image : rct
        },
        {
            id : 4,
            name : "Polishing",
            image : polish
        },
        {
            id : 5,
            name : "Filling",
            image : filing
        },
        {
            id : 11,
            name  : "Teeth Implant",
            image : teeth
        },
        {
            id : 1,
            name : "Check Ups",
            image : check
        },
        {
            id : 7,
            name : "Crowning / Bridge",
            image : crown
        },
        {
            id : 8,
            name : "Teeth Extraction",
            image : extract
        },
        {
            id : 9,
            name : "Surgery Case",
            image : surgery
        },
        {
            id : 12,
            name : 'Others',
            image : others
        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
  return (
    <FlexDiv>
      <Head>All Services</Head>
      <p>We provide a wise range of high quality dental services.</p>
      <SevDiv className="servDiv">
            {
                data.map(data => <CardDiv className="serv-carddiv" key={data.name + data.image} onClick={() => navigate(`/services/${data.id}`)}>
                    <CardImage className="serv-img" key={data.image} src={data.image} />
                </CardDiv>)
            }
        </SevDiv>
    </FlexDiv>
  )
}

export default AllServices
