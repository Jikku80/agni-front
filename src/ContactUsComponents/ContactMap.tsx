import pulchwokMap from '../../public/map.png'; 
import kulMap from '../../public/kmap.png';
import style from 'styled-components';

const FlexDiv = style.div`
  display : flex;
  justify-content : space-between;
  margin-top : 4%;
`

const MapDiv = style.div`
  display : flex;
  flex-direction : column;
`

const MapImage = style.img`
  height : 60vh;
  width : 40vw;
  border-radius : .5rem;
  cursor : pointer;
`

const Head = style.h1`
  font-weight : bolder;
`

const ContactMap = () => {
  return (
    <FlexDiv className="removeRow">
      <MapDiv>
        <Head>Pulchwok Location</Head>
        <MapImage className="mapImage" src={pulchwokMap} onClick={() => {window.open("https://www.google.com/maps/place/AGNI+DENTAL+%26+IMPLANT+CENTER/@27.6757826,85.3146619,17.7z/data=!4m6!3m5!1s0x39eb19d8002c60bf:0xb0770f77660d59da!8m2!3d27.6760049!4d85.3155869!16s%2Fg%2F11vbdpkpdn?entry=ttu")}} />
      </MapDiv>

      <MapDiv>
        <Head>Kuleshwor Location</Head>
        <MapImage className="mapImage" src={kulMap} onClick={() => {window.open("https://www.google.com/maps/place/Agni+Dental+and+Implant+Center/@27.6921967,85.2971879,17.75z/data=!4m6!3m5!1s0x39eb190069508b4b:0x69dbf3bbc4f397f5!8m2!3d27.6918551!4d85.2985338!16s%2Fg%2F11vy3q5q9n?entry=ttu")}} />
      </MapDiv>
    </FlexDiv>
  )
}

export default ContactMap
