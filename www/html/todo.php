<?php
require_once 'config.php';

require_once(__DIR__ . '/app/config.php');

use MyApp\Database;
use MyApp\Todo;
use MyApp\Utils;

$pdo = Database::getInstance();
$todo = new Todo($pdo);
$todo->processPost();
$todos = $todo->getAll();

require  __DIR__ . '/partials/head.php';

?>

<?php require  __DIR__ . '/partials/header.php'; ?>

<div class="c-form c-comfirm c-todo" id="app" data-token="<?= Utils::h($_SESSION['ticket']); ?>">
  <h1 class="c-title">やること全部リスト</h1>
  <div class="c-body">
    <span class="c-purge c-button text-center purge">Purge</span>
    <form class="mt-20 text-center">
      <div>
        <label for="task">
          <span>タスク入力</span>
          <input type="text" name="title" class="c-input ml-20" id="task">
        </label>
      </div>
      <button type="submit" class="c-button mt-20">submit</button>
    </form>
    <ul class="mt-20">
      <?php foreach ($todos as $todo) : ?>
        <li class="mt-10 c-task_text" data-id="<?= Utils::h($todo->id); ?>">
          <input type="checkbox" id="checkbox<?= Utils::h($todo->id)?>" <?= $todo->is_done ? 'checked' : ''; ?>>
          <span><?= Utils::h($todo->title); ?></span>
        <span class="delete">delete</span>
        </li>
      <?php endforeach; ?>
    </ul>

  </div>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
