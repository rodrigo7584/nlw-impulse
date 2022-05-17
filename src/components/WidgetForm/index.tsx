import { CloseButton } from "../CloseButton"
import { Heart } from "phosphor-react"
import bugIcone from "../../assets/bug.svg"
import ideaIcone from "../../assets/idea.svg"
import cloudIcone from "../../assets/cloud.svg"
import { useState } from "react"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep"
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
export const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugIcone,
      alt: 'icone inseto'
    }
  },
  IDEA:{
    title: 'Ideia',
    image: {
      source: ideaIcone,
      alt: 'icone ideia'
    }
  },
  OTHER:{
    title: 'Outro',
    image: {
      source: cloudIcone,
      alt: 'icone nuvem'
    }
  }
}
export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
  const [feedbackType,setFeedbackType] = useState<FeedbackType | null>(null)
  
  function handleRestartFeedback(){
    setFeedbackType(null);
  }

  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
       ) : (
        <FeedbackContentStep 
        feedbackType={feedbackType}
        onFeedbackRestartRequested={handleRestartFeedback}
        />
       )}

      <footer className="text-xs text-neutral-400 ">
        <p>Feito com <Heart className="inline-flex"/> por <a href="#" className="underline underline-offset-1"> Rodrigo</a>  </p>
      </footer>
    </div>
  )
}