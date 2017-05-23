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
	.search-label{
		float: left;
	}
</style>

<template>
	<div class="search-content">
		<div id="search-card" class="card">
			<Card>
	            <p slot="title"><Icon type="search"></Icon>工单查询条件</p>
	            <p>
	            <Row class="card-row">
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">受理开始：</label>
		            	<Date-picker type="date" placeholder="选择日期" class="text-input" size="small" style="float: left"></Date-picker>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">受理结束：</label>
		            	<Date-picker type="date" placeholder="选择日期" class="text-input" size="small" style="float: left"></Date-picker>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">工单步骤：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
					   <!--  <Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input> -->
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">工单状态：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            </Row>

	            <Row class="card-row">
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">一级分类：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">二级分类：</label>
		            	<Select v-model="model1" class="text-input" size="small" style="float: left">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">三级分类：</label>
		            	<Select v-model="model1" class="text-input" size="small" style="float: left">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
					   <!--  <Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input> -->
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">四级分类：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            </Row>

	            <Row class="card-row">
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">受&#8194;理&#8194;组：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">受&#8194;理&#8194;人：</label>
		            	<Select v-model="model1" class="text-input" size="small" style="float: left">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">处&#8194;理&#8194;组：</label>
		            	<Select v-model="model1" class="text-input" size="small" style="float: left">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">处&#8194;理&#8194;人：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            </Row>

	            <Row class="card-row">
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">工单编号：</label>
		            	<Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">运单/订单号：</label>
		            	<Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">问题搜索：</label>
					    <Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">附件属性：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            </Row>

	            <Row class="card-row">
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">仓&#12288;&#12288;位：</label>
		            	<Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">收件电话：</label>
		            	<Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">被监控组：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">被监控人：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            </Row>

	            <Row class="card-row">
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">监控情况：</label>
		            	<Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">寄件电话：</label>
		            	<Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">审批状态：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">类&#12288;&#12288;型：</label>
		            	<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            </Row>

	            <Row class="card-row">
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">唯品会工单编号：</label>
		            	<Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">附&#12288;&#12288;件：</label>
		            	<Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">受&#8194;理&#8194;人：</label>
		            	<Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	<label class="search-label">处&#8194;理&#8194;人：</label>
		            	<Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
	            	</Col>
	            	<Col  span="6" class="card-col">
		            	
	            	</Col>
	            </Row>
				<Row class="card-row">
					<Col  span="12" class="card-col">
					    <Checkbox-group>
					        <Checkbox label="保存中的工单"></Checkbox>
					        <Checkbox label="历史查询"></Checkbox>
					    </Checkbox-group>
	            	</Col>
	            	<Col  span="12" class="card-col">
		            	<Button type="primary" size="small">查询</Button>
		            	<Button type="primary" size="small">派单</Button>
		            	<Button type="primary" size="small">结案</Button>
	            	</Col>
	            </Row>
	            
			    
	            </p>
	        </Card>
		</div>
		<div id="workorder-table" class="card">
		        <Card>
		            <p slot="title">工单列表</p>
		            <p>
		            <Row class="card-row">
		            	<!-- <Table highlight-row border :height="200" no-data-text="暂无数据" :columns="columns2" :data="data3"></Table> -->
		            	<Table :columns="columns8" size="small" ref="table"></Table>
		            </Row>
		            
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
                ],
                columns8: [
                    {
                        "title": "步骤",
                        "key": "step",
                        "fixed": "left",
                        "width": 150
                    },
                    {
                        "title": "时间",
                        "key": "show",
                        "width": 200,
                        "sortable": true,
                        filters: [
                            {
                                label: '大于4000',
                                value: 1
                            },
                            {
                                label: '小于4000',
                                value: 2
                            }
                        ],
                        filterMultiple: false,
                        filterMethod (value, row) {
                            if (value === 1) {
                                return row.show > 4000;
                            } else if (value === 2) {
                                return row.show < 4000;
                            }
                        }
                    },
                    {
                        "title": "指派人",
                        "key": "weak",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "给处理组",
                        "key": "signin",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "给处理人",
                        "key": "click",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "处理内容",
                        "key": "active",
                        "width": 200,
                        "sortable": true
                    },
                    {
                        "title": "状态",
                        "key": "提醒",
                        "width": 100,
                        "sortable": true
                    },
                    {
                        "title": "质检人",
                        "key": "day30",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "质检备注",
                        "key": "tomorrow",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "质检情况",
                        "key": "day",
                        "width": 150,
                        "sortable": true
                    },
                    {
                        "title": "监控备注",
                        "key": "week",
                        "width": 150,
                        "sortable": true
                    }
                ]
			}
		}
	}
</script>