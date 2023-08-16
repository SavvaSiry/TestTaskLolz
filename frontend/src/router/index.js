// Composable
import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/',
        component: () => import('@/components/default/Default.vue'),
        meta: {
            title: 'HomePage',
        },
        children: [
            {
                path: '',
                name: 'Home',
                component: () => import('@/views/Home'),
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'PostsApp';
    next();
});

export default router