
import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'; 
import axios from "axios"
import styles from '../../styles/Home.module.css'
export default function Home(){
   
    const [questions,setQuestions]= useState([
        {
            qType: "radio",
            title: "sample title",
            desc: "sample description",
            id:uuidv4(),
            options:[
                {
                    title:"[option] sample title",
                    desc: "[option] sample desc",
                    id: uuidv4()
                    
                },
                {
                    title:"[option2] sample title",
                    desc: "[option2] sample desc",
                    id:uuidv4()
                }
            ]
        }
        // ,
        // {
        //     qType: "checkbox",
        //     title: "sample title",
        //     desc: "sample description",
        //     id: uuidv4(),
        //     options:[
        //         {
        //             title:"[option] sample title",
        //             desc: "[option] sample desc"
        //         }
        //     ]
        // },
        // {
        //     qType: "checkpoint",
        //     title: "sample title",
        //     desc: "sample description",
        //     id: uuidv4(),
        //     options:[
        //         {
        //             title:"[option] sample title",
        //             desc: "[option] sample desc",
        //             id: uuidv4()
        //         }
        //     ]
        // }
        
    ])
    
 
    const updateQuestion = (index,text) =>{
            console.log(index);
            console.log(text);
            const cp = [...questions]
            cp[index].title = text
            setQuestions(cp);
        

    }
    const updateText = (index,text) =>{
        
        const cp = [...questions]
        cp[index].title = text
        setQuestions(cp);
    

}
const optionText = (qid,oid,type, text) =>{
        
    const cp = [...questions]
    const qIndex = cp.findIndex(question=> question.id === qid)
        
    const oIndex = cp[qIndex].options.findIndex(option=>option.id === oid)

    if(oIndex !== -1){
        if(type === 1){
        cp[qIndex].options[oIndex].title = text;
        }
        else if(type === 2){
        cp[qIndex].options[oIndex].desc = text;
        }
        }
        setQuestions(cp);


}
    const addQuestion = (index) =>{
        
        const cp = [...questions]
        
        cp.push({title:"new", id: uuidv4(), options:[]})
        setQuestions(cp);

}
    const updateqtype = (index, qType) =>{
       
        const cp = [...questions]
        cp[index].qType =  qType
        setQuestions(cp);
    }
   
    const addOptionQuestion = (qid) =>{
        
        const cp = [...questions]
        const qIndex = cp.findIndex(question=> question.id === qid)
            
    
        if(qIndex !== -1){
           cp[qIndex].options.push({title:"original", desc: "default", id:uuidv4()})
            }
            setQuestions(cp);
    
    
    }
    const delOptionQuestion= (qid, oid) =>{
        const cp = [...questions]
       
        const qIndex = cp.findIndex(question=> question.id === qid)
        
        const oIndex = cp[qIndex].options.findIndex(option=>option.id === oid)
       
        console.log(oIndex)
        if(oIndex !== -1){
        
        cp[qIndex].options.splice(oIndex,1)
        }
        setQuestions(cp);
    }
   
    const submit = async()=>{

        const url = "https://final.kwonna.link"


        axios.get(url)
        .then(
            res => {console.log(res)}
        )
        
    }
    

    return (

        <div>
            
            <div className = {styles.firstTitle}>Create Yours</div>
            
                    
           <div className = {styles.cardshow}>
            {questions.map((question, index, id)=>{
                    return <Question question = {question} index = {index} 
                    key ={question.id} 
                    updateQuestion={updateQuestion}
                    addOptionQuestion={addOptionQuestion}
                    updateqtype={updateqtype}
                    delOptionQuestion={delOptionQuestion}
                    addQuestion = {addQuestion}
                    optionText = {optionText}
                    submit ={submit}
                    
                    
                    />
                })
            }
             
            </div>
            

            <div className={styles.arrow}>
                d
            </div>
        </div>

    )
}
const Question = ({question, index, updateQuestion, addOptionQuestion, updateqtype, optionText, delOptionQuestion, addQuestion,submit}) =>{

        return <div>
        <div className={styles.card}>
            
            <textarea value = {question.title} onChange ={e=>updateQuestion(index,e.target.value)}/>
            <span className={styles.title}>
            question title: {question.title}
            </span>

            <select value = {question.qType} onChange = {e=>updateqtype(index, e.target.value)}>
            <option key ="checkbox" value = "checkbox"> checkbox</option>
            <option key = "checkpoint" value = "checkpoint"> checkpoint</option>
            <option key = "radio" value = "radio"> radio</option>
            </select>
            <div className={styles.questiontype}>
            question type: {question.qType}
            </div>
            <br/>
            <textarea value = {question.options.title} onChange ={e=>updateText(index,e.target.value)}/>
            {
                question.options.map((option,index)=>{
                    return <div key= {index}>
                        <textarea value = {option.title} onChange ={e=>optionText(question.id,option.id,1,e.target.value)}/> 
                        <br/>
                        <textarea value = {option.desc} onChange ={e=>optionText(question.id,option.id,2,e.target.value)}/> 
                        
                        <button onClick={e => delOptionQuestion(question.id, option.id)}> delete</button>
                    </div>
                })
                
            }
            <button onClick={e => addOptionQuestion(question.id)}> add</button>
            </div>
            <button onClick ={e=> addQuestion(index)} >add </button>
            <button onClick ={e=> submit()} >submit</button>
        </div>
            }
        
  


