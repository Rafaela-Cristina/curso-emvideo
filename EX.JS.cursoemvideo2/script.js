function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')  
    var data = new Date ()
    //var hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia! 
        img.src= 'manha2.png'
        document.body.style.background = '#96a8db'      
    } else if (hora >=12 && hora < 18){
        img.src= 'tarde2.png'
        document.body.style.background ='#eda484'
        // boa tarde!
    } else{
        // Boa Noite!
        img.src = 'noite1.png'
        document.body.style.background = '#002336'
    }
}
