
function fetchUserInfo(id) {
  return {
    user: {
      id: 1,
      name: 'User',
      secondName: 'Test',
      online: 'online',
      status: 'Всем привет!'
    },
    basic: {
      birthday: '1 января 1970 г.',
      city: 'Бобруйск'
    },
    additional: null
  }
}

export default fetchUserInfo;