import DB from "../../localStorageDB";

function registerUser(userData) { // this function emits a request to the server
  const newUser = {
    id: (new Date().valueOf()).toString().slice(6),
    ...userData
  }
  const db = new DB('users');
  const users = db.getAll();
  
  if (users) {
    const hasUser = users.find(user => user.username === newUser.username);

    if (!hasUser) {
      users.push(newUser);
      db.store(users);
    } else throw new Error('Такой Email уже используется.');

  } else {
    db.store(JSON.stringify(newUser));
  }
  
  return {
    id: newUser.id,
    name: newUser.name,
    secondName: newUser.secondName,
    image: null
  };
}

export default registerUser;