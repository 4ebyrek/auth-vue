import Auth from '@/pages/authentication/Index'
import Home from '@/pages/home/Index'
import MainLayout from '@/layouts/Main'
import AuthLayout from '@/layouts/Auth'

export default [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '/',
                redirect: 'home',
                name: 'root',
            },
            {
                path: '/home',
                component: Home,
                name: 'home'
            }
        ]
    },
    {
        path: '',
        component: AuthLayout,
        children: [
            {
                path: '/login',
                component: Auth,
                name: 'login'
            }
        ]
    }
]