<template>
	<div class="w-row" style="flex-wrap: wrap;">
		<div v-for="(item, index) in users" :key="index">
			<div class="media-wraaper w-shadow">
				<div class="media-left">
					<img :src="item.avatar" class="avatar-lg" />
					<h3>{{ item.nickname }}</h3>
				</div>
				<div class="media-middle">
					<p>{{ item.introduction}}</p>
					<p>
						<span class="meta gutter">写了{{ item.articles }}篇文章|</span>
						<span class="meta gutter">{{ item.fans }}个粉丝|</span>
						<span class="meta gutter">关注了{{ item.follows }}人</span>
					</p>
				</div>
				<div class="media-right"><button class="care">关注</button></div>
			</div>
		</div>
	
				<a class="btn" >
					
				</a>
				
			
			
			
	</div>
</template>

<script>
export default {
	data() {
		return {
			users: [],
			keywords: ''
		};
	},
	created() {
		this.keywords = this.$route.query.keywords;
		console.log(this.keywords);
		this.axios
			.get( 'http://localhost:8080/api/user', {
				params: {
					keywords: this.keywords
				}
			})
			.then(res => {
				console.log(res.data.data.length);
				this.users = res.data.data;
			});
	},
	methods: {}
};
</script>
<style scoped>

				.media-wraaper {
					width: 400px;
					height: auto;
					margin: 50px;
					padding: 20px;
					box-shadow: 2px 5px 10px #aaa;
					border-radius: 20px;
					box-shadow: 0 5px 15px -5px #00000070;
					overflow: hidden;
					position: relative;
					text-align: center;
				}
				.media-wraaper:hover img{
				border-radius: 100px;
					width: 40%;
					height: auto;
				}
				.media-wraaper img {
					line-height: 90px;
					font-size: 26px;
					transition: 0.2s linear;
				}
				.media-wraaper:hover img {
					transform: scale(1.3);
					color: #f1f1f1;
				}
				/* 开始前 */
				.media-wraaper::before {
					content: '';
					position: absolute;
					width: 120%;
					height: 120%;
					background: palevioletred;
					transform: rotate(45deg);
					left: -110%;
					top: 90%;
					
				}
				/* 结束后 */
				.media-wraaper:hover::before {
					animation: flash 0.7s 1;
					top: -10%;
					left: -10%;opacity: 0.3;
				}
				@keyframes flash {
					0% {
						left: -100%;
						top: 90%;
						
					}
					50% {
						left: 10%;
						top: -30%;
						opacity: 0.7;
					}
					100% {
						left: -10%;
						top: -10%;
						opacity: 0.5;
					}
				}
	.care {
		border: none;
		background-image: linear-gradient(rgb(182, 118, 90), rgb(68, 51, 74));
		padding: 10px;
		width: 60px;
		border-radius: 5px;
		cursor: pointer;
		transition-duration: 0.4s;
		color: white;
		margin-top: 20px;
	}
	.care:hover {
		box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24), 0 10px 20px 0 white;
	}
	.care:active {
	  background-color: rgb(68, 51, 74);
	  box-shadow: 0 5px #666;
	  transform: translateY(10px);
	}
	
</style>