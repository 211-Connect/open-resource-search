class sessionStorage {
  static has(value: string) {
    if (this.get(value) != null) return true;
    return false;
  }

  static get(value: string) {
    return this.jsonParseSafe(window.sessionStorage.getItem(value));
  }

  static set(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  static remove(key: string) {
    window.sessionStorage.removeItem(key);
  }

  static clear() {
    window.sessionStorage.clear();
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

export default sessionStorage;
