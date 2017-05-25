<style scoped>
	.create-content{
		color: #657180;
	}
	#create-condition{
		margin-top: 35px;
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
	#btn-group{
		position: fixed;
		top: 0px;
		width: 100%;
		background: #fff;
		position: absolute\9\0;/* 兼容ie9 ie10 */
		/* margin-left: auto;
		margin-right: auto; */
	}
	/* 兼容ie11 */
	@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
		#btn-group { 
			position: absolute; 
		}
	}
	#action-btn-group{
		background: #fff;
	}
	.action-btn{
		margin: 0 1px;
	}
</style>
<template>
	<div class="create-content" :style="styles">
		<!-- <Affix>
		        	<span class="demo-affix">固定在最顶部</span>
		    	</Affix> -->
		<!-- <Affix>
		        	<span class="demo-affix">固定在最顶部</span>
		    	</Affix>
		<div id="action-btn-group">
		
			    	<Row type="flex" justify="center" align="middle">
				<Button class="action-btn" type="primary" size="small" @click="clickadd">保存</Button>
				<Button class="action-btn" type="primary" size="small">下送</Button>
				<Button class="action-btn" type="primary" size="small">结案</Button>
				<Button class="action-btn" type="primary" size="small">放弃</Button>
				<Button class="action-btn" type="primary" size="small">接管</Button>
				<Button class="action-btn" type="primary" size="small">备注</Button>
				<Button class="action-btn" type="primary" size="small">来电备注</Button>
				<Button class="action-btn" type="primary" size="small">申请</Button>
				<Button class="action-btn" type="primary" size="small">审批</Button>
				<Button class="action-btn" type="primary" size="small">跟进复核</Button>
				<Button class="action-btn" type="primary" size="small">工单附件</Button>
			</Row>
		</div> -->
		
		<div id="create-condition" class="card">
			<Card>
	            <p slot="title">创建/查询条件</p>
	            <p>
	            <label>运单/订单号：</label>
			    <Input v-model="value1" class="text-input" size="small" placeholder="运单/订单号"></Input>
			    <label>收货人电话：</label>
			    <Input v-model="value2" class="text-input" size="small"  placeholder="收货人电话"></Input>
			    <label>寄件人电话：</label><Input v-model="value3" class="text-input" size="small" placeholder="寄件人电话"></Input>
			    <Button type="primary" size="small">查询</Button>
	            </p>
	        </Card>
		</div>
		<div id="transportInfo" class="card">
			<Card>
	            <p slot="title">运单信息</p>
	            <p>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>运单号：</label><span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>创建时间：</label><span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>金额：</label><span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>发货仓：</label><span></span>
	            	</Col>
	            </Row>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>收货人：</label><span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>运单状态：</label><span></span>
	            	</Col>
	            </Row>
	            </p>
	        </Card>
		</div>
		<div id="senderInfo" class="card">
			<Card>
	            <p slot="title">寄件客户</p>
	            <p>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>客户名称：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>客户运单号：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>客户联系方式：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>寄件地址：</label>
	            		<span></span>
	            	</Col>
	            </Row>
	            </p>
	        </Card>
		</div>
		<div id="receiverInfo" class="card">
			<Card>
	            <p slot="title">寄件客户</p>
	            <p>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>销售单号：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>下单时间：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>运单状态：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>付款方式：</label>
	            		<span></span>
	            	</Col>
	            </Row>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>销售渠道：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>收货人姓名：</label><span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>收货人地址：</label><span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>联系电话：</label><span></span>
	            	</Col>
	            </Row>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>运单号：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>快递公司：</label><span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>发货时间：</label><span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>在途情况：</label><span></span>
	            	</Col>
	            </Row>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>干线部门：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>包裹箱数：</label><span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>送货方式：</label><span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>时间要求：</label><span></span>
	            	</Col>
	            </Row>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>特殊时间说明：</label>
	            		<span></span>
	            	</Col>
	            </Row>
	            </p>
	        </Card>
		</div>
		<div id="workOrderInfo" class="card">
			<Card>
	            <p slot="title">工单信息</p>
	            <p>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>运单号：</label>
			    		<Input class="text-input" size="small" placeholder="运单号"></Input>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>工单编号：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>工单状态：</label>
	            		<span></span>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>来电电话：</label>
			    		<Input class="text-input" size="small" placeholder="来电电话"></Input>
	            	</Col>
	            </Row>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>工单大类：</label>
			    		<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>工单小类：</label>
	            		<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>三级分类：</label>
	            		<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>四级分类：</label>
			    		<Select v-model="model1" class="text-input" size="small">
					        <Option v-for="item in cityList" :value="item.value" :key="item">{{ item.label }}</Option>
					    </Select>
	            	</Col>
	            </Row>
	            </p>
	        </Card>
		</div>
		<div id="workOrderRecord" class="card">
			<Card>
	            <p slot="title">工单记录</p>
	            <p>
	            <Row class="card-row">
	            	<Col span="6" class="card-col">
	            		<label>规定选择项：</label>
			    		<!-- <Input type="textarea" :rows="4" placeholder="请输入..."></Input> -->
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<label>问题描述：</label>
			    		<Input type="textarea" :rows="6" placeholder="请输入..."></Input>
	            	</Col>
	            	<Col span="6" class="card-col">
	            		<Checkbox-group>
					        <Checkbox label="提醒无需下送"></Checkbox>
					        <Checkbox label="24小时响应"></Checkbox>
					        <Checkbox label="处罚"></Checkbox>
					        <Checkbox label="72小时完成"></Checkbox>
					        <Checkbox label="三次催促"></Checkbox>
					        <Checkbox label="不计算投诉量"></Checkbox>
					        <Checkbox label="联系不上"></Checkbox>
					        <Checkbox label="2小时响应"></Checkbox>
					        <Checkbox label="短信回复"></Checkbox>
					        <Checkbox label="24小时解决"></Checkbox>
					        <Checkbox label="加急"></Checkbox>
					        <Checkbox label="质检备注"></Checkbox>
					    </Checkbox-group>
	            	</Col>
	            </Row>
	            
	            </p>
	        </Card>
		</div>
		<div id="remark-info" class="card">
			<Card>
	            <p slot="title">运单备注列表</p>
	            <p>
	            <Row class="card-row">
	            	<Table highlight-row size="small" :columns="columns2" :data="data3" ref="table"></Table>
	            	<!-- <Table :columns="columns8" :data="data7" height="200" size="small" ref="table"></Table> -->
	            </Row>
	            
	            </p>
	        </Card>
		</div>
		<div id="remark-info" class="card">
			<Card>
	            <p slot="title">工单跟踪列表</p>
	            <p>
	            <Row class="card-row">
	            	<!-- <Table highlight-row border :height="200" no-data-text="暂无数据" :columns="columns2" :data="data3"></Table> -->
	            	<Table :columns="columns8" size="small" ref="table"></Table>
	            </Row>
	            
	            </p>
	        </Card>
		</div>
	    <div id="remark-info" class="card">
			<Card>
	            <p slot="title">工单历史</p>
	            <p>
	            <Row class="card-row">
	            	<!-- <Table highlight-row border :height="200" no-data-text="暂无数据" :columns="columns2" :data="data3"></Table> -->
	            	<Table :columns="historyColumns" size="small" ref="table"></Table>
	            </Row>
	            
	            </p>
	        </Card>
		</div>
	    <div id="btn-group">
	    	<Row type="flex" justify="center" align="middle">
				<Button class="action-btn" type="primary" size="small" @click="clickadd">保存</Button>
				<Button class="action-btn" type="primary" size="small">下送</Button>
				<Button class="action-btn" type="primary" size="small">结案</Button>
				<Button class="action-btn" type="primary" size="small">放弃</Button>
				<Button class="action-btn" type="primary" size="small">接管</Button>
				<Button class="action-btn" type="primary" size="small">备注</Button>
				<Button class="action-btn" type="primary" size="small">来电备注</Button>
				<Button class="action-btn" type="primary" size="small">申请</Button>
				<Button class="action-btn" type="primary" size="small">审批</Button>
				<Button class="action-btn" type="primary" size="small">跟进复核</Button>
				<Button class="action-btn" type="primary" size="small">工单附件</Button>
			</Row>
		</div>
		<!-- <Back-top :height="100"></Back-top> -->
    </div>
</template>
<script>
    export default {
        data () {
            return {
                value1: '',
                value2: '',
                value3: '',
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
                model1: '',
                columns2: [
                    {
                        title: '备注人',
                        key: 'name',
                        width: 100,
                        align: 'center'
                    },
                    {
                        title: '时间',
                        key: 'time',
                        width: 200,
                        align: 'center'
                    },
                    {
                        title: '内容',
                        key: 'content',
                        align: 'center'
                    }
                ],
                data3: [
                    {
                        name: '王小明',
                        time: '2017-05-22',
                        content: '北京市朝阳区芍药居aaaaaaaa'
                    },
                    {
                        name: '王小明',
                        time: '2017-05-22',
                        content: '北京市朝阳区芍药居aaaaaaaa'
                    },
                    {
                        name: '王小明',
                        time: '2017-05-22',
                        content: '北京市朝阳区芍药居aaaaaaaa'
                    },
                    {
                        name: '王小明',
                        time: '2017-05-22',
                        content: '北京市朝阳区芍药居aaaaaaaa'
                    },
                    {
                        name: '王小明',
                        time: '2017-05-22',
                        content: '北京市朝阳区芍药居aaaaaaaa'
                    },
                    {
                        name: '王小明',
                        time: '2017-05-22',
                        content: '北京市朝阳区芍药居aaaaaaaa'
                    },
                    {
                        name: '王小明',
                        time: '2017-05-22',
                        content: '北京市朝阳区芍药居aaaaaaaa'
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
                ],
                historyColumns:[
                	{
                        "title": "工单号",
                        "key": "name"
                    },
                    {
                        "title": "时间",
                        "key": "name"
                    },
                    {
                        "title": "工单大类",
                        "key": "name"
                    },
                    {
                        "title": "工单二类",
                        "key": "name"
                    },
                    {
                        "title": "工单三类",
                        "key": "name"
                    },
                    {
                        "title": "工单四类",
                        "key": "name"
                    },
                    {
                        "title": "状态",
                        "key": "name"
                    }
                ],
                styles:{}
            }
        },
        methods:{
        	clickadd(){
        		window.console.log(this.$el);
        		window.console.log(this.$el.scrollTop);
        		//window.console.log(this.$el.body.scrollTop);
        		window.console.log(this.$el.getBoundingClientRect());
        		this.$Modal.info({
                    title: 'Bravo',
                    content: this.value1
                });

        	},
        	handleResize(){
        		const winHeight = window.innerHeight;
        		const other = 100 + 30 + 32 + 20 + 48 + 5;
        		const last = winHeight - other;
        		//window.console.log(last);
        		this.styles = {
                    'height': `${last}px`,
                    'overflow-y': `scroll`
                };
                //window.console.log(this.$el.styles);
        	}
        },
        mounted(){

        	this.handleResize();
        	window.addEventListener('resize', this.handleResize, false);
        	//window.console.log(this.$el);
        },
        beforeDestroy () {
            window.removeEventListener('resize', this.handleResize, false);
        }
    }
</script>