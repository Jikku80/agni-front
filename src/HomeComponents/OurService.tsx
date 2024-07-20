import  style from 'styled-components';
import elipse1 from '../../public/Ellipse1.png';
import elipse2 from '../../public/Ellipse2.png';
import elipse3 from '../../public/Ellipse3.png';
import elipse4 from '../../public/Ellipse4.png';
import elipse5 from '../../public/Ellipse5.png';
import elipse6 from '../../public/Ellipse6.png';
import gap from '../../public/gap.png';
import fill from '../../public/filling.png';
import { FaArrowRight } from 'react-icons/fa';


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
    width : 30%;
    align-items : center;
    justify-content: center;
    margin-top: 2%;
    margin-bottom: 2%;
`

const CardImage = style.img`
    width : 5vw;
    height : 5vw;
    margin-right : 4%;
`

const Card = style.div`
    display : flex;
    flex-direction : column;
    width : 80%;
    text-align : justify;
    align-items : right !important;
`

const CardHead = style.h1`
    font-size : 20px;
    font-weight : bolder;
`

const CardP = style.div`
    display : flex;
    align-items : center;
    justify-content : flex-end;
    font-family : Montserrat;
    
    &:hover{
        cursor : pointer;
    }
`

const CardPIn = style.p`
    margin-right : 8px;
`

const GapImage = style.img`
    position : absolute;
    top : 315vh;
    right : 35%;
`

const FillImage = style.img`
    position : absolute;
    top : 315vh;
    left : 8vw;
`

const OurService = () => {
    const data = [
        {
            id : 1,
            name : "Braces binding",
            detail : "Braces binding, often referred to as orthodontic braces, is a dental treatment designed to correct misaligned teeth and jaws, resulting in improved oral health and aesthetics. This process involves the use of metal or ceramic brackets that are adhered to the teeth and connected by archwires.",
            image : elipse3
        },
        {
            id : 2,
            name : "Scaling",
            detail : "Teeth scaling is a dental procedure aimed at removing plaque, tartar, and stains from the surfaces of teeth and beneath the gumline. This process is essential for maintaining optimal oral health and preventing gum disease, such as gingivitis and periodontitis.",
            image : elipse5
        },
        {
            id : 3,
            name : "RCT",
            detail : "Teeth root canal treatment (RCT) is a dental procedure used to save and repair a tooth that is severely infected or decayed. The process involves removing the damaged or infected pulp from the inside of the tooth, cleaning and disinfecting the area, and then filling and sealing it to prevent further infection",
            image : elipse2
        },
        {
            id : 4,
            name : "Polishing",
            detail : "Teeth polishing is a dental procedure that aims to smooth and shine the surfaces of teeth, enhancing their appearance and contributing to overall oral health. Typically performed at the end of a professional cleaning session, teeth polishing involves the use of a specialized tool with a rotating rubber cup or brush and a mildly abrasive polishing paste. ",
            image : elipse1
        },
        {
            id : 5,
            name : "Filling",
            detail : "Teeth filling is a common dental procedure used to restore the function, integrity, and morphology of missing tooth structure resulting from cavities or external trauma. The process involves the removal of decayed tooth material, cleaning the affected area, and then filling the cavity with a durable material such as amalgam, composite resin, gold, or porcelain.",
            image : elipse4
        },
        {
            id : 6,
            name : "Teeth Implant",
            detail : "Teeth implants are a modern dental solution for replacing missing teeth, providing both functional and aesthetic benefits. The procedure involves surgically placing a titanium post into the jawbone, which acts as a stable and durable root for the replacement tooth. ",
            image : elipse6
        }
    ]
  return (
    <FlexDiv>
        <GapImage className="serv-gap" src={gap}/>
        <FillImage className="serv-fill" src={fill}/>
        <Head>Our <Blue className='Mr'>Services</Blue></Head>
        <p>We provide a wise range of high quality dental services.</p>
        <SevDiv className="flexDiv">
            {
                data.map(data => <CardDiv className="serv-carddiv" key={data.name + data.image}>
                    <CardImage className="serv-img" key={data.image} src={data.image} />
                    <Card>
                        <CardHead key={data.name}><Blue>{data.name}</Blue></CardHead>
                        <p className="smpx" key={(data.detail).substring(0,20)}>{(data.detail).substring(0, 125)}...</p>
                        <Blue>
                            <CardP className='smpx'>
                                <CardPIn key={data.image + data.name}>More Details </CardPIn>
                                <FaArrowRight/>
                            </CardP>
                        </Blue>
                    </Card>
                </CardDiv>)
            }
        </SevDiv>
        
    </FlexDiv>
  )
}

export default OurService
