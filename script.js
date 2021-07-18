function carregar (){
    let msg = document.getElementById('msg')
    let data = document.getElementById('data')
    let img = document.getElementById('imagem')

    let dd = new Date();
    let dia = dd.getDate();
    let mes = dd.getMonth();
    let ano = dd.getFullYear();
    let hora = dd.getHours();
   //var hora = 8 //--------> escolha a hora para fazer o teste nessa linha, comentando a linha de cima
    msg.innerHTML = `Agora são ${hora}:00 horas.`
    data.innerHTML = `Hoje é dia ${dia} do ${mes} de ${ano}.`

    if (hora>=0 && hora<12){
        //bom dia
        document.body.style.background = '#e2cd9f'
    } else if (hora>=12  && hora<18){
        //boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background ='#b9846f'
    } else if (hora>=18){
        img.src = 'noite.jpg'
        document.body.style.background ='#515154'
        //boa noite
    }
}

//jquery transition

document.getElementById("imagem").animate([
    // keyframes
    { transform: 'translateY(1000px)' },
    { transform: 'translateY(0px)' }
  ], {
    // timing options
    duration: 1500,
    iterations: 1
  });
