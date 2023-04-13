(function() {
  console.log('Début du carrousel');

  /******************** Variable du carrousel ********************/
  let btncarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
  let btncarrousel__x = document.querySelector('.carrousel__x');
  let carrousel = document.querySelector('.carrousel');
  let carrousel__figure = document.querySelector('.carrousel__figure');

  /******************** Variable de la galerie ********************/
  let galerie = document.querySelector('.galerie');
  let galerie__img =  galerie.querySelectorAll('img');
  // console.log('galerie__img: ' + galerie__img.length);

  /******************** Ouvrir la boîte modale ********************/
  btncarrousel__ouvrir.addEventListener('mousedown', () => {
    carrousel.classList.add('carrousel--ouvrir');
    console.log('ouvrir la boîte modale');
    ajouter_img_dans_carrousel()
  })

  /******************** Fermer la boîte modale ********************/
  btncarrousel__x.addEventListener('mousedown', () => {
    console.log('fermer la boîte modale');
    carrousel.classList.remove('carrousel--ouvrir');
  })

  /******************** Fontions ********************/
  /**
   * ajouter_img_dans_carrousel
   * Ajouter l'ensemble des images de la galerie dans la boite modale carrousel
   */
  function ajouter_img_dans_carrousel() {
    for (const elm of galerie__img) {
      let img = document.createElement('img');
      let img__src = elm.getAttribute('src');
      img.setAttribute('src', img__src);
      console.log(img__src);
      carrousel__figure.appendChild(img);
    }
  }
  
})()