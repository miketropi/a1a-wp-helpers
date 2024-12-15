<?php 
/**
 * Static
 */

add_action( 'wp_enqueue_scripts', 'a1awh_enqueue_scripts' );

function a1awh_enqueue_scripts() {
  // wp_enqueue_style( 'a1awh-css', A1AWH_URL . '/build/global-js-css/style-index.css', false, A1AWH_VERSION );
  wp_enqueue_script( 'a1awh-js', A1AWH_URL . '/build/index.js', ['jquery', 'react', 'wp-element'], A1AWH_VERSION, true );
}