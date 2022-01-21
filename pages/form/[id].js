
import React, {useState} from 'react'
import {useRouter} from 'next/router'
export default function Home(){
    const router = useRouter()
    const {id, idd}= router.query
    const[btnState,setBtnState] = useState(false);

  
   
    const [selected,setSelected]= useState("");
    const handleSelect=(e)=>{
        setSelected(e.target.value);
    }
    const[text,setText] = useState("");
  const sometext = (e)=>{
      setText(e.target.value);
      console.log(e.target.value);
      qState(e.target.value);
  }
    const [questions,qState] =useState([
        {
            qType: "radio",
            title: "sample title",
            desc: "sample description",
            options:[
                {
                    title:"[option] sample title",
                    desc: "[option] sample desc"
                }
            ]
        },
        {
            qType: "checkbox",
            title: "sample title",
            desc: "sample description",
            options:[
                {
                    title:"[option] sample title",
                    desc: "[option] sample desc"
                }
            ]
        },
        {
            qType: "checkpoint",
            title: "sample title",
            desc: "sample description",
            options:[
                {
                    title:"[option] sample title",
                    desc: "[option] sample desc"
                }
            ]
        }
        
    ])
    
    const SelectBox = (p)=>{
        return (
        <select onChange= {handleSelect} value={selected}>
        <option key ="checkbox" value = "checkbox"> checkbox</option>
        <option key = "checkpoint" value = "checkpoint"> checkpoint</option>
        <option key = "radio" value = "radio"> radio</option>
    </select> )
    }

    
       
    return (

        <div>
            create Title
            <b>
            <button onClick= {e => toggle(e)}>
                {
                    btnState === true ? "clicked" : "not-clicked"
                }
            </button>
            
            </b>
            <button onClick= {e => toggle(e)}>
                {
                    btnState === true ? "add" : "not-add"
                }
            </button>
            
            <SelectBox options={questions} ></SelectBox>;
            
            <input onChange = {sometext}></input>
           
           {id}
        </div>

    )
}