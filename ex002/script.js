function verificar(){
   let data = new Date()
   let ano = data.getFullYear()
   let fano  = document.getElementById('txtano')
   let res = document.getElementById ('res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else{
    let fsex = document.getElementsByName ('radsex')
    let idade = ano - Number(fano.value)
    let genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if(fsex[0].checked){
        genero = 'Homem'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'piazinho.jpg')
        } else if( idade >= 10 && idade < 21){
            //jovem
            img.setAttribute('src', 'jovemH.jpg')
        } else if ( idade <50){
            //adulto
            img.setAttribute('src', 'homem.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idoso.jpg')
        }
    } else{
        genero = 'Mulher'
        if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src', 'menina.jpg')
        } else if( idade >= 10 && idade < 21){
            //jovem
            img.setAttribute('src', 'jovem.jpg')
        } else if ( idade <50){
            //adulto
            img.setAttribute('src','adulta.jpg')
        } else {
            //idoso
            img.setAttribute('src', 'idosa.jpg')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML= `Detectamos ${genero} com ${idade}  anos`
    res.appendChild(img)
   }
}