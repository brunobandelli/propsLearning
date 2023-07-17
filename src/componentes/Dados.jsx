import React from "react";
import SecondeDados from "./SecondDados";

/* Em relação com o Componente App.js, este componente atual é o filho. */

export default function Dados(props){          /*1° - Aqui estamos preparando o coponente para utilizar os atributos que sejam passados
                                               para ele. Dentro da função colocamos (props), e depois chamares os atributos que virão 
                                               do componente pai, neste caso App.js*/

    const inst = "@brunobandelli"
    const link = "linkedin/in/brunobandelli"
    const git = "github.com/brunobandelli"
                                               
    return(
        <section>
            <br/> 
            <p>Canal: {props.canal}</p>          {/*2° - Lembrando que {props.atributo}, o atributo  é obrigatoriamente
                                                 o mesmo nome dos atributos criados no componente pai, ou seja,
                                                 {props.canal}, ai então, ele irá capturar o valor contido no atributo 
                                                 que foi passado.*/}
            <p>Youtube: {props.youtube}</p>
            <p>Curso: {props.curso}</p>
            <SecondeDados instagram={inst} linkedin={link} github={git} />
        </section>
    )
}