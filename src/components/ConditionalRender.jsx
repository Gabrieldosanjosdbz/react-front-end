function ConditionalRender() {
    const x = true;

    const name = "Gabriel"

  return (
    <div>
        {/* 7 - render condicional */}
        <h3>Isso será exibido?</h3>

        {/*Se a expressão antes do && for avaliada como verdadeira, o React renderiza o que está depois do &&.*/}
        {x && <p>Se x for true sim!</p>}

        {/* 8 -  else */}
        <h3>Render ternário</h3>
        {name === "Gabriel" ? (
            <div>
                <p>Olá {name}</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado</p>
            </div>
        )}
    </div>
  )
}

export default ConditionalRender