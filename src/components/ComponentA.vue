<style>
.component-a {
	background:url('../image/bd.png') no-repeat;
}
.component-a span{
	color:red;
	font-size:20px;
}
</style>

<template>
  <div class="component-a">
    there is AA component!content is <span @click='say'>{{msg}}</span>
  </div>
</template>

<script>
module.exports={
	data(){
		return {msg:'1msg-aaa!'}
	},
	methods:{
		say:function(){
			alert('ok')
		}
	}
}
</script>