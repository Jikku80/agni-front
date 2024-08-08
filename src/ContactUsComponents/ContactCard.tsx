import style from 'styled-components';
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { LuClock4 } from "react-icons/lu";

const FlexDiv = style.div`
    padding: 8%;
    background-color : #107FC3;
    width : 40%;
    color : white;
    display : flex;
    flex-direction : column;
    justify-content : space-between;
`

const CardDiv= style.div`
`

const Row = style.div`
    display : flex;
    justify-content : space-between;
    font-size : 24px;
    align-items : center;
`

const Head = style.h1`
    font-weight : bolder;
`

const Text = style.p`
    margin-top : 2%;
    margin-bottom: 2%;
    font-size: 18px;
    color: whitesmoke;
`

const ContactCard = () => {
  return (
    <FlexDiv className='con-flex'>
        <CardDiv>
            <Row>
                <Head>Clinic</Head>
                <IoLocationOutline />
            </Row>
            <Text>Pulchwok, Nepal</Text>
            <Text>Kuleshwor, Nepal</Text>
        </CardDiv>

        <CardDiv>
            <Row>
                <Head>Email</Head>
                <MdOutlineMailOutline />
            </Row>
            <Text>agnidental@gmail.com</Text>
        </CardDiv>

        <CardDiv>
            <Row>
                <Head>Phone</Head>
                <LuPhone />
            </Row>
            <Text>9703548444</Text>
        </CardDiv>

        <CardDiv>
            <Row>
                <Head>Opening Hours</Head>
                <LuClock4 />
            </Row>
            <Text>Sun-Sat (9:00-9:00)</Text>
            <Text>Weekend Warriors Welcome!</Text>
        </CardDiv>
    </FlexDiv>
  )
}

export default ContactCard
