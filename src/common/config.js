export default {
  appName: 'pp-emmanuel-najera-front',
  api: {
    base: 'localhost:8081/',
    resources: {
      users: 'users/',
      login: 'auth/login',
      signup: 'auth/signup'
    }
  },
  stateUrls: {
    // keys should match view component names
    home: '/',
    login: '/login',
    users: '/users',
    lastfemaleusers: '/lastfemaleusers'
  }
};
