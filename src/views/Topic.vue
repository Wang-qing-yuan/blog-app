<template>
	<div class="container">
		<div class="topic">
			<span>Topic</span>
		</div>
		
		<!-- <div class="box">
		  <P>没有人事先了解自己到底有多大的力量，直到他试过以后才知道。——歌德</P>  
		  </div> -->
		  
<body style="position: sticky;
    top: -160px;">
				<div class="wrapper">
					<div class="line line1">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
					<div class="line line2">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
					<div class="line line3">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
					<div class="line line4">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
					<div class="line line5">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
					<div class="line line6">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
					<div class="line line7">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
					<div class="line line8">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
					<div class="line line9">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
					<div class="line line10">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
					<div class="line line11">
						<span class="circle circle-top"></span>
						<div class="dotted">
							<span class="dot dot-top"></span>
							<span class="dot dot-middle-top"></span>
							<span class="dot dot-middle-bottom"></span>
							<span class="dot dot-bottom"></span>
						</div>
						<span class="circle circle-bottom"></span>
					</div>
				</div>
			</body>


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
			footer{
				position: absolute;
				margin-top: 300px;
			}
			footer a{
				color: #F5E53A;
			}
			footer img{
				width: 32px;
				height: 32px;
				vertical-align: middle;
			}
	
			.wrapper{
				position: absolute;
				left: 420px;
				top: 550px;
			}
	
	.line{
				position: absolute;
				top: 0px;
				width: 2px;
				height: 8px;
				background-color: red;
			}
	
			.circle{
				position: absolute;
				display: block;
				width: 8px;
				height: 8px;
				border-radius: 50%;
				background-color: blue;
			}
			.circle-top{
				top: 0px;
				left: -3.5px;
			}
			.circle-bottom{
				bottom: 0px;
				left: -3.5px;
			}
	
			.dot{
				position: absolute;
				display: block;
				width: 4px;
				height: 4px;
				border-radius: 50%;
				left: -1.5px;
			}
	
			.line1{
				margin-left: 0px;
				background-color: #2410CB;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
			}
			.line1 > span{
				background-color: #D4141E;
			}
			.line1 > .dotted > .dot{
				background-color: #D4141E;
			}
			.line1 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
			}
			.line1 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
			}
			.line1 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
			}
			.line1 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) infinite;
			}
	
			.line2{
				margin-left: 35px;
				background-color: #852DF4;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
			}
			.line2 > span{
				background-color: #FC7E48;
			}
			.line2 > .dotted > .dot{
				background-color: #FC7E48;
			}
			.line2 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
			}
			.line2 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
			}
			.line2 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
			}
			.line2 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .05s infinite;
			}
	
			.line3{
				margin-left: 70px;
				background-color: #F42DF1;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
			}
			.line3 > span{
				background-color: #EDEB29;
			}
			.line3 > .dotted > .dot{
				background-color: #EDEB29;
			}
			.line3 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
			}
			.line3 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
			}
			.line3 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
			}
			.line3 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .1s infinite;
			}
	
			.line4{
				margin-left: 105px;
				background-color: #F91396;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
			}
			.line4 > span{
				background-color: #ACED29;
			}
			.line4 > .dotted > .dot{
				background-color: #ACED29;
			}
			.line4 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
			}
			.line4 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
			}
			.line4 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
			}
			.line4 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .15s infinite;
			}
	
			.line5{
				margin-left: 140px;
				background-color: #D4141E;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
			}
			.line5 > span{
				background-color: #4EF02B;
			}
			.line5 > .dotted > .dot{
				background-color: #4EF02B;
			}
			.line5 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
			}
			.line5 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
			}
			.line5 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
			}
			.line5 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .2s infinite;
			}
	
			.line6{
				margin-left: 175px;
				background-color: #FC7E48;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
			}
			.line6 > span{
				background-color: #38E790;
			}
			.line6 > .dotted > .dot{
				background-color: #38E790;
			}
			.line6 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
			}
			.line6 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
			}
			.line6 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
			}
			.line6 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .25s infinite;
			}
	
			.line7{
				margin-left: 210px;
				background-color: #EDEB29;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
			}
			.line7 > span{
				background-color: #25EACC;
			}
			.line7 > .dotted > .dot{
				background-color: #25EACC;
			}
			.line7 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
			}
			.line7 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
			}
			.line7 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
			}
			.line7 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .3s infinite;
			}
	
			.line8{
				margin-left: 245px;
				background-color: #ACED29;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
			}
			.line8 > span{
				background-color: #309CDF;
			}
			.line8 > .dotted > .dot{
				background-color: #309CDF;
			}
			.line8 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
			}
			.line8 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
			}
			.line8 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
			}
			.line8 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .35s infinite;
			}
	
			.line9{
				margin-left: 280px;
				background-color: #4EF02B;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
			}
			.line9 > span{
				background-color: #2544E7;
			}
			.line9 > .dotted > .dot{
				background-color: #2544E7;
			}
			.line9 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
			}
			.line9 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
			}
			.line9 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
			}
			.line9 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .4s infinite;
			}
	
			.line10{
				margin-left: 315px;
				background-color: #38E790;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
			}
			.line10 > span{
				background-color: #852DF4;
			}
			.line10 > .dotted > .dot{
				background-color: #852DF4;
			}
			.line10 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
			}
			.line10 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
			}
			.line10 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
			}
			.line10 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .45s infinite;
			}
	
			.line11{
				margin-left: 350px;
				background-color: #25EACC;
				-webkit-animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
				animation: line 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
			}
			.line11 > span{
				background-color: #F42DF1;
			}
			.line11 > .dotted > .dot{
				background-color: #F42DF1;
			}
			.line11 > .dotted > .dot-top{
				top: 0px;
				-webkit-animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
				animation: dot-top 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
	
			}
			.line11 > .dotted > .dot-bottom{
				bottom: 0px;
				-webkit-animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
				animation: dot-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
			}
			.line11 > .dotted > .dot-middle-top{
				top: 0px;
				-webkit-animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
				animation: dot-middle-top 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
			}
			.line11 > .dotted > .dot-middle-bottom{
				bottom: 0px;
				-webkit-animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
				animation: dot-middle-bottom 2s cubic-bezier(0.250, 0, 0.705, 1) .5s infinite;
			}
	
			@-webkit-keyframes line{
				0%{height: 4px; top: 0px; left: 0px; -webkit-transform: rotate(-65deg)}
				10%{height: 220px; top: -110px; left: 15px;}
				45%{height: 200px; top: -100px; left: 25px;}
				70%{height: 8px; top: 0px; left: 25px; -webkit-transform: rotate(0deg);}
				100%{height: 8px; top: 0px; left: 15px; -webkit-transform: rotate(0deg);}
			}
			@-webkit-keyframes dot-top{
				0%{top: -30px}
				10%{top: -30px;}
				45%{top: -25px;}
				60%{top: 0px;}
				100%{top: 0px;}
			}
			@-webkit-keyframes dot-bottom{
				0%{bottom: -30px}
				10%{bottom: -30px;}
				45%{bottom: -25px;}
				60%{bottom: 0px;}
				100%{bottom: 0px;}
			}
			@-webkit-keyframes dot-middle-top{
				0%{}
				10%{}
				45%{top: 98px;}
				70%{top: -50px;}
				85%{top: 0px;}
				100%{top: 0px;}
			}
			@-webkit-keyframes dot-middle-bottom{
				0%{}
				10%{}
				45%{bottom: 98px;}
				70%{bottom: -50px;}
				85%{bottom: 0px;}
				100%{bottom: 0px;}
			}
			
			@keyframes line{
				0%{height: 4px; top: 0px; left: 0px; transform: rotate(-65deg)}
				10%{height: 220px; top: -110px; left: 15px;}
				45%{height: 200px; top: -100px; left: 25px;}
				70%{height: 8px; top: 0px; left: 25px; transform: rotate(0deg);}
				100%{height: 8px; top: 0px; left: 15px; transform: rotate(0deg);}
			}
			@keyframes dot-top{
				0%{top: -30px}
				10%{top: -30px;}
				45%{top: -25px;}
				60%{top: 0px;}
				100%{top: 0px;}
			}
			@keyframes dot-bottom{
				0%{bottom: -30px}
				10%{bottom: -30px;}
				45%{bottom: -25px;}
				60%{bottom: 0px;}
				100%{bottom: 0px;}
			}
			@keyframes dot-middle-top{
				0%{}
				10%{}
				45%{top: 78px;}
				70%{top: -50px;}
				85%{top: 0px;}
				100%{top: 0px;}
			}
			@keyframes dot-middle-bottom{
				0%{}
				10%{}
				45%{bottom: 78px;}
				70%{bottom: -50px;}
				85%{bottom: 0px;}
				100%{bottom: 0px;}
			}
	.a{
		flex: 1 1 20%;
	}
.w-row h4 {
	color: rgba(255, 255, 255, 0.6);
	
}

.container {
	width: 100%;
	height: auto;
	background-image: linear-gradient(rgb(31,31,31),rgb(68,51,74),rgb(31,31,31));
}

.topic span{
	
					font-size: 250px;
					text-transform: uppercase;
					font-weight: 900;
					letter-spacing: 10px;
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					margin: 0;
					background: url(../assets/css/书.jpg) 50% 50%;
					background-size: cover;
					-webkit-text-fill-color: transparent;
					-webkit-background-clip: text;
					background-clip: text;
				
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
