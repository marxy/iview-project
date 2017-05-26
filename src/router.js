const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        children:[
        	{
        		path:'index.html',
        		component:(resolve) => require(['./views/index.vue'], resolve)
        	}
        ]
    },
    {
        path: '/a',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index2.vue'], resolve)
    },
    {
        path: '/menu2',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/menu2.vue'], resolve)
    }
];
export default routers;