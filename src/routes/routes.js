import MainPage from '../Containers/MainPage';
import ListGrant from '../Containers/ListGrant';
import Login from '../Containers/Login';
import HomePageVM from "../pages/HomePage/HomePageVM";
import ApplyGrant from '../Containers/ApplyGrant';

var routes = [
    { path: "/LSGD_FRONT/mainpage", name: "mainpage", component: MainPage },
    { path: "/LSGD_FRONT/listgrants", name: "listgrants", component: ListGrant },
    { path: "/LSGD_FRONT/applygrant", name: "applygrant", component: ApplyGrant },
    { path: "/LSGD_FRONT/home", name: "home", component: HomePageVM },
    { path: "/LSGD_FRONT/", name: "login", component: Login },
    { path: "/", name: "login", component: Login },

    
    
    
  ];

export default routes;
