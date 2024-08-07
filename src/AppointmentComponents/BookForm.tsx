import { Button, FormControl, FormLabel} from "@chakra-ui/react"
import {useForm, SubmitHandler} from "react-hook-form";
import { SiTicktick } from "react-icons/si";
import axios from 'axios';
import React, { useState } from "react";
import style from 'styled-components'
import { CiCalendar } from "react-icons/ci";

const FormDiv = style.div`
    background-image: linear-gradient(to bottom,#1777B2, #4DAFEB);
    padding : 2%;
    padding-right : 4%; 
    border-radius : .5rem;
    z-index : 1;
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

interface Props{
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
}

interface Appointment {
    specialist : String,
    date : String,
    time : String,
    branch: String
}

const BookForm = ({setLoading} : Props) => {
    const time = ["10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"]
    
    const {register, handleSubmit, formState : {errors}} = useForm<Appointment>();

    const [availableTime, setAvailableTime] = useState({time});
    const [updateTime, setUpdateTime] = useState(false);
    const [newPlaceholder, setNewPlaceholder] = useState('Select Date First');

    const onSubmit: SubmitHandler<Appointment> = async (data : any) => {
        setLoading(true)
        await axios.post(`${import.meta.env.VITE_NODE_URL}/api/appointment/timeByDate`, {
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
                    setTimeout(() => {
                        successModal?.classList.add("hidden");
                    },5000)
                }
                setLoading(false)
            }).catch(err => {
                console.log('Error!!!', err)
                setLoading(false)
            })
    }
  return (
    <div>
      <FormDiv>
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
                    <FormLabel className="white sizedlabel">Doctors</FormLabel>
                    <select className="bookSelect bookDoc" defaultValue={'new'} {...register('specialist', {required: true})}>
                        <option className="lightColot" value='new'>New In Agni</option>
                        <option className="lightColot" value='Dr. James Maharjan'>Dr. James Maharjan</option>
                        <option className="lightColot" value='Dr. Aaishma Shrestha'>Dr. Aaishma Shrestha</option>
                        <option className="lightColot" value='Dr. Udikshya Maharjan'>Dr. Udikshya Maharjan</option>
                    </select>
                    {
                        errors.specialist && <ErrorMsg>Please pick a Doctor!</ErrorMsg>
                    }
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
                    <div className="btnSection">
                        <Button type="submit" my={2} className="bookBtn"><CiCalendar className="bookCalendar"/>Set Offline Entry</Button>
                    </div>
                </FormControl>
            </form>
            <Modal className = "successModal hidden">
                <ModalBody>
                    <p>Time was successfully booked for the offline entry.</p>
                    <SiTicktick className="tick" />
                    <ModalButton onClick={() => {
                        let successModal = document.querySelector(".successModal");
                        successModal?.classList.add("hidden");
                    }}>Close</ModalButton>
                </ModalBody>
            </Modal>
        </FormDiv>
    </div>
  )
}

export default BookForm
