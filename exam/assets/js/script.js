let user1 = {
    firstname: "Thomas",
    lastname: "Anderson",
    sex: "male",
    birthdate: new Date(1971, 09, 13),
    login: "Neo",
    email: "neo@matrix.net",
    password: "123456",
    newsletter: "yes"
};

let user2 = {
    firstname: "Tony",
    lastname: "Stark",
    sex: "male",
    birthdate: new Date(1970, 05, 29),
    login: "IronMan",
    email: "ironman@starkindustries.com",
    password: "123456",
    newsletter: "no"
};

let user3 = {
    firstname: "Natasha",
    lastname: "Romanova",
    sex: "female",
    birthdate: new Date(1928, 12, 20),
    login: "BlackWidow",
    email: "blackwidow@marvel.com",
    password: "123456",
    newsletter: "yes"
};

let users = [];
users.push(user1);
users.push(user2);
users.push(user3);

function login() {
    let inputLogin = document.getElementById('input-login').value;
    let inputPass = document.getElementById('input-pass').value;
    let isTrue = false;

    users.forEach(function(user) {
        if (inputLogin === user.login && inputPass === user.password) {
            isTrue = true;
        }
    });

    if (isTrue) {
        window.open("https://youtube.com", "_self");
    } else {
        document.getElementById('input-login').insertAdjacentHTML("afterend", "No such login or incorrect password.");
    }
}