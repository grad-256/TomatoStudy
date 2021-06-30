<?php

function nowUrl()
{
  $url = '';
  if (isset($_SERVER['HTTPS'])) {
    $url .= 'https://';
  } else {
    $url .= 'http://';
  }
  $url .= $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
  $urlarray = explode("/", $url);
  $last = end($urlarray);

  return str_replace('.php', '', $last);
}
?>

<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="format-detection" content="telephone=no">
  <meta property="og:title" content="">
  <meta property="og:type" content="website" />
  <meta property="og:url" content="" />
  <meta property="og:image" content="" />
  <meta property="og:description" content="" />
  <meta property="og:locale" content="ja_JP" />
  <title>Tomato Study | ポモドーロ・テクニックで学習する</title>
  <link rel="stylesheet" href="<?php echo BASE_STYLES_PATH; ?>/main.css">
  <link rel='stylesheet' href='<?php echo BASE_STYLES_PATH; ?>/common/styles.css'>
  <link rel='stylesheet' href='<?php echo BASE_STYLES_PATH; ?>/pages/all/styles.css'>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=default%2CNodeList.prototype.forEach%2Csmoothscroll%2CObject.entries"></script>

  <script src="<?php echo BASE_SCRIPTS_PATH; ?>/common/viewport.js"></script>
  <script src="<?php echo BASE_SCRIPTS_PATH; ?>/runtime.js" defer="defer"></script>
  <script src="<?php echo BASE_SCRIPTS_PATH; ?>/vendors.js" defer="defer"></script>
  <script src="<?php echo BASE_SCRIPTS_PATH; ?>/common/index.js" defer="defer"></script>
  <script src="<?php echo BASE_SCRIPTS_PATH; ?>/all/index.js" defer="defer"></script>

  <?php if (nowUrl() === "today") : ?>
    <script src="<?php echo BASE_SCRIPTS_PATH; ?>/today/index.js" defer="defer"></script>
  <?php endif; ?>


</head>

<body>
