import woCreateComponent from './views/woCreate.vue'
import woSearchComponent from './views/woSearch.vue'

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
        path: '/test',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/test/index.vue'], resolve)
    },
    {
        path: '/menu2',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/menu2.vue'], resolve)
    },
    {
        path: '/b',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index3.vue'], resolve),
        children:[
            {
                path:'main',
                components:{
                    woCreate:woCreateComponent,
                    woSearch:woSearchComponent
                }
            }
        ]
    }
];
export default routers;