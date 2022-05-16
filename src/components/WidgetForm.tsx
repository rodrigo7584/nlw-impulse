import {Bug, Cloud, Heart, Lightbulb} from "phosphor-react"
import { CloseButton } from "./CloseButton"

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: <Bug/>
  },
  IDEA:{
    title: 'Ideia',
    image: <Lightbulb/>
  },
  OTHER:{
    title: 'Outro',
    image: <Cloud/>
  }
}

export function WidgetForm(){
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <CloseButton/>
        <span className="text-xl leading-6">Deixe seu feedback</span>
      </header>

      <div className="flex py-8 gap-2 w-full">
       {Object.entries(feedbackTypes)}
      </div>

      <footer className="text-xs text-neutral-400 ">
        <p>Feito com <Heart className="inline-flex"/> por <a href="#" className="underline underline-offset-1"> Rodrigo</a>  </p>
      </footer>
    </div>
  )
}