<?php
require_once 'config.php';

require_once(__DIR__ . '/app/config.php');

use MyApp\Database;
use MyApp\StylistRanking;

$pdo = Database::getInstance();
$stylistranking = new StylistRanking($pdo);


$alllist = $stylistranking->getToDay();
$archiveState = $stylistranking->getToDayState();

require  __DIR__ . '/partials/head.php';

?>

<?php require  __DIR__ . '/partials/header.php'; ?>

<div class="c-form c-comfirm" id="app">
  <h1 class="c-title">本日</h1>
  <a href="<?php the_url('stopwatch.php'); ?>" class="c-link c-state_link">stopwatch</a>
  <div class="c-body">
    <form action="<?php the_url('/'); ?>send.php?action=updateState" method="POST">
      <div class="c-list_wrap">
        <p class="c-time"><?php echo $alllist->{"created_at"}; ?></p>
        <?php for ($g = 1; $g <= count((array)$alllist) - 3; $g++) : ?>
          <div class="c-list_body">
            <label for="todo0<?php echo $g; ?>" class="c-todo_state">
              <input type="checkbox" <?= $archiveState->{"is_todo0" . $g} ? "checked" : "" ?> name="is_todo0<?php echo $g; ?>" id="todo0<?php echo $g; ?>" class="c-input_todo-check" value="off" data-todayController-target="name" data-action="change->todayController#test">
              <div class="c-input_todo-check-wrap flex items-center">
                <p class="c-list_title">やること<span class="c-number"><?php echo $g; ?></span></p>
                <p class="c-list_text"><?php echo $alllist->{"todo0" . $g} ?></p>
              </div>
            </label>
          </div>
        <?php endfor; ?>
      </div>
      <div class="c-button_wrap">
        <button type="submit" class="c-button c-button_submit">確定</button>
      </div>
    </form>
  </div>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
