DROP TABLE IF EXISTS comments;

CREATE TABLE comments (
  id SERIAL PRIMARY KEY, 
  projectId INTEGER,
  author VARCHAR(50),
  authorIsCreator VARCHAR(50),
  profilePicture VARCHAR(2083),
  createdAt VARCHAR(100),
  body TEXT
);

COPY comments(projectId, author, authorIsCreator, profilePicture, createdAt, body) FROM '/Users/victor/Desktop/comments-module/comments.csv' DELIMITER ',' CSV HEADER;