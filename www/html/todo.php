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

<div class="c-form c-comfirm" id="app" data-token="<?= Utils::h($_SESSION['token']); ?>">
  <h1 class="c-title">やること全部リスト</h1>
  <div class="c-body">
    <span class="purge">Purge</span>
    <form>
      <input type="text" name="title" placeholder="Type new todo.">
      <button type="submit">submit</button>
    </form>
    <ul>
      <?php foreach ($todos as $todo) : ?>
        <li data-id="<?= Utils::h($todo->id); ?>">
          <input type="checkbox" <?= $todo->is_done ? 'checked' : ''; ?>>
          <span><?= Utils::h($todo->title); ?></span>
          <span class="delete">x</span>
        </li>
      <?php endforeach; ?>
    </ul>

  </div>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
