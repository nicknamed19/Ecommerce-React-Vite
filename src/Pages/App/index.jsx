import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../Context'
import { Home } from '../Home'
import { MyAccount } from '../MyAccount'
import { MyOrder } from '../MyOrder'
import { MyOrders } from '../MyOrders'
import { NotFound } from '../NotFound'
import { SignIn } from '../SignIn'
import { NavBar } from '../../Components/NavBar'
import { ProductDetail } from '../../Components/ProductDetail'
import { CheckoutSideMenu } from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/:category', element: <Home/>},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/*', element: <NotFound />},
  ])

  return routes;
}


function App() {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <ProductDetail />
        <CheckoutSideMenu />
        <AppRoutes />
      </BrowserRouter>      
    </ShoppingCartProvider>
  )
}

export default App
