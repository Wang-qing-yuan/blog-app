<template>
	<div class="container">
		<div class="article-theme w-fx-center"><p class="typing">Articles</p></div>

		<div class="w-row">
			<div class="article-left">
				<div class="card">
					<div class="a a1"><img src="../assets/css/书.jpg" /></div>
					<div class="a a2"><img src="../assets/css/头像.jpg" /></div>
					<div class="a a3"><img src="../assets/css/月亮.jpg" /></div>
					<div class="a a4"><img src="../assets/css/月亮.jpg" /></div>
					<div class="a a5"><img src="../assets/css/用户.jpg" /></div>
				</div>
			</div>
			
			
			<div class="article-right">
				<div id="switch">
					<div style="background-color:coral;border-top-left-radius: 30px;border-bottom-left-radius: 30px;"><h3>开始读书</h3></div>
					<div style="background-color:lightblue;  overflow: hidden;" id="myswitchDiv"><h3>关闭懒惰</h3></div>
				</div>
			</div>
		</div>
		
		
		
		
		<div class="w-row">
			<div class="articledetail-right"></div>
			
		<div class="articledetail-left">
			<div class="banner-book ">
				<div class="book" v-for="(article, index) in articles" :key="index">
					<div class="w-row"><h3>{{ article.article.title }}</h3>
					<h5 style="text-indent:20px;margin-top: 5px;" @click="toDetail(article.article.userId)">{{ article.author.nickname }}</h5></div>
					
					<div class="w-row">
						<img :src="article.article.thumbnail" @click="toADetail(article.article.id)" />
						<div class="row">
							<p>{{ article.article.summary }}</p>
						</div>
					</div>
					<div class="w-row">
						<button class="comments">
							<i class="iconfont">&#xe643;</i>
							赞同{{ article.article.likes }}
						</button>
						<button class="comments"><i class="iconfont">&#xe631;</i></button>
						<button class="comments">
							<i class="iconfont">&#xe6ba;</i>
							{{ article.article.comments }}条评论
						</button>
						<button class="comments">
							<i class="iconfont">&#xe63e;</i>
							分享
						</button>
						<button class="comments">
							<i class="iconfont">&#xe630;</i>
							收藏
						</button>
						<button class="comments">
							<i class="iconfont">&#xe6a1;</i>
							感谢
						</button>
					</div>
				</div>
			</div>
		</div>
		
		<div class="articledetail-right"></div>
		</div>
		
<div class="w-fx-center"><button class="comments" @click="loadMore">点击加载更多</button></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			articles: [],
			user: null,
			currentPage: 1,
						count: 20
		};
	},
	created() {
		
		this.axios.get('http://localhost:8080/api/article').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
	},

	computed: {
		// 解决403图片缓存问题
		getImages(_url) {
			if (_url) {
				let _u = _url.substring(8);
				return 'https://images.weserv.nl/?url=' + _u;
			}
		}
	},
	
	methods:{
		toDetail(id) {
			this.$router.push('/userDetail/' + id);
		},
		toADetail(id) {
			this.$router.push('/articleDetail/' + id);
		},
		loadMore() {
					this.currentPage = this.currentPage + 1;
					this.axios
						.get('http://localhost:8080/api/article', {
							params: {
								page: this.currentPage,
								count: this.count
							}
						})
						.then(res => {
							console.log(res.data.data.length);
							let temp = [];
							temp = res.data.data;
							for (var i = 0; i < temp.length; i++) {
								this.articles.splice(this.currentPage * this.count, 0, temp[i]);
							}
							console.log(this.articles.length);
						});}
		
		
		
		
	}
};
</script>

<style scoped>
	@font-face {
	  font-family: 'iconfont';  /* project id 1514380 */
	  src: url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.eot');
	  src: url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.eot?#iefix') format('embedded-opentype'),
	  url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.woff2') format('woff2'),
	  url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.woff') format('woff'),
	  url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.ttf') format('truetype'),
	  url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.svg#iconfont') format('svg');
	}
	.iconfont {
		font-family: 'iconfont' !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-webkit-text-stroke-width: 0.2px;
		-moz-osx-font-smoothing: grayscale;
	}
.container {
	background-image: linear-gradient(rgb(31,31,31),rgb(68,51,74),rgb(31,31,31));
}
.row{
	display: flex;
		flex-wrap: wrap;
}

.article-theme {
	width: 100%;
}
.typing {
	width: 4.5em;
	height: 1.25em;
	font-size: 10.5rem;
	border-right: 1px solid transparent;
	animation: typing 10s steps(8, end) infinite, blink-caret 1s step-end infinite;
	font-family: Consolas, Monaco;
	word-break: break-all;
	overflow: hidden;
}
/* 打印效果 */
@keyframes typing {
	0% {
		width: 0;
	}
	20% {
		width: 4.5em;
	}
	90% {
		width: 4.5em;
	}
	100% {
		width: 0;
	}
}
/* 光标闪啊闪 */
@keyframes blink-caret {
	from,
	to {
		border-color: transparent;
	}
	50% {
		border-color: currentColor;
	}
}

.article-left {
	flex: 1 1 70%;
}
.card {
	width: 100%;
	height: 400px;
	display: flex;
}
.a img {
	width: 100%;
	height: 100%;
}
.a {
	width: 40%;
	height: 40%;
	background-color: rgb(50, 31, 57);
	border: 1px solid rgba(255, 254, 250, 0.3);
	border-radius: 20px;
	padding: 15px;
}
.a:hover {
	z-index: 5;
	height: 45%;
	width: 45%;
	background-color: rgba(255, 174, 189, 0.7);
}
.a1 {
	z-index: 1;
	position: relative;
	top: 120px;
}
.a2 {
	position: relative;
	top: 90px;
	right: 80px;
	z-index: 1;
}
.a3 {
	position: relative;
	top: 60px;
	right: 160px;
	z-index: 1;
}
.a4 {
	position: relative;
	top: 30px;
	right: 240px;
	z-index: 1;
}
.a5 {
	position: relative;
	top: 0px;
	right: 320px;
	z-index: 1;
}

.article-right {
	flex: 1 1 30%;
}
#switch {
	width: 70%;
	height: 50px;
	border-radius: 30px;
	display: flex;
	text-align: center;
	margin-top: 30px;
}
#switch h3 {
	color: white;
}

#switch div {
	flex-grow: 1;
	flex-shrink: 1;
	flex-basis: 95%;
}
#myswitchDiv {
	animation: switch 15s infinite;
	border-top-right-radius: 30px;
	border-bottom-right-radius: 30px;
}
@keyframes switch {
	80% {
		flex-shrink: 8;
	}
}
.article-card{
	border: 1px solid white;
	width: 50%;
	height: 200px;
}
.article-card img{
	height: 50%;
	width: 100%;
}

.articledetail-left {
	flex: 1 1 70%;
}

.banner-card {
	text-align: center;
}
.banner-card img {
	width: 75%;
	height: auto;
	border-radius: 20px;
	opacity: 0.6;
}
.banner-book {
	width: 100%;
}
.book {
	border: 1px solid rgb(50, 31, 57);
	border-radius: 20px;
	padding: 20px;
	margin: 20px;
}
.book img {
	width: 25%;
	border: 20px solid rgba(0, 0, 0, 0.1);
	border-radius: 20px;
}
.row {
	border: 10px solid rgba(0, 0, 0, 0.1);
	justify-content: center;
	align-items: center;
}
.comments {
	border: none;
	margin-right: 25px;
	background-color: rgba(68, 51, 74, 0.8);
	padding: 7px;
	border-radius: 5px;
	cursor: pointer;
	transition-duration: 0.4s;
	color: white;
}
.comments:hover {
	box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 10px 20px 0 white;
}
.comments:active {
  background-color: rgb(68, 51, 74);
  box-shadow: 0 5px #666;
  transform: translateY(10px);
}
.articledetail-right{
	flex: 1 1 5%;
}

</style>
