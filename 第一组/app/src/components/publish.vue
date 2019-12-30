<template>
	<div id="j_no2">
		<!--头部-->
		<div class="j_no2hed">
			<mt-header title="发布宝贝">
				<router-link to="/" slot="left">
					<mt-button icon="back"></mt-button>
				</router-link>
				<mt-button slot="right">待卖清单</mt-button>
			</mt-header>
			<!--选择图片-->
			<div class="j_no2img">
				<input class="addPicInput" type="file" accept="image/jpeg"> 
				<span class="iconfont">&#xe642;</span>
				<p class="j_no2hespan2">添加照片</p>
			</div>
		</div>
		<div class="j_no2cont1">
			<div class="j_no2title">
				<input type="text" class="j_no2tfile" maxlength="30" placeholder="宝贝标题 品牌型号不可少" @input="ipt"/><span class="j_no2tspan">{{30 - num<0?0:30-num}}</span>
				<div class="j_no2cont1font" contenteditable="true">

				</div>
			</div>
			<div class="j_no2Position clearfix">
				<div class="j_no2Pl">
					<i class="iconfont">&#xe602;选择宝贝位置</i>
				</div>
				<div class="j_no2Pr">
					<i class="iconfont">&#xe657;</i>
					<span>全新宝贝</span>
				</div>
			</div>
		</div>
		<div class="j_no2cont2">
			<input type="text" class="j_no2p_type" placeholder="分类" />
			<input type="text" class="j_no2p_price" placeholder="价格" />
		</div>
		<div class="j_no2footer">
			<p @click="issue">发布</p>
		</div>
		{{get_arr}}
	</div>
</template>

<script>
	import {mapGetters,mapActions} from 'vuex'
	export default{
		computed:{
			...mapGetters(['get_arr'])
		},
		data(){
			return{
				num:'',
				p_name:'',//商品名称
				p_introduce:'',//商品介绍
				p_type:'',//商品类别
				p_price:''//商品价格
			}
		},
		created(){
			
		},
		methods:{
			...mapActions(['a_drawer']),
			ipt(){
				var p_name = document.querySelector('.j_no2tfile');
				this.num = p_name.value.length;
				if(this.num == 30){
					alert('最多输入30个')
				}
			},
			issue(){//发布
				var p_name = document.querySelector('.j_no2tfile');//商品名称
				var p_introduce = document.querySelector('.j_no2cont1font');//商品介绍
				var p_type = document.querySelector('.j_no2p_type');//商品类别
				var p_price = document.querySelector('.j_no2p_price');//商品价格
				this.p_name = p_name.value;
				this.p_introduce = p_introduce.innerHTML;
				this.p_type = p_type.value;
				this.p_price = p_price.value;
				var j_obj = {
					p_name:this.p_name,
					p_introduce:this.p_introduce,
					p_type:this.p_type,
					p_price:this.p_price
				}
				this.a_drawer(j_obj)
			}
		}
	}
</script>

<style>
	body {
		background-color: #fafafa;
	}
	
	#j_no2 {
		background-color: #fafafa;
		padding: 0 0.6rem;
		position: relative;
	}
	
	#j_no2 .j_no2hed {
		text-align: center;
		margin: 0 -0.6rem;
		background-color: #ffffff;
		margin-bottom: 0.5rem;
	}
	
	#j_no2 .j_no2hed i {
		float: left;
		font-size: 0.6rem;
		color: #333333;
	}
	
	#j_no2 .j_no2hsp1 {
		text-align: center;
		font-size: 0.75rem;
		color: #111111;
		line-height: 1;
	}
	
	#j_no2 .j_no2hed .j_no2hsp2 {
		float: right;
		font-size: 0.6rem;
		color: #111111;
	}
	
	#j_no2 .mint-header {
		background-color: rgba(0, 0, 0, 0);
	}
	
	#j_no2 .mint-header-title {
		color: #000000;
		font-size: 0.75rem;
	}
	
	#j_no2 .mint-button-text {
		color: #000000;
		font-size: 0.6rem;
	}
	
	#j_no2 .j_no2img {
		height: 4.625rem;
		background-color: #FFFFFF;
		text-align: center;
		padding-top: 1.325rem;
		box-sizing: border-box;
	}
	
	#j_no2 .j_no2img .iconfont {
		font-size: 1.175rem;
		text-align: center;
		color: #c0c0c0;
		display: block;
		margin-bottom: 0.375rem;
	}
	
	#j_no2 .j_no2hespan2 {
		font-size: 0.475rem;
		color: #c0c0c0;
	}
	
	#j_no2 .j_no2cont1 {
		background-color: #FFFFFF;
		/*background-color: red;*/
		margin: 0 -0.6rem;
		padding: 0 0.6rem;
		margin-bottom: 0.5rem;
	}
	
	#j_no2 .j_no2title input {
		width: 92%;
		height: 1.25rem;
		border: none;
		outline: none;
		font-size: 0.7rem;
	}
	
	#j_no2 .j_no2tspan {
		font-size: 0.7rem;
		margin-left: 0.2rem;
		color: #989898;
	}
	
	#j_no2 .j_no2cont1font {
		/*background-color: pink;*/
		height: 6.7rem;
		border: none;
		overflow: scroll;
		outline: none;
	}
	
	#j_no2 .j_no2Position {}
	
	#j_no2 .j_no2Pl {
		float: left;
	}
	
	#j_no2 .j_no2Pl i {
		font-size: 0.625rem;
		color: #c6c6c6;
	}
	
	#j_no2 .j_no2Pr {
		float: right;
	}
	
	#j_no2 .j_no2Pr i {
		color: #d2d2d2;
		font-size: 0.7rem;
	}
	
	#j_no2 .j_no2Pr span {
		color: #000000;
		font-size: 0.7rem;
	}
	
	#j_no2 .j_no2cont2 input {
		width: 100%;
		outline: none;
		border: none;
		height: 1rem;
	}
	
	#j_no2 .j_no2footer {
		position: fixed;
		bottom: 0.25rem;
		padding: 0.4rem 0.5rem;
		background-color: #FFFFFF;
		width: 100%;
		box-sizing: border-box;
		margin: 0 -0.6rem;
	}
	
	#j_no2 .j_no2footer p {
		text-align: center;
		line-height: 1.75rem;
		color: #FFFFFF;
		font-size: 0.75rem;
		background-color: #ff5555;
		border-radius: 0.25rem;
	}
	#j_no2 .j_no2img{
		position: relative;
	}
	#j_no2 .addPicInput{
		width: 16rem;
		position: absolute;
		top: 0;
		left: 0;
		height: 4.5rem;
		opacity: 0;
	}
</style>