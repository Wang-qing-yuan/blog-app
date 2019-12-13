<template>
	<div>
		<div class="container">
			<div id="main">
				<div style="color:lightgreen;order:1;font-size: 130px;" id="myGreenDIV">B</div>
				<div style="color:coral;order:2;font-size: 130px;">O</div>
				<div style="color:lightblue;order:3;font-size: 130px;">O</div>
				<div style="color:pink;order:4;font-size: 130px;">K</div>
			</div>
			<div class="w-row">
				<div class="card-left">
					<div class="card4">
						<div id="yidong"></div>
						<div id="yidong2"></div>
						<div id="yidong3"></div>
						<h3>
							图书，是一堆带有和主题相关内容的纸张，带有文字或图像。 书通常由墨水、纸张、羊皮纸或者其他材料固定在书脊上组成。
							组成书的一张纸称为一张，一面称为一页。在图书馆信息学中， 书被称为专著，以区别于杂志、学术期刊、报纸等连载期刊。
							所有的书面作品的主体是文学。在小说和一些类型（如传记）中， 书可能还要分成卷。对书特别喜爱的人被称为爱书者或藏书家，
							更随意的称呼是书虫或者书呆子。2010年，谷歌公司估计， 从印刷术发明至今，大概出版了一亿三千万本不同书名的书籍.
						</h3>
					</div>

					<ul class="hot">
						<img src="../assets/css/月亮.jpg" />
						<li>
							<router-link to="/article"><h4>Hot Articles</h4></router-link>
						</li>
					</ul>
					<div class="card1"><h1>Home</h1>
						<div class="card11">
							<h1>|||||||||||||||||||</h1>
						</div>
					</div>
					
					<div class="tu"><img src="../assets/css/书.jpg" /></div>
					<div class="yu">
						<div class="yuan"><h1>电子书</h1>
								<p>
									电子书是指将文字、图片、声音、影像等讯息内容数字化的出版物和植入或下载数字化文字、
									图片、声音、影像等讯息内容的集存储和显示终端于一体的手持阅读器。代表人们所阅读的数字化出版物， 区别于以纸张为载体的传统出版物。电子书
									通过数码方式记录在以光、电、磁为介质的设备中， 必须借助于特定的设备来读取、复制和传输 。
								</p>
						</div>
					</div>
				</div>
				
				
				
				<div class="card-right">
					<div class="zuozhe">
						<p>author</p>
						<img class="zuo" src="../assets/css/用户.jpg" />

						<div class="author" v-for="(user, index) in users" :key="index" >
							<img :src="user.avatar" @click="toDetail(user.id)"/>
							<p>{{ user.nickname }}</p>
						</div>
						<button class="btn" @click="showAll()">查看更多</button>
					</div>
				</div>
			</div>
			
			<div class="end w-fx-center">
				<p>联系我@王庆媛</p>
			</div>
			

			
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		show1: false,
		users: []
	}),
	created() {
		this.axios.get('http://localhost:8080/api/user').then(res => {
			console.log(res.data.data);
			this.users = res.data.data;
		});
	},
	methods: {
		toDetail(id) {
			this.$router.push('/userDetail/' + id);
		},
		showAll() {
			this.$router.push('/user');
		}
	},
	computed: {
		//解决403图片缓存问题
		getImages(_url) {
			if (_url) {
				let _u = _url.substring(8);
				return 'https://images.weserv.nl/?url=' + _u;
			}
		}
	}
};
</script>

<style scoped>
.container {
	width: 100%;
	background-image: linear-gradient(rgb(31,31,31),rgb(68,51,74),rgb(31,31,31));
}
.card-left {
	flex: 1 1 70%;
}
.card-right {
	flex: 1 1 30%;
}
#main {
	width: 100%;
	display: flex;
	justify-content: space-around;
}

#main div {
}

#myGreenDIV {
	-webkit-animation: g 5s infinite;
	
}
.card4 {
	width: 80%;
	height: 300px;
	position: relative;
	left: 10%;
	border-radius: 10px;
	text-indent: 50px;
	padding: 20px;
}
.card4 h2 {
	color: rgb(241, 243, 244);
}
#yidong {
	border: 1px solid white;
	width: 10px;
	height: 10px;
	border-radius: 10px;
	position: relative;
	animation: move 5s infinite;
}
@keyframes move {
	0% {
		top: 0%;
		left: 0%;
		background: red;
	}
	25% {
		top: 0%;
		left: 100%;
		background: blue;
	}
	50% {
		top: 95%;
		left: 100%;
		background: yellow;
	}
	75% {
		top: 90%;
		left: -4%;
		background: green;
	}
	100% {
		top: 0px;
		left: -4%;
		background: deeppink;
	}
}
#yidong2 {
	width: 10px;
	height: 10px;
	border-radius: 3px;
	border: 1px solid white;
	position: relative;
	animation: move 7s infinite;
}
@keyframes move2 {
	0% {
		top: 0%;
		left: 0%;
		background: red;
	}
	25% {
		top: 0%;
		left: 100%;
		background: blue;
	}
	50% {
		top: 95%;
		left: 100%;
		background: yellow;
	}
	75% {
		top: 90%;
		left: -4%;
		background: green;
	}
	100% {
		top: 0px;
		left: -4%;
		background: deeppink;
	}
}
#yidong3 {
	width: 10px;
	height: 10px;
	border: 1px solid white;
	position: relative;
	animation: move 10s infinite;
}
@keyframes move3 {
	0% {
		top: 0%;
		left: 0%;
		background: red;
	}
	25% {
		top: 0%;
		left: 100%;
		background: blue;
	}
	50% {
		top: 95%;
		left: 100%;
		background: yellow;
	}
	75% {
		top: 90%;
		left: -4%;
		background: green;
	}
	100% {
		top: 0px;
		left: -4%;
		background: deeppink;
	}
}
.tu {
	width: 80%;
	position: relative;
	opacity: 0.8;
	left: 20%;
}
.tu img {
	width: 100%;
	height: 100%;
	border-radius: 100px;
	border: 1px dashed whitesmoke;
	padding: 20px;
}
.card1 {
	border-bottom: 1px solid white;
	position: relative;
	width: 10%;
	left: 10%;
}
.card1 h1 {
	color: white;
}
.card11 {
	width: 10%;
	position: relative;
	left: 7%;
	top: -100px;
}
.card11 h1 {
	color: white;
}
.yu{
	position: relative;
	top:-25%;
	left: 35%;
	height: 300px;
	width: 60%;
}
.yuan {
	height: 10%;
	width: 100%;
	position: relative;
	animation: bianhua 15s infinite;
	text-align: center;
	
}
.yuan p,
h1 {
	color: rgb(31, 31, 31);
}

@keyframes bianhua {
	0% {
		background: rgba(171, 71, 188,0.7);
		border-radius: 400px;
		height: 10%;
		width: 40%;
		right: 30%;
	}
	5% {
		background: rgba(236, 64, 122,0.7);
		border-radius: 300px;
	}
	10% {
		background: rgba(239, 83, 80,0.7);
		border-radius: 200px;
	}
	15% {
		background: rgba(66, 165, 245,0.7);
		border-radius: 100px;
	}
	20% {
		background: rgba(38, 198, 218,0.7);
		border-radius: 50px;
		height: 70%;
		width: 100%;
		right:0%;
	}
	90% {
		background: rgba(255, 192, 203,0.7);
		border-radius: 50px;
		height: 70%;
		width: 100%;
		
	}
}
.hot {
	height: 270px;
	width: 270px;
	position: relative;
	left: 70%;
	animation: fangkuai 5s infinite;
	padding: 20px;
}
.hot img {
	width: 85%;
	height: 85%;
	border-radius: 300px;
}
@keyframes g {
	50% {
		order: 6;
	}
}
@keyframes fangkuai {
	5% {
		border-top: 1px solid white;
		border-radius: 300px;
	}
	25% {
		border-top: 1px solid white;
		border-right: 1px solid white;
		border-radius: 300px;
	}
	50% {
		border-top: 1px solid white;
		border-right: 1px solid white;
		border-bottom: 1px solid white;
		border-radius: 300px;
	}
	75% {
		border: 1px solid white;
		border-radius: 300px;
	}
	100% {
		border: 1px solid white;
		border-radius: 300px;
	}
}

.zuozhe {
	width: 70%;
	border: 1px solid white;
	position: relative;
	left: 10%;
	margin-top: 50px;
	padding: 10px;
	border-radius: 20px;
	/* position: sticky;
	top: 0; */
}
.zuozhe p {
	letter-spacing: 10px;
	font-size: 20px;
}
.zuo {
	opacity: 0.5;
	width: 80%;
	position: relative;
	left: 50%;
	margin-top: -100px;
	border-radius: 20px;
}
.author {
	display: flex;
	width: 100%;
	position: relative;
}
.author img {
	position: relative;
	width: 30%;
	border-radius: 20px;
	border-bottom: 10px solid rgb(31, 31, 31);
	border-right: 10px solid rgb(31, 31, 31);
}
.author img:hover{
	transform: rotate(30deg);
}

.btn {
	border: none;
	background-color: rgb(77, 182, 172);
	width: 60%;
	height: 35px;
	border-radius: 10px;
	position: relative;
	left: 20%;
	color: white;
	box-shadow: 2px 5px 10px #aaa;
}
.btn:hover {
	background-color: rgb(0, 131, 143);
}
.music{
	position: relative;
	left: 500px;
	border-radius: 300px;
}
</style>
