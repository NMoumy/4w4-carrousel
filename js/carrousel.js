(function() {
  console.log('Début du carrousel');

  /******************** Variable du carrousel ********************/

  let carrousel = document.querySelector('.carrousel');
  let carrousel__figure = document.querySelector('.carrousel__figure');
  let carrousel__form = document.querySelector('.carrousel__form');

  /******************** Variable des boutons ********************/

  let btn__droite = document.querySelector('.carrousel__droite');
  let btn__gauche =  document.querySelector('.carrousel__gauche');
  let btncarrousel__x = document.querySelector('.carrousel__x');

  /******************** Variable de la galerie ********************/

  let galerie = document.querySelector('.galerie');
  let galerie__img =  galerie.querySelectorAll('img');

  /******************** Positionnement de l'image active du carrousel ********************/

  let index = 0; // permet d'identifier l'image courante du carrousel
  let ancien_index = -1; // permet d'identifier l'image précédente
  let position = 0; // permet d'indexer les images de la galerie

  /******************** Ouvrir la boîte modale ********************/

  for (const elm of galerie__img)
  {
    elm.dataset.index = position;
    elm.addEventListener('mousedown',function(){
      carrousel.classList.add('carrousel--ouvrir');
      index = this.dataset.index;
      afficher_image(index);
      console.log(index);
    })

    creation_img_carrousel(elm);
    creation_radio_carrousel();

  }

  /******************** Les boutons ********************/

  //Fermer la boîte modale
  btncarrousel__x.addEventListener('mousedown', () => {
    console.log('fermer la boîte modale');
    carrousel.classList.remove('carrousel--ouvrir');
  })

  //Gerer le bouton de flèche droite
  btn__droite.addEventListener('mousedown', function(){
    index++;
    if(index== galerie__img.length){
      index=0;
    }
    console.log("où est index btn droite : " + index);
    afficher_image(index);
  })

  //Gerer le bouton de flèche gauche
  btn__gauche.addEventListener('mousedown', function(){
    index--;
    if(index==-1){
      index= galerie__img.length-1;
    }
    console.log("où est index btn gauche : " + index);
    afficher_image(index);
  })

  /******************** Fontions ********************/

  /**
   * creation_img_carrousel
   * Creer l'ensemble des images de la galerie dans la boite modale carrousel
   */

  function creation_img_carrousel(elm)
  {
    let img = document.createElement('img');
    // img.setAttribute('src', elm.getAttribute('src'));

    /* retire les 12 dernier caractère «-150x150.jpg» pour avoir une bonne resolution */
    let longueur = elm.src.length-12;
    //let extension = elm.src.substr(0,-4);
    img.src = elm.src.substr(0,longueur)+".jpg";


    img.classList.add('carrousel__img');
    // console.log(img__src);
    carrousel__figure.appendChild(img);
  }

  /**
   * creation_radio_carrousel
   * Création d'un bouton-radio
   */
  
  function creation_radio_carrousel() 
  {
    let rad = document.createElement('input');
    rad.setAttribute('type','radio');
    rad.setAttribute('name','carrousel__rad');
    rad.classList.add('carrousel__rad')
    rad.dataset.index = position;
    position += 1;
    carrousel__form.appendChild(rad);

    rad.addEventListener('mousedown', function(){
      console.log("index btn toucher : "+this.dataset.index);
      index = parseInt(this.dataset.index);
      afficher_image(index);
    })
  }

  /**
   * afficher_image
   * afficher les images
   */

  function afficher_image(index) 
  {
    if(ancien_index != -1) {
      // carrousel__figure.children[this.dataset.index].style.opacity = 0;
      carrousel__figure.children[ancien_index].classList.remove('carrousel__img--activer');
      carrousel__form.children[ancien_index].checked = false;
    }
    console.log(ancien_index);
    // carrousel__figure.children[this.dataset.index].style.opacity = 1;
    carrousel__figure.children[index].classList.add('carrousel__img--activer');
    ancien_index = index;
    carrousel__form.children[ancien_index].checked = true;
  }

  function changer_resolution() {
    
  }
  
/*
  permet de vérifier si la classe « carrousel--activer » 
  se trouve dans la liste des classe carrousel
  carrousel.classList.contain('carrousel--activer')
  mdn classList.contain()
*/

})()