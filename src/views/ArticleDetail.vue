<template>
	<div>
		<div class="container">
			<div class="w-row">
				<div class="left"><p class="roll">每个人都有记录现实的能力，让我们从生命中找到最有写作价值的部分，讲诉亲历故事，记录真实人生。</p></div>
				<div class="middle">
					<div class="w-fx-center">
						<h1>{{ articleVo.article.title }}</h1>
						<h4 style="margin-top: 10px;" @click="toDetail(articleVo.article.userId)">{{ articleVo.author.nickname }}</h4>
					</div>

					<div class="a" v-html="text">
						<p>{{ articleVo.article.content }}</p>
					</div>
					<div class="around">
						<button class="comments" @click="addlike()">
							<i class="iconfont">&#xe643;</i>
							赞同{{ articleVo.article.likes }}
						</button>
						<button class="comments" @click="jlike()"><i class="iconfont">&#xe631;</i></button>
						<button class="comments" @click="changeshow()">
							<i class="iconfont">&#xe6ba;</i>
							{{ articleVo.article.comments }}条评论
						</button>
						<button class="comments">
							<i class="iconfont">&#xe63e;</i>
							分享
						</button>
						<button class="comments">
							<i class="iconfont">&#xe630;</i>
							收藏
						</button>
						<button class="comments">
							<i class="iconfont">&#xe6a1;</i>
							感谢
						</button>
					</div>
					<div class="blank" v-if="show"></div>
				</div>
				<div class="right">
					<p class="roll">
						你想加入我们吗？ 在Book已经有超过2000人向Book分享自己的知识、经验和见解。 写出属于自己的故事，让经验得以成形，让更多人看到职业背后的专业，
						找到混乱人生中暗藏的真相，于细微中感受到温暖和打动人心的力量。
					</p>
				</div>
			</div>
			<div class="ndcksd" style="height: 50px;"></div>
		</div>

		<div class="viewcontainer w-fx-center" v-if="!show">
			<div class="comment-card ">
				<div class="co"><h1>精彩评论</h1></div>
				<div class="nav-item" v-for="(item, index) in comment" :key="index">
					<div class="w-row">
						<div class="card-left w-fx-right"><img :src="item.author.avatar" class="avatar-xs bian" /></div>
						<div class="card-right ">
							<div class="w-row w-fx-between">
								<p class="cz-sub-title">{{ item.author.nickname }}</p>
								<p class="cz-meta">
									{{ item.comment.createTime.date.year }}年{{ item.comment.createTime.date.month }}月{{ item.comment.createTime.date.day }}日
									{{ item.comment.createTime.time.hour }}:{{ item.comment.createTime.time.minute }}:{{ item.comment.createTime.time.second }}
								</p>
							</div>

							<p class="border">{{ item.comment.content }}</p>
						</div>
					</div>
					<div class="like-lable">
						<button class="like">喜欢</button>
						<button class="like" @click="del(item.comment.id, item.comment.userId)">删除</button>
					</div>
				</div>

				<div class="border">
					<textarea
						rows="10"
						cols="30"
						placeholder="发表评论:"
						v-model="writeComment.content"
						style="width: 80%;height:150px;margin-left: 100px;margin-top: 20px;border-radius: 10px;"
					></textarea>
					<button
						class="zh-btn-large shadow"
						@click="release"
						v-on:click="changeshow()"
						style="height: 50px;
	width: 70px;
	font-size: 20px;
	background-color: rgba(52,42,55,0.3);
	border-radius: 10px;
	color: white;"
					>
						发布
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: JSON.parse(localStorage.getItem('user')),
			comment: [],
			articleVo: {
				text: null
			},
			show: 'true',
			writeComment: {
				articleId: 0,
				userId: 0,
				content: ''
			}
		};
	},
	created() {
		//获取网页地址url
		var query = window.location.href;
		//锁定到最后一个"/"的位置
		var begin = query.lastIndexOf('/') + 1;
		//取出地址中最后的id值
		var articleId = query.substring(begin);
		//获取对应文章的详细内容
		this.axios.get('http://localhost:8080/api/article/' + articleId).then(res => {
			console.log(res.data.data);
			this.articleVo = res.data.data;
			this.text = this.articleVo.article.content;
		});
		this.axios.get('http://localhost:8080/api/article').then(res => {
			console.log(res.data.data);
			this.articles = res.data.data;
		});
		this.axios.get('http://localhost:8080/api/comment/' + articleId).then(res => {
			console.log(res.data.data);
			this.comment = res.data.data;
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
	methods: {
		toDetail(id) {
			this.$router.push('/userDetail/' + id);
		},
		getImages(_url) {
			if (_url) {
				let _u = _url.substring(8);
				return 'https://images.weserv.nl/?url=' + _u;
			}
		},
		changeshow() {
			this.show = !this.show;
		},
		//发评论
		release() {
			if (this.writeComment.content == '') {
				alert('类容不能为空');
				return;
			}
			var query = window.location.href;
			var begin = query.lastIndexOf('/') + 1;
			var articleId = query.substring(begin);
			this.writeComment.articleId = articleId;
			this.writeComment.userId = this.user.id;
			this.axios.post('http://localhost:8080/api/comment', this.writeComment).then(res => {
				this.$router.go(0);
			});
		},
		del(id, userId) {
			if (userId != this.user.id) {
				alert('不能删除');
				return;
			}
			this.axios.delete('http://localhost:8080/api/comments/delete/' + id).then(res => {
				this.$router.go(0);
			});
			alert('删除成功');
		},
		addlike() {
			this.axios.post('http://localhost:8080/api/like?userId=' + this.user.id + '&articleId=' + this.articleVo.article.id).then(res => {
				this.articleVo.article.likes++;
				// this.$router.go(0);
			});

			alert('ok');
		},
		jlike() {
			this.axios.delete('http://localhost:8080/api/like?userId=' + this.user.id + '&articleId=' + this.articleVo.article.id).then(res => {
				console.log(res.data.code);
				if (res.data.code == 50004) {
					alert('不能取消关注');
				} else {
					this.articleVo.article.likes--;
					alert('取消关注成功');
				}
			});
		}
	}
};
</script>

<style scoped>
@font-face {
	font-family: 'iconfont'; /* project id 1514380 */
	src: url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.eot');
	src: url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.eot?#iefix') format('embedded-opentype'), url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.woff2') format('woff2'),
		url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.woff') format('woff'), url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.ttf') format('truetype'),
		url('//at.alicdn.com/t/font_1514380_32lokyjz8h9.svg#iconfont') format('svg');
}
.iconfont {
	font-family: 'iconfont' !important;
	font-size: 16px;
	font-style: normal;
	-webkit-font-smoothing: antialiased;
	-webkit-text-stroke-width: 0.2px;
	-moz-osx-font-smoothing: grayscale;
}
.container {
	background-image: linear-gradient(rgb(31, 31, 31), rgb(68, 51, 74), rgb(31, 31, 31));
}
.left {
	flex: 1 1 20%;
}
.middle {
	flex: 1 1 60%;
}
.right {
	flex: 1 1 20%;
}
.around {
	margin-top: 50px;
	display: flex;
	width: 100%;
	height: 45px;
	justify-content: space-around;
}
.viewcontainer {
	background-image: linear-gradient(rgb(31, 31, 31), rgb(68, 51, 74), rgb(31, 31, 31));
}
.co {
	border-bottom: 1px solid darkgray;
	height: 40px;
	border-top-right-radius: 40px;
	border-top-left-radius: 40px;

	padding-top: 10px;
	padding-bottom: 50px;
	margin-bottom: 10px;
	box-shadow: 2px 5px 10px #aaa;
}
.co h1 {
	text-align: center;
}
.comment-card {
	width: 85%;

	box-shadow: 2px 5px 30px #aaa;
	border-radius: 40px;
}
.card-left {
	flex: 1 1 10%;
}
.card-left img {
	height: 60px;
	border-radius: 20px;
}
.card-right {
	width: 100%;
	margin-left: 20px;
}
.like-lable {
	margin-left: 100px;
}
.like {
	margin-left: 30px;
	height: 30px;
	width: 50px;
	background-color: rgba(52, 42, 55, 0.3);
	border-radius: 10px;
	color: white;
}
</style>
