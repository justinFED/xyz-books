Publisher.create(name: "Paste Magazine")
Publisher.create(name: "Publishers Weekly")
Publisher.create(name: "Graywolf Press")
Publisher.create(name: "McSweeney's")


Author.create(first_name: "Joel", last_name: "Hartse")
Author.create(first_name: "Hannah P.", last_name: "Templer")
Author.create(first_name: "Marguerite Z.", last_name: "Duras")
Author.create(first_name: "Kingsley", last_name: "Amis")
Author.create(first_name: "Fannie Peters", last_name: "Flagg")
Author.create(first_name: "Camille Byron", last_name: "Paglia")
Author.create(first_name: "Rainer Steel", last_name: "Rilke")


Book.create(
  title: "American Elf",
  isbn_13: "978-1-891830-85-3",
  isbn_10: "1-891-83085-6",
  list_price: 0.1e4,
  publication_year: 2004,
  edition: "Book 2",
  image_url: "https://i.postimg.cc/tCfmCKRQ/doughnuts-Doom.png",
  publisher: Publisher.find_by(name: "Paste Magazine")
)

Book.create(
  title: "Cosmoknights",
  isbn_13: "978-1-60309-454-2",
  isbn_10: "1-603-09454-7",
  list_price: 0.2e4,
  publication_year: 2019,
  edition: "Book 1",
  image_url: "https://i.postimg.cc/vHDNyYst/The-Bend-of-Luck.png",
  publisher: Publisher.find_by(name: "Publishers Weekly")
)

Book.create(
  title: "Essex County",
  isbn_13: "978-1-60309-038-4",
  isbn_10: "1-603-09038-X",
  list_price: 0.5e3,
  publication_year: 1990,
  image_url: "https://i.postimg.cc/tCfmCKRQ/doughnuts-Doom.png",
  publisher: Publisher.find_by(name: "Graywolf Press")
)

Book.create(
  title: "Hey, Mister (Vol 1)",
  isbn_13: "978-1-891830-02-0",
  isbn_10: "1-891-83002-3",
  list_price: 0.12e4,
  publication_year: 2000,
  edition: "After School Special",
  image_url: "https://i.postimg.cc/vHDNyYst/The-Bend-of-Luck.png",
  publisher: Publisher.find_by(name: "Graywolf Press")
)

Book.create(
  title: "The Underwater Welder",
  isbn_13: "978-1-60309-398-9",
  isbn_10: "1-603-09398-2",
  list_price: 0.3e4,
  publication_year: 2022,
  image_url: "https://i.postimg.cc/05S4CCpF/The-Underwater-Welder.png",
  publisher: Publisher.find_by(name: "McSweeney's")
)

Book.find_by(title: "American Elf").authors << Author.find_by(first_name: "Joel", last_name: "Hartse")
Book.find_by(title: "Cosmoknights").authors << Author.find_by(first_name: "Hannah P.", last_name: "Templer")
Book.find_by(title: "Essex County").authors << Author.find_by(first_name: "Marguerite Z.", last_name: "Duras")
Book.find_by(title: "Hey, Mister (Vol 1)").authors << Author.find_by(first_name: "Kingsley", last_name: "Amis")
Book.find_by(title: "The Underwater Welder").authors << Author.find_by(first_name: "Fannie Peters", last_name: "Flagg")
