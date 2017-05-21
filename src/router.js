const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index2.vue'], resolve),
        children:[
        	{
        		path:'content/:id',
        		component:(resolve) => require(['./views/index.vue'], resolve)
        	}
        ]
    }
];
export default routers;