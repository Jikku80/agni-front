import { Button, FormControl, FormLabel, HStack, VStack} from "@chakra-ui/react"
import {useForm, SubmitHandler} from "react-hook-form";
import { SiTicktick } from "react-icons/si";
import axios from 'axios';
import React, { useState } from "react";
import style from 'styled-components';
import io from 'socket.io-client'
import { CiCalendar } from "react-icons/ci";

const FlexDiv = style.div`
    width : 60vw;
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

const Head = style.p`
    font-weight : bold;
    font-size : 24px;
`

const Gray = style.p`
    color : gray;
    margin-bottom: 2%;
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
const ContactForm = ({setLoading} : Props) => {
    const time = ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]
    
    const {register, handleSubmit, formState : {errors}} = useForm<Appointment>();
    const socket = io(`${import.meta.env.VITE_NODE_URL}`, {autoConnect : false})

    const [availableTime, setAvailableTime] = useState({time});
    const [updateTime, setUpdateTime] = useState(false);
    const [newPlaceholder, setNewPlaceholder] = useState('---Select A Date First---');

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
    <FlexDiv className="con-flex">
        <form onSubmit={handleSubmit(onSubmit)}>
            <Head>Appointment Form</Head>    
            <Gray>Book yourself the care you always wanted with Agni Dental.</Gray>
            <FormControl className="bookForm contactForm" m={4}>
                <FormLabel className="sizedlabel">Branch</FormLabel>
                <select className="bkSelect" defaultValue={'pulchowk'} {...register('branch', {required: true})}>
                    <option className="lightColot" value='pulchowk'>Pulchwok</option>
                    <option className="lightColot" value='kuleshwor'>Kuleshwor</option>
                </select>
                {
                    errors.branch && <ErrorMsg>Please pick a Branch!</ErrorMsg>
                }
                <FormLabel className="sizedlabel">Doctors</FormLabel>
                <select className="bkSelect bookDoc" defaultValue={'new'} {...register('specialist', {required: true})}>
                    <option className="lightColot" value='new'>New In Agni</option>
                    <option className="lightColot" value='Dr. James Maharjan'>Dr. James Maharjan</option>
                    <option className="lightColot" value='Dr. Aaishma Shrestha'>Dr. Aaishma Shrestha</option>
                    <option className="lightColot" value='Dr. Udikshya Maharjan'>Dr. Udikshya Maharjan</option>
                </select>
                {
                    errors.specialist && <ErrorMsg>Please pick a Doctor!</ErrorMsg>
                }
                <HStack className="rm-hstack" my={2}>
                    <VStack className="rm-vstackProp" w="50%" alignItems="left">
                        <FormLabel className="sizedlabel">Date</FormLabel>
                        <input className="sizedbox dInput" type='date' {...register('date', {required: true})} onChange={async(e) => {
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
                    <VStack className="rm-vstackProp" w="50%" alignItems="left">
                        <FormLabel className="sizedlabel">Time</FormLabel>
                        <select className="tAvailable sizedbox" {...register('time', {required: true})}>
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
                <FormLabel className="sizedlabel">Name</FormLabel>
                <input className="nInput" type='text' {...register('name', {required: true})}/>
                {
                    errors.name && <ErrorMsg>Please provide your name!</ErrorMsg>
                }
                <HStack className="rm-hstack" my={2}>
                    <VStack className="rm-vstackProp" w="50%"alignItems="left">    
                        <FormLabel className="sizedlabel">Email</FormLabel>
                        <input className="sizedbox eInput" type='email' {...register('email', {required: true})}/>
                        {
                            errors.email && <ErrorMsg>Please provide your email address!</ErrorMsg>
                        }
                    </VStack>
                    <VStack className="rm-vstackProp" w="50%" alignItems="left">
                        <FormLabel className="sizedlabel">Phone</FormLabel>
                        <input className="sizedbox pInput" type='number' {...register('phone', {required: true})}/>
                        {
                            errors.phone && <ErrorMsg>Please provide your phone number!</ErrorMsg>
                        }
                    </VStack>
                </HStack >
                <FormLabel className="sizedlabel">Message</FormLabel>
                <textarea className="tArea" {...register('message', {required: true})}/>
                {
                    errors.message && <ErrorMsg>Please write a message about your problem!</ErrorMsg>
                } 
                <div className="bSection">
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
    </FlexDiv>
  )
}

export default ContactForm
