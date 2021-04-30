import angular from 'angular';
import config from '../common/config';

import usersView from './users/users.view';
import homeView from './home/home.view';
import loginView from './login/login.view'

export default angular
  .module(`${config.appName}.views`, [
    loginView,
    usersView,
    homeView,
  ])
  .name;
