import React from "react";
import Dados from './Dados'                 /*1° - Neste caso eu estou passando um componente dentro do outro, 
                                            e passando os atributos para ele. E este acaba se tornando o componente Pai.*/

const cnl= 'Brunão'                         //4° - Valores para os atributos.
const yt= 'youtube.com/brunao'
const crs= 'React.js'

export default function Corpo(){
    return(
        <section>
            <br/>
            CORPO
                <Dados                      //2° - Aqui estamos inserindo o componente Filho.
                    canal={cnl}             /*3° - Aqui assim como acontece em App.js, criamos os atributos, no qual colocamos
                                             os valores e assim o componente filho, neste caso, Dasos.js, recebera os valores desse 
                                             atributo.*/
                    youtube={yt} 
                    curso={crs}
                />
        </section>
    )
}