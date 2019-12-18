<template>
	<div class="full main-color">
		<div class="login-box">
			<div class="tab">
				<span class="tab-item" :class="{ active: isActive }" @click="changeTab">登 录</span>
				<span class="tab-item" :class="{ active: !isActive }" @click="changeTab">注 册</span>
			</div>

			<div class="tab-box" v-if="show && selected === 0">
				<div class="w-login w-center">
					<input type="text" claplaceholder="请输入手机号" v-model="userDto.mobile" />
					<input type="password" placeholder="请输入6-16位密码" minlength="6" maxlength="16" v-model="userDto.password" />
				</div>

				<div class="code-box">
					<input type="text" placeholder="请输入验证码" v-model="userDto.code" />
					<div class="img"><img ref="codeImg" @click="refresh()" style="cursor: pointer;" /></div>
				</div>
				<input type="submit" class="login-btn" value="登录" @click="signIn(userDto)" />
				<span class="span-tab" @click="changeTab">没有账号，立即前往注册</span>
			</div>

			<div class="tab-box" v-if="show && selected === 1">
				<input type="text" placeholder="请设置用户名" v-model="userDto.nickname" />
				<!-- <input type="tel" placeholder="生日" minlength="11" maxlength="11" v-model="userDto.getBirthday"/> -->
				<input type="tel" placeholder="请绑定手机号" minlength="11" maxlength="11" v-model="userDto.mobile" :disabled="yzmDisabled" @input.prevent="checkLength" />
				<input type="password" placeholder="请设置6-16位密码" minlength="6" maxlength="16" v-model="userDto.password" />
				<input type="password" placeholder="请确认密码" minlength="6" maxlength="16" v-model="pwd2" />

				<input type="submit" class="regist-btn" value="注册" @click="signUp(userDto)" />
			</div>

			<div class="line-box" v-if="show && selected === 0">
				<span class="line"></span>
				
				<span class="line"></span>
			</div>


			<div>
				<div class="message" v-if="pop">
					<h1>{{ info }}</h1>
				</div>

				<div class="msg-box" v-if="popPlus">
					<p>{{ info }}</p>
				</div>
			</div>
		</div>

		<router-link to="/" class="back">返回</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			userDto: {
				mobile: '',
				password: '',
				code: ''
			},
			codeDisabled: true,
			info: '',
			isActive: true,
			show: true,
			selected: 0,
			status: '',
			yzmDisabled: false,
			user: null,
			token: ''
		};
	},

	created() {
		this.axios.get('http://localhost:8080/api/code', { responseType: 'blob' }).then(res => {
			// console.log(res);
			var img = this.$refs.codeImg;
			let url = window.URL.createObjectURL(res.data);
			img.src = url;
			console.log(res.headers);
			//取得后台通过响应头返回的sessionId的值
			this.token = res.headers['access-token'];
			console.log(this.token);
		});
		// this.$router.go(0)
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

	methods: {
		signIn(userDto) {
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/user/sign-in',
				data: JSON.stringify(this.userDto),
				headers: {
					'Access-Token': this.token //将token放在请求头带到后端
				}
			}).then(res => {
				console.log(res.data);
				if (res.data.msg === '成功') {
					alert('登录成功');
					localStorage.setItem('user', JSON.stringify(res.data.data));
					this.$router.push('/');
					this.$router.go(0);
				} else {
					alert(res.data.msg);
					this.userDto.code = '';
				}
			});
		},
		signUp(userDto) {
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/user/sign-up',
				data: JSON.stringify(this.userDto)
			}).then(res => {
				console.log(res.data.msg);
				if (res.data.msg === '成功') {
					alert('注册成功');
					this.$router.push('/');
				} else {
					alert(res.data.msg);
					console.log(res.data.msg);
				}
			});
		},

		refresh() {
			this.axios.get('http://localhost:8080/api/code', { responseType: 'blob' }).then(res => {
				console.log(res);
				var img = this.$refs.codeImg;
				let url = window.URL.createObjectURL(res.data);
				img.src = url;
			});
		},
		changeTab: function() {
			this.isActive = !this.isActive;
			this.selected = this.selected == 0 ? 1 : 0;
		},

		checkLength() {
			if (Number(this.userDto.mobile) && this.userDto.mobile.length == 11) {
				this.codeDisabled = false;
				return true;
			} else {
				return false;
			}
		},

		clear() {
			// alert("我进入到了clear()方法中");
			this.userDto.nickname = '';
			this.userDto.mobile = '';
			this.userDto.password = '';
			this.pwd2 = '';
			this.status = '';
			this.codeDisabled = true;
		},

		register(userDto) {
			if (this.userDto.nickname == '') {
				this.info = '用户名不能为空';
				this.showMsg();
				return;
			}
			if (this.userDto.password == '' || this.pwd2 == '') {
				this.info = '密码不能为空';
				this.showMsg();
				return;
			}
			if (this.userDto.mobile == '') {
				this.info = '手机号不能为空';
				this.showMsg();
				return;
			}
			if (!/^1[34578]\d{9}$/.test(this.userDto.mobile)) {
				this.info = '手机号码格式错误';
				this.userDto.mobile = '';
				return;
			}
			// 注册信息完全符合要求则进行下面注册操作
			this.axios.post('http://localhost:8080/api/user/sign-up', JSON.stringify(this.userDto)).then(response => {
				if (response.data.msg == '成功') {
					alert('注册成功');
					// 将后台的用户信息存入本地存储
					localStorage.user = JSON.stringify(response.data.data);
					// 路由跳转
					this.$router.push('/');
				}
			});
			this.axios({
				method: 'post',
				url: 'http://localhost:8080/api/user/sign-up',
				data: JSON.stringify(this.userDto),
				headers: {
					'Access-Token': this.token
				}
			}).then(res => {
				if (res.data.msg === '成功') {
					alert('注册成功');
					localStorage.setItem('user', JSON.stringify(res.data.data));
					this.$router.push('/');
				}
			});
		}
	}
};
</script>

<style scoped>
.back {
	position: absolute;
	top: 1%;
	right: 1%;
	background-color: #008000;
}

.full {
	background-image: linear-gradient(rgb(182, 118, 90), rgb(68, 51, 74));
	height: 500px;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.login-box {
	background-color: rgb(31, 31, 31);
	width: 400px;

	border-radius: 10px;
	display: flex;
	flex-direction: column;
	padding: 10px;
}
/* 顶部div */
.tab {
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	background-color: rgb(20, 20, 20);
	margin-bottom: 10px;
}
.tab-item {
	cursor: pointer;
	margin-right: 10px;
	flex: 0 0 80px;
	text-align: center;
	line-height: 38px;
}
.active {
	color: #00bbdd;
	font-weight: 600;
	border-bottom: 2px solid #00bbdd;
}
.w-login {
	margin-top: 20px;

}
/* 文本框 */
input {
	background-color: rgb(20, 20, 20);
	width: 87%;
	height: 50px;
border-radius: 5px;
	font-size: 25px;
	font-weight: 600;
	font-family: '楷体';
	color: white;
	border: 1px solid black;
}
/* 中间div */
.tab-box {
	height: 78%;
	/* background-color: #00897B; */
	color: #eee;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10px;
}
.code-box{
	margin-top: 20px;
	
}
.code-box img{
	border-radius: 5px;
	position: relative;

	width: 150px;
}


/* 登录和注册按钮 */
.regist-btn,
.login-btn {
	background-color: rgb(52,158,144);
	cursor: pointer;
}
.regist-btn:hover,
.login-btn:hover {
	cursor: pointer;
	background-color: rgb(72,53,74);
}
/* 没有账号的情况 */
.span-tab {
	cursor: pointer;
	color:rgb(52,158,144);
}
.span-tab:hover {
	color: rgb(72,53,74);
}
/* 注册界面的div */
.tab-box .tel-box {
	width: 87%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	border: 1px dashed #eeeeee;
}
/* 验证码和手机号外部的div */
.tel-code-box {
	display: flex;
	flex-direction: column;
}
.regist {
	background-color: rgb(227, 242, 253);
	cursor: pointer;
}
.regist:hover {
	background-color: rgb(187, 222, 251);
}
/* 第三方登录div */
.line-box {
	width: 80%;
	margin: 0 auto;
	margin-bottom: 4%;
	display: flex;
	justify-content: space-around;
	align-items: center;
}



/* （遮罩层）提示框 */
.message {
	background-color: rgb(255, 253, 244);
	opacity: 0.7;
	width: 280px;
	height: 10%;
	border-radius: 10px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: '楷体';
}

.msg-box {
	position: absolute;
	top: 30%;
	left: 30%;
	width: 350px;
	background-color: #f0f8ff;
	padding: 10px;
	border-radius: 10px;
	display: flex;
	align-items: center;
}

p {
	text-indent: 2em;
	font-family: '楷体';
	font-size: 30px;
	font-weight: 300;
}
.code-box {
	display: flex;
	align-items: center;
	padding-right: 23px;
	padding-left: 8px;
}
.img {
	height: 40px;
	width: 200px;
}
</style>
