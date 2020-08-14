import MainPage from '../Containers/MainPage';
import ListGrant from '../Containers/ListGrant';
import Login from '../Containers/Login';
import ExpandCard from '../Components/CardView/ExpandCard';

var routes = [
    { path: "/LSGD_FRONT/mainpage", name: "mainpage", component: MainPage },
    { path: "/LSGD_FRONT/listgrants", name: "listgrants", component: ListGrant },
    { path: "/LSGD_FRONT/:id", name: "listgrants", component: ExpandCard },
    { path: "/LSGD_FRONT/", name: "login", component: Login },
  ];

export default routes;