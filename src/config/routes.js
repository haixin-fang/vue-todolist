import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'
export default [
    {
        path: '/',
        redirect: '/app'
    },
    {
        path: '/app',
        name: 'app',
        component: Todo,
        meta: {
            title: 'this is app',
            description: '变化'
        },
        beforeEnter (to, from, next) {
            console.log('before enter')
            next()
        }
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/login/ext',
        component: Login
    }
]
