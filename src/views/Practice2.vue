<template>
	<div>
		<!-- 改变背景颜色 -->
		<ul>
			<li
				v-for="(item,index) in 10"
				:key="index"
				@click="change(index)"
				:class="ground==index ? 'active':''"
			>{{item}}</li>
		</ul>
		<!-- 隔行变色 -->
		<ul>
			<li
				v-for="(item,index) in 10"
				:key="index"
				@click="changecolor(index)"
				:class="active1==index ? color:''"
			>{{item}}</li>
		</ul>
		<!-- tab选项卡 -->
		<ul id="tab">
			<li
				v-for="(item,index) in navlist "
				:key="index"
				@click="navindex=index"
				:class="{current:navindex==index}"
			>{{item.title}}</li>
		</ul>
		<ul>
			<li v-for="(item,index) in conlist" :key="index" v-show="navindex==index">{{item.title}}</li>
		</ul>
		<!-- 待办事项 -->
		添加待办事项：
		<input type="text" v-model="kw" @keydown.enter="add" />
		<div id="con">
			<div id="left">
				<div>
					<h1>未完成{{noLength}}</h1>
					<p
						v-model="kw"
						v-if="!item.issuc"
						v-show="item.isshow==false"
						v-for="(item,index) in list"
						:key="index"
					>
						<input type="checkbox" @click="fan(item)" />
						<span>{{item.todo}}</span>
                        
						<button @click="del(index)">删除</button>
					</p>
				</div>
				<div>
					<h1>已完成{{yesLength}}</h1>
					<p v-if="item.issuc" v-show="item.isshow==true" v-for="(item,index) in list" :key="index">
						<input type="checkbox" checked @click="fan(item)" />
						<span>{{item.todo}}</span>
						<button @click="del(index)">删除</button>
					</p>
				</div>
			</div>
			<div id="right">
				<h1>所有事项{{all}}</h1>
				<p v-model="kw" v-for="(item,index) in list" :key="index">
					<input type="checkbox" :checked="item.isshow" @click="fan(item)" />
					<span @dblclick="showedit(index,item)" v-show="edit">{{item.todo}}</span>
                    <input type="text" @blur="hide(item)" v-model="item.todo" v-if="editindex==index">
					<button @click="del(index)">删除</button>
				</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				ground: 1,
				active1: 1,
				color: "red",
				list: [],
                navindex: 1,
                editindex:-1,
                edit:true,
				kw: "",
				navlist: [
					{ title: "音乐" },
					{ title: "新闻" },
					{ title: "财经" },
					{ title: "人文" },
					{ title: "地理" },
				],
				conlist: [
					{ title: "音乐" },
					{ title: "新闻" },
					{ title: "财经" },
					{ title: "人文" },
					{ title: "地理" },
				],
			};
		},
		computed: {
			noLength() {
				let num = 0;
				this.list.map((item) => {
					if (!item.isshow) num++;
				});
				return num;
			},
			yesLength() {
				let num = 0;
				this.list.map((item) => {
					if (item.isshow) {
						num++;
					}
				});
				return num;
			},
			all() {
				return this.list.length;
			},
		},
		mounted() {
			let show=localStorage.list;
			if(show){
				this.list=JSON.parse(show);
			}
		},
		methods: {
			change(index) {
				this.ground = index;
			},
			changecolor(index) {
				this.active1 = index;
				if (index % 2 == 0) {
					this.color = "red";
				} else {
					this.color = "blue";
				}
			},
			add() {
				this.list.push({
					todo: this.kw,
					issuc: false,
					isshow: false,
				});
				this.save();
				this.kw = "";
				
            },
            showedit(index,item){
                this.editindex=index;
				 index.edit=false;
				 this.save();
            },
            hide(index){
                this.editindex=-1;
                 index.edit=true;
            },
			fan(item) {
				item.isshow = !item.isshow;
				item.issuc = !item.issuc;
				this.save();
			},
			del(index) {
				this.list.splice("index", 1);
				this.save();
			},
			save(){
				localStorage.list=JSON.stringify(this.list);
			}
		},
	};
</script>

<style lang="scss">
	ul {
		list-style: none;
	}
	.active {
		background: grey;
	}
	.red {
		background: red;
	}
	.blue {
		background: blue;
	}
	#tab {
		display: flex;
		justify-content: center;

		li {
			width: 40px;
			margin-left: 10px;
			background: pink;
		}
	}
	#con {
		width: 100%;
		display: flex;
		justify-content: center;
		#left,
		#right {
			width: 40%;
			border: 1px solid #eee;
		}
	}
</style>