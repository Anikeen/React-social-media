
function registerUser(userData) { // this function emits a request to the server
  
  const newUser = {
    id: (new Date().valueOf()).toString().slice(6),
    ...userData
  }
  
  const db = localStorage.getItem('users');
  let users = [];
  
  if (db === null) {
    localStorage.setItem('users', JSON.stringify(newUser));

  } else {
    const storage = localStorage.getItem('users').split('|');
    
    users = storage.map(user => JSON.parse(user));
    
    const hasUser = users.find(user => user.login === newUser.login);
    
    if (!hasUser) {
      users.push(newUser);
      
      const serialized = users.map(user => JSON.stringify(user));

      localStorage.setItem('users', serialized.join('|'));
      
    } else throw 'Такой Email уже используется.'
  }
  
  return {
    id: newUser.id,
    name: newUser.name,
    secondName: newUser.secondName,
    image: null
  };
}

export default registerUser;