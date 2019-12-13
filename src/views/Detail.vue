<template>
	<div>
		<div class="container">
			<div class="userdetail-left">
				<div class="userdetail-card w-fx-center"><img :src="user.avatar" /></div>

				<div class="introduce">
					<h2>{{ user.nickname }}</h2>
					<h5>简介{{ user.introduction }}</h5>
				</div>

				<div class="user-card w-fx-center">
					<h4>文章{{ user.articles }}</h4>
					<h4>关注{{ user.follows }}</h4>
					<h4>粉丝{{ user.fans }}</h4>
				</div>
				<div class="w-fx-center">
					<router-link to="/Me" @click="toDetail(user.id)">
						<button class="btn"><h3>编辑个人资料</h3></button>
					</router-link>
				</div>
				<div class="w-fx-center">
					<p style="color: black;">账号创建于{{ user.createTime.date.year }}年{{ user.createTime.date.month }}月{{ user.createTime.date.day }}日</p>
				</div>
			</div>

			<div class="userdetail-right">
				<div class="banner-card"><img :src="user.banner" /></div>
				<div class="banner-book ">
					<div class="book" v-for="(item, index) in article" :key="index">
						<h3>{{ item.article.title }}</h3>
						<div class="w-row">
							<img :src="item.article.thumbnail" />
							<div class="row">
								<p>{{ item.article.summary }}</p>
							</div>
						</div>
						<div class="w-row">
							<button class="comments">
								<i class="iconfont">&#xe643;</i>
								赞同{{ item.article.likes }}
							</button>
							<button class="comments"><i class="iconfont">&#xe631;</i></button>
							<button class="comments">
								<i class="iconfont">&#xe6ba;</i>
								{{ item.article.comments }}条评论
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

			<div class="userdetail-right1">
				<p class="roll">
					你想加入我们吗？ 在Book已经有超过2000人向Book分享自己的知识、经验和见解。 写出属于自己的故事，让经验得以成形，让更多人看到职业背后的专业，
					找到混乱人生中暗藏的真相，于细微中感受到温暖和打动人心的力量。
				</p>

				<p class="roll">每个人都有记录现实的能力，让我们从生命中找到最有写作价值的部分，讲诉亲历故事，记录真实人生。</p>
			</div>
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
			show: [],
			user: null,
			article: []
		};
	},
	created() {
		console.log(this.show);
		this.axios.get('http://localhost:8080/api/user').then(res => {
			// console.log(res.data.data);
			this.users = res.data.data;
			for (var i = 0; i < this.users.length; i++) {
				this.show.splice(i, 0, false);
			}
		});
		console.log(this.show);
		//获取网页地址url
		var query = window.location.href;
		//锁定到最后一个"/"的位置
		var begin = query.lastIndexOf('/') + 1;
		//取出地址中最后的id值
		var userId = query.substring(begin);
		//获取对应文章的详细内容
		this.axios.get('http://localhost:8080/api/user/' + userId).then(res => {
			this.user = res.data.data.user;
			this.article = res.data.data.articleList;
		});
	},
	methods: {
		getImages(_url) {
			if (_url) {
				let _u = _url.substring(8);
				return 'https://images.weserv.nl/?url=' + _u;
			}
		},
		toDetail(id) {
			this.$router.push('/Me/' + id);
		},

		enter(index) {
			if (this.show[index] === false) {
				this.show.splice(index, 1, true);
			}
		},
		leave(index) {
			if (this.show[index] === true) {
				this.show.splice(index, 1, false);
			}
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
.container {
	background-image: linear-gradient(rgb(31, 31, 31), rgb(68, 51, 74), rgb(31, 31, 31));
	box-sizing: border-box;
	display: flex;
}
.userdetail-left {
	flex: 1 1 20%;
	height: 600px;
	position: sticky;
	top: 0px;
	border-radius: 20px;
	background-color: rgba(255, 255, 255, 0.9);
}
.userdetail-card {
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
	width: 100%;
	height: 200px;
	background-color: rgb(50, 31, 57);
	border-bottom: 1px solid white;
}
.userdetail-card img {
	border-radius: 100px;
	border: 10px solid rgba(241, 243, 244, 0.7);
	margin-top: 170px;
	transition: transform 5s;
}
.userdetail-card img:hover {
	transform: rotate(80deg);
}

.introduce {
	border-top: 120px solid rgba(255, 255, 255, 0.1);
	text-align: center;
}
.introduce h2,
h5 {
	color: rgba(0, 0, 0, 0.6);
	margin-bottom: 10px;
}

.user-card h4 {
	margin: 20px;
	color: rgba(0, 0, 0, 0.8);
}
.user-btn {
}
.btn {
	border: none;
	margin: 20px;
	background-color: rgba(50, 31, 57, 0.9);
	padding: 7px;
	border-radius: 5px;
	cursor: pointer;
	transition-duration: 0.4s;
}
.btn h3 {
	color: white;
}
.btn:hover {
	box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.btn:active {
	background-color: rgb(68, 51, 74);
	box-shadow: 0 5px #666;
	transform: translateY(10px);
}

.userdetail-right {
	flex: 1 1 60%;
}

.banner-card {
	width: 100%;
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

.userdetail-right1 {
	flex: 1 1 20%;
	height: 500px;
}
.roll {
	width: 90%;
	background-image: linear-gradient(#e66465, #9198e5);
	position: relative;
	animation: rolll 30s infinite;
	padding: 20px;
	margin-top: 100px;
	border-radius: 20px;
}
.roll p {
	color: rgb(31, 31, 31);
}
@keyframes rolll {
	0% {
		transform: rotate(-7deg);
	}
	18% {
		transform: rotate(7deg);
	}
	20% {
		transform: rotate(-7deg);
	}
	80% {
		transform: rotate(7deg);
	}
	85% {
		transform: rotate(-7deg);
	}
	100% {
		transform: rotate(7deg);
	}
}
</style>
