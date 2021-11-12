class DB {
  constructor(key) {
    this.key = key;
  }

  getAll() {
    let storage = localStorage.getItem(this.key);
    if (storage) storage = storage.split('|').map(item => JSON.parse(item));
    return storage;
  }

  getByValue(prop, value) {
    let items = this.getAll();
    if (items) items = items.filter(item => item[prop] === value);
    if (items.length <= 0) items = null;
    return items;
  }

  getSingleByID(value) {
    let item = this.getByValue('id', value);
    if (item) item = item[0];
    return item;
  }

  store(value) {
    if(value.length) {
      const serialized = value.map(item => JSON.stringify(item)).join('|');
      localStorage.setItem(this.key, serialized);
    } else {
      localStorage.setItem(this.key, JSON.stringify(value));
    }
  }

  dropTable() {
    localStorage.removeItem(this.key);
  }

  dropAll() {
    localStorage.clear();
  }
}

export default DB;