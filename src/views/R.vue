<template>
	<div>
		<ul class="center">
			<li>
				<router-link to="/"><h4>Home</h4></router-link>
			</li>
			<li>
				<router-link to="/article"><h4>Hot Articles</h4></router-link>
			</li>
			<li>
				<router-link to="/Topic"><h4>Topic</h4></router-link>
			</li>
			<div class="search-box">
						<input class="search-txt" type="text" placeholder="Type to search" v-model="keywords"  />
						<a class="search-btn"  @click="search">
							<i class="iconfont">&#xe618;</i>
						</a>
					</div>
					
			<li>
				<router-link to="/sign" v-if="this.user === null"><h4>sign</h4></router-link>
				<div class="row">
					<img :src="this.user.avatar" class="zh-avatar" v-if="this.user !== null" @click="toUserDetail(user.id)" />
					<p @click="logout()" v-if="this.user !== null" class="tui"><i class="iconfont">&#xe64c;</i></p>
				</div>
			</li>
		</ul>

		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {
			show: [],
			user: JSON.parse(localStorage.getItem('user')),
			keywords: ''
		};
	},
	created() {
		// console.log(this.show);
		console.log(this.show);
	},
	methods: {
		toDetail(id) {
			this.$router.push('/userDetail/' + id);
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
		},
		logout() {
			this.user = null;
			this.$router.push('/');
			alert('退出');
			localStorage.clear();
		},
		toUserDetail(id) {
			this.$router.push('/Detail/' + id);
		},
		search() {
			let currentPath = this.$route.path;
			alert(currentPath);
			if (currentPath != '/search' || currentPath != '/search/article' || currentPath != '/search/Topic' || currentPath != '/search/user') {
				this.$router.push({ path: '/search', query: { keywords: this.keywords } });
			} else {
				this.$router.push({ path: '/empty', query: { keywords: this.keywords } });
			}
		}
	}
};
</script>

<style scoped>
	@font-face {
  font-family: 'iconfont';  /* project id 1569195 */
  src: url('//at.alicdn.com/t/font_1569195_a256iiicdm.eot');
  src: url('//at.alicdn.com/t/font_1569195_a256iiicdm.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1569195_a256iiicdm.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1569195_a256iiicdm.woff') format('woff'),
  url('//at.alicdn.com/t/font_1569195_a256iiicdm.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1569195_a256iiicdm.svg#iconfont') format('svg');
}
	.iconfont{
	    font-family:"iconfont" !important;
	    font-size:26px;font-style:normal;
	    -webkit-font-smoothing: antialiased;
	    -webkit-text-stroke-width: 0.2px;
	    -moz-osx-font-smoothing: grayscale;
		cursor: pointer;
		}
		
.center {
	display: flex;
	justify-content: center;
	height: 90px;
	background-color: rgb(31, 31, 31);
}

li {
	padding: 30px;
}
.row {
	display: flex;
	text-align: center;
}
.zh-avatar {
	border: 1px so white;
	height: 50px;
	width: 50px;
	border-radius: 10px;
	position: relative;
	bottom: 10px;
}
.search-box {
				transform: translate(-50%, -50%);
				background: #2f3640;
				height: 40px;
				border-radius: 40px;
			margin-top: 40px;
			margin-left: 100px;
				
			}
			.search-btn {
				color: #e84118;
				float: right;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background: #2f3640;
				display: flex;
				justify-content: center;
				align-items: center;
				transition: 0.4s;
				text-decoration: none;
				
			}
			.search-txt {
				border: none;
				background: none;
				outline: none;
				float: left;
				padding: 0;
				color: white;
				font-size: 16px;
				transition: 0.4s;
				line-height: 40px;
				width: 0;
			}
			.search-box:hover > .search-txt {
				width: 200px;
				
			
			}
			.search-box:hover > .search-btn {
				background: white;
			
			}
</style>
