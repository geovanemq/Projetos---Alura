function adicionarFilme(){
    var filme = document.getElementById('filme').value
    if(filme.endsWith('.jpg' | 'Det&rs=1' | 'ImgRaw&r=0')){
        listarfilmesnatela(filme)
   } else{
       console.error('Endereço de filme invalido')
    }
    

    document.getElementById('filme').value = ''
}
document.getElementById('filme').value = ''

function listarfilmesnatela(filme){
    var filmefavorito = '<img src=' + filme + '>'
    var listafilmes = document.getElementById('listaFilmes')
    listafilmes.innerHTML = listafilmes.innerHTML + filmefavorito
}