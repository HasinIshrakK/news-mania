import { createBrowserRouter } from 'react-router'
import App from './App'
import MainLayout from './layouts/MainLayout'
import Dashboard from './pages/Dashboard'
import NewsDetails from './pages/NewsDetails'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                element: <MainLayout />,
                children: [
                    {
                        index: true,
                        element: <Dashboard />,
                    },
                    {
                        path: 'news/:id',
                        element: <NewsDetails />,
                    },
                ],
            },
        ],
    },
])