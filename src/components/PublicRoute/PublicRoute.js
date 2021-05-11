import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? <Redirect to="/exitPage" /> : children}
    </Route>
  );
}
