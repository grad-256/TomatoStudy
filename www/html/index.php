<?php
// session_start();

require_once 'config.php';

require_once(__DIR__ . '/app/config.php');

use MyApp\Database;
use MyApp\StylistRanking;

$pdo = Database::getInstance();
$stylistranking = new StylistRanking($pdo);
$alllist = $stylistranking->getToDay();

require  __DIR__ . '/partials/head.php';

$state = "";

if ($alllist) {
  $state = "updateStudyapptable";
} else {
  $state = "";
}

?>

<?php require  __DIR__ . '/partials/header.php'; ?>

<div class="text-center">
  <div class="c-goal_body">
    <h1 class="c-title text-left">目標</h1>
    <ul class="text-left mt-10">
      <li>IT従事者として社会に貢献をし、誰かの生活に影響が出ている状態を作る</li>
      <li>社会に貢献できるシステムを自分が作る時やそういったシステムを作ろうとしている人の力になるため</li>
      <li>誰かのために自分のできることで貢献するため</li>
    </ul>
    <p class="c-subtitle">勉強用のシステムを作る</p>
    <ul class="text-left mt-10">
      <li>基本情報技術者とITパスポートの資格取得のための自分管理システム</li>
    </ul>
    <p class="c-subtitle">なぜ作る？？？</p>
    <ul class="text-left mt-10">
      <li>成長や継続状態を視覚的に確認することができ、さらにモチベーション維持のため</li>
      <li>習慣的に勉強するため</li>
    </ul>
    <p class="c-subtitle">資格をとるのは？？</p>
    <ul class="text-left mt-10">
      <li>自分自身の知識レベルを向上させ、エンジニアとしてIT人材として成長するため</li>
      <li>資格を取ることでITリテラシーが低い方達でもITの知識を有していることがわかるようにするため</li>
      <li>知識を身につけるために継続してきたことの証を持つため</li>
      <li>自信をつける</li>
      <li>一生ITの世界で生きていくための土台作り</li>
      <li>フリーランスエンジニアになっても食いっぱぐれないようにするための土台作り</li>
    </ul>
  </div>
</div>

<div class="c-form">
  <form action="<?php the_url('/'); ?>comfirm.php" method="post">
    <?php for ($i = 1; $i <= 6; $i++) : ?>
      <label for="todo0<?php echo $i; ?>" class="c-label_body">
        <div class="flex items-center">
          <span class="c-label_name">やること<?php echo $i; ?></span>
          <input type="text" name="todo0<?php echo $i; ?>" id="todo0<?php echo $i; ?>" class="c-input" value="<?= $alllist->{"todo0" . $i} ? $alllist->{"todo0" . $i} : "" ?>">
        </div>
      </label>
    <?php endfor; ?>
    <input type="hidden" name="state" value="<?= $state ?>">
    <div class="c-button_wrap">
      <?php if (isset($alllist)) : ?>
        <button type="submit" class="c-button c-button_submit">送信</button>
      <?php else : ?>
        <button type="submit" class="c-button c-button_submit">変更</button>
      <?php endif; ?>
    </div>
  </form>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
