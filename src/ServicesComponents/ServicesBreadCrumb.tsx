import { useNavigate } from 'react-router-dom'

const ServicesBreadCrumb = () => {
    const navigate = useNavigate();
  return (
    <div>
        <div className='breadcrumb'>
            <p className="bread-link" onClick={() => navigate('/')}>Home</p>
            <p className='seperator'>/</p>
            <p className='bread-link current-bread' onClick={() => navigate('/services')}>Services</p>
        </div>
    </div>
  )
}

export default ServicesBreadCrumb
