<template>
	<div>
		<p class="greeting">{{greeting}} World!</p>
		<Input v-model="message"></Input>
		<p>{{message}}</p>
		<Button type="ghost" @click="changeMessage">Change</Button>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				greeting:"Hello",
				message:"",
			}
		},
		methods:{
			changeMessage(){
				this.message = "it has been changed!"
			}
		}
	}
</script>

<style scoped>
	.greeting{
		color: red;
	}
</style>