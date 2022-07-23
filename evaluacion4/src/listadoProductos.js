function ListadoResultados(prop) {
    return (
        <tbody>
            {prop.resultados.map((elemento) =>
                <tr>
                    <th> {elemento.codigo_} </th>
                    <td> {elemento.articulo_} </td>
                    <td> {elemento.descripicion_} </td>
                    <td> ${elemento.precio_}</td>
                    <td> {elemento.cantidad_}</td>
                    <td> ${elemento.total_}</td>
                    <td> ${elemento.totalDescuento_}</td>
                </tr>
            )
            }
        </tbody >
    );
}
export default ListadoResultados;


/*
        <ol>
            {prop.resultados.map((elemento) =>
                <li>Lado A:{elemento.valor1} Lado B: {elemento.valor1} Área: {elemento.resultado}</li>
            )
            }
        </ol>
*/
