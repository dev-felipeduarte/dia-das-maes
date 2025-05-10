let contador = 1;

setInterval(function(){
    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if(contador > 4){
        contador = 1;
    }
}, 3000);

const myObserver = new IntersectionObserver( (animacao) => {
    animacao.forEach( (entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const imagem = document.querySelectorAll('.animacao')

imagem.forEach( (imagem) => myObserver.observe(imagem))