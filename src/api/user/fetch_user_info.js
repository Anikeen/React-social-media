import DB from '../../localStorageDB/';

const defaultUser = {
  user: {
    id: 1,
    name: 'User',
    lastname: 'Test',
    online: 'online',
    status: 'Всем привет!'
  },
  basic: {
    birthday: '1 января 1970 г.',
    city: 'Бобруйск'
  },
  additional: null
};

function fetchUserInfo(id) {
  if (id === '1') return defaultUser;

  const db = new DB('users');
  const user = db.getSingleByID(id);
  
  return {
    user: {
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      online: 'online',
      status: 'Всем привет!'
    }
  };
}

export default fetchUserInfo;