import Login from "../views/Auth/Login";
import Registration from "../views/Auth/Registration";
import Feed from "../views/Feed/Feed";
import Home from "../views/Home/Home";
import User from "../views/User/User";

export const publicRoutes = [
  {path: '/', exact: true, component: Home},
  {path: '/login', exact: true, component: Login},
  {path: '/registration', exact: true, component: Registration}
]

export const privateRoutes = [
  {path: '/feed', exact: true, component: Feed},  
  {path: '/id:id', exact: true, component: User}
]