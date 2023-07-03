"use client"

import { Quest } from "@/components/Quest"
import { question } from "@/data/Quest"
import { Result } from "@/components/Resultado"
import { useState } from "react"


export default function Home() {
 
const [currentQuestion, setCurrentQuestion] = useState(0)
const [answers, setAnswers] = useState<number[]>([0])
const [showResult, setShowResult] = useState(false)

function nexQuestion() {
  if (question[currentQuestion + 1] ) {
    setCurrentQuestion(currentQuestion + 1)
  } else {
    setShowResult(true)
  }
}


const handleAnswer = (i:number) =>{
  setAnswers([...answers, i])
  nexQuestion() 
}

console.log(answers);

function restartQuiz() {
  setAnswers([])
  setCurrentQuestion(0)
  setShowResult(false)
}


  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 text-black">
      
      <div className="bg-white rounded-md w-96 ">
        <h1 className=" p-4 text-left text-xl">Quis de Culinária</h1>
         <div className="text-center">

          {!showResult &&
           <Quest
          question = {question[currentQuestion]}
          count = {currentQuestion + 1}
          handleAnswer = { handleAnswer}
          />
          }
         
         {showResult &&
         <Result
         question = {question} 
         answers = {answers}
         />
         }
          </div>
          
            {!showResult &&
             <div className="text-center my-4">
            <span>{currentQuestion + 1} de {question.length} Pergunta{question.length === 1 ? '' : 's'}</span>
           </div>
           }

            {showResult &&
             <div className="text-center my-4">
            <button onClick={restartQuiz} className="py-2 px-3 bg-blue-400 hover:bg-blue-500 rounded-md">Reiniciar Quiz</button>
           </div>
           }
          
      
      </div>
          
    </main>
  )
}
