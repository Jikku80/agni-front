import ContactBreadCrumb from './ContactBreadCrumb'
import ContactForm from './ContactForm'
import style from 'styled-components';
import './contact.css';
import ContactMap from './ContactMap';

const FlexDiv = style.div`
  margin-left : 5%;
  margin-right : 5%;
  margin-top : 2%;
`

interface Props{
  setLoading : React.Dispatch<React.SetStateAction<boolean>>
}

const Contact = ({setLoading} : Props) => {
  return (
    <div>
      <ContactBreadCrumb />
      <FlexDiv>
        <ContactForm setLoading={setLoading} />
        <ContactMap />
      </FlexDiv>
    </div>
  )
}

export default Contact
