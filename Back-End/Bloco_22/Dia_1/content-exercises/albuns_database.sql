DROP DATABASE IF EXISTS albuns;
CREATE DATABASE albuns;
USE albuns;

CREATE TABLE artists (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(60) NOT NULL
);

CREATE TABLE musical_genres (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL
);

CREATE TABLE albuns (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(50) NOT NULL,
  price INT NOT NULL,
  artist_id INT NOT NULL,
  musical_genre_id INT NOT NULL,
  FOREIGN KEY (artist_id) REFERENCES artists (id),
  FOREIGN KEY (musical_genre_id) REFERENCES musical_genres(id)
);

CREATE TABLE tracks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(20) NOT NULL,
  album_id INT NOT NULL,
  FOREIGN KEY (album_id) REFERENCES albuns(id)
);
