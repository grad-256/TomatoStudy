CREATE TABLE studyapptable (
  id INT NOT NULL AUTO_INCREMENT,
  todo01 TEXT,
  todo02 TEXT,
  todo03 TEXT,
  todo04 TEXT,
  todo05 TEXT,
  todo06 TEXT,
  comment TEXT,
  created_at DATE NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE studyapp_state (
  id INT NOT NULL AUTO_INCREMENT,
  is_todo01 BOOLEAN DEFAULT false,
  is_todo02 BOOLEAN DEFAULT false,
  is_todo03 BOOLEAN DEFAULT false,
  is_todo04 BOOLEAN DEFAULT false,
  is_todo05 BOOLEAN DEFAULT false,
  is_todo06 BOOLEAN DEFAULT false,
  created_at DATE NOT NULL,
  PRIMARY KEY (id)
);
-- updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新日',


SELECT * FROM studyapptable;
drop table studyapptable;
