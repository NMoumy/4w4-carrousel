<?php
/**
 * Plugin Name: Carrousel
 * Author: Moumy Ndiaye
 * Author URI: https://github.com/NMoumy
 * Description: Permet d'afficher le images d'une galerie dans une boîte modale navigable
 * Version: 1.0.0
*/

function enfiler_script_css() 
{
  $version_css = filemtime(plugin_dir_path(__FILE__) . 'style.css');
  $version_js = filemtime(plugin_dir_path(__FILE__) . 'js/carrousel.js');
  wp_enqueue_style( 'style_carrousel',
                    plugin_dir_url(__FILE__) . 'style.css',
                    array(),
                    $version_css
  );
  wp_enqueue_script(  'js_carrousel',
                      plugin_dir_url(__FILE__) . 'js/carrousel.js',
                      array(),
                      $version_js,
                      true // ajoute le scri^t carrousel.js a la fin de la page
  );
}
add_action('wp_enqueue_scripts', 'enfiler_script_css');

function genere_boite() 
{
  return '
    <div class="carrousel">
      <button class="carrousel__x">X</button>
      <figure class="carrousel__figure"></figure>
      <form class="carrousel__form"></form>
    </div>
  ';
}
add_shortcode('carrousel', 'genere_boite');
