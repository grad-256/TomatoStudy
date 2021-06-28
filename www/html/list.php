<?php
require_once 'config.php';

require_once(__DIR__ . '/app/config.php');

use MyApp\Database;
use MyApp\StylistRanking;

$pdo = Database::getInstance();
$stylistranking = new StylistRanking($pdo);


$alllist = $stylistranking->getAll();

$countAllList = count($alllist);

require  __DIR__ . '/partials/head.php';

?>

<?php require  __DIR__ . '/partials/header.php'; ?>


<div class="c-form c-comfirm">
  <h1 class="c-title">チェックリスト</h1>
  <div class="c-body">
    <?php for ($i = 0; $i <= $countAllList-1; $i++) : ?>
      <div class="c-list_wrap">
        <?php if (!empty($alllist[$i]->{"created_at"})) : ?>
          <p class="c-time"><?php echo $alllist[$i]->{"created_at"}; ?></p>
        <?php endif; ?>
        <?php for ($g = 1; $g <= count((array)$alllist[$i])-3; $g++) : ?>
          <div class="c-list_body flex items-center">
            <p class="c-list_title">やること<span class="c-number"><?php echo $g; ?></span></p>
            <p class="c-list_text"><?php echo $alllist[$i]->{"todo0" . $g} ?></p>
          </div>
        <?php endfor; ?>
      </div>
    <?php endfor; ?>
  </div>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
