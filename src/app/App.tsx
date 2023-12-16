import { FC, lazy, Suspense }                        from 'react'
import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom'
import s                                             from './App.module.scss'
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))

interface Props {

}

const App: FC<Props> = () => {
  console.log(new Date().toLocaleTimeString('ru-RU'))
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Suspense fallback='Loading...'><Home /></Suspense>,
    },
    {
      path: '/about',
      element: <Suspense fallback='Loading...'><About /></Suspense>,
    },
  ])
  
  return (
    <RouterProvider router={router} />
  )
}

export default App
