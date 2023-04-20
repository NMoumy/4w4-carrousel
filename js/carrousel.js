(function() {
  console.log('Début du carrousel');

  /******************** Variable du carrousel ********************/
  let btncarrousel__ouvrir = document.querySelector('.carrousel__ouvrir');
  let btncarrousel__x = document.querySelector('.carrousel__x');
  let carrousel = document.querySelector('.carrousel');
  let carrousel__figure = document.querySelector('.carrousel__figure');
  let carrousel__form = document.querySelector('.carrousel__form');

  /******************** Variable de la galerie ********************/
  let galerie = document.querySelector('.galerie');
  let galerie__img =  galerie.querySelectorAll('img');
  // console.log('galerie__img: ' + galerie__img.length);

  /******************** Positionnement de l'image active du carrousel ********************/
  let index = 0;
  let ancien_index = -1
  let position = 0

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
    for (const elm of galerie__img)
    {
      elm.dataset.index = position
      elm.addEventListener('mousedown',function(){
        index = this.dataset.index
        afficher_image(index)
        console.log(index)
      })
  
      creation_img_carrousel(elm)
      creation_radio_carrousel()
    }
  }

  /**
   * creation_img_carrousel
   * Creer l'ensemble des images de la galerie dans la boite modale carrousel
   */
  function creation_img_carrousel(elm){
    let img = document.createElement('img');
    // img.setAttribute('src', elm.getAttribute('src'));
    img.src = elm.src;
    img.classList.add('carrousel__img');
    // console.log(img__src);
    carrousel__figure.appendChild(img);
  }

  /**
   * creation_radio_carrousel
   * Création d'un bouton-radio
   */
  function creation_radio_carrousel() {
    let rad = document.createElement('input');
    rad.setAttribute('type','radio');
    rad.setAttribute('name','carrousel__rad');
    rad.classList.add('carrousel__rad')
    rad.dataset.index = position;
    position += 1;
    carrousel__form.appendChild(rad);

    rad.addEventListener('mousedown', function(){
      console.log(this.dataset.index);
      index = this.dataset.index;
      afficher_image(index);
    })
  }

  /**
   * afficher_image
   * afficher les images
   */
  function afficher_image(index) {
    if(ancien_index != -1) {
      // carrousel__figure.children[this.dataset.index].style.opacity = 0;
      carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer');
      //carrousel__form.children[ancien_index].checked 
    }
    // carrousel__figure.children[this.dataset.index].style.opacity = 1;
    carrousel__figure.children[index].classList.add('carrousel__img--activer');
    ancien_index = index;
  }
  
/*
  permet de vérifier si la classe « carrousel--activer » 
  se trouve dans la liste des classe carrousel
  carrousel.classList.contain('carrousel--activer')
  mdn classList.contain()
*/

})()