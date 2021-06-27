<?php

namespace view\home;

function index()
{
?>
  <div>
    <form action="<?php the_url('/'); ?>comfirm" method="post">
      <?php for ($i = 1; $i <= 6; $i++) : ?>
        <label for="todo0<?php echo $i; ?>" class="c-label_body">
          <div class="flex items-center">
            <span class="c-label_name">やること<?php echo $i; ?></span>
            <input type="text" name="" id="todo0<?php echo $i; ?>" class="c-input">
          </div>
        </label>
      <?php endfor; ?>
      <div class="c-button_wrap">
        <button type="submit" class="c-button c-button_submit">送信</button>
      </div>
    </form>
  </div>
<?php } ?>
