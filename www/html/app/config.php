<?php

session_start();
session_regenerate_id(TRUE);

define('DSN', 'mysql:host=db;dbname=myapp;charset=utf8mb4');
define('DB_USER', 'myappuser');
define('DB_PASS', 'myapppass');
define('SITE_URL', (empty($_SERVER['HTTPS']) ? 'http://' : 'https://') . $_SERVER['HTTP_HOST']);
// define('SITE_URL', (empty($_SERVER['HTTPS']) ? 'http://' : 'https://') . $_SERVER['HTTP_HOST']. '/cota_hairmake');

require __DIR__ . '/helper.php';


spl_autoload_register(function ($class) {
  $prefix = 'MyApp\\';

  if (strpos($class, $prefix) === 0) {
    $fileName = sprintf(__DIR__ . '/%s.php', substr($class, strlen($prefix)));

    if (file_exists($fileName)) {
      require($fileName);
    } else {
      echo 'File not found: ' . $fileName;
      exit;
    }
  }
});
