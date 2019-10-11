import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/index',
		name: 'index',
		component: () => import('./views/Index')
	},
	{
		path: '/',
		name: 'home',
		component: () => import('./views/Home')
	},
	{
		path: '/studyDirectionWeb',
		name: 'studyDirectionWeb',
		component: () => import('./views/studyDirectionWeb')
	},
	{
		path: '/bloggerpage',
		name: 'bloggerpage',
		component: () => import('./views/bloggerpage')
	},
	{
		path: '/blogs',
		name: 'blogs',
		component: () => import('./views/blogs')
	},
	{
		path: '/blog',
		name: 'blog',
		component: () => import('./views/blog')
	},
	{
		path: '/blogger',
		name: 'blogger',
		component: () => import('./views/blogger')
	},
	{
		path: '/test',
		name: 'test',
		component: () => import('./views/test')
	},
	{
		path:'/registering',
		name:'registering',
		component:()=>import('./views/admin/registering')
	},
	{
		path:'/login',
		name:'login',
		component:()=>import('./views/admin/login')
	},
	{
		path:'/blogerInfor',
		name:'blogerInfor',
		component:()=>import('./views/admin/blogerInfor')
	},
	{
		path:'/adminbloglist',
		name:'adminbloglist',
		component:()=>import('./views/admin/adminbloglist')
	},
	{
		path:'/updateBlog',
		name:'updateBlog',
		component:()=>import('./views/admin/updateBlog')
	}
]
})

