<?php

namespace MyApp;

use PDO;
use Exception;

date_default_timezone_set('UTC');

class StylistRanking
{
  private $pdo;

  public function __construct($pdo)
  {
    $this->pdo = $pdo;
    // Ticket::create();
  }

  public function processPost()
  {

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      // Ticket::validate();
      $action = filter_input(INPUT_GET, 'action');

      switch ($action) {
        case 'add':
          $this->add($_POST);
          break;
        default:
          $redirect = SITE_URL;
          header("Location: /' . $redirect");
          exit;
      }

      $redirect = SITE_URL;
      header('Location: ' . $redirect);
      exit;
    }
  }

  private function add($post)
  {
    $today = date('Y-m-d H:i:s');


    // foreach ($post as $y => $v) {
    //   if ($y != "ticket" && $y != "name" && $y != "email") {
    //     $g .= ":" . $y . ',';
    //     $params[":" . $y] = $v;
    //   }
    // };
    // var_dump($this->pdo);


    try {
      $this->pdo->beginTransaction();

      $stmt = $this->pdo->prepare("INSERT INTO studyapptable (todo01,todo02,todo03,todo04,todo05,todo06,created_at) VALUES (:todo01,:todo02,:todo03,:todo04,:todo05,:todo06,:created_at)");

      $stmt->bindValue(':todo01', $post['todo01'], PDO::PARAM_STR);
      $stmt->bindValue(':todo02', $post['todo02'], PDO::PARAM_STR);
      $stmt->bindValue(':todo03', $post['todo03'], PDO::PARAM_INT);
      $stmt->bindValue(':todo04', $post['todo04'], PDO::PARAM_INT);
      $stmt->bindValue(':todo05', $post['todo05'], PDO::PARAM_INT);
      $stmt->bindValue(':todo06', $post['todo06'], PDO::PARAM_INT);
      $stmt->bindValue(':created_at', $today, PDO::PARAM_INT);

      $stmt->execute();

      $this->pdo->commit();
    } catch (Exception $e) {
      echo 'エラーが発生しました。<br>';
      echo $e->getMessage();

      // エラーが発生した時はロールバック
      $this->pdo->rollBack();
    }
  }


  public function getAll()
  {
    try {
      $this->pdo->beginTransaction();

      $stmt = $this->pdo->prepare("SELECT * FROM studyapptable");
      $stmt->execute();
      $all = $stmt->fetchAll();

      $this->pdo->commit();


      return $all;
    } catch (Exception $e) {
      // エラーが発生した時はロールバック
      echo "失敗しました。" . $e->getMessage();
      $this->pdo->rollBack();
    }
  }

  public function getAccoutData($get)
  {

    try {
      $this->pdo->beginTransaction();

      $stmt = $this->pdo->prepare("SELECT * FROM cota_hairmake_ranking where judgeid = :judgeid");
      $stmt->bindValue(':judgeid', $get, PDO::PARAM_STR);
      $stmt->execute();
      $all = $stmt->fetchAll();

      if (empty($all) && count($all) > 0) {
        echo "審査員はいません。";
      }


      $this->pdo->commit();

      return $all;
    } catch (Exception $e) {
      // エラーが発生した時はロールバック
      $this->pdo->rollBack();
      echo "失敗しました。" . $e->getMessage();
    }
  }

  public function sumAll()
  {

    try {
      $this->pdo->beginTransaction();

      $stmt = $this->pdo->prepare("SELECT SUM(stylist_1),SUM(stylist_2),SUM(stylist_3),SUM(stylist_4),SUM(stylist_5),SUM(stylist_6),SUM(stylist_7),SUM(stylist_8),SUM(stylist_9),SUM(stylist_10),SUM(stylist_11),SUM(stylist_12),SUM(stylist_13),SUM(stylist_14),SUM(stylist_15),SUM(stylist_16),SUM(stylist_17),SUM(stylist_18),SUM(stylist_19),SUM(stylist_20),SUM(stylist_21),SUM(stylist_22),SUM(stylist_23),SUM(stylist_24),SUM(stylist_25),SUM(stylist_26),SUM(stylist_27),SUM(stylist_28),SUM(stylist_29),SUM(stylist_30) FROM cota_hairmake_ranking FOR UPDATE");
      $stmt->execute();

      $sum = $stmt->fetch();

      if (empty($sum) && count($sum) > 0) {
        echo "投票された作品がありません。";
      }


      $this->pdo->commit();

      return $sum;
    } catch (Exception $e) {
      $this->pdo->rollBack();
      echo "失敗しました。" . $e->getMessage();
    }
  }

  public function allAll()
  {

    try {
      $this->pdo->beginTransaction();

      $stmt = $this->pdo->prepare("SELECT stylist_1,stylist_2,stylist_3,stylist_4,stylist_5,stylist_6,stylist_7,stylist_8,stylist_9,stylist_10,stylist_11,stylist_12,stylist_13,stylist_14,stylist_15,stylist_16,stylist_17,stylist_18,stylist_19,stylist_20,stylist_21,stylist_22,stylist_23,stylist_24,stylist_25,stylist_26,stylist_27,stylist_28,stylist_29,stylist_30 FROM cota_hairmake_ranking FOR UPDATE");
      $stmt->execute();

      $all = $stmt->fetchAll();

      if (empty($all) && count($all) > 0) {
        echo "投票された作品がありません。";
      }


      $this->pdo->commit();

      return $all;
    } catch (Exception $e) {
      $this->pdo->rollBack();
      echo "失敗しました。" . $e->getMessage();
    }
  }
}
