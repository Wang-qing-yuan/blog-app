<template>
	<div class="row">
		<div class="navigation">
			<ul>
				<li><router-link :to="{ path: '/search/article', query: { keywords: this.keywords } }">文章</router-link></li>
				<li><router-link :to="{ path: '/search/topic', query: { keywords: this.keywords } }">专题</router-link></li>
				<li><router-link :to="{ path: '/search/user', query: { keywords: this.keywords } }">用户</router-link></li>
			</ul>
		</div>
		<div class="bar"><router-view /></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			keywords: ''
		};
	},
	created() {
		this.keywords = this.$route.query.keywords;
	},
	computed: {},
	methods: {}
};
</script>

<style scoped>
	.row{
		display: flex;
		height: auto;
		
	}
	.navigation{
		position: sticky;
		    top: 0;
		flex: 1 1 20%;
		background-image: linear-gradient(rgb(31,31,31), rgb(68, 51, 74));
		height: 600px;
	}
	.bar{
		flex: 1 1 80%;
	background-image: linear-gradient(rgb(31,31,31),rgb(68,51,74));
	}
ul {
	width: 100%;
}
li {
	
	width: 100%;
	margin-bottom: 10px;
	border-radius: 5px;
	text-align: center;
	line-height: 50px;
	letter-spacing: 5px;
}
li a {
	display: block;
	color:white;
	height: 50px;
	width: 70%;
	margin: 0 auto;
}
li a:hover {
	background-color: rgb(64,50,70);
}
.router-link-active {
	background-color: rgb(64,50,70);
}
</style>
