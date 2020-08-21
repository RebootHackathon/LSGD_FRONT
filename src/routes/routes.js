import MainPage from '../Containers/MainPage';
import ListGrant from '../Containers/ListGrant';
import Login from '../Containers/Login';
import HomePageVM from "../pages/HomePage/HomePageVM";
import ApplyGrant from '../Containers/ApplyGrant';
import RegisterNewCitizen from '../Containers/RegisterNewCitizen';
import SuperAdmin from "../Components/SuperAdmin/SuperAdmin";
import AdminLogin from "../Components/AdminLogin/AdminLogin";
import MongoCharts from "../Components/MongoCharts/MongoCharts";
import ViewGrants from '../Components/ViewAllGrants/ViewGrants';


import RegisterCitizenUI from "../pages/RegisterCitizen/RegisterCitizen";

var routes = [
    {path: "/LSGD_FRONT/mainpage", name: "mainpage", component: MainPage},
    {path: "/LSGD_FRONT/listgrants", name: "listgrants", component: ListGrant},

    {path: "/LSGD_FRONT/applygrant", name: "applygrant", component: ApplyGrant},
    {path: "/LSGD_FRONT/p/applygrant", name: "applygrant_page", component: ApplyGrant},

    {path: "/LSGD_FRONT/home", name: "home", component: HomePageVM},

    {path: "/LSGD_FRONT/registercitizen", name: "registercitizen", component: RegisterNewCitizen},
<<<<<<< HEAD
    {path: "/LSGD_FRONT/p/registercitizen", name: "registercitizen_page", component: RegisterCitizenUI},

=======
    {path:"/LSGD_FRONT/viewallgrants",name:"viewallgrants", component:ViewGrants},
>>>>>>> f1519e51b48b50b7a58a49fa4388b9fefe967b09
    {path: "/LSGD_FRONT/", name: "login", component: Login},
    {path: "/adminlogin", name: "adminlogin", component: AdminLogin},
    {path: "/admin", name: "admin", component: SuperAdmin},
    {path: "/mongo", name: "admin", component: MongoCharts},
    {path: "/", name: "login", component: Login},

];

export default routes;
