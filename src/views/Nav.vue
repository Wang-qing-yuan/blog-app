<template>
	<div>
		<div class="nav w-fx-between">
			<ul class="w-fx-left w-fx-around">
				<li>
					<router-link to="/"><h3>主页</h3></router-link>
				</li>
				<li>
					<router-link to="/article"><h3>文章</h3></router-link>
				</li>
				<li>
					<router-link to="/collection"><h3>专题(发现)</h3></router-link>
				</li>
			</ul>

			<ul class="w-fx-right w-fx-around">
				<li>
					<router-link to=""><h3>留言板</h3></router-link>
				</li>
				<li>
					<router-link to="/sign" v-if="this.user === null"><h3>登录</h3></router-link>
					<div v-if="this.user !== null" class="cursor">
						<img :src="user.avatar" :alt="user.nickname" @click="toDetail(user.id)" />
						<span @click="logout()">退出</span>
					</div>
				</li>
			</ul>
		</div>
		<div class="carousel-wrap">
			<transition-group tag="ul" class="slide-ul" name="slide">
				<li v-for="(item, index) in slideList" :key="index" v-show="index === currentIndex" @mouseenter="stop" @mouseleave="go">
					<a :href="item.url"><img :src="getImages(item.image)" :alt="item.description" /></a>
				</li>
			</transition-group>
			<div class="carousel-items"><span v-for="(item, index) in slideList" :class="{ active: index === currentIndex }" @mouseover="change(index)"></span></div>
		</div>
		<router-view class="w-container"></router-view>

		<footer></footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			slideList: [
				{
					url: '#',
					description: 'one',
					image: 'https://pic.netbian.com/uploads/allimg/191114/001243-15736615637d05.jpg'
				},
				{
					url: '#',
					description: 'two',
					image: 'https://pic.netbian.com/uploads/allimg/191115/232632-1573831592b0ae.jpg'
				},
				{
					url: '#',
					description: 'three',
					image: 'https://pic.netbian.com/uploads/allimg/191115/235357-157383323781ac.jpg'
				}
			],
			currentIndex: 0,
			timer: null,
			user: JSON.parse(localStorage.getItem('user'))
		};
	},
	created() {},
	methods: {
		// 解决403图片缓存问题
		getImages(_url) {
			if (_url) {
				let _u = _url.substring(8);
				return 'https://images.weserv.nl/?url=' + _u;
			}
		},

		makeActive: function(item) {
			// 模型改变，视图会自动更新
			this.active = item;
		},
		go() {
			this.timer = setInterval(() => {
				this.autoPlay();
			}, 3000);
		},
		stop() {
			clearInterval(this.timer);
			this.timer = null;
		},
		change(index) {
			this.currentIndex = index;
		},
		autoPlay() {
			this.currentIndex++;
			if (this.currentIndex > this.slideList.length - 1) {
				this.currentIndex = 0;
			}
		},
		logout() {
			this.user = null;
			this.$router.push('/')
		},
		toDetail(id) {
			this.$router.push('/userDetail/' + id)
		}
	},
	computed: {}
};
</script>

<style scoped>
.cursor {
	cursor: pointer;
	color:white;
	position: relative;
	left: 20px;
}
.cursor img{
	border-radius: 100px;
	width:40px;
	height: auto;
	position: relative;
	top: 10px;
	
}

h3 {
	color: rgba(255, 255, 255, 0.7);
}
.nav {
	width: 100%;
	height: 30px;
	position: fixed;
	top: 0;
	z-index: 50;
}
.carousel-wrap {
	position: relative;
	width: 100%;
	height: 570px;
	overflow: hidden;
}
.ccard {
	width: 100px;
	height: 100px;
	border: 1px solid red;
}

.slide-ul {
	width: 100%;
	height: 100%;
}

.slide-ul li {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}

.slide-ul li img {
	width: 100%;
	height: 100%;
}

.carousel-items {
	z-index: 100;
	position: relative;
	top: -80px;
	text-align: center;
	font-size: 0;
}

.carousel-items span {
	display: inline-block;
	width: 50px;
	height: 6px;
	margin: 0 5px;
	background-color: #eee;
	cursor: pointer;
}

.carousel-items .active {
	background-color: #ffa500;
}

/* 动画 */
.slide-enter-to {
	transition: all 1s ease;
	transform: translateX(0);
}

.slide-leave-active {
	transition: all 1s ease;
	transform: translateX(-100%);
}

.slide-enter {
	transform: translateX(100%);
}

.slide-leave {
	transform: translateX(0);
}
</style>
