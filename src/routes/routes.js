import MainPage from '../Containers/MainPage';
import ListGrant from '../Containers/ListGrant';
import Login from '../Containers/Login';

var routes = [
    { path: "/mainpage", name: "mainpage", component: MainPage },
    { path: "/listgrants", name: "listgrants", component: ListGrant },
    { path: "/", name: "login", component: Login },
  ];

export default routes;