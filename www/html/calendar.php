<?php
require_once 'config.php';

require_once(__DIR__ . '/app/config.php');

use MyApp\Database;
use MyApp\StylistRanking;

$pdo = Database::getInstance();
$stylistranking = new StylistRanking($pdo);

// タイムゾーンを設定
date_default_timezone_set('Asia/Tokyo');

// 前月・次月リンクが押された場合は、GETパラメーターから年月を取得
if (isset($_GET['ym'])) {
  $ym = $_GET['ym'];
} else {
  // 今月の年月を表示
  $ym = date('Y-m');
}

// タイムスタンプを作成し、フォーマットをチェックする
$timestamp = strtotime($ym . '-01');
if ($timestamp === false) {
  $ym = date('Y-m');
  $timestamp = strtotime($ym . '-01');
}

// 今日の日付 フォーマット　例）2021-06-3
$today = date('Y-m-j');

// カレンダーのタイトルを作成　例）2021年6月
$html_title = date('Y年n月', $timestamp);

// 前月・次月の年月を取得
// 方法１：mktimeを使う mktime(hour,minute,second,month,day,year)
$prev = date('Y-m', mktime(0, 0, 0, date('m', $timestamp) - 1, 1, date('Y', $timestamp)));
$next = date('Y-m', mktime(0, 0, 0, date('m', $timestamp) + 1, 1, date('Y', $timestamp)));

// 方法２：strtotimeを使う
// $prev = date('Y-m', strtotime('-1 month', $timestamp));
// $next = date('Y-m', strtotime('+1 month', $timestamp));

// 該当月の日数を取得
$day_count = date('t', $timestamp);

// １日が何曜日か　0:日 1:月 2:火 ... 6:土
// 方法１：mktimeを使う
$youbi = date('w', mktime(0, 0, 0, date('m', $timestamp), 1, date('Y', $timestamp)));
// 方法２
// $youbi = date('w', $timestamp);


// カレンダー作成の準備
$weeks = [];
$week = '';

// 第１週目：空のセルを追加
// 例）１日が火曜日だった場合、日・月曜日の２つ分の空セルを追加する
$week .= str_repeat('<td></td>', $youbi);

for ($day = 1; $day <= $day_count; $day++, $youbi++) {

  // 2021-06-3
  $date = $ym . '-' . $day;

  if ($today == $date) {
    // 今日の日付の場合は、class="today"をつける
    $week .= '<td class="today">' . $day;
  } else {
    $week .= '<td>' . $day;
  }
  $week .= '</td>';

  // 週終わり、または、月終わりの場合
  if ($youbi % 7 == 6 || $day == $day_count) {

    if ($day == $day_count) {
      // 月の最終日の場合、空セルを追加
      // 例）最終日が水曜日の場合、木・金・土曜日の空セルを追加
      $week .= str_repeat('<td></td>', 6 - $youbi % 7);
    }

    // weeks配列にtrと$weekを追加する
    $weeks[] = '<tr>' . $week . '</tr>';

    // weekをリセット
    $week = '';
  }
}

require  __DIR__ . '/partials/head.php';

?>

<?php require  __DIR__ . '/partials/header.php'; ?>

<div class="c-form c-comfirm">
  <h1 class="c-title">カレンダー</h1>
  <div class="c-body">
    <div class="container">
      <h3 class="mb-5"><a href="?ym=<?php echo $prev; ?>">&lt;</a> <?php echo $html_title; ?> <a href="?ym=<?php echo $next; ?>">&gt;</a></h3>
      <table>
        <tr>
          <th>日</th>
          <th>月</th>
          <th>火</th>
          <th>水</th>
          <th>木</th>
          <th>金</th>
          <th>土</th>
        </tr>
        <?php
        foreach ($weeks as $week) {
          echo $week;
        }
        ?>
      </table>
    </div>
  </div>
</div>

<?php require  __DIR__ . '/partials/footer.php'; ?>
</body>

</html>
