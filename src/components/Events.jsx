// 6 - Eventos 

function Events() {

    //Geralmente as funções dos componentes ficam entre a inicialização e o return
    const handleClick = (e) => {
        console.log(e);
        console.log("Executou da mesma maneira");
    }

    // 8 - Função de renderização
    const renderSomething = (x) => {
        if(x) {
            return <h1>Renderizando isso!</h1> //utilizando jsx em javascript! Precisamos do return
        } else {
            return <h1>Renderizando outra coisa!</h1>
        }

    };

  return (
    <div>
        <div>
            {/* em HTML o que fica depois da TAG é chamada de atributo, em react é chamado de propriedade (prop) */}
            <button onClick={(e) => console.log("Testando um evento!" + e.target)}>clique aqui sem função</button>
        </div>
        {/*  7 - evento com função*/}
        <div>
            <button onClick={handleClick}>clique aqui com função</button>
        </div>
        {/* 8 - Função com render*/}
        {renderSomething("Gabriel")}
        {renderSomething()}

        {/* este tipo de return ele serve como uma condicional.
        Se o valor antes do && é true, o que for passado depois do && é executado, caso contrario pula para o proximo return */}
        {10 > 2 && <p>carregando...</p>}
        
    </div>
  )
}

export default Events