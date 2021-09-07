class localStorage {
  static has(value: string) {
    if (this.get(value) != null) return true;
    return false;
  }

  static get(value: string) {
    return this.jsonParseSafe(window.localStorage.getItem(value));
  }

  static set(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string) {
    window.localStorage.removeItem(key);
  }

  static clear() {
    window.localStorage.clear();
  }

  private static jsonParseSafe(json: string) {
    if (json == null) return json;

    try {
      const parsedValue = JSON.parse(json);
      return parsedValue;
    } catch (err) {
      return json;
    }
  }
}

export default localStorage;
