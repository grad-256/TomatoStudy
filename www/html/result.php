<?php
require_once 'config.php';

require_once(__DIR__ . '/app/config.php');

use MyApp\Database;
use MyApp\StylistRanking;

$pdo = Database::getInstance();
$stylistranking = new StylistRanking($pdo);


$alllist = $stylistranking->getToDay();
$alllState = $stylistranking->getToDayState();
$countAllList = count((array)$alllist);

require  __DIR__ . '/partials/head.php';

?>

<?php require  __DIR__ . '/partials/header.php'; ?>


<div class="c-form c-comfirm">
  <h1 class="c-title">本日の結果</h1>
  <div class="c-body">
    <div class="c-list_wrap">
      <div class="c-list_wrap">
        <?php if (!empty($alllist->{"created_at"})) : ?>
          <p class="c-time"><?php echo $alllist->{"created_at"}; ?></p>
        <?php endif; ?>
        <?php for ($g = 1; $g <= $countAllList - 3; $g++) : ?>
          <div class="c-list_body flex items-center">
            <p class="c-list_title">やること<span class="c-number"><?php echo $g; ?></span></p>
            <p class="c-list_text relative <?php echo $alllState->{"is_todo0" . $g} === 0 ? "" : "check"; ?>"><?php echo $alllist->{"todo0" . $g} ?></p>
          </div>
        <?php endfor; ?>
      </div>
    </div>
    <h2 class="c-title">今日のできたことを残す</h2>
    <form action="<?php the_url('/'); ?>send.php?action=update" method="POST">
      <label for="textarea" class="c-label_body">
        <span class="c-label_name">コメント</span>
        <textarea name="comment" id="textarea" cols="30" rows="20" class="c-result_comment"></textarea>
      </label>
      <div class="c-button_wrap">
        <button type="submit" class="c-button c-button_submit">送信</button>
      </div>
    </form>
  </div>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
