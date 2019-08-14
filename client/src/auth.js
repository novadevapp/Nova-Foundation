class Auth {
  constructor() {
    this.authenticated = false;
  }

  logout(cb) {
    localStorage.removeItem("testName");
    cb();
  }

  isAuthenticated() {
    const jwtQuery = localStorage.getItem("testName");

    if (!jwtQuery) {
      return this.authenticated;
    } else {
      fetch("/api/v1/auth", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          data: { jwt: jwtQuery }
        })
          .then(res => res.JSON)
          .catch(err => err)
      });
    }
  }
}

export default new Auth();
