// drop table if exist

CREATE TABLE comments (
  id int NOT NULL,
  projectId int,
  author text,
  authorIsCreate text,
  profilePicture text,
  createdAt date,
  body text,
)

copy table 