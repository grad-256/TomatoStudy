<?php
require_once 'config.php';

require_once(__DIR__ . '/app/config.php');

use MyApp\Database;
use MyApp\StylistRanking;

$pdo = Database::getInstance();
$stylistranking = new StylistRanking($pdo);


$alllist = $stylistranking->getToDay();

require  __DIR__ . '/partials/head.php';

?>

<?php require  __DIR__ . '/partials/header.php'; ?>

<div class="c-form c-comfirm" id="app">
  <h1 class="c-title">Stop Watch</h1>
  <p class="mt-10">
    <a href="<?php the_url('today.php'); ?>" class="c-link c-state_link">本日のタスク</a>
  </p>
  <div class="c-body c-stopwatch" id="app">
    <div class="column">
      <div class="c-time_wrap flex items-center justify-center">
        <p>{{ hours }}:</p>
        <p>{{ minutes | zeroPad }}:</p>
        <p>{{ seconds | zeroPad }}</p>
      </div>
      <div class="text-center">
        <select name="selected" id="" v-model="selected" class="c-select">
          <option value="5">5分</option>
          <option value="10">10分</option>
          <option value="25">25分</option>
          <option value="40">40分</option>
        </select>
      </div>
      <div class="flex items-center mt-20">
        <button class="c-button" @click="startTimer" :disabled="isRunning" type="button">START</button>
        <button class="c-button" @click="stopTimer" :disabled="!isRunning" type="button">STOP</button>
        <button class="c-button" @click="clearAll" type="button">CLEAR</button>
      </div>
    </div>
  </div>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
