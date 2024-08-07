import { useNavigate } from 'react-router-dom'
const ContactBreadCrumb = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='breadcrumb'>
          <p className="bread-link" onClick={() => navigate('/')}>Home</p>
          <p className='seperator'>/</p>
          <p className='bread-link current-bread' onClick={() => navigate('/contact-us')}>Contact</p>
      </div>
    </div>
  )
}

export default ContactBreadCrumb
