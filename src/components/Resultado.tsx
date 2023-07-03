import { Question } from "@/type/QuestsType"

type Props = {
    question: Question[]
    answers: number[]
}

export const Result = ({question, answers}: Props) =>{
    return(
        <div className="border-y-2 px-4 mb-4">
        
            {question.map((item, i) =>(
                <div key={i} className="mb-4 border-b">
                    <h2 className="font-bold">{i + 1 }. {item.question}</h2>
                   <p className="">
                    <span className="mx-2 capitalize">
                    Sua resposta - {item.options[answers[i]]}
                    </span>
                    
                   </p>
                   <span className="text-blue-400 capitalize">Resposta Correta - {item.options[item.answer] } </span>
                    
                </div>
            ))}
                


        </div>
    )
}