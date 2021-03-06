import MainPage from '../Containers/MainPage';
import ListGrant from '../Containers/ListGrant';
import Login from '../Containers/Login';
import ApplyGrant from '../Containers/ApplyGrant';
import RegisterNewCitizen from '../Containers/RegisterNewCitizen';
import SuperAdmin from "../Components/SuperAdmin/SuperAdmin";
import AdminLogin from "../Components/AdminLogin/AdminLogin";
import MongoCharts from "../Components/MongoCharts/MongoCharts";
import ViewGrants from '../Components/ViewAllGrants/ViewGrants';

import HomePageVM from "../pages/HomePage/HomePageVM";
import ListGrantVM from "../pages/ListGrants/ListGrants";
import ApplyGrantsVM from "../pages/ApplyGrants/ApplyGrants";


import EmployeeSignup from '../Containers/EmployeeSignup';
import CitizenLogin from '../Containers/UserFiles/CitizenLogin';
import CitizenViewAllGrants from '../Containers/UserFiles/CitizenViewGrant';
import Citizenappliedgrants from '../Containers/UserFiles/CitizenAppliedGrants';
import Citizenmainpage from '../Containers/UserFiles/CitizenMainPage';
import Citizenapplygrant from '../Containers/UserFiles/CitizenApplyGrant/CitizenApplyGrant';
import Citizensignup from '../Containers/UserFiles/CitizenSignup/CitizenSignup';
import RegisterCitizenUI from "../pages/RegisterCitizen/RegisterCitizen";

var routes = [
    // {path: "/LSGD_FRONT/mainpage", name: "mainpage", component: MainPage},
    
    {path: "/LSGD_FRONT/listgrants", name: "listgrants", component: ListGrant},
    {path: "/LSGD_FRONT/p/listgrants", name: "listgrantsvm", component: ListGrantVM},

    {path: "/LSGD_FRONT/applygrant", name: "applygrant", component: ApplyGrant},
    // {path: "/LSGD_FRONT/applygrant", name: "applygrant_page", component: ApplyGrantsVM},

    {path: "/LSGD_FRONT/mainpage", name: "home", component: HomePageVM},

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
    {path:'/citizenmainpage',name:'citizenmainpage',component:Citizenmainpage},
    {path:'/citizenapplygrant',name:'citizenapplygrant',component:Citizenapplygrant},
    {path:'/citizensignup',name:'citizensignup',component:Citizensignup},
    {path: "/", name: "login", component: Login},

];

export default routes;
