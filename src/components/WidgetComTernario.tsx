import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";

export function Widget(){
  // aqui é a construção de uma variavel no react, precisa de dois parametro um é o valor e o outro é o paramentro que vai receber o valor antes da variavel principal 
  const [isWidgetOpen, setIsWidgetOpen] = useState(false)
  // uma função que verifica se isWidgetOpen é true or false e irverte o valor
  function toggleWidgetVisibility(){
    setIsWidgetOpen(!isWidgetOpen)
  }
  return (
    <div className="absolute bottom-4 right-4">
      {/* um ternario se isWidgetOpen for true vai mostrar o p senão mostra null */}
      { isWidgetOpen ? <p>hello World</p> : null}
      {/* se o ternario não possuir else como o de cima pode ser feito assim 
      se for true executa senão não executa nada
      { isWidgetOpen && <p>hello World</p>} */}
      <button onClick={toggleWidgetVisibility} className="flex items-center bg-brand-500 rounded-full px-3 h-12 text-white group">
        <ChatTeardropDots className="w-6 h-6"/>

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-700 ease-linear">
          <span className="pl-3"></span>
          Feedback
        </span>
      </button>
    </div>
    )
}