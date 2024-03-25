import { useRoutes } from 'react-router-dom'
import Register from './pages/Register'
export default function useRouteElements() {
  const routes = useRoutes([{ path: '/register', element: <Register /> }])
  return routes
}
