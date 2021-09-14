
function loginUser(login, password) {    // this function emits a request to the server
  const storage = localStorage.getItem('users').split('|');
  const users = storage.map(user => JSON.parse(user));
  const userIndex = users.findIndex(user => user.login === login);
  const user = users[userIndex];
  
  if (!user) throw 'Неверный пользователь или пароль.'; 
  if (user.password != password) throw 'Неверный пользователь или пароль.';
  
  return {
    id: user.id,
    name: user.name,
    secondName: user.secondName,
    image: null
  };
}

export default loginUser;