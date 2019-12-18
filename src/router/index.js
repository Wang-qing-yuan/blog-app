import Vue from 'vue'
import VueRouter from 'vue-router'
import Article from '@/views/Article.vue'
import Dialog from '@/views/Dialog.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Topic from '@/views/Topic.vue'
import CollectionDetail from '@/views/CollectionDetail.vue'
import Collection from '@/views/Collection.vue'
import Detail from '@/views/Detail.vue'
import Index from '@/views/Index.vue'
import Nav from '@/views/Nav.vue'
import Sign from '@/views/Sign.vue'
import User from '@/views/User.vue'
import UserDetail from '@/views/UserDetail.vue'
import UserFans from '@/views/UserFans.vue'
import UserFollows from '@/views/UserFollows.vue'
import Home from '@/views/Home.vue'
import R from '@/views/R.vue'
import Me from '@/views/Me.vue'
import TopicDetail from '@/views/TopicDetail.vue'
import Search from '@/views/Search.vue'
import SearchUser from '@/views/SearchUser.vue'
import SearchTopic from '@/views/SearchTopic.vue'
import SearchArticle from '@/views/SearchArticle.vue'



Vue.use(VueRouter)

const routes = [{
	path: '/',
	component: R,
	children: [{
			path: '/',
			redirect: '/home',
		},
		{
			path: 'home',
			component: Home,
		},
		{
			path: '/user',
			component: User,
		},
		{
			path: '/userDetail/*',
			component: UserDetail,
		},
		{
			path: '/article',
			component: Article,
		},
		{
			path: '/Topic',
			component: Topic,
		},
		{
			path: '/ArticleDetail/*',
			component: ArticleDetail,
		},
		{
			path: '/sign',
			component: Sign
		},
		{
			path: '/Detail/*',
			component: Detail,
		},
		{
			path: '/Me',
			component: Me,
		},
		{
			path: '/TopicDetail/*',
			component: TopicDetail,
		},
		{
			path: 'search',
			component: Search,
			children: [{
					path: '/',
					redirect: 'article'
				},
				{
					path: 'article',
					component: SearchArticle
				},
				{
					path: 'topic',
					component: SearchTopic
				},
				{
					path: 'user',
					component: SearchUser
				}
			]
		},

	]


}]

const router = new VueRouter({
	routes
})

export default router
