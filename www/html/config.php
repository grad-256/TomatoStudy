<?php
// タイムゾーンを設定
date_default_timezone_set('Asia/Tokyo');

define('CURRENT_URI', $_SERVER['REQUEST_URI']);
define('BASE_CONTEXT_PATH', '/');

define('BASE_IMAGES_PATH', BASE_CONTEXT_PATH . 'assets/imagess/');
define('BASE_SCRIPTS_PATH', BASE_CONTEXT_PATH . 'assets/scripts');
define('BASE_STYLES_PATH', BASE_CONTEXT_PATH . 'assets/styles');
define('BASE_ASSETS_PATH', BASE_CONTEXT_PATH . 'assets');
define('SOURCE_BASE', __DIR__ . '/');

define('GO_HOME', 'home');
define('GO_REFERER', 'referer');

define('DEBUG', true);
