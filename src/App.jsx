import { useState } from 'react'
import './App.css'
import Dados from './componentes/Dados'                   //1° - Importação do componente filho, para podemos criar os atributos nele.
import Header from './componentes/Header'
import Corpo from './componentes/Corpo'
import SecondeDados from './componentes/SecondDados'


function App() {

  const cnl= 'Brunão'                       //4° - Valores para os atributos.
  const yt= 'youtube.com/brunao'
  const crs= 'React.js'

  return (
    <>
      <Header />
      <Corpo />                             {/* Vá nesse componente, para ver uma outra maneira de receber os valores,
                                             passando de um componente para o outro. */}
      <Dados                                //2° - Aqui estamos inserindo o componente filho.
      canal={cnl}                           /*3° - Aqui, criamos os atributos, no qual colocamos os valores e assim o componente filho, 
                                            neste caso, Dasos.js, recebera os valores desse atributo.*/
      youtube={yt} 
      curso={crs}
      />
    </>
  )
}

export default App
