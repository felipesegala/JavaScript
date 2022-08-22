function verificar () {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os daos e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //dar um id em JS
        img.setAttribute('id', 'foto')          //dar um id em JS
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-menino.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-homem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idoso.png')
            }
            
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade > 0 && idade < 10){
                //criança
                img.setAttribute('src', 'bebe-mulher.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'jovem-menina.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos. `
        res.appendChild(img)
    }
}