// 9 - props desestruturada
function CarDetails({brand, km, color}) {
  return (
    <div>
        <h2>Detalhes do carro:</h2>
        <ul>
            <li>marca: {brand}</li>
            <li>km: {km}</li>
            <li>color: {color}</li>
        </ul>
    </div>
  )
}

export default CarDetails