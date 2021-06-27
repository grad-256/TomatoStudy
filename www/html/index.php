<?php
// session_start();

require_once 'config.php';

require __DIR__ . '/libs/helper.php';

require  __DIR__ . '/partials/head.php';

?>

<?php require  __DIR__ . '/partials/header.php'; ?>


<div class="c-form">
  <form action="<?php the_url('/'); ?>comfirm.php" method="post">
    <?php for ($i = 1; $i <= 6; $i++) : ?>
      <label for="todo0<?php echo $i; ?>" class="c-label_body">
        <div class="flex items-center">
          <span class="c-label_name">やること<?php echo $i; ?></span>
          <input type="text" name="todo0<?php echo $i; ?>" id="todo0<?php echo $i; ?>" class="c-input">
        </div>
      </label>
    <?php endfor; ?>
    <div class="c-button_wrap">
      <button type="submit" class="c-button c-button_submit">送信</button>
    </div>
  </form>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
