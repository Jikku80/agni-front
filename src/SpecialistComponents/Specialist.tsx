import SpecialistBreadCrumb from "./SpecialistBreadCrumb"
import './specialist.css';
import style from 'styled-components';
import doc from '../../public/doc.png';
import sdoc from '../../public/sdoc.png';
import udoc from '../../public/udoc.png';

const FlexDiv = style.div`
  margin-left : 5%;
  margin-right : 5%;
  margin-top : 2%;
`

const Row = style.div`
  display : flex;
  margin-bottom : 2%;
`

const Column = style.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  width : 50%;
`

const Blue = style.p`
  color : #1777B2;
  font-weight : bold;
  margin-bottom : 1%;
`

const Bold = style.p`
  font-weight : bold;
`

const MarginLeft = style.div`
  margin-left : 5%;
`

const MarginRight = style.div`
  margin-right : 5%;
`

const Gray = style.p`
  color : gray;
`

const Span = style.div`
  margin-top : 2%;
  display: flex;
`

const Specialist = () => {
  return (
    <div>
      <SpecialistBreadCrumb />
      <FlexDiv>
        <Row className="rmflex">
          <Column className="rmWidth">
            <img src={doc} />
          </Column>
          <Column className="rmWidth">
            <MarginLeft className="rmMargin">
              <Blue>Dentist</Blue>
              <Bold>Dr. James Maharjan</Bold>
              <Gray>Hello! I'm James Maharjan, a dedicated and passionate dentist with 4 years of experience in providing comprehensive dental care. I specialize in diagnosing, preventing, and treating a wide range of dental issues to ensure my patients achieve and maintain optimal oral health.</Gray>
              <Span className="span"><Bold>Work Days</Bold> <Gray className="ml">Sun, Mon, Tue, Wed, Thu, Fri, Sat</Gray></Span>
            </MarginLeft>
          </Column>
        </Row>

        <Row className="rmflex reverse">
          <Column className="rmWidth">
            <MarginRight className="rmMargin">
              <Blue>Dentist</Blue>
              <Bold>Dr. Aaishma Shrestha</Bold>
              <Gray>Hello! I'm Aaishma Shrestha, I continuously stay updated with the latest advancements in dental technology and treatments to provide the highest standard of care. My goal is to help you achieve a healthy, beautiful smile and to ensure that your dental experience is as pleasant and stress-free as possible.</Gray>
              <Span className="span"><Bold>Work Days</Bold> <Gray className="ml">Sun, Mon, Tue, Wed, Thu, Fri, Sat</Gray></Span>
            </MarginRight>
          </Column>
          <Column className="rmWidth">
            <img src={sdoc} />
          </Column>
        </Row>

        <Row className="rmflex">
          <Column className="rmWidth">
            <img src={udoc} />
          </Column>
          <Column className="rmWidth">
            <MarginLeft className="rmMargin">
              <Blue>Dentist</Blue>
              <Bold>Dr. Udikshya Maharjan</Bold>
              <Gray>Hello! I'm Udikshya Maharjan, In my practice, I prioritize patient comfort and education, striving to create a welcoming environment where everyone feels at ease. From routine cleanings and exams to advanced restorative and cosmetic procedures, I am committed to offering personalized care tailored to each patient's unique needs.</Gray>
              <Span className="span"><Bold>Work Days</Bold> <Gray className="ml">Sun, Mon, Tue, Wed, Thu, Fri, Sat</Gray></Span>
            </MarginLeft>
          </Column>
        </Row>
      </FlexDiv>
    </div>
  )
}

export default Specialist
