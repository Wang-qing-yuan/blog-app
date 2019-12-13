<template>
		<div class="container">
			<div class="w-row">
				<div class="left">
						
				</div>
				<div class="middle">
					<div class="w-fx-center">
						<h1>{{articleVo.article.title}}</h1>
				<h4 style="margin-top: 10px;" @click="toDetail(articleVo.article.userId)">{{articleVo.author.nickname}}</h4></div>
				<div class="a" v-html="text" ><p>{{articleVo.article.content}}</p></div>
				
				</div>
				<div class="right"></div>
			</div>
			<div class="end w-fx-center">
				<p>联系我@王庆媛</p>
			</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articleVo: {
			text: null
			}
		};
	},
	created() {
	
		//获取网页地址url
		var query = window.location.href;
		//锁定到最后一个"/"的位置
		var begin = query.lastIndexOf('/') + 1;
		//取出地址中最后的id值
		var articleId = query.substring(begin);
		//获取对应文章的详细内容
		this.axios.get('http://localhost:8080/api/article/' + articleId).then(res => {
			console.log(res.data.data);
			this.articleVo = res.data.data;
			this.text = this.articleVo.article.content;
		});
		this.axios.get('http://localhost:8080/api/article').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
	},
	computed:{
		// 解决403图片缓存问题
		getImages(_url) {
			if (_url) {
				let _u = _url.substring(8);
				return 'https://images.weserv.nl/?url=' + _u;
			}
		}
	},
	methods: {	
		toDetail(id) {
			this.$router.push('/userDetail/' + id);
		},
		getImages(_url) {
			if (_url) {
				let _u = _url.substring(8);
				return 'https://images.weserv.nl/?url=' + _u;
			}
		},
	
	}
	};
</script>

<style scoped>
.container{
	
		background-image: linear-gradient(rgb(31,31,31),rgb(68,51,74),rgb(31,31,31));
}
.left{
	flex: 1 1 20%;
	
}
.middle{
	flex: 1 1 60%;
}
.right{
	flex: 1 1 20%;
}

</style>
