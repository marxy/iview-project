<template>
	<p class="greeting">{{greeting}} World!</p>
</template>

<script>
	export default{
		data(){
			return{
				greeting:"Hello"
			}
		}
	}
</script>


<style scoped>
	.greeting{
		color: red;
	}
</style>