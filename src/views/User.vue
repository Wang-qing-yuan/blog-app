<template>
	<div>
		<div class="container">
			<div class="user-left">
				<div class="ico"></div>
				<div class="ico"></div>
				<div class="ico"></div>
			</div>
			<div class="user">

				<div class="w-row">
					<div class="user-card w-col-4" v-for="(user, index) in users" :key="index">
						<img :src="user.avatar" @click="toDetail(user.id)" class="cursor" @mouseenter="enter(index)" @mouseout="leave(index)" />
						<div class="card-introduction">
							<h3>{{ user.nickname }}</h3>
							<h5>{{ user.gender }}</h5>
							<h5>{{ user.address }}</h5>
							<!-- <h5>{{ user.introduction }}</h5> -->
							<h5 v-if="show[index]" class="hidden-content">{{ user.introduction }}</h5>
						</div>
					</div>
					
					
					
					
					
				</div>
				<div class="w-fx-center"><button class="comments" @click="loadMore">点击加载更多</button></div>
			</div>

			<div class="user-right">
				<p class="roll">
					你想加入我们吗？ 在Book已经有超过2000人向Book分享自己的知识、经验和见解。 写出属于自己的故事，让经验得以成形，让更多人看到职业背后的专业，
					找到混乱人生中暗藏的真相，于细微中感受到温暖和打动人心的力量。
				</p>

				<p class="roll">每个人都有记录现实的能力，让我们从生命中找到最有写作价值的部分，讲诉亲历故事，记录真实人生。</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			show: [],
			currentPage: 1,
						count: 6
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
		
		loadMore() {
					this.currentPage = this.currentPage + 1;
					this.axios
						.get('http://localhost:8080/api/user', {
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
								this.users.splice(this.currentPage * this.count, 0, temp[i]);
							}
							console.log(this.users.length);
						});
				}
		
	}
};
</script>

<style scoped>
.cursor {
	cursor: pointer;
}
.container {
	background-image: linear-gradient(rgb(31,31,31),rgb(68,51,74),rgb(31,31,31));
	width: 100%;
	/* height: 2000px; */
	display: flex;
	box-sizing: border-box;
}
li {
	padding: 30px;
}

.user-left {
	flex: 0 0 10%;
	
}
.ico {
	width: 0px;
	height: 0px;
	border: 30px solid rgb(31, 31, 31);
	
	border-bottom: 30px solid white;
	position: relative;
	animation: shang 10s infinite;
}
.ico h3 {
	position: relative;
	top: 50px;
	right: 10px;
}
@keyframes shang {
	0% {
		top: 0px;
	}
	50% {
		top:70%;
	}
	100% {
		top: 0px;
	}
}
.user {
	flex: 0 0 70%;
}
.center {
	display: inline-block;
	/* justify-content: center; */
	height: 90px;
	/* text-align: center; */
}
.center li {
	display: inline-block;
	justify-content: center;
}
.w-row {
	border: 10px solid rgba(0, 0, 0, 0.1);
	display: flex;
	flex-wrap: wrap;
}
.user-card {
	height: 350px;
	border: 10px solid rgba(0, 0, 0, 0.1);
	border-radius: 20px;
	background-color: rgba(123, 31, 162, 0.2);
	color: rgb(50, 31, 57);
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}
.user-card img {
	border-radius: 20px;
	flex: 0 0 60%;
	transition-property: width, height, border-radius, margin-left;
	transition-duration: 1s;
}
.user-card img:hover {
	flex: 0 0 40%;
	border-radius: 0px;
	border-bottom-left-radius: 100px;
	border-bottom-right-radius: 100px;
	color: white;
	position: relative;
	top: -20px;
}
.card-introduction {
	flex: 0 0 60%;
	text-align: center;
}
.user-right {
	flex: 0 0 20%;
}
.roll {
	width: 90%;
	background-image: linear-gradient(#e66465, #9198e5);
	position: relative;
	animation: rolll 30s infinite;
	padding: 20px;
	margin-top: 300px;
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
.hidden-content {
	color: linear-gradient(#e66465, #9198e5);
}
.contact {
	width: 125px;
	height: 50px;
	background-color: rgb(206, 147, 216);
	position: relative;
	bottom: 750px;
	left: 100px;
	transition-property: width, height;
	transition-duration: 2s;
}
.contact h1,
h2 {
	color: black;
}

.contact:hover {
	width: 600px;
	height: 200px;
}
</style>
