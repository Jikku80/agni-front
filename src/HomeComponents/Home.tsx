import Header from "./Header"
import landingimg from "../../public/landing.png"
import { Image} from '@chakra-ui/react'
import Welcome from "./Welcome"
import Premier from "./Premier"
import Book from "./Book";
import OurService from "./OurService"
import './home.css'

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Home = ({setLoading} : Props) => {
  return (
    <div>
      <Header />
      <Image className="covimg" src={landingimg} />
      <Welcome />
      <Premier />
      <Book setLoading={setLoading}/>
      <OurService />
    </div>
  )
}

export default Home
