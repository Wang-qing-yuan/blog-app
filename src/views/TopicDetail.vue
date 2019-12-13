<template>
	<div>
		<div class="container">
			<div class="picture">
				<img :src="topicVo.topic.logo"/>
				<h1>{{topicVo.topic.topicName}}</h1>
				
				</div>
				<div class="word">
					<h4>{{topicVo.topic.description}}</h4>
				</div>
				
		<div class="w-row">
			<div class="a"></div>
			<div class="row">
				<div class="w-col-4 card" v-for="(item, index) in topicVo.articleList" :key="index" >
					<p>{{item.article.createTime.date.year}}.{{item.article.createTime.date.month}}.{{item.article.createTime.date.day}}</p>
					<div class="w-center"><img :src="item.article.thumbnail"/></div>
					<h3>{{item.article.title}}</h3>
					<div class="w-fx-left">
						<P style="text-indent:50px;">{{item.article.summary.substring(0, 35)}}...</P>
					</div>
					<button class="comments" @click="toADetail(item.article.id)">阅读</button>
				</div>
			</div>
			<div class="a"></div>
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				topicVo: {}
				
			};
		},
		created() {
			//获取网页地址url
					var query = window.location.href;
					//锁定到最后一个"/"的位置
					var begin = query.lastIndexOf('/') + 1;
					//取出地址中最后的id值
					var topicsId = query.substring(begin);
			this.axios.get('http://localhost:8080/api/topic/' + topicsId ).then(res => {
				console.log(res.data.data);
				this.topicVo = res.data.data;
			});
		},
		computed: {},
		methods: {
			toADetail(id) {
				this.$router.push('/articleDetail/' + id);
			}
		}
	};
</script>

<style scoped>
	.container {
		width: 100%;
		background-image: linear-gradient(rgb(31,31,31),rgb(68,51,74),rgb(31,31,31));
	}
	.picture{
		width: 100%;
		height: auto;
		text-align: center;
	}
	.word h4{
		border: 50px solid rgba(0,0,0,0.1);
		text-indent:50px;
	}
	.picture img{
		border-radius: 20px;
	}
	.a{
		flex: 1 1 10%;
	}
	.row{
		flex: 1 1 80%;
		display: flex;
		flex-wrap: wrap;
	}
	.card{
		text-align: center;
		height: 400px;
		
	}
	.card::before, .card::after {
	    animation-play-state: paused;
	}
	.card:hover::before{content: '';
			  border: 2px solid rgb(255,174,189);
			  position: absolute;
			  top: 0;
			  left: 0;
			  right: 0;
			  bottom: 0;
			  margin: -15px;
			  animation: borderClip 4s linear infinite;}
	 .card:hover::after {
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
	.card h3:hover{
		color:purple;
		
	}
	.card p:hover{
		color: ;
	}
	.card img{
		width: 60%;
		height: 200px;
		border-radius: 400px;
		transition: transform 5s;
	}
	.card img:hover{
		transform: rotate(480deg);
	}
	.comments{
		position: relative;
		top: 50px;
		border: 1px solid white;
		}
</style>
