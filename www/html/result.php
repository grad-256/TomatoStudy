<?php
require_once 'config.php';

require_once(__DIR__ . '/app/config.php');

use MyApp\Database;
use MyApp\StylistRanking;

$pdo = Database::getInstance();
$stylistranking = new StylistRanking($pdo);


$alllist = $stylistranking->getAll();

$countAllList = count($alllist);

require __DIR__ . '/libs/helper.php';


require  __DIR__ . '/partials/head.php';

?>

<?php require  __DIR__ . '/partials/header.php'; ?>


<div class="c-form c-comfirm">
  <h1 class="c-title">本日の結果</h1>
  <div class="c-body">
    <div class="c-list_wrap">
      <div class="c-list_body flex items-center">
        <p class="c-list_title">やること1</span></p>
        <p class="c-list_text check relative">セキュリティの動画を見る</p>
      </div>
    </div>
  </div>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
