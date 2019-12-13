<template>
	<div class="container">
		<div class="blank"></div>
		<div class="center">
			<img :src="user.banner" />
			<div class="row">
				<div class="w-avatar"><img :src="user.avatar" /></div>
				<div class="amend">
					<h1>{{ user.nickname }}</h1>
					<div class="card " @mouseenter="showGender()" @mouseleave="hideGender()">
						<div class="a w-fx-center"><h3>性别</h3></div>
						<div class="w-fx-center">
							<h3 v-if="statusGender">{{ user.gender }}</h3>
							<input type="text" :value="user.gender" v-else>
						</div>
						<i v-if="updateGenderIcon" class="w-fx-center" @click="updateGender()">修改</i>
						<i v-if="saveGenderIcon" class="w-fx-center" @click="saveGender()">保存</i>
					</div>
					<div class="card">
						<div class="a w-fx-center"><h3>一句话介绍自己</h3></div>
						<div class="w-fx-center">
							<h3>{{ user.introduction }}</h3>
						</div>
					</div>
					<div class="card ">
						<div class="a w-fx-center"><h3>居住地</h3></div>
						<div class="w-fx-center">
							<h3>{{ user.address }}</h3>
						</div>
					</div>
					<div class="card ">
						<div class="a w-fx-center"><h3>生日</h3></div>
						<div class="w-fx-center">
							<h3>{{ user.birthday.year }}年{{ user.birthday.month }}月{{ user.birthday.day }}日</h3>
						</div>
					</div>
					<div class="card ">
						<div class="a w-fx-center"><h3>手机号码</h3></div>
						<div class="w-fx-center">
							<h3>{{ user.mobile }}</h3>
						</div>
					</div>
					<div class="card ">
						<div class="a w-fx-center"><h3>所在行业</h3></div>
						<div class="w-fx-center"><h3>请填写行业信息</h3></div>
					</div>
					<div class="card ">
						<div class="a w-fx-center"><h3>职业经历</h3></div>
						<div class="w-fx-center"><h3>添加职业经历</h3></div>
					</div>
					<div class="card ">
						<div class="a w-fx-center"><h3>个人认证</h3></div>
						<div class="w-fx-center"><h3>申请个人认证</h3></div>
					</div>
					<div class="card ">
						<div class="a w-fx-center"><h3>个人简介</h3></div>
						<div class="w-fx-center"><h3>无</h3></div>
					</div>

					<div class="card"></div>
				</div>
			</div>
		</div>
		<div class="blank"></div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			updateGenderIcon: false,
			saveGenderIcon: false,
			statusGender: true,
		};
	},
	created() {},
	methods: {
		getImages(_url) {
			if (_url) {
				let _u = _url.substring(8);
				return 'https://images.weserv.nl/?url=' + _u;
			}
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
		showGender() {
			this.updateGenderIcon = true;
		},
		hideGender() {
			this.updateGenderIcon = false;
		},
		updateGender() {
			this.statusGender = false;
			this.saveGenderIcon = true;
		},
		saveGender() {
			this.updateGenderIcon = false;
			this.statusGender = true;
			this.saveGenderIcon = false;
		}
	}
};
</script>

<style scoped>
	i {
		margin-left: 1%;
	}
.container {
	background-image: linear -gradient(rgb(31, 31, 31), rgb(68, 51, 74), rgb(31, 31, 31));
	display: flex;
	width: 100%;
	height: auto;
}
span,
h1,
h2,
h3,
h4,
h5,
h6,
p {
	color: black;
}
.row {
	display: flex;
	background-color: rgb(237, 236, 237);
}

.blank {
	flex: 1 1 10%;
}
.center {
	flex: 1 1 80%;
}
.center img {
	width: 100%;
	height: 240px;
	border-radius: 20px;
}
.w-avatar {
	flex: 1 1 20%;
}
.w-avatar img {
	width: 80%;
	height: 170px;
	border-radius: 30px;
	position: relative;
	top: -40px;
	left: 20px;
}
.amend {
	flex: 1 1 80%;
}
.card {
	width: 100%;
	height: 100px;
	border-bottom: 1px solid white;
	display: flex;
}
.a {
	width: 170px;
}
.btn {
	border: none;
	margin: 20px;
	background-color: rgba(50, 31, 57, 0.8);
	padding: 7px;
	border-radius: 5px;
	cursor: pointer;
	transition-duration: 0.4s;
}
.btn:hover {
	box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.btn:active {
	background-color: rgb(68, 51, 74);
	box-shadow: 0 5px #666;
	transform: translateY(10px);
}
</style>
