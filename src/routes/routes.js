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
import EmployeeSignup from '../Containers/EmployeeSignup';
import CitizenLogin from '../Containers/UserFiles/CitizenLogin';
import CitizenViewAllGrants from '../Containers/UserFiles/CitizenViewGrant';
import Citizenappliedgrants from '../Containers/UserFiles/CitizenAppliedGrants';
import RegisterCitizenUI from "../pages/RegisterCitizen/RegisterCitizen";

var routes = [
    {path: "/LSGD_FRONT/mainpage", name: "mainpage", component: MainPage},
    {path: "/LSGD_FRONT/listgrants", name: "listgrants", component: ListGrant},

    {path: "/LSGD_FRONT/applygrant", name: "applygrant", component: ApplyGrant},
    {path: "/LSGD_FRONT/p/applygrant", name: "applygrant_page", component: ApplyGrant},

    {path: "/LSGD_FRONT/home", name: "home", component: HomePageVM},

    {path: "/LSGD_FRONT/registercitizen", name: "registercitizen", component: RegisterNewCitizen},

    {path: "/LSGD_FRONT/p/registercitizen", name: "registercitizen_page", component: RegisterCitizenUI},


    {path:"/LSGD_FRONT/viewallgrants",name:"viewallgrants", component:ViewGrants},

    {path: "/LSGD_FRONT/", name: "login", component: Login},
    {path: "/adminlogin", name: "adminlogin", component: AdminLogin},
    {path: "/admin", name: "admin", component: SuperAdmin},
    {path: "/mongo", name: "admin", component: MongoCharts},
    {path:"/employsignup",name:"employeesignup",component:EmployeeSignup},
    {path: "/citizenlogin", name: "citizenlogin", component: CitizenLogin},
    {path: "/citizenviewallgrants", name: "citizenviewallgrants", component: CitizenViewAllGrants},
    {path:'/citizenappliedgrants',name:'citizenappliedgrants',component:Citizenappliedgrants},
    {path: "/", name: "login", component: Login},

];

export default routes;
