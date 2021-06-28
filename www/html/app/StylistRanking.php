<?php

namespace MyApp;

use PDO;
use Exception;

date_default_timezone_set('Asia/Tokyo');

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
      $_POST = checkInput($_POST);
      // Ticket::validate();
      $action = filter_input(INPUT_GET, 'action');

      switch ($action) {
        case 'add':
          $this->add($_POST);
          $this->addState();
          break;
        case 'update':
          $this->update($_POST);
          break;
        default:
          $redirect = SITE_URL;
          header("Location: /' . $redirect");
          exit;
      }

      $redirect = SITE_URL . "/list.php";
      header('Location: ' . $redirect);
      exit;
    }
  }

  private function update($post)
  {
    try {
      // var_dump($post);
      $this->pdo->beginTransaction();
      /**
       * 当日のコメントを更新する
       *
       */

      $stmt = $this->pdo->prepare("UPDATE studyapptable SET comment = :comment WHERE created_at <= CURDATE()");
      $stmt->bindValue('comment', $post["comment"], \PDO::PARAM_INT);
      $stmt->execute();
      $this->pdo->commit();
    } catch (Exception $e) {
      // エラーが発生した時はロールバック
      echo "失敗しました。" . $e->getMessage();
      $this->pdo->rollBack();
    }
  }

  private function add($post)
  {
    $today = date('Y-m-d');


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

  private function addState()
  {
    $today = date('Y-m-d');


    try {
      $this->pdo->beginTransaction();

      $stmt = $this->pdo->prepare("INSERT INTO studyapp_state (is_todo01,is_todo02,is_todo03,is_todo04,is_todo05,is_todo06,created_at) VALUES (:is_todo01,:is_todo02,:is_todo03,:is_todo04,:is_todo05,:is_todo06,:created_at)");

      $stmt->bindValue(':is_todo01', 0, PDO::PARAM_STR);
      $stmt->bindValue(':is_todo02', 0, PDO::PARAM_STR);
      $stmt->bindValue(':is_todo03', 0, PDO::PARAM_INT);
      $stmt->bindValue(':is_todo04', 0, PDO::PARAM_INT);
      $stmt->bindValue(':is_todo05', 0, PDO::PARAM_INT);
      $stmt->bindValue(':is_todo06', 0, PDO::PARAM_INT);
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

  public function getToDay()
  {
    try {
      $this->pdo->beginTransaction();

      $stmt = $this->pdo->prepare("SELECT * FROM studyapptable where created_at <= CURDATE()");
      $stmt->execute();
      $all = $stmt->fetch();

      $this->pdo->commit();


      return $all;
    } catch (Exception $e) {
      // エラーが発生した時はロールバック
      echo "失敗しました。" . $e->getMessage();
      $this->pdo->rollBack();
    }
  }

  public function getToDayState()
  {
    try {
      $this->pdo->beginTransaction();

      $stmt = $this->pdo->prepare("SELECT is_todo01,is_todo02,is_todo03,is_todo04,is_todo05,is_todo06 FROM studyapp_state where created_at <= CURDATE()");
      $stmt->execute();
      $all = $stmt->fetch();

      $this->pdo->commit();

      return $all;
    } catch (Exception $e) {
      // エラーが発生した時はロールバック
      echo "失敗しました。" . $e->getMessage();
      $this->pdo->rollBack();
    }
  }
}
