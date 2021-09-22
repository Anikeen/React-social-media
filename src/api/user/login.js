
function loginUser(username, password) {    // this function emits a request to the server
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