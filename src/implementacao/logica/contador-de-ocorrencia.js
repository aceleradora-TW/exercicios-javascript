function contadorDeOcorrencia(texto, letra) {
    
    let contador = 0
    let str = texto
    let posicao = str.indexOf(letra)

    while (posicao != -1) {
        contador++ 
        posicao = str.indexOf(letra, posicao++)
    }
    return contador 
}
module.exports = contadorDeOcorrencia;