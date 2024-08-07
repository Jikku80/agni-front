import { useNavigate } from 'react-router-dom'

const SpecialistBreadCrumb = () => {
    const navigate = useNavigate();
  return (
    <div>
      <div className='breadcrumb'>
          <p className="bread-link" onClick={() => navigate('/')}>Home</p>
          <p className='seperator'>/</p>
          <p className='bread-link current-bread' onClick={() => navigate('/specialist')}>Meet your Doctor</p>
      </div>
    </div>
  )
}

export default SpecialistBreadCrumb
