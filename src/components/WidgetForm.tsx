import { CloseButton } from "./CloseButton"
import { Heart } from "phosphor-react"
import bugIcone from "../assets/bug.svg"
import ideaIcone from "../assets/idea.svg"
import cloudIcone from "../assets/cloud.svg"
const feedbackTypes = {
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

export function WidgetForm(){
  return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <CloseButton/>
        <span className="text-xl leading-6">Deixe seu feedback</span>
      </header>

      <div className="flex py-8 gap-2 w-full">
       {Object.entries(feedbackTypes).map(([key, value]) => {
         return(
           <button>
             <img src={value.image.source} alt={value.image.alt} />
             <span>{value.title}</span>
           </button>
         )
       })}
      </div>

      <footer className="text-xs text-neutral-400 ">
        <p>Feito com <Heart className="inline-flex"/> por <a href="#" className="underline underline-offset-1"> Rodrigo</a>  </p>
      </footer>
    </div>
  )
}