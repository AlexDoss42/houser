create table houses (
    id serial primary key,
    name varChar(30),
    address varChar(100),
    city varChar(100),
    state varChar(2),
    zip int,
    img text,
    mortgage DECIMAL,
    rent DECIMAL
)