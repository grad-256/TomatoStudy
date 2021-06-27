CREATE TABLE studyapptable (
  id INT NOT NULL AUTO_INCREMENT,
  todo01 TEXT,
  todo02 TEXT,
  todo03 TEXT,
  todo04 TEXT,
  todo05 TEXT,
  todo06 TEXT,
  todo06 TEXT,
  is_done BOOL DEFAULT false,
  created_at TIMESTAMP NOT NULL,
  PRIMARY KEY (id)
);
-- updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日時',


SELECT * FROM studyapptable;
drop table studyapptable;
