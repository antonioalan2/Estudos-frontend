
function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()
    
    msg.innerHTML = `Agora são ${hora}horas.`
    
    if (hora >= 0 && hora < 12){
        img.src = "manha.png"
        document.body.style.background = '#ddcb4f'
    } else if(hora >= 12 && hora <= 18){
        img.src = "tarde1.png"
        document.body.style.background = '#e99241'
    } else{
        img.src = "noite.png"
        document.body.style.background = '#2c3338'
    }
}