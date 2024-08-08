import ContactBreadCrumb from './ContactBreadCrumb'
import ContactForm from './ContactForm'
import style from 'styled-components';
import './contact.css';
import ContactMap from './ContactMap';
import ContactCard from './ContactCard';

const FlexDiv = style.div`
  margin-left : 5%;
  margin-right : 5%;
  margin-top : 1%;
`

const Row = style.div`
  display : flex;
`

interface Props{
  setLoading : React.Dispatch<React.SetStateAction<boolean>>
}

const Contact = ({setLoading} : Props) => {
  return (
    <div>
      <ContactBreadCrumb />
      <FlexDiv>
        <Row className='removeRow'>
          <ContactForm setLoading={setLoading} />
          <ContactCard />
        </Row>
        <ContactMap />
      </FlexDiv>
    </div>
  )
}

export default Contact
