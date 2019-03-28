import Vue from 'vue'

import Router from 'vue-router'

import Layout from '@/components/layout'
import Index from '@/components/index'
import contract from '@/components/contract'
import contact from '@/components/contact'

Vue.use(Router);
const _routes=[
    {
        path:'/',
        component:Layout,
        name:'Index',
        children:[{
            path:'/',
            name:'home',
            component:Index
        }]
    },
    {
        path:'contract',
        component:Layout,
        name:'contract',
        children:[{
            path:'/contract',
            name:'contract',
            component:contract
        }]
    },
    {
        path:'contact',
        component:Layout,
        name:'contact',
        children:[{
            path:'/contact',
            name:'contact',
            component:contact
        }]
    }
]

export default new Router({
    routes:_routes
})