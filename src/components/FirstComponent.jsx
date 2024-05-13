// 1 - Criando componente

import MyComponents from "./MyComponents";

const FirstComponent = () => {
    return (    //quando retorno um objeto, tem que ser parentese no Return
               //No return sempre tem que ter uma div pai dentro dele 
        <div>  
            <h2>Meu primeiro componente!</h2>

            {/*5 - hierarquia de componentes*/}
            {/*Estou chamando um componente em outro, e esse outro será apresentado tbm no App.jsx como componente filho*/}
            <MyComponents/>
        </div>
    )
}

export default FirstComponent;