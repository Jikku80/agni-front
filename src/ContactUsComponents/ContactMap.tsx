import pulchwokMap from '../../public/map.png'; 
import kulMap from '../../public/kmap.png';
import style from 'styled-components';

const FlexDiv = style.div`
  display : flex;
  flex-direction : column;
  margin-top : 4%;
`

const MapDiv = style.div`
  display : flex;
  width: 100%;
  justify-content : space-evenly;
`

const MapImage = style.img`
  height : 90vh;
  width : 100%;
  border-radius : .5rem;
  cursor : pointer;
`

const Head = style.h1`
  font-weight : bolder;
  cursor: pointer;
  margin-bottom : 2%;
  color : #107FC3;
`

const CenterDiv = style.div`
  display : flex;
  align-items : center;
  justify-content : center;
`

const ContactMap = () => {
  return (
    <FlexDiv className="removeRow">
      <MapDiv>
        <Head className="pulHead" onClick={(e) => {
          const pul = document.querySelector(".pulMap");
          const kul = document.querySelector(".kulMap");
          const head = document.querySelector(".kulHead");
          
          e.currentTarget.classList.remove("gray");
          head?.classList.add("gray");
          pul?.classList.remove("hidden");
          kul?.classList.add("hidden");
        }}>Pulchwok Location</Head>
        
        <Head className="kulHead gray" onClick={(e) => {
          const pul = document.querySelector(".pulMap");
          const kul = document.querySelector(".kulMap");
          const head = document.querySelector(".pulHead");
          
          e.currentTarget.classList.remove("gray");
          head?.classList.add("gray");
          pul?.classList.add("hidden");
          kul?.classList.remove("hidden");
        }}>Kuleshwor Location</Head>
      </MapDiv>
      <CenterDiv>
        <MapImage className="mapImage pulMap" src={pulchwokMap} onClick={() => {window.open("https://www.google.com/maps/place/AGNI+DENTAL+%26+IMPLANT+CENTER/@27.6757826,85.3146619,17.7z/data=!4m6!3m5!1s0x39eb19d8002c60bf:0xb0770f77660d59da!8m2!3d27.6760049!4d85.3155869!16s%2Fg%2F11vbdpkpdn?entry=ttu")}} />
        <MapImage className="mapImage kulMap hidden" src={kulMap} onClick={() => {window.open("https://www.google.com/maps/place/Agni+Dental+and+Implant+Center/@27.6921967,85.2971879,17.75z/data=!4m6!3m5!1s0x39eb190069508b4b:0x69dbf3bbc4f397f5!8m2!3d27.6918551!4d85.2985338!16s%2Fg%2F11vy3q5q9n?entry=ttu")}} />
      </CenterDiv>
        
    </FlexDiv>
  )
}

export default ContactMap
