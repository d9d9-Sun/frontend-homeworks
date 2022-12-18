let userList = [];
let userTypeList = ['Администратор', 'Клиент', 'Продавец'];
let usertype = document.querySelector('#user__type');

for (let index=0; index < userTypeList.length; index++) {
    usertype.innerHTML+='<option value=val'+ index +'>' + userTypeList[index] +'</option>';
}

let usertypeEdit = document.querySelector('#user__typeEdit');

for (let index=0; index < userTypeList.length; index++) {
    usertypeEdit.innerHTML+='<option value=val'+ index +'>' + userTypeList[index] +'</option>';
}

function insert() {
    let user = new Object();
    let inputFam = document.querySelector('#fam');
    user.fam = inputFam.value;
    let inputLogin = document.querySelector('#login');
    user.login = inputLogin.value;

    let passwordField= document.querySelector('#password');
    user.password = passwordField.value;

    let usertype = document.querySelector('#user__type');
    user.userType = usertype.value;

    userList.push(user);
    
    inputFam.value = '';
    inputLogin.value = '';
    passwordField.value = '';
    usertype.value = 'val0';

    let userTable = document.querySelector('#user__table').childNodes[1];
    
    userTable.innerHTML+='<tr id=user__' + (userList.length-1) + '><td>'+ user.fam +'</td><td>'+ user.login +'</td><td>'+ user.password +'</td><td>'+ getUsertype(user.userType) +'</td><td><button onclick=deleteUser('+ (userList.length-1) + ')>Удалить</button><button onclick=editUser('+ (userList.length-1) + ')>Изменить</button></td>';
}

function deleteUser(i) {
    userList.splice(i, 1);
    showTable();
}

let editPosition = -1;

function editUser(i) {
    for (let index = 0; index < userList.length; index++) {
        if (index !== i) {
            document.getElementById("user__" + index).style.backgroundColor = "#fff";
        } else {
            document.getElementById("user__" + i).style.backgroundColor = "#ccc";
        }
    }

    
    document.querySelector('#userEdit').style.visibility = "visible";
    document.querySelector('#position').innerText = ": " + (i + 1);
    editPosition = i;
}

function save(editPosition) {
    document.querySelector('#userEdit').style.visibility = "hidden";
    let userEdit = new Object();

    let editFam = document.querySelector('#famEdit');
    userEdit.fam = editFam.value;

    let editLogin = document.querySelector('#loginEdit');
    userEdit.login = editLogin.value;

    let editPassword= document.querySelector('#passwordEdit');
    userEdit.password = editPassword.value;

    let editType = document.querySelector('#user__typeEdit');
    userEdit.userType = editType.value;
    userList.splice(editPosition, 1, userEdit);

    showTable();

    editPosition = -1;
    editFam.value = '';
    editLogin.value = '';
    editPassword.value = '';
    editType.value = 'val0';            
}

function showTable(){
    console.log(userList);
    let userTable = document.querySelector('#user__table').childNodes[1];
    userTable.innerHTML = '<tr><th>Фамилия</th><th>Логин</th><th>Пароль</th><th>Роль</th></tr>';
    for (let index=0; index < userList.length; index++) {
        userTable.innerHTML+='<tr id=user__' + index + '><td>'+ userList[index].fam +'</td><td>'+ userList[index].login +'</td><td>'+ userList[index].password +'</td><td class="' + userList[index].userType + '">'+ getUsertype(userList[index].userType) +'</td><td><button onclick=deleteUser('+ index + ')>Удалить</button><button onclick=editUser('+ index + ')>Изменить</button></td>';
    }
}

function getUsertype(type) {
    let index = Number(String(type).substring(3));
    return userTypeList[index];
}