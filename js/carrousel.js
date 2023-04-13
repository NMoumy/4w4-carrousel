(function() {
  console.log('Début du carrousel');
  let btncarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
  let btncarrousel__x = document.querySelector('.carrousel__x');
  let carrousel = document.querySelector('.carrousel');

  btncarrousel__ouvrir.addEventListener('mousedown',function(){
    carrousel.classList.add('carrousel--ouvrir');
  })

  btncarrousel__x.addEventListener('mousedown',function(){
    carrousel.classList.remove('carrousel--ouvrir');
  })
  
})()