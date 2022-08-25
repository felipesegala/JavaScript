function clicar() { //código somente funciona após o click
    let ini = document.getElementById('txti') //pega o valor da caixa
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) { //não permite a contagem sem digitar algum numero 
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML= 'Contando: <br>'
        let i = Number(ini.value) //transforma o valor de ini em número
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0) {
            alert('Passo inválido! Considerando PASSO como 1')
            p = 1
        }
        //contagem crescente
        if ( i < f){
            for(let c =i; c <= f; c += p) {  //este é o código da contagem
                res.innerHTML += `${c} \u{1F449}`// isto mostra na tela contagem e emoji
            }
            
        } else {
            //contagem decrescente
            for (let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}` 
            }
        }
        res.innerHTML += `\u{1F3C1}` // este mostra ao final da contagem uma bandeira
    }
}