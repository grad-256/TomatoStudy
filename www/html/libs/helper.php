<?php


function redirect($path)
{

  if ($path === GO_HOME) {

    $path = get_url('');
  } else if ($path === GO_REFERER) {

    $path = $_SERVER['HTTP_REFERER'];
  } else {

    $path = get_url($path);
  }

  header("Location: {$path}");

  die();
}

function the_url($path)
{
  echo get_url($path);
}

function get_url($path)
{
  return BASE_CONTEXT_PATH . trim($path, '/');
}

function is_alnum($val)
{

  return preg_match("/^[a-zA-Z0-9]+$/", $val);
}

function h($var)
{
  if (is_array($var)) {
    return array_map('h', $var);
  } else {
    return htmlspecialchars($var, ENT_QUOTES, 'UTF-8');
  }
}

function checkInput($var)
{
  if (is_array($var)) {
    return array_map('checkInput', $var);
  } else {
    //NULLバイト攻撃対策
    if (preg_match('/\0/', $var)) {
      die('不正な入力です。');
    }
    //文字エンコードのチェック
    if (!mb_check_encoding($var, 'UTF-8')) {
      die('不正な入力です。');
    }
    //改行、タブ以外の制御文字のチェック
    if (preg_match('/\A[\r\n\t[:^cntrl:]]*\z/u', $var) === 0) {
      die('不正な入力です。制御文字は使用できません。');
    }
    return $var;
  }
}
