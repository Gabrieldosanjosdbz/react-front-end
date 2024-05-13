//O argumento da função nós colocamos como props pq significa que estamos esperando propriedades dele
function ShowUserName(props) {
  return (
    <div>
        {/* o "name" é como se fosse um atributo do HTML, onde nós declaramos chamamento do componente */}
        {/*aqui to recebendo um dado */}
        <h2>O nome do usuário é: {props.name}</h2>
    </div>
  )
}

export default ShowUserName