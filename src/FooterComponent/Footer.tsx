import style from 'styled-components';
import logo from '../../public/smalllogo.png';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

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
    cursor : pointer;
`

const AncValue = style.a`
    margin-left : 10px;
    cursor : pointer;
`

const FootHead = style.h1`
    font-size : 20px;
    font-weight : bolder;
`

const Mt = style.p`
    margin-top : 10px;
    cursor : pointer;
`

const Footer = () => {
    const navigate = useNavigate();
    const problems = [{
        "name" : "Teeth Polishing",
        "id": "4"
    },{
        "name" : "RCT",
        "id": "6"
    },{"name" : "Crowning / Bridge",
        "id": "7"
    },{"name" : "Teeth Extraction",
        "id": "8"
    },{"name": "Braces Binding",
        "id": "10"
    },{"name": "Teeth Implant",
        "id": "11"
    }]
  return (
    <FullDiv className="flexDiv">
        <RowDiv className="rowDiv">
            <SmallImg src={logo} />
            <Slogan>Your smile is our top priority and our greatest passion</Slogan>
            <FooterRow>
                <MdEmail />
                <AncValue href="mailto:agnidental@gmail.com">agnidental@gmail.com</AncValue>
            </FooterRow>
            <FooterRow>
                <FaPhone />
                <AncValue href="tel:9703548444">9703548444</AncValue>
            </FooterRow>
        </RowDiv>
        <RowDiv className="rowDiv">
            <FootHead>Services</FootHead>
            {
                problems.map(item => <Mt key={item.name} onClick={() => {
                    navigate(`/services/${item.id}`)
                    window.scrollTo(0, 0)
                }}>{item.name}</Mt>)
            }
        </RowDiv>
        <RowDiv className="rowDiv">
            <FootHead>About</FootHead>
            <Mt onClick={() => window.open("https://www.google.com/maps/place/AGNI+DENTAL+%26+IMPLANT+CENTER/@27.6757826,85.3146619,17.7z/data=!4m6!3m5!1s0x39eb19d8002c60bf:0xb0770f77660d59da!8m2!3d27.6760049!4d85.3155869!16s%2Fg%2F11vbdpkpdn?entry=ttu")}>Pulchwok Map Direction</Mt>
            <Mt onClick={() => window.open("https://www.google.com/maps/place/Agni+Dental+and+Implant+Center/@27.6921967,85.2971879,17.75z/data=!4m6!3m5!1s0x39eb190069508b4b:0x69dbf3bbc4f397f5!8m2!3d27.6918551!4d85.2985338!16s%2Fg%2F11vy3q5q9n?entry=ttu")}>Kuleshwor Map Direction</Mt>
            <Mt onClick={() => {
                navigate('/contact-us')
                window.scrollTo(0, 0)
                }}>Contact Us</Mt>
            <Mt onClick={() => {
                navigate('/services')
                window.scrollTo(0, 0)
                }}>Dental Services</Mt>
            <Mt onClick={() => {
                navigate('/specialist')
                window.scrollTo(0, 0)
                }}>Specialist</Mt>
            <Mt onClick={() => {
                navigate('/login')
                window.scrollTo(0, 0)
                }}>Employee Login</Mt>
        </RowDiv>
        <RowDiv className="rowDiv">
            <FootHead>Social Networks</FootHead>
            <FooterRow onClick={() => window.open("https://www.instagram.com/agni_dental/")}>
                <FaInstagram />
                <KeyValue>Instagram</KeyValue>
            </FooterRow>
            <FooterRow onClick={() =>  window.open("https://www.facebook.com/profile.php?id=61553815482983")}>
                <FaFacebook />
                <KeyValue>Facebook</KeyValue>
            </FooterRow>
        </RowDiv>
    </FullDiv>
  )
}

export default Footer
