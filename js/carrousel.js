(function() {
  console.log('Début du carrousel');

  let btncarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
  let btncarrousel__x = document.querySelector('.carrousel__x');
  let carrousel = document.querySelector('.carrousel');
  let galerie = document.querySelector('.galerie');
  let galerie__img =  galerie.querySelectorAll('img');

  // console.log('galerie__img: ' + galerie__img.length);

  btncarrousel__ouvrir.addEventListener('mousedown', () => {
    carrousel.classList.add('carrousel--ouvrir');
    console.log('ouvrir la boîte modale');
    ajouter_img_dans_carrousel()
  })

  btncarrousel__x.addEventListener('mousedown', function() {
    console.log('fermer la boîte modale');
    carrousel.classList.remove('carrousel--ouvrir');
  })

  /**
   * ajouter_img_dans_carrousel
   * Ajouter l'ensemble des images de la galerie dans la boite modale carrousel
   */
  function ajouter_img_dans_carrousel() {
    for (const elm of galerie__img) {
      let img = document.createElement('img');
      // console.log(elm.getAttribute('src'));
      let img__src = elm.getAttribute('src');
      img.setAttribute('src', img__src);
      console.log(img__src);
    }
  }
  
})()