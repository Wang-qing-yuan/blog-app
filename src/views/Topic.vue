<template>
	<div class="container">
		<div class="topic">
			<span>T</span>
			<span>o</span>
			<span>p</span>
			<span>i</span>
			<span>c</span>
		</div>
		
		<div class="box">
		  <P>没有人事先了解自己到底有多大的力量，直到他试过以后才知道。——歌德</P>  
		  </div>



<div class="w-row">
	<div class="a"></div>
		<div class="row">
			<body class="middle w-col-4" v-for="(topic, index) in topics" :key="index">
				<div class="wrap">
					<div class="front middle">
						<img :src="topic.logo" />
						<h3>{{ topic.topicName }}</h3>
						<div class="w-row">
							<h4 style="color: white;">关注{{ topic.articles }}|</h4>
							<h4 style="color: white;">文章{{ topic.follows }}</h4>
						</div>
					</div>

					<div class="back middle">
						<p>{{ topic.description.substring(0, 30) }}...</p>
						<button class="column" @click="toTopicDetail(topic.id)">进入专栏</button>
						<div style="margin-top: 20px;">
							<h6>创建于{{ topic.createTime.date.year }}年{{ topic.createTime.date.month }}月{{ topic.createTime.date.day }}日</h6>
						</div>
					</div>
				</div>
				
			</body>
				
			</div>
			<div class="a">
		</div>
	</div>
	<div class="w-fx-center"><button class="comments" @click="loadMore">点击加载更多</button></div>

	</div>
</template>

<script>
export default {
	data() {
		return {
			topics: [],
			currentPage: 1,
			count: 6,
		};
	},
	created() {
		console.log(this.topic)
		this.axios.get('http://localhost:8080/api/topic').then(res => {
			this.topics = res.data.data;
			console.log(res.data.data);
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
	loadMore() {
				this.currentPage = this.currentPage + 1;
				this.axios
					.get('http://localhost:8080/api/topic', {
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
							this.topics.splice(this.currentPage * this.count, 0, temp[i]);
						}
						console.log(this.topics.length);
					});
			},
			toTopicDetail(id) {
				this.$router.push('/TopicDetail/' + id);
				
			},
			
		
}



};
</script>

<style scoped>
	.a{
		flex: 1 1 20%;
	}
	.box { 
	  width: 200px;
	  height: 250px;
	  background: url('../assets/css/海女.jpg') no-repeat center;
	  background-size: cover;
	  position: relative;
	  left: 80%;
	  border-radius: 30px;
	}
	.box p{
		position: relative;
		top: 40px;
		text-indent:50px;
		letter-spacing:20px;
		text-shadow:5px 2px gray;
		
	
	}
	.box::before, .box::after {
	    animation-play-state: paused;
	}
	.box:hover::before{content: '';
			  border: 2px solid rgb(255,174,189);
			  position: absolute;
			  top: 0;
			  left: 0;
			  right: 0;
			  bottom: 0;
			  margin: -15px;
			  animation: borderClip 4s linear infinite;}
	 .box:hover::after {
			  content: '';
			  border: 2px solid rgb(106,193,189);
			  position: absolute;
			  top: 0;
			  left: 0;
			  right: 0;
			  bottom: 0;
			  margin: -15px;
			  animation: borderClip 8s linear infinite;
	}
	@keyframes borderClip {
	  0%, 100% {
	    clip: rect(0px, 230px, 2px, 0px);
	  }
	  25% {
	    clip: rect(0px, 2px, 280px, 0px);
	  }
	  50% {
	    clip: rect(228px, 230px, 280px, 0px);
	  }
	  75% {
	    clip: rect(0px, 230px, 280px, 228px);
	  }
	}
	
	
.w-row h4 {
	color: rgba(255, 255, 255, 0.6);
	
}

.container {
	width: 100%;
	height: auto;
	background-image: linear-gradient(rgb(31,31,31),rgb(68,51,74),rgb(31,31,31));
}
.topic {
	width: 100%;
	height: auto;
	display: flex;
	justify-content: center;
	align-items: center;
	
}
span {
	font-family: fira code;
	font-size: 170px;
	letter-spacing: 100px;
	filter: blur(2px);
	animation: animate 5s linear infinite;
}
span:nth-child(1) {
	animation-delay: 0s;
}
span:nth-child(2) {
	animation-delay: 0.5s;
}
span:nth-child(3) {
	animation-delay: 1s;
}
span:nth-child(4) {
	animation-delay: 1.5s;
}
span:nth-child(5) {
	animation-delay: 2s;
}

@keyframes animate {
	0%,
	100% {
		filter: blur(2px);
		color: rgb(255, 250, 240);
		text-shadow: 0 0 10px #1e90ff, 0 0 20px #1e90ff, 0 0 30px #1e90ff, 0 0 40px #1e90ff, 0 0 100px #1e90ff, 0 0 200px #1e90ff, 0 0 300px #1e90ff, 0 0 400px #1e90ff;
	}
	5%,
	95% {
		filter: blur(0px);
		color: #666;
		text-shadow: none;
	}
}

.row {
	display: flex;
	flex-wrap: wrap;
}

body {
	height: 70vh;
	
}
.middle {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border-radius: 30px;
	
	
}
.middle h3 {
	color: white;
}
.middle img {
	width: 150px;
	height: 150px;
	border-radius: 100px;
	border: 10px solid rgb(255, 255, 255, 0.3);
}
.wrap {
	
	width: 230px;
	height: 300px;
	position: relative;
}
.wrap h2 {
	font-size: 40px;
	margin-bottom: 10px;
}
.front {
	width: 100%;
	height: 100%;
	position: absolute;
	background-size: cover;
	backface-visibility: hidden;
	box-shadow: 0 0 20px white;
	transition: 0.8s;
	transform: perspective(900px) rotateY(0deg);
}
.back{
	width: 100%;
	height: 100%;
	position: absolute;
	background: url(../assets/css/月亮.jpg);
	background-size: cover;
padding: 50px;
	backface-visibility: hidden;
	box-shadow: 0 0 20px white;
	transition: 0.8s;
	transform: perspective(900px) rotateY(180deg);
}

.wrap:hover .front {
	transform: perspective(900px) rotateY(-180deg);
}
.wrap:hover .back {
	transform: perspective(900px) rotateY(0deg);
}

.column {
	border: none;
	background-color: rgb(68, 51, 74);
	margin-top: 30px;
	padding: 15px;
	border-radius: 5px;
	cursor: pointer;
	transition-duration: 0.4s;
	color: white;
}
.column:hover {
	box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 10px 20px 0 white;
}
.column:active {
	background-color: rgb(68, 51, 74);
	box-shadow: 0 5px #666;
	transform: translateY(10px);
}
</style>
