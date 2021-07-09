<?php
require_once 'config.php';
require_once(__DIR__ . '/app/config.php');

require  __DIR__ . '/partials/head.php';

$_POST = checkInput($_POST);

$countPost = count($_POST);

?>

<?php require  __DIR__ . '/partials/header.php'; ?>


<div class="c-form c-comfirm">
  <form action="<?php the_url('/'); ?>send.php?action=<?= $_POST["state"] ? $_POST["state"] : "add" ?>" method="POST">
    <?php for ($i = 1; $i <= $countPost - 1; $i++) : ?>
      <label for="todo0<?php echo $i; ?>" class="c-label_body">
        <div class="flex items-center">
          <span class="c-label_name">やること<?php echo $i; ?></span>
          <p class="c-input c-input_text"><?php echo $_POST["todo0" . $i]; ?></p>
          <input type="hidden" name="<?php echo "todo0" . $i; ?>" value="<?php echo $_POST["todo0" . $i]; ?>">
        </div>
      </label>
    <?php endfor; ?>
    <div class="c-button_wrap">
      <button type="botton" class="c-button c-button_return" onclick="history.back();">やり直す</button>
      <button type="submit" class="c-button c-button_submit">確定</button>
    </div>
  </form>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
