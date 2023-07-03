import { Question } from "@/type/QuestsType"
import { useState } from "react";

type Props = {
    question: Question;
    handleAnswer: (answer:number) => void;
    count: number
}




export const Quest = ({question, handleAnswer, count}: Props) =>{

    const [selected, setSelected] = useState<number | null>(null)

    function onAnswer (key:number) {
        setSelected(key)
        setTimeout(()=>{
  
        if (selected === null) {
            setSelected(null)
            handleAnswer(key)
        }

        }, 1000)
        
        
    }

    return (
       
        <div className=" border-y-2 px-4 h-80"> 
           
        <h2 className="text-xl font-bold py-2">{count}. {question.question}</h2>  

        {
            question.options.map((item, key) => (

                <p 
                onClick={()=> onAnswer(key)}
                className={`p-2 text-left bg-gray-200 rounded-md my-2 border-gray-300 border capitalize
                ${selected === null ?  '  cursor-pointer hover:opacity-60' : 'cursor-auto opacity-60'}
                ${selected !== null && selected === key && selected === question.answer &&
                'bg-blue-400'
                }
                ${selected !== null && selected === key && selected !== question.answer &&
                    'bg-red-400'
                }
    
                `}
                
                >{item}</p>

            ))
        }      
        
        </div>
        
    ) 
        
      
    }