import { useSelector } from "react-redux";
import { Switch, Route, Redirect } from "react-router";
import { publicRoutes, privateRoutes } from ".";

function AppRouter() {
  const isAuth = useSelector(state => state.auth.isAuth);
  
  return (
    isAuth
    ?
    <Switch>
      {privateRoutes.map(route => <Route {...route} key={route.path}/>)}
      <Redirect to={'/feed'}/>
    </Switch>
    :
    <Switch>
      {publicRoutes.map(route => <Route {...route} key={route.path}/>)}
      <Redirect to={'/'}/>
    </Switch>
  );
}

export default AppRouter;