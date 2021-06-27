<?php

require_once(__DIR__ . '/app/config.php');
use MyApp\Database;
use MyApp\StylistRanking;
$pdo = Database::getInstance();
$stylistranking = new StylistRanking($pdo);

$stylistranking->processPost();
