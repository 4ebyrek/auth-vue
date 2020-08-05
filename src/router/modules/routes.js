import MainLayout from '@/layouts/Main'
import AuthLayout from '@/layouts/Auth'
import Auth from '@/pages/authentication/Index'
import Home from '@/pages/home/Index'
import Store from '@/pages/store/Index'
import BlackList from '@/pages/black.list/Index'
import Client from '@/pages/clients/Index'
import Event from '@/pages/events/Index'
import Staff from '@/pages/staff/Index'


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
            },
            {
                path: '/clients',
                component: Client,
                name: 'home'
            },
            {
                path: '/staff',
                component: Staff,
                name: 'home'
            },
            {
                path: '/black/list',
                component: BlackList,
                name: 'home'
            },
            {
                path: '/events',
                component: Event,
                name: 'home'
            },
            {
                path: '/store',
                component: Store,
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