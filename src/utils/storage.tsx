var Storage = {
  get: function (key: string) {
    const storage = localStorage.getItem(key);

    return storage || '';
  },

  check: function (key: string) {
    let value = this.get(key);
    if (value && value !== '{}') {
      return true;
    } else {
      return false;
    }
  },

  delete: function (key: string) {
    localStorage.removeItem(key);
    return true;
  },

  save: function (key: string, value: any) {
    localStorage.setItem(key, value);
    return true;
  },

  saveMultiple: function (object: Object) {
    for (const [key, value] of Object.entries(object)) {
      Storage.save(key, value);
    }
    return true;
  },

  deleteMultiple: function (keys: Array<string>) {
    for (const val of keys) {
      Storage.delete(val.toString());
    }
  },

  checkMultiple: function (keys: Array<string>) {
    if (!keys || keys.length < 1) {
      return false;
    }
    let allExist = true;
    for (const val of keys) {
      allExist = Storage.check(val);
    }
    return allExist;
  }
};

export default Storage;
