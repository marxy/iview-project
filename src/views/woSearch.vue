<style scoped>
	.search-card{
		font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
		font-size: 12px;
		color: #657180;
	}
	.card{
		/* background:#eee; */
		padding: 5px;
		/* border: 1px solid #eee;
		margin: 5px */
	}
	.card-row{
		padding: 5px 0px;
	}
	.card-col{
		padding: 0px 5px;
	}
	.text-input{
		width: 120px;
	}
</style>

<template>
	<div class="search-content">
		<div id="search-card" class="card">
			<Card>
	            <p slot="title"><Icon type="search"></Icon>工单查询条件</p>
	            <p>
	            <Row class="card-row">
	            	<Col  span="5" class="card-col">
		            	<label style="float: left">受理开始：</label>
		            	<Date-picker type="date" placeholder="选择日期" class="text-input" size="small" style="float: left"></Date-picker>
	            	</Col>
	            	<Col  span="5" class="card-col">
		            	<label style="float: left">受理结束：</label>
		            	<Date-picker type="date" placeholder="选择日期" class="text-input" size="small" style="float: left"></Date-picker>
	            	</Col>
	            	<Col  span="5" class="card-col">
		            	<label>工单步骤：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
					   <!--  <Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input> -->
	            	</Col>
	            	<Col  span="5" class="card-col">
		            	<label>工单状态：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            </Row>

	            <Row class="card-row">
	            	<Col  span="5" class="card-col">
		            	<label>一级分类：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col  span="5" class="card-col">
		            	<label style="float: left">二级分类：</label>
		            	<Select v-model="model1" class="text-input" size="small" style="float: left">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
					    <Select v-model="model1" class="text-input" size="small" style="float: left">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col  span="5" class="card-col">
		            	<label style="float: left">三级分类：</label>
		            	<Select v-model="model1" class="text-input" size="small" style="float: left">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
					    <Select v-model="model1" class="text-input" size="small" style="float: left">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
					   <!--  <Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input> -->
	            	</Col>
	            	<Col  span="5" class="card-col">
		            	<label>四级分类：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            </Row>

	            
			    <Button type="primary" size="small">查询</Button>
	            </p>
	        </Card>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				value1: '',
                value2: '',
                value3: '',
                model1: '',
                cityList: [
                    {
                        value: 'beijing',
                        label: '北京市'
                    },
                    {
                        value: 'shanghai',
                        label: '上海市'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳市'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州市'
                    },
                    {
                        value: 'nanjing',
                        label: '南京市'
                    },
                    {
                        value: 'chongqing',
                        label: '重庆市'
                    }
                ]
			}
		}
	}
</script>