<?php
require_once 'config.php';

require_once(__DIR__ . '/app/config.php');

use MyApp\Database;
use MyApp\StylistRanking;

$pdo = Database::getInstance();
$stylistranking = new StylistRanking($pdo);


require  __DIR__ . '/partials/head.php';

?>

<?php require  __DIR__ . '/partials/header.php'; ?>


<div class="c-form c-comfirm">
  <h1 class="c-title">カレンダー</h1>
  <div class="c-body">
  </div>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
