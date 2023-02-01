-- Active: 1675271765117@@127.0.0.1@3306
CREATE TABLE animals(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    classification TEXT NOT NULL,
    species TEXT NOT NULL,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    color INTEGER NOT NULL
);
INSERT INTO animals VALUES
("a001", "mamífero", "cachorro", "Babalu", 1, "caramelo"),
("a002", "mamífero", "cavalo", "Valente", 5, "preto"),
("a004", "anfíbio", "perereca", "Rubinho", 1, "verde"),
("a005", "réptil", "tartaruga", "Soninha", 65, "marrom"),
("a006", "ave", "arara", "Fernando", 3, "vermelha")
