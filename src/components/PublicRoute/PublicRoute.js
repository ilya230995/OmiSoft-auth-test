import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldredirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {shouldredirect ? <Redirect to="/" /> : children}
    </Route>
  );
}
