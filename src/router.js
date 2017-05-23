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
    }
];
export default routers;