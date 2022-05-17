import { ArrowLeft, Camera } from "phosphor-react";
import { FeedbackType, feedbackTypes } from ".."
import { CloseButton } from "../../CloseButton"

interface FeedbackContentStepProps{
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested
}: FeedbackContentStepProps){
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return(
    <>
      <header>
        <button 
        type="button" 
        className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4"/>
        </button>
        <CloseButton/>
        <span className="text-xl leading-6 flex items-center gap-2">
          <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6"/>
          {feedbackTypeInfo.title}
        </span>
      </header>
      <form className="my-4 w-full">
        <textarea 
         className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:text-zinc-400 text-zinc-100 border-zinc-400 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none scrollbar-thumb-zinc-100 scrollbar-track-transparent scrollbar-thin"
         placeholder="Descreva seu problema.."
        />
        <footer className="flex m-2 gap-2">
          <button 
          type="button"
          className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 "
          >
            <Camera className="w-6 h-6 text-zinc-100" weight="bold"/>
          </button>
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  )
}