<template>
	<div class="w-fx-center container">
	<div class=" w-fx-between" style="flex-wrap: wrap;">
		<div v-for="(item, index) in topics" :key="index">
			<div id="media-wraaper">
				<div class="media-left">
					<img :src="item.logo" class="avatar-lg link" />
					<p>{{ item.topicName }}</p>
				</div>
				<div class="media-middle">
					<p>{{ item.description.slice(0,30)}}</p>
					<p>
						<span class="meta gutter">{{ item.articles }}篇文章|</span>
						<span class="meta gutter">{{ item.follows }}人关注</span>
					</p>
				</div>
				<div class="media-right"><button class="follow">关注</button></div>
			</div>
		</div>
		
	</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			topics: [],
			keywords: ''
		};
	},
	created() {
		this.keywords = this.$route.query.keywords;
		console.log(this.keywords);
		this.axios
			.get( 'http://localhost:8080/api/topic', {
				params: {
					keywords: this.keywords
				}
			})
			.then(res => {
				console.log(res.data.data.length);
				this.topics = res.data.data;
			});
	},
	methods: {}
};
</script>
<style scoped>
	
	#media-wraaper{
		width: 400px;
		margin: 50px;
		padding: 20px;
		box-shadow: 2px 5px 10px #aaa;
		   
	}
	#media-wraaper:hover { 
		outline: pink solid 1px;
		outline-radius: 20px;
	    animation: ww 3s infinite;
		box-shadow:none;
		
	}
	
	@keyframes ww {
	    50% {outline-offset: 20px;}
		
	}
	#media-wraaper img{
		border-radius: 100px;
	}
	.follow {
		border: none;
		background-color: rgba(68, 51, 74, 0.8);
		padding: 10px;
		border-radius: 5px;
		cursor: pointer;
		transition-duration: 0.4s;
		color: white;
	}
	.follow:hover {
		box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 10px 20px 0 white;
	}
	.follow:active {
	  background-color: rgb(68, 51, 74);
	  box-shadow: 0 5px #666;
	  transform: translateY(10px);
	}
</style>
