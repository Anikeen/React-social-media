import Login from "../views/Auth/Login";
import Registration from "../views/Auth/Registration";
import Home from "../views/Home/Home";

export const publicRoutes = [
  {path: '/', exact: true, component: Home},
  {path: '/login', exact: true, component: Login},
  {path: '/registration', exact: true, component: Registration}
]

export const privateRoutes = [
  {path: '/feed', exact: true, component: Home},  
]