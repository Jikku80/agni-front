
import { HStack } from '@chakra-ui/react'
import style from 'styled-components'
import logo from '../../public/logo.png';
import { FaArrowRight } from "react-icons/fa6";
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";

const Anchor = style.a`
  text-decoration : none;
  cursor: pointer;

  color: #4A5568;
  &:hover{
    color: #3182ce;
  }
`

const BookButton = style.button`
  border-radius : 1rem;
  padding: .5%;
  display : flex;
  align-items: center;
  justify-content: space-between;
  width: 10%;
  font-weight: bolder;
  color: #4A5568;

  &:hover{
    background-color : #3182ce;
    border-color : #3182ce;
    color : white;
  }
`

const Navbar = () => {
  const navValues = ['Home', 'Services', 'Meet your Doctor', 'Employee Login', 'Contact']

  const [isActive, setIsActive] = useState(-1);

  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992){
      if (ref.current != null) ref.current.style.display = "flex";
    }
    else{
      if (ref.current != null) ref.current.style.display = "none";
    }
  })

  return (
    <div>
      <div className='burgerHolder'>
        <RxHamburgerMenu className="hamburger" onClick={() => {
          if (ref.current != null) ref.current.style.display = "flex";
        }}/>
      </div>
      <div className='navbar' ref={ref}>
        <div className='navhead'>
          <img className="navimg" src={logo}/>

          <MdCancel className='cancel' onClick={() => {
            if (ref.current != null) ref.current.style.display = "none";
          }}/>
        </div>
        <HStack className='hstack' w="50%" justifyContent="space-around">
          {navValues.map((item, index) => <Anchor key={item} className={isActive == index ? "acitveColor" : ""} onClick={() => {
            setIsActive(index)
            if (item == "Home") {
              navigate('/')
              if (window.innerWidth < 992){
                if (ref.current != null) ref.current.style.display = "none";
              }
            }
            if (item == "Services") {
              navigate('/services')
              if (window.innerWidth < 992){
                if (ref.current != null) ref.current.style.display = "none";
              }
            }
            if (item == "Meet your Doctor") {
              navigate('/specialist')
              if (window.innerWidth < 992){
                if (ref.current != null) ref.current.style.display = "none";
              }
            }
            if (item == "Employee Login") {
              navigate('/login')
              if (window.innerWidth < 992){
                if (ref.current != null) ref.current.style.display = "none";
              }
            }
            if (item == "Contact") {
              navigate('/contact-us')
              if (window.innerWidth < 992){
                if (ref.current != null) ref.current.style.display = "none";
              }
            }
            
          }}>{item}</Anchor>)}
        </HStack>
        <BookButton className="bookbtn" onClick={() => {
          navigate('/contact-us')
          if (window.innerWidth < 992){
            if (ref.current != null) ref.current.style.display = "none";
          }
        }}>Book Now <FaArrowRight /></BookButton>
      </div>
    </div>
  )
}

export default Navbar
