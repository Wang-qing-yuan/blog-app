<template>
	<div>
		<ul class="center">
			<li>
				<router-link to="/"><h4>Home</h4></router-link>
			</li>
			<li>
				<router-link to="/article"><h4>Hot Articles</h4></router-link>
			</li>
			<li>
				<router-link to="/Topic"><h4>Topic</h4></router-link>
			</li>
			<!-- <li>
				<router-link to="/ArticleDetail"><h4>ArticleDetail</h4></router-link>
			</li> -->
			<li>
				<router-link to="/sign" v-if="this.user === null"><h4>sign</h4></router-link>
				<div class="row">
			<img :src="this.user.avatar" class="zh-avatar" v-if="this.user !== null" @click="toUserDetail(user.id)" />
			<p @click="logout()" v-if="this.user !== null" class="tui">退出</p></div></li>
			
		</ul>
		
		<router-view/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				show: [],
				user: JSON.parse(localStorage.getItem('user'))
			};
		},
		created() {
			// console.log(this.show);
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
			logout() {
						this.user = null;
						this.$router.push('/');
						alert('退出');
						localStorage.clear();
					},
			toUserDetail(id) {
						this.$router.push('/Detail/' + id);
					}
		}
	};
</script>

<style scoped>
	.center {
		display: flex;
		justify-content: center;
		height: 90px;
		background-color: rgb(31,31,31);
	}

	li {
		padding: 30px;
	}
	
	li:hover {
		border-bottom: 3px solid white;
	}
	.row{
		display: flex;
		text-align: center;
		
	}
	.zh-avatar{
		border: 1px so white;
		height: 50px;
		width: 50px;border-radius: 30px;
	}
	
	
		
</style>
