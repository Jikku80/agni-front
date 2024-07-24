import { Button, FormControl, FormLabel, HStack, VStack} from "@chakra-ui/react"
import {useForm, SubmitHandler} from "react-hook-form";
import { SiTicktick } from "react-icons/si";
import axios from 'axios';
import React, { useState } from "react";
import style from 'styled-components';
import io from 'socket.io-client'
import brace from '../../public/heart.png';
import gap from '../../public/circle.png';
import chair from '../../public/chair.png';
import { CiCalendar } from "react-icons/ci";

const FlexDiv = style.div`
    margin-top: 10vh;
    margin-left: 10vw;
    margin-right: 10vw;
`

const InnerDiv = style.div`
    display : flex;
`

const FormDiv = style.div`
    background-image: linear-gradient(to bottom,#1777B2, #4DAFEB);
    padding : 2%;
    padding-right : 4%; 
    border-radius : .5rem;
    z-index : 1;
`

const HalfDiv = style.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
    padding-left : 2%;
`

const Modal = style.div`
    height : 100vh;
    width : 100vw;
    position : fixed;
    top : 0;
    display : flex;
    justify-content : center;
    align-items : center;
    background-color: #0003;;
`

const ModalBody = style.div`
    background-color : white;
    color : #4A5568;
    padding : 2%;
    border-radius : 10px;
    display: flex;
    flex-direction : column;
    justify-content : center;
    align-items : center;
`

const ModalButton = style.button`
    background-color : #eaeaea;
    color : #4A5568;
    border-radius : 10px;
    padding : 2%;
    margin-top : 2%;
    width: fit-content;

    &:hover{
    background-color : #bfbfbf;
    }
`

const ErrorMsg = style.p`
    color : crimson;
    font-size: 12px;
`

const  Head = style.h1`
    font-size : 28px;
    margin-bottom : 16px;
    font-weight : 600;
    display : flex;
`

const Blue = style.span`
    color :#3182ce;
    margin-left : 8px;
`

const BraceImage = style.img`
    position : absolute;
    top : 250vh;
    right : 35vw;
`

const GapImage = style.img`
    position : absolute;
    top : 268vh;
    right :5vw;
`

interface Props{
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
}

interface Appointment {
    name : String,
    email : String,
    phone : Number,
    message : String,
    specialist : String,
    date : String,
    time : String,
    branch: String
}

const Book = ({setLoading} : Props) => {
    const time = ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]
    
    const {register, handleSubmit, formState : {errors}} = useForm<Appointment>();
    const socket = io(`${import.meta.env.VITE_NODE_URL}`, {autoConnect : false})

    const [availableTime, setAvailableTime] = useState({time});
    const [updateTime, setUpdateTime] = useState(false);
    const [newPlaceholder, setNewPlaceholder] = useState('Select Date First');

    const onSubmit: SubmitHandler<Appointment> = async (data : any) => {
        setLoading(true)
        await axios.post(`${import.meta.env.VITE_NODE_URL}/api/appointment/`, {
            name : data.name,
            email : data.email,
            phone : data.phone,
            message: data.message,
            specialist : data.specialist,
            date : data.date,
            time : data.time,
            branch: data.branch,
            createdAt : Date.now()
        }, {withCredentials: true})
            .then((response) => {
                if (response.status == 201){
                    data = response.data.appointment
                    let successModal = document.querySelector(".successModal");
                    successModal?.classList.remove("hidden");
                    socket.connect();
                    socket.emit('chat message', true);
                    setTimeout(() => {
                        successModal?.classList.add("hidden");
                        socket.disconnect();
                    },5000)
                }
                setLoading(false)
            }).catch(err => {
                console.log('Error!!!', err)
                setLoading(false)
            })
    }
  return (
    <FlexDiv className="flexDiv">
        <Head className="alignLeft">Make an<Blue>Appointment</Blue></Head>
        <InnerDiv className="flexDiv">
            <FormDiv>
                <BraceImage className="book-braces" src={brace}/>
                <GapImage className="book-gap" src={gap}/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl className="bookForm" m={4}>
                        <FormLabel className="white sizedlabel">Branch</FormLabel>
                        <select className="bookSelect" defaultValue={'pulchowk'} {...register('branch', {required: true})}>
                            <option className="lightColot" value='pulchowk'>Pulchwok</option>
                            <option className="lightColot" value='kuleshwor'>Kuleshwor</option>
                        </select>
                        {
                            errors.branch && <ErrorMsg>Please pick a Branch!</ErrorMsg>
                        }
                        <FormLabel className="white sizedlabel">Specialist</FormLabel>
                        <select className="bookSelect bookDoc" defaultValue={'new'} {...register('specialist', {required: true})}>
                            <option className="lightColot" value='new'>New In Agni</option>
                            <option className="lightColot" value='Dr. James Maharjan'>Dr. James Maharjan</option>
                            <option className="lightColot" value='Dr. Aaishma Shrestha'>Dr. Aaishma Shrestha</option>
                            <option className="lightColot" value='Dr. Udikshya Maharjan'>Dr. Udikshya Maharjan</option>
                        </select>
                        {
                            errors.specialist && <ErrorMsg>Please pick a Doctor!</ErrorMsg>
                        }
                        <HStack className="rm-hstack" my={2}>
                            <VStack w="50%" alignItems="left">
                                <FormLabel className="white sizedlabel">Date</FormLabel>
                                <input className="white sizedbox dateInput" type='date' {...register('date', {required: true})} onChange={async(e) => {
                                    setLoading(true);
                                    await axios.get(`${import.meta.env.VITE_NODE_URL}/api/appointment/getAllTime/${e.target.value}`, { withCredentials: false })
                                        .then((item:any) => {
                                        const {data} = item;
                                        const fetchedTime = data.time;
                                        fetchedTime.filter((item:any) => {
                                            time.splice(time.indexOf(item), 1);
                                        })
                                        
                                        setAvailableTime({time})
                                        setUpdateTime(true)
                                        setNewPlaceholder('---Available Times---')
                                        setLoading(false);
                                        }).catch(Error => {
                                        setLoading(false);
                                        console.log('Error', Error)
                                        })
                                }}/>
                                {
                                    errors.date && <ErrorMsg>Please pick a Date!</ErrorMsg>
                                }
                            </VStack>
                            <VStack w="50%" alignItems="left">
                                <FormLabel className="white sizedlabel">Time</FormLabel>
                                <select className="white timeAvailable sizedbox" {...register('time', {required: true})}>
                                    <option defaultChecked hidden>{newPlaceholder}</option>
                                    {
                                        updateTime && Object.entries(availableTime).map(([key, el], i) => el.map (item => <option key={Math.random() + key + i} className="lightColot" value={item}>{item}</option>))
                                    }
                                </select>
                                {
                                    errors.time && <ErrorMsg>Please pick a time!</ErrorMsg>
                                }
                            </VStack>
                        </HStack>
                        <FormLabel className="white sizedlabel">Name</FormLabel>
                        <input className="nameInput" type='text' {...register('name', {required: true})}/>
                        {
                            errors.name && <ErrorMsg>Please provide your name!</ErrorMsg>
                        }
                        <HStack className="rm-hstack" my={2}>
                            <VStack w="50%"alignItems="left">    
                                <FormLabel className="white sizedlabel">Email</FormLabel>
                                <input className="white sizedbox" type='email' {...register('email', {required: true})}/>
                                {
                                    errors.email && <ErrorMsg>Please provide your email address!</ErrorMsg>
                                }
                            </VStack>
                            <VStack w="50%" alignItems="left">
                                <FormLabel className="white sizedlabel">Phone</FormLabel>
                                <input className="white sizedbox" type='number' {...register('phone', {required: true})}/>
                                {
                                    errors.phone && <ErrorMsg>Please provide your phone number!</ErrorMsg>
                                }
                            </VStack>
                        </HStack >
                        <FormLabel className="white sizedlabel">Message</FormLabel>
                        <textarea className="txtArea" {...register('message', {required: true})}/>
                        {
                            errors.message && <ErrorMsg>Please write a message about your problem!</ErrorMsg>
                        } 
                        <div className="btnSection">
                            <Button type="submit" my={2} className="bookBtn"><CiCalendar className="bookCalendar"/> Book Appointment</Button>
                        </div>
                    </FormControl>
                </form>
                <Modal className = "successModal hidden">
                    <ModalBody>
                        <p>Your booking has been requested, Please keep an eye on your mail for confirmation.</p>
                        <SiTicktick className="tick" />
                        <ModalButton onClick={() => {
                            let successModal = document.querySelector(".successModal");
                            successModal?.classList.add("hidden");
                        }}>Close</ModalButton>
                    </ModalBody>
                </Modal>
            </FormDiv>
            <HalfDiv className="halfDiv">
                <img src={chair} />
            </HalfDiv>
        </InnerDiv>
    </FlexDiv>
  )
}

export default Book
