<?php
session_start();

ob_start(); // phpの実行の一番最初に記述
// 以降の出力文字に関してはバッファ一時保存される。


require_once 'config.php';

// Library]
require_once SOURCE_BASE . 'libs/helper.php';
require_once SOURCE_BASE . 'libs/router.php';

// Model

// Message

// DB

// Partials
require_once SOURCE_BASE . 'partials/header.php';
require_once SOURCE_BASE . 'partials/head.php';
require_once SOURCE_BASE . 'partials/footer.php';

// View
require_once SOURCE_BASE . 'views/home.php';
require_once SOURCE_BASE . 'views/login.php';
require_once SOURCE_BASE . 'views/register.php';

use function lib\route;


try {

  \partials\header();

  $url = parse_url(CURRENT_URI);
  $rpath = str_replace(BASE_CONTEXT_PATH, '', $url['path']);
  $method = strtolower($_SERVER['REQUEST_METHOD']);

  route($rpath, $method);

  \partials\footer();
} catch (Throwable $e) {

  die('bad!!!!!! index.php');
}
