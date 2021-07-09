<?php

namespace MyApp;

class Ticket
{
  public static function create()
  {
    if (!isset($_SESSION['ticket'])) {
      $_SESSION['ticket'] = bin2hex(random_bytes(32));
    }
  }

  public static function validate()
  {
    if (
      empty($_SESSION['ticket']) ||
      $_SESSION['ticket'] !== filter_input(INPUT_POST, 'ticket')
    ) {
      exit('Invalid post request');
    }
  }
}
