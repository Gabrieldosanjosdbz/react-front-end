
function Container(prop) {
  return (
    <div>
        <h1>Conteudo do componente pai: </h1>
        {prop.children}
    </div>
  )
}

// ou poderia ser assim também da maneira desestruturada 
/* function Container({children}) {
    return (
        <div>
            <h1>Conteudo do componente pai: </h1>
            {children}
        </div>
    )
}*/

export default Container