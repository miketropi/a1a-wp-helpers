<?php 

function a1awh_membership_dashboard() {
  if(is_user_logged_in()) {
    a1awh_membership_dashboard_template();
  } else {
    a1awh_login_form_template();
  }
}