import DB from "../../localStorageDB";

function loginUser(username, password) {    // this function emits a request to the server
  if (username === '1@1.ru' && password == 123456) { // default user
    return {
      id: 1,
      name: 'User',
      secondName: 'Test',
      image: null
    };
  }
  const db = new DB('users');
  const users = db.getAll();
  const user = users.find(user => user.username === username && user.password === password);
  
  if (!user) throw new Error('Неверный пользователь или пароль.'); 
  
  return {
    id: user.id,
    name: user.name,
    secondName: user.secondName,
    image: null
  };
}

export default loginUser;