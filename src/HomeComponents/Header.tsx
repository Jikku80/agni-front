import style from 'styled-components';

const Slogan = style.div`
    width : 35%;
    height : fit-content;
    font-size : 50px;
    position : Relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, 50%);
    color : #4A5568;
    z-index: 1;
`

const TextRight = style.p`
    text-align: right;
    line-height: 1.1;
`

const TextLeft = style.p`
  line-height: 1.1;
`

const Header = () => {
  return (
    <Slogan className='slogan'>
      <TextLeft className="bold custom">BEAUTY</TextLeft>
      <TextLeft className = "headActive">BECOMES</TextLeft>
      <TextRight className = "headActive">POWERFUL</TextRight>
      <TextRight className="bold custom">WITH SMILE</TextRight>
    </Slogan>
  )
}

export default Header
