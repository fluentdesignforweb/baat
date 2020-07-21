create DATABASE todo;

create TABLE todo(
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

create TABLE profile(
    id SERIAL,
    fullname VARCHAR(255),
    username VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255),
    phone NUMERIC(10),
    userpassword VARCHAR(255)
);

create TABLE balancesheet(
    sender VARCHAR(255),
    receiver VARCHAR(255),
    trans_date TIMESTAMP(255),
    balance NUMERIC(10),
    note VARCHAR(255)
);

create TABLE contacts(
    uname VARCHAR(255),
    balance NUMERIC(10)
);
