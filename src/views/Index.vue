<template>
	<div>
		<div class="center"><h1>推荐图书</h1></div>

		<div class="container ">
			<div class="container-left">
				<div class="card" v-for="(article, index) in articles" :key="index">
					<div class="t">
						<img :src="article.cover" />
						<!-- article.cover 
						getImages(article.cover)-->
						<h3>{{ article.id }}</h3>
					</div>
					<div class="tu" @click="toDetail(article.id)">
						<h3 >{{ article.title }}</h3>
					</div>
					<div class="tutu">
						<img :src="article.cover" />
						<h4>{{ article.content }}</h4>
					</div>
					<div class="tututu">
						<button class="button buttonlike">
							<i class="iconfont">&#xe643;</i>
							赞同{{ article.likes }}
						</button>
						<button class="button buttonunlike"><i class="iconfont">&#xe631;</i></button>

						<button class="button buttonconmmon title">
							<i class="iconfont">&#xe6ba;</i>
							{{ article.comments }}条评论
						</button>
						<button class="button buttonconmmon title">
							<i class="iconfont">&#xe63e;</i>
							分享
						</button>
						<button class="button buttonconmmon title">
							<i class="iconfont">&#xe630;</i>
							收藏
						</button>
						<button class="button buttonconmmon title">
							<i class="iconfont">&#xe6a1;</i>
							感谢
						</button>
						<button class="button buttonconmmon title">...</button>
					</div>
				</div>
			</div>

			<div class="container-right">
				<div class="card1">
					<div class="c">
						<button class="button buttonconmmon "><i class="iconfont">&#xe609;</i></button>
						<button class="button buttonconmmon "><i class="iconfont">&#xe715;</i></button>
						<button class="button buttonconmmon "><i class="iconfont">&#xe664;</i></button>
					</div>

					<div class="c1">
						<button class="button buttonconmmon ctitle">写回答</button>
						<button class="button buttonconmmon ctitle">写文章</button>
						<button class="button buttonconmmon ctitle">写想法</button>
					</div>
					<div class="c2">
						<i class="iconfont">&#xe66e;</i>
						<p>我的稍后答</p>
					</div>
					<div class="c2">
						<i class="iconfont">&#xe66b;</i>
						<p>我的草稿</p>
					</div>
				</div>

				<div class="card2">
					<div class="a">
						<button class="button buttonconmmon ">
							<i class="iconfont">&#xe609;</i>
							<p>创作者中心</p>
						</button>
						<h3>LV 0</h3>
					</div>

					<div class="aa">
						<div class="lefta">
							<p>昨日被阅读数</p>
							<p>0</p>
							<p>较前日--</p>
						</div>
						<div class="righta">
							<p>昨日获赞同数</p>
							<p>0</p>
							<p>较前日--</p>
						</div>
					</div>
				</div>

				<div class="card3">
					<div class="b">
						<button class=" bb bb1 w-fx-center">
							<i class="iconfont">&#xe655;</i>
							<p>Live</p>
						</button>
						<button class="bb bb2 w-fx-center">
							<i class="iconfont">&#xe62d;</i>
							<p>书店</p>
						</button>
						<button class="bb bb3 w-fx-center">
							<i class="iconfont">&#xe628;</i>
							<p>圆桌</p>
						</button>
					</div>

					<div class="b w-fx-center">
						<button class="bb bb4 w-fx-center">
							<i class="iconfont">&#xe608;</i>
							<p>专栏</p>
						</button>
						<button class="bb bb5 w-fx-center">
							<i class="iconfont">&#xe60d;</i>
							<p>付费咨询</p>
						</button>
					</div>
				</div>

				<div class="card1"><img src="https://pic3.zhimg.com/v2-178478edadbc384cc3568e9df7aebf9e_540x450.jpeg" /></div>

				<div class="card4">
					<div class="f">
						<i class="iconfont">&#xe630;</i>
						<p>我的收藏</p>
					</div>
					<div class="f">
						<i class="iconfont">&#xe632;</i>
						<p>我关注的问题</p>
					</div>
					<div class="f">
						<i class="iconfont">&#xe666;</i>
						<p>我的邀请</p>
					</div>
					<div class="f">
						<i class="iconfont">&#xe60d;</i>
						<p>我的余额</p>
					</div>
					<div class="f">
						<i class="iconfont">&#xe61d;</i>
						<p>站务中心</p>
					</div>
					<div class="f">
						<i class="iconfont">&#xe6d5;</i>
						<p>版权服务中心</p>
					</div>
				</div>

				<div class="card1"><img src="https://pic2.zhimg.com/v2-6e4cf17bf4a5579a265570f38953a755_540x450.jpeg" /></div>

				<div class="n">
					<div class="nn">
						<div class="nnn"><h5>刘看山</h5></div>
						<div class="nnn"><h5>知乎指南</h5></div>
						<div class="nnn"><h5>知乎协议</h5></div>
						<div class="nnn"><h5>知乎隐私保护指引</h5></div>
					</div>
					<div class="nn">
						<div class="nnn"><h5>应用</h5></div>
						<div class="nnn"><h5>工作</h5></div>
						<div class="nnn"><h5>申请开通知乎机构号</h5></div>
					</div>
					<div class="nn">
						<div class="nnn"><h5>侵权举报</h5></div>
						<div class="nnn"><h5>网上有害信息举报专区</h5></div>
					</div>
					<div class="nn">
						<div class="nnn"><h5>京ICP证110745号</h5></div>
					</div>
					<div class="nn">
						<div class="nnn"><h5>京公网安备11010802010035号</h5></div>
					</div>
					<div class="nn">
						<div class="nnn"><h5>违法和不良信息举报：010-82716601</h5></div>
					</div>
					<div class="nn">
						<div class="nnn"><h5>证照中心</h5></div>
					</div>
					<div class="nn">
						<div class="nnn"><h5>联系我们@王庆媛</h5></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			articles: []
		};
	},
	created() {
		this.axios.get('http://localhost:8080/api/articles/hot').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
	},

methods: {
	toDetail(id) {
		this.$router.push('/articleDetail/' + id)
	}

},
	computed: {
		// 解决403图片缓存问题
		getImages(_url) {
			return 'https://images.weserv.nl/?url=' + _url;
		}
	}
};
</script>

<style scoped>
.container {
	margin-top: 50px;
	width: 100%;
	display: flex;
}
.center {
	display: flex;
	justify-content: center;
}
.container-left {
	width: 60%;
	margin-left: 80px;
}
.card {
	width: 95%;
	height: 270px;
	margin-bottom: 2px;
	margin-left: 10px;
	background-color: white;
}
.t {
	height: 35px;
	display: flex;
	align-items: center;
}
.t img {
	width: 5%;
	height: auto;
	border-radius: 20px;
	margin-top: 5px;
	margin-left: 20px;
	margin-right: 20px;
}
.tu {
	height: 10px;
	margin-left: 20px;
	margin-top: 10px;
}
.tutu {
	margin-top: 20px;
	margin-right: 20px;
	display: flex;
}
.tutu img {
	width: 17%;
	height: 150px;
	border-radius: 5px;
	margin-right: 10px;
	margin-left: 20px;
}
.tututu {
	display: flex;
	margin-top: 10px;
}
.buttonlike {
	background-color: rgb(229, 242, 255);
	color: rgb(0, 132, 255);
	border: none;
	width: 80px;
	height: 30px;
	margin-left: 20px;
	margin-right: 10px;
	border-radius: 3px;
}

.buttonlike:hover {
	background-color: rgb(217, 237, 255);
	color: rgb(0, 132, 255);
}
.buttonunlike {
	background-color: rgb(229, 242, 255);
	color: rgb(0, 132, 255);
	border: none;
	width: 30px;
	height: 30px;
	margin-left: 10px;
	margin-right: 10px;
	border-radius: 3px;
}

.buttonunlike:hover {
	background-color: rgb(217, 237, 255);
	color: rgb(0, 132, 255);
}
.buttonconmmon {
	background-color: rgb(255, 255, 255);
	color: rgb(133, 144, 166);
	border: none;
	width: 90px;
	height: 30px;
	margin-left: 10px;
	margin-right: 10px;
	border-radius: 3px;
}
.buttonconmmon:hover {
	background-color: rgb(255, 255, 255);
	color: rgb(118, 131, 155);
}
.title {
	font-size: 15px;
	font-weight: 450;
}
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
.container-right {
	width: 25%;
	/* background-color:rgb(255,255,255); */
	margin-left: 10px;
	height: 1610px;
	border: 1px solid;
}
.card1 {
	width: 95%;
	height: 208px;
	margin-bottom: 2px;
	margin-left: 10px;
	background-color: white;
	border-radius: 5px;
}
.card1 img {
	width: 100%;
	height: 205px;
}
.c {
	/* margin-top: 20px; */

	display: flex;
	height: 40px;
	justify-content: space-around;
}
.c1 {
	margin-top: -10px;
	display: flex;
	height: 40px;
	justify-content: space-around;
}

.ctitle {
	font-size: 18px;
	font-weight: 500;
}

.c2 {
	margin-top: 25px;
	border-bottom: 1px solid rgb(246, 246, 246);
	border-length: 80%;
	margin-left: 20px;
	height: 40px;
	display: flex;
	color: rgb(133, 144, 166);
}
.c2:hover {
	background-color: rgb(246, 246, 246);
}
.c2 p {
	margin-left: 20px;
	color: rgb(133, 144, 166);
}
.card2 {
	width: 95%;
	height: 160px;
	margin-top: 20px;
	margin-bottom: 2px;
	margin-left: 10px;
	background-color: white;
	border-radius: 5px;
}
.a {
	margin-left: 10px;
	display: flex;
	align-items: center;
	height: 50px;
	border-bottom: 1px solid rgb(246, 246, 246);
	width: 90%;
}
.a h3 {
	color: rgb(0, 147, 255);
}
.aa {
	display: flex;
	margin-top: 30px;
}
.lefta {
	width: 45%;
	border-right: 1px solid black;
	border-right: 1px solid #e0e0e0;
	margin-left: 30px;
}

.righta {
	width: 45%;
	margin-left: 30px;
}

.card3 {
	width: 95%;
	height: 180px;
	margin-top: 20px;
	margin-bottom: 20px;
	margin-left: 10px;
	background-color: white;
	border-radius: 5px;
}
.b {
	height: 80px;

	display: flex;
}
.bb {
	display: flex;
	flex-direction: column;
	width: 30%;
	margin-right: 10px;
	height: 80px;
	background-color: rgb(255, 255, 255);
	color: rgb(133, 144, 166);
	border: none;
	border-radius: 3px;
}
.bb1:hover {
	background-color: rgb(255, 255, 255);
	color: rgb(255, 207, 0);
}
.bb2:hover {
	background-color: rgb(255, 255, 255);
	color: rgb(67, 212, 128);
}
.bb3:hover {
	background-color: rgb(255, 255, 255);
	color: rgb(0, 132, 255);
}
.bb4:hover {
	background-color: rgb(255, 255, 255);
	color: rgb(15, 136, 235);
}
.bb5:hover {
	background-color: rgb(255, 255, 255);
	color: rgb(84, 120, 240);
}
.card4 {
	width: 95%;
	height: 240px;
	margin-top: 20px;
	margin-bottom: 20px;
	margin-left: 10px;
	background-color: white;
	border-radius: 5px;
}
.f {
	display: flex;
	height: 40px;
	color: rgb(133, 144, 166);
	margin-left: 10px;
	margin-right: 10px;
}

.f:hover {
	background-color: rgb(246, 246, 246);
}
.n {
}
.nn {
	color: rgb(138, 149, 170);
	margin-top: 20px;
	display: flex;
}
.nnn {
	margin-left: 10px;
}
</style>
