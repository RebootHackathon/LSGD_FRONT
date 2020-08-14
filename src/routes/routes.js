import MainPage from '../Containers/MainPage';
import ListGrant from '../Containers/ListGrant';
import Login from '../Containers/Login';
import ExpandCard from '../Components/CardView/ExpandCard';

var routes = [
    { path: "/mainpage", name: "mainpage", component: MainPage },
    { path: "/listgrants", name: "listgrants", component: ListGrant },
    { path: "/:id", name: "listgrants", component: ExpandCard },
    { path: "/", name: "login", component: Login },
  ];

export default routes;