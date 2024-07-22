import style from  'styled-components';
import { FaCircleUser } from "react-icons/fa6";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import img from '../../public/img1.png';
import brace from '../../public/brace.png';
import fill from '../../public/filling.png';
import { useState } from 'react';

const FlexDiv = style.div`
    margin-top: 10vh;
    margin-left: 10vw;
    margin-right: 10vw;
`

const Head = style.h1`
    font-size : 25px;
    font-weight : 600;
    margin-bottom : 16px;
`

const Blue = style.span`
    color :#3182ce;
`

const CardDiv = style.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`

const CardHolder = style.div`
    position : relative;
    display : flex;
    flex-direction : column;
`

const Card  = style.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : space-around;
    padding: 10%;
    margin : 2%;
    border-radius : .5rem;
    box-shadow: 1px 2px 1px 2px;
    background-image: linear-gradient(to bottom,#1777B2, #4DAFEB);
    color : white;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 45% 76%, 32% 85%, 31% 75%, 0% 75%);
    width : 50vw;
    height  : 70vh;
`

const CardHead = style.h1`
    font-size : 25px;
    font-weight : bolder;
`

const CardDetail = style.div`
    margin-bottom : 20vh;
`

const RowFlex = style.div`
    display : flex;
    justify-content : center;
    align-items : center;
`

const ToothImage = style.img`
    position : absolute;
    top : 410vh;
    left :2vw;
`

const BraceImage = style.img`
    position : absolute;
    top : 440vh;
    right :.5vw;
`

const FillImage = style.img`
    position : absolute;
    top : 400vh;
    left :45vw;
`

const Review = () => {
    const [pageNumber, setPageNumber] = useState(1);
    
    const pagination = function (array : any, page_size : any, page_number : any) {
        return array.slice((page_number - 1) * page_size, page_number * page_size);
    }
    const reviews = [
        {
            name : "Sherlyn Shrestha",
            review :  "Few days back, I visited Agni Dental for my sister's treatment. We consulted Dr. Aaishma and she explained all the treatment plans very well. We were really impressed and then we decided to do all the necessary treatments. We were really satisfied with the outcome. Thank you so much for the best dental service we have ever received. Highly recommend!",
            stars : "circleIcon"
        },
        {
            name : "Kshitiz Maharjan",
            review : "I really loved the services provided by this clinic. The doctors here are highly skilled n friendly. I visited the clinic 2weeks back for my RCT . I'm very happy for my treatments here. I highly recommend everyone for their dental treatments!!",
            stars : "circleIcon"
        },
        {
            name : "Sagar Koirala",
            review : "Went to agni dental after having tooth pain Got my tooth rct treated and crown placed ... treatement was nice.. so i toke my son and daughter  for the tooth removal and rct in children . Dr aishma did nic treatement .thank you agni dental for nice treatement.",
            stars : "circleIcon"
        },
        {
            name : "Alisha Ghaju",
            review : "Highly recommend to everyone! I visited Agni during my vacation in Nepal, where doctors efficiently completed my dental check and fillings in just one day, never-to-say it was quite intensive for singular day. Their services were not only effective but also reasonably priced. I am truly grateful to both of them for accommodating my time constraints. During the filling and check up i was bit worried, however it wasn't so painful, I appreciate their care for their patients.",
            stars : "circleIcon"
        },
        {
            name  : "Gopal Maharjan",
            review : "All my patients were nicely treated by Dr. James, send for pain swelling extraction and regular checkups thanks Agni Dental and Implant center",
            stars : "circleIcon"
        },
        {
            name : "Salu Shrestha",
            review : "Dr. James and Dr. Aaishma are really good. Apart from their professional medical services, they will make sure we feel comfortable, easy and ready. Looks simple but indeed the most needed feature for any patient. They have nailed it, Kudos. Highly appreciated and recommended !!!!!",
            stars : "circleIcon"
        },
        {
            name : "Ken Shimizu",
            review : "Fantastic and professional service with reasonable pricing. As an expat, you feel nervous about going to a dentist but the service and treatment were absolutely excellent! Highly recommended!",
            stars : "circleIcon"
        },
        {
            name : "Sristi Adhikari",
            review : "Maile scaling garauna gako thiye. I thought it would be painful but ekdam nadukhai gardinu bhayo. The doctors and staff are very professional, main chai affordable pani recha aru clinic bhanda. Very happy with the treatment, will definitely bring my family here from now on. 👍 ",
            stars : "circleIcon"
        },
        {
            name : "Allison Gocotano",
            review  : "I came for my urgent teeth problem during 2081 new year, and Dr James was very accommodating and provided excellent dental service. Highly recommended!",
            stars : "circleIcon"
        }
    ]
    const review = pagination(reviews, 1, pageNumber);
    if (pageNumber < 1){
        setPageNumber(reviews.length);
    }
    if (pageNumber > reviews.length) {
        setPageNumber(1);
    }
  return (
    <FlexDiv>
        <ToothImage className="welcome-tooth" src={img}/>
        <BraceImage className="welcome-brace" src={brace}/>
        <FillImage className="welcome-fill" src={fill}/>
        <Head className="alignLeft"><Blue>Patients</Blue> Testimonials</Head>
        <p>What our happy patients has to say about us!</p>
        <CardDiv>
            <MdOutlineKeyboardArrowLeft className='leftIcon' onClick={() => {
                let page = pageNumber - 1;
                setPageNumber(page);
            }}/>
            <div>
                {
                    review.map((item:any) => <CardHolder key={item.name + Date.now()}>

                        <Card className="reviewCard" key={Math.random()}>
                            <CardHead key={item.name}>{item.name}</CardHead>
                            <CardDetail className="reviewDetail" key={(item.review)?.substring(0, 15)}>{item.review}</CardDetail>
                        </Card>
                        <FaCircleUser key={Date.now()} className="usericon" />
                    </CardHolder>)
                }
                <RowFlex>
                    {
                        reviews.map((item,  i) => <FaCircle key={item.stars + i + 1} className={pageNumber == i + 1 ? "activeIcon circleIcon" : "circleIcon"}/>)
                    }
                </RowFlex>
            </div>
            <MdOutlineKeyboardArrowRight className="rightIcon" onClick={() => {
                let page = pageNumber + 1;
                setPageNumber(page);
            }}/>
        </CardDiv>
    </FlexDiv>
  )
}

export default Review
