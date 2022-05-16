// o typescript pede para que diga o que o props vai receber o codigo abaixo demonstra isso interface nome nome do paramentro e conteudo que ira receber
interface ButtonProps{
  text: string;
}
// um componente precisa comecar com letra maiuscula para diferenciar do html 
// com props é possivel consumir o parametro vindo no button
// : ButtonProps é a que diz a props que tipo de dados tem de receber
function Button(props: ButtonProps){
  // como props é um objeto para acessar o text é necessario obj.parametro
  //para usar js no meio do meu html só envolver em {}
  //?? seria como um ternario se for passado algo no props assume o valor senão será default
  //tailwind se assemelha ao bootstrap tem uma serie de cores e propriedades prontas
  //para usar uma cor custom basta usar bg-[#corescolhida]
  return <button className="bg-violet-500 px-4 h-10 rounded hover:bg-green-500 transition-colors">{props.text ?? 'default'}</button>
}
// esse é um componente botao

function App() {
  // o return não pode renderizar mais de uma tag html então geralmente se envolve todo o conteudo em uma div
  return (
    <div className="flex gap-2">
      {/* o text no caso é um paramentro que é enviado ao componente button no button é possivel consumir isso  */}
      <Button text="Enviar"/>
      <Button text="OK"/>
      <button className="exemplo-classe">oi</button>
    </div>
    )
}

export default App