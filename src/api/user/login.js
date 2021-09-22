
function loginUser(username, password) {    // this function emits a request to the server
  if (username === '1@1.ru' && password == 123456) { // default user
    return {
      id: 1,
      name: 'User',
      secondName: 'Test',
      image: null
    };
  }
  const storage = localStorage.getItem('users').split('|');
  const users = storage.map(user => JSON.parse(user));
  const user = users.find(user => user.username === username && user.password === password);
  
  if (!user) throw 'Неверный пользователь или пароль.'; 
  
  return {
    id: user.id,
    name: user.name,
    secondName: user.secondName,
    image: null
  };
}

export default loginUser;