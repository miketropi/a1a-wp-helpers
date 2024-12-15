<?php 
/**
 * Template tags
 */

function a1awh_login_form_template() {
  load_template( A1AWH_DIR . '/templates/login.php', __return_false() );
}

function a1awh_membership_dashboard_template() {
  load_template( A1AWH_DIR . '/templates/membership-dashboard.php', __return_false() );
}

function a1awh_register_form_template() {
  ?>
  <form method="post" id="a1awh-user-register-form">
    <p>
      <label for="firstname"><?php _e('First Name', 'a1a') ?></label>
      <input type="text" name="firstname" />
    </p>
    <p>
      <label for="lastname"><?php _e('Last Name', 'a1a') ?></label>
      <input type="text" name="lastname" />
    </p>
    <p>
      <label for="lastname"><?php _e('Email', 'a1a') ?></label>
      <input type="email" name="email" />
    </p>
    <p>
      <label for="lastname"><?php _e('Password', 'a1a') ?></label>
      <input type="password" name="password" />
    </p>
    <p>
      <label for="lastname"><?php _e('re-Password', 'a1a') ?></label>
      <input type="password" name="re-password" />
    </p>
    <p>
      <button type="submit" class="button button-primary">Register</button>
    </p>
  </form>
  <?php
}