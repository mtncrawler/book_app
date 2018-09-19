CREATE TABLE IF NOT EXISTS books(
    id SERIAL PRIMARY KEY,
    author VARCHAR(256),
    title VARCHAR(256),
    isbn BIGINT,
    image_url VARCHAR(256),
    description VARCHAR(1000)
);

INSERT INTO books(author, title, isbn, image_url, description)
VALUES(
    'Wheeler W. Dixon',
    'A History of Horror', 
    9780813547954, 
    'http://books.google.com/books/content?id=5CtYoSSxomcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 
    'Ever since horror leapt from popular fiction to the silver screen in the late 1890s, viewers have experienced fear and pleasure in exquisite combination. A History of Horror, with rare stills from classic films, is the only book to offer a comprehensive survey of this ever-popular film genre. Chronologically examining over fifty horror films from key periods, this one-stop sourcebook unearths the historical origins of legendary characters and explores how the genre fits into the Hollywood studio system and how its enormous success in American and European culture expanded globally over time.'
);

INSERT INTO books(author, title, isbn, image_url, description)
VALUES(
    'Bruce F. Kawin',
    'Horror and the Horror Film', 
    9780857284495, 
    'http://books.google.com/books/content?id=r88NdErN1pkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 
    '''Horror and the Horror Film'' is a vivid, compelling, insightful and well-written study of the horror film and its subgenres from 1896 to the present, concentrating on the nature of horror in reality and on film.'
);

INSERT INTO books(author, title, isbn, image_url, description)
VALUES(
    'Alexandra Heller-Nicholas',
    'Found Footage Horror Films', 
    9780786470778, 
    'http://books.google.com/books/content?id=pkNXAwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 
    'As the horror subgenre du jour, found footage horror''s amateur filmmaking look has made it available to a range of budgets. Surviving by adapting to technological and cultural shifts and popular trends, found footage horror is a successful and surprisingly complex experiment in blurring the lines between quotidian reality and horror''s dark and tantalizing fantasies. Found Footage Horror Films explores the subgenre''s stylistic, historical and thematic development. It examines the diverse prehistory beyond Man Bites Dog (1992) and Cannibal Holocaust (1980), paying attention to the safety films of the 1960s, the snuff-fictions of the 1970s, and to television reality horror hoaxes and mockumentaries during the 1980s and 1990s in particular. It underscores the importance of The Blair Witch Project (1999) and Paranormal Activity (2007), and considers YouTube''s popular rise in sparking the subgenre''s recent renaissance.'
);

INSERT INTO books(author, title, isbn, image_url, description)
VALUES(
    'Gregory Albert Waller',
    'American Horrors', 
    9780252014482, 
    'http://books.google.com/books/content?id=AavstWM6jjIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 
    'Since the release of Rosemary''s Baby in 1968, the American horror film has become one of the most diverse, commercially successful, widely discussed, and culturally significant film genres. Drawing on a wide range of critical methods, this title examines individual films, directors, and subgenres.'
);

INSERT INTO books(author, title, isbn, image_url, description)
VALUES(
    'Tom Weaver',
    'Universal Horrors', 
    9780786491506, 
    'http://books.google.com/books/content?id=Wut4jYBtUdsC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api', 
    'Revised and updated since its first publication in 1990, this acclaimed critical survey covers the classic chillers produced by Universal Studios during the golden age of hollywood horror, 1931 through 1946. Trekking boldly through haunts and horrors from The Frankenstein Monster, The Wolf Man, Count Dracula, and The Invisible Man, to The Mummy, Paula the Ape Woman, The Creeper, and The Inner Sanctum, the authors offer a definitive study of the 86 films produced during this era and present a general overview of the period. Coverage of the films includes complete cast lists, credits, storyline, behind-the-scenes information, production history, critical analysis, and commentary from the cast and crew (much of it drawn from interviews by Tom Weaver, whom USA Today calls “the king of the monster hunters”). Unique to this edition are a new selection of photographs and poster reproductions and an appendix listing additional films of interest.'
);




