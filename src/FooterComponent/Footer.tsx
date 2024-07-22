import style from 'styled-components';
import logo from '../../public/smalllogo.png';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const FullDiv = style.div`
    margin-top : 10vh;
    background-color : #107FC3;
    padding-left: 10vw;
    padding-top: 10vh;
    padding-right: 10vw;
    padding-bottom : 10vh;
    display : flex;
    justify-content : space-between;
`

const SmallImg = style.img`
    width : 40%;
`

const Slogan = style.div`
    margin : 2%;
    margin-left: 0;
`

const RowDiv = style.div`
    display : flex;
    flex-direction : column;
    color : white;
`

const FooterRow = style.div`
    display : flex;
    align-items : center;
    margin-top : 10px;
`

const KeyValue = style.p`
    margin-left : 10px;
`

const FootHead = style.h1`
    font-size : 20px;
    font-weight : bolder;
`

const Mt = style.p`
    margin-top : 10px;
`

const Footer = () => {
    const problems = ["Teeth Polishing","RCT", "Crowning / Bridge", "Teeth Extraction", "Braces Binding", "Teeth Implant"]
  return (
    <FullDiv className="flexDiv">
        <RowDiv className="rowDiv">
            <SmallImg src={logo} />
            <Slogan>Your smile is our top priority and our greatest passion</Slogan>
            <FooterRow>
                <MdEmail />
                <KeyValue>agnidental@gmail.com</KeyValue>
            </FooterRow>
            <FooterRow>
                <FaPhone />
                <KeyValue>9703548444</KeyValue>
            </FooterRow>
        </RowDiv>
        <RowDiv className="rowDiv">
            <FootHead>Services</FootHead>
            {
                problems.map(item => <Mt key={item}>{item}</Mt>)
            }
        </RowDiv>
        <RowDiv className="rowDiv">
            <FootHead>About</FootHead>
            <Mt>Google Map Direction</Mt>
            <Mt>Reviews</Mt>
            <Mt>Dental Services</Mt>
            <Mt>Specialist</Mt>
            <Mt>Event</Mt>
            <Mt>Employee Login</Mt>
        </RowDiv>
        <RowDiv className="rowDiv">
            <FootHead>Social Networks</FootHead>
            <FooterRow>
                <FaInstagram />
                <KeyValue>Instagram</KeyValue>
            </FooterRow>
            <FooterRow>
                <FaFacebook />
                <KeyValue>Facebook</KeyValue>
            </FooterRow>
        </RowDiv>
    </FullDiv>
  )
}

export default Footer
