<template>
	<div class="column">
		<div v-for="(item, index) in articles" :key="index" class="article-card"  @click="toADetail(item.article.id)">
			<div class="w-row">
					<h3>{{item.article.title}}</h3>
					<p style="margin-left: 10px;">{{item.author.nickname}}</p>
					
				</div>
				<div class="media-middle">
					<!-- <router-link :to="{ path: '/article/' + item.id }"> -->				<!-- 	</router-link> -->
					<img :src="item.author.avatar" />
					<div class="w-fx-center"><h4>{{ item.article.summary }}</h4></div>
							

					
				</div>	<p>来自于专题:{{ item.topic.topicName }}</p>
				
				<div class="w-row w-fx-center" style="margin-top: 10px;">
					<button class="comments">
						<i class="iconfont">&#xe643;</i>
						赞同{{item.article.likes }}
					</button>
					<button class="comments"><i class="iconfont">&#xe631;</i></button>
					<button class="comments" @click="changeshow()">
						<i class="iconfont">&#xe6ba;</i>
						{{ item.article.comments}}条评论
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
				<!-- 	<span>{{ item.article.id }}</span> -->
				<div class="media-right"><img :src="item.thumbnail" class="thumnail-xs"/></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: [],
			keywords: ''
		};
	},
	created() {
		this.keywords = this.$route.query.keywords;
		console.log(this.keywords);
		this.axios
			.get('http://localhost:8080/api/article', {
				params: {
					keywords: this.keywords
				}
			})
			.then(res => {
				console.log(res.data.data.length);
				this.articles = res.data.data;
			});
	},
	methods: {
		toADetail(id) {
			this.$router.push('/articleDetail/' + id);
		}
	}
};
</script>
<style scoped>
	@font-face {
		font-family: 'iconfont'; /* project id 1514380 */
		src: url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.eot');
		src: url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.woff2') format('woff2'),
			url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.woff') format('woff'), url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.ttf') format('truetype'),
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
	.article-card{
	border-radius: 10px;
		height: auto;
		box-shadow: 2px 5px 10px #aaa;
		margin-bottom: 10px;
	}
	.article-card:hover{
					
					/*渐变背景*/
					background-image: -webkit-linear-gradient(left, rgb(31,31,31),rgb(68,51,74));
					color: transparent;
					
					
					background-size: 200% 200%;
					/*背景图片向水平方向扩大一倍，这样background-position才有移动与变化的空间*/
					/* 动画 */
					animation: masked-animation 1s linear;
				}
				 @keyframes masked-animation {
				            0% {
				                background-position: 0 0;   /*background-position 属性设置背景图像的起始位置。*/
				            }
				            100% {
				                background-position: -100% 0;
				            }
	}
	.media-middle{
		display: flex;
	}
	.media-middle img{
		width: 15%;
		height: auto;
		border-radius: 20px;
	}
	.article-card:hover h4{
		text-decoration: underline;
		text-decoration-color: white;
	}
	.article-card:hover h3{
		font-size: 20px;
	}
	.article-card:hover img{
		box-shadow: 10px 10px 10px #aaa
	}
</style>
