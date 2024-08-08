import { useNavigate } from 'react-router-dom';
import serviceData from '../../public/services.json';
import style from 'styled-components';
import { Button } from '@chakra-ui/react';
import { useEffect } from 'react';

const Head=  style.h1`
  font-size : 24px;
  font-weight: bolder;
  margin-bottom : 1%;
`

const FlexDiv = style.div`
    margin-left : 5%;
    margin-right : 5%;
`

const Title = style.h1`
  font-weight : bolder;
`

const InnerDiv = style.div`
  margin-left : 2%;
`

const Row = style.div`
  display : flex;
  justify-content : space-between;
  align-items : center;
`

const Column = style.div`
  display : flex;
  flex-direction : column;
  width : 45%;
`

const GapDiv = style.div`
  margin-top: 2%;
`

const ServicesDetail = () => {
  const navigate = useNavigate();
  let pathname = location.pathname;
  const id = pathname.split('/services/')[1];
  const list: any[] = [];

  serviceData.map(item => {
    if (item.id == parseInt(id)) list.push(item);
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div>
        <div className='breadcrumb'>
            <p className="bread-link" onClick={() => navigate('/')}>Home</p>
            <p className='seperator'>/</p>
            <p className='bread-link' onClick={() => navigate('/services')}>Services</p>
            <p className='seperator'>/</p>
            <p className='bread-link current-bread'>{list[0].name}</p>
        </div>
      </div>
      <FlexDiv>
        <Row className="removeRow">
          <Column className="removeWidth">
            <Head>{list[0].name}</Head>
            <p>{list[0].desc}</p>
            <Button w="fit-content" colorScheme='blue' mt={4} onClick={()=> navigate('/contact-us')}>Book Appointment</Button>
          </Column>
          <Column className='imageCol'>
            <img className='oneimage' src={list[0].image} />
          </Column>
        </Row>
        {
          list[0].practices ?
            <>
              {list[0].practices.map((item : any) => <div key={"practices" + Math.random()}>
                <Title key={"prac-title" +item.title}>{item.title}</Title>
                {item.detail.map((el : any) => <InnerDiv key={ "prac-detail" + Date.now() + item.title + Math.random()}>
                  <Title key={"prac-subtitle" + Math.random() + el.subtitle}>{el.subtitle}</Title>
                  <p key={"prac-subdetail" + Date.now() + Math.random() + el.subtitle }>{el.subdetail}</p>
                  </InnerDiv>)}
              </div>)}
            </>
          :
          ""
        }
        <GapDiv>
          {
            list[0].types ?
              <>
                <Head>Types of {list[0].name}</Head>
                {list[0].types.map((item : any) => <div key={"types" + Math.random()}>
                  <Title key={"typestitle" + item.title}>{item.title}</Title>
                  {item.detail.map((el : any) => <InnerDiv key={"typesdetail" + Date.now() + item.title + Math.random()}>
                    <Title key={"typessubtitle" + Math.random() + el.subtitle}>{el.subtitle}</Title>
                    <p key={"typessubdetail" + Date.now() + Math.random() + el.subtitle }>{el.subdetail}</p>
                    </InnerDiv>)}
                </div>)}
              </>
            :
            ""
          }
        </GapDiv>

        <GapDiv>
          {
            list[0].procedure ?
              <>
                <Head>Procedure</Head>
                {list[0].procedure.map((item : any) => <div key={"procedure" + Math.random()}>
                  <Title key={"pro-title" + item.title}>{item.title}</Title>
                  {item.detail.map((el : any) => <InnerDiv key={"prodetail" + Date.now() + item.title + Math.random()}>
                    <Title key={"prosubtitle" + Math.random() + el.subtitle}>{el.subtitle}</Title>
                    <p key={"prosubdetail" + Date.now() + Math.random() + el.subtitle }>{el.subdetail}</p>
                    </InnerDiv>)}
                </div>)}
              </>
            :
            ""
          }
        </GapDiv>

        <GapDiv>
          {
            list[0].benefits ?
              <>
                <Head>Benefits</Head>
                {list[0].benefits.map((item : any) => <div key={"benefits" + Math.random()}>
                  <Title key={"benefitstitle" + item.title}>{item.title}</Title>
                  <p key={"benefitsdetail" + Date.now() + Math.random() + item.subtitle }>{item.detail}</p>
                </div>)}
              </>
            :
            ""
          }
        </GapDiv>

        <GapDiv>
          {
            list[0].frequency ?
              <>
                <Head>Frequency</Head>
                {list[0].frequency.map((item : any) => <div key={"frequency" + Math.random()}>
                  <Title key={"frequencytitle" + item.title}>{item.title}</Title>
                  <p key={"frequencydetail" + Date.now() + Math.random() + item.subtitle }>{item.detail}</p>
                </div>)}
              </>
            :
            ""
          }
        </GapDiv>

        <GapDiv>
          {
            list[0].aftercare ?
              <>
                <Head>Aftercare</Head>
                {list[0].aftercare.map((item : any) => <div key={"aftercare" + Math.random()}>
                  <Title key={"aftercaretitle" + item.title}>{item.title}</Title>
                  <p key={"aftercaredetail" + Date.now() + Math.random() + item.subtitle }>{item.detail}</p>
                </div>)}
              </>
            :
            ""
          }
        </GapDiv>

        <GapDiv>
          {
            list[0].potential ?
              <>
                <Head>Potential</Head>
                {list[0].potential.map((item : any) => <div key={"potential" + Math.random()}>
                  <Title key={"potentialtitle" + item.title}>{item.title}</Title>
                  <p key={"potentialdetail" + Date.now() + Math.random() + item.subtitle }>{item.detail}</p>
                </div>)}
              </>
            :
            ""
          }
        </GapDiv>

        <GapDiv>
          {
            list[0].alternatives ?
              <>
                <Head>Alternatives</Head>
                {list[0].alternatives.map((item : any) => <div key={"alternatives" + Math.random()}>
                  <Title key={"altertitle" + item.title}>{item.title}</Title>
                  <p key={"alterdetail" + Date.now() + Math.random() + item.subtitle }>{item.detail}</p>
                </div>)}
              </>
            :
            ""
          }
        </GapDiv>

        <GapDiv>
          {
            list[0].consideration ?
              <>
                <Head>Consideration</Head>
                {list[0].consideration.map((item : any) => <div key={"consideration" + Math.random()}>
                  <Title key={"consititle" + item.title}>{item.title}</Title>
                  <p key={"considetail" + Date.now() + Math.random() + item.subtitle }>{item.detail}</p>
                </div>)}
              </>
            :
            ""
          }
        </GapDiv>

        <GapDiv>
          {
            list[0].conclusion ?
              <>
                <Head>Conclusion</Head>
                <p>{list[0].conclusion}</p>
              </>
            :
            ""
          }
        </GapDiv>
      </FlexDiv>
    </>
  )
}

export default ServicesDetail
