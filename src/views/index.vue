<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #fff;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-info{
        width: 100px;
        height: 60px;
        background: #fff;
        border-radius: 3px;
        float: right;
        position: relative;
        top: 15px;
        right: 20px;
    }
    .layout-header{
        height: 100px;
        background: #5b6270;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
    }
    .layout-assistant{
        width: 300px;
        margin: 0 auto;
        height: inherit;
    }
    .layout-breadcrumb{
        padding: 10px 15px 0;
    }
    .layout-content{
        min-height: 200px;
        margin: 15px;
        overflow: hidden;
        background: #fff;
        border-radius: 4px;
    }
    .layout-content-main{
        padding: 10px;
        /* min-height: 400px; */
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .component-content{
        /* overflow-y: scroll; */
        /* overflow-y: scroll; */
        
        /* height: 640px; */
    }
    .layout-menu{
        /* background: #464c5b; */
        overflow-y: auto;
    }
</style>
<template>
    <div class="layout">
        <div class="layout-header">
            <div class="layout-logo"></div>
            <div class="layout-info"></div>
        </div>

        <div class="layout-content">
            <Row>
                <i-col span="3">
                    <div class="layout-menu" :style="styles">
                        <Menu  width="auto" @on-select="handleTabsAdd" >
                            <Submenu v-for="(item,index) in menus" :key="index" :name="index">
                                <template slot="title">
                                    <Icon v-bind:type="item.icon"></Icon>
                                    {{item.title}}
                                </template>
                                <Menu-item  v-for="(c,i) in item.child"  :key="index + '-' + i" :name="c.title"  >{{c.title}}</Menu-item>
                            </Submenu>
                        </Menu>
                    </div>

                </i-col>
                <i-col span="21">
                    <div class="layout-content-main" :style="styles">
                        <Tabs type="card" closable @on-tab-remove="handleTabRemove" v-model:value="activeTab">
                            <Tab-pane v-for="(tab,it) in tabs" :key="tab" :name="tab.title" :closable="tab.closable" :label="tab.title">
                            <div class="component-content">
                                <component v-bind:is="tab.content">
                                  <!-- 组件在 vm.currentview 变化时改变！ -->
                                </component>
                            </div>
                            </Tab-pane>
                        </Tabs>
                    </div>
                </i-col>
            </Row>
        </div>
        <!-- <Back-top :height="100"></Back-top> -->
        <div class="layout-copy">
            2012-2017 &copy; PJBEST
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import contentComponent from './content.vue'
    import contentComponent2 from './content2.vue'
    import tableComponent from './table.vue'
    import woCreateComponent from './woCreate.vue'
    import woSearchComponent from './woSearch.vue'

    export default {
        
        data(){
            return {
                menus:[
                    {
                        title:'工单管理',
                        name:'woManage',
                        icon:'ios-navigate',
                        child:[
                            {
                                title:'创建工单',
                                name:'woCreate',
                                icon:'',
                                child:{}
                            },
                            {
                                title:'工单查询',
                                name:'woSearch',
                                icon:'',
                                child:{}
                            },
                            {
                                title:'工单导出',
                                name:'woExport',
                                icon:'',
                                child:{}
                            }
                        ]
                    },
                    {
                        title:'信息管理',
                        name:'infoManage',
                        icon:'ios-keypad',
                        child:[
                            {
                                title:'用户管理',
                                name:'userManage',
                                icon:'',
                                child:{}
                            },
                            {
                                title:'分类管理',
                                name:'calassifyManage',
                                icon:'',
                                child:{}
                            }
                        ]
                    },
                    {
                        title:'交互管理',
                        name:'cfgManage',
                        icon:'ios-analytics',
                        child:[
                            {
                                title:'交互1',
                                name:'dataCfg',
                                icon:'',
                                child:{}
                            },
                            {
                                title:'交互2',
                                name:'logCfg',
                                icon:'',
                                child:{}
                            }
                        ]
                    },
                    {
                        title:'配置管理',
                        name:'cfgManage',
                        icon:'ios-analytics',
                        child:[
                            {
                                title:'数据配置',
                                name:'dataCfg',
                                icon:'',
                                child:{}
                            },
                            {
                                title:'日志配置',
                                name:'logCfg',
                                icon:'',
                                child:{}
                            }
                        ]
                    },
                    {
                        title:'质量管理',
                        name:'cfgManage',
                        icon:'ios-analytics',
                        child:[
                            {
                                title:'质量配置',
                                name:'dataCfg',
                                icon:'',
                                child:{}
                            }
                        ]
                    },
                    {
                        title:'权限管理',
                        name:'cfgManage',
                        icon:'ios-analytics',
                        child:[
                            {
                                title:'权限配置',
                                name:'dataCfg',
                                icon:'',
                                child:{}
                            }
                        ]
                    },
                    {
                        title:'流向管理',
                        name:'cfgManage',
                        icon:'ios-analytics',
                        child:[
                            {
                                title:'流向配置',
                                name:'dataCfg',
                                icon:'',
                                child:{}
                            }
                        ]
                    },
                    {
                        title:'关于',
                        name:'cfgManage',
                        icon:'ios-analytics',
                        child:[
                            {
                                title:'关于',
                                name:'dataCfg',
                                icon:'',
                                child:{}
                            }
                        ]
                    }

                ],
                tabs:[
                    {
                        title:'工单创建',
                        name:'woCreate',
                        content:'woCreate',
                        closable:false
                    },
                    {
                        title:'工单查询',
                        name:'woSearch',
                        content:'woSearch',
                        closable:false
                    }
                ],
                woCreateTabIndex:0,
                styles:{}
            }
        },
        components:{
            contentView1:contentComponent,
            contentView2:contentComponent2,
            '创建工单1':tableComponent,
            '创建工单2':contentComponent2,
            '创建工单':woCreateComponent,
            'woCreate':woCreateComponent,
            'woSearch':woSearchComponent
        },
        methods: {
            handleTabsAdd(name) {
                //var cur = this.tabs;
                //window.console.log(name);
                let curView = Math.floor(Math.random()*2) + 1;
                let tab;
                if (this.tabs.length > 10) {
                    this.$Message.warning("标签页不能同时打开10个以前",3);
                    return;
                }
                if (name === "创建工单" ) {
                    tab = {
                        title:name + this.woCreateTabIndex,
                        name:'woCreate',
                        content:name,
                        closable:true
                    };
                    this.woCreateTabIndex++;
                }else{
                    //不能重复添加
                    for (let i = this.tabs.length - 1; i >= 0; i--) {
                        if ( name === this.tabs[i].title) {
                            return;
                        }
                    }
                    tab = {
                        title:name,
                        name:'',
                        content:'contentView' + curView,
                        closable:true
                    };
                }
                
                this.tabs.push(tab);
            },
            handleTabRemove (name) {
                for (let i = this.tabs.length - 1; i >= 0; i--) {
                    if (this.tabs[i].title === name) {
                        this.tabs.splice(i,1);
                        break;
                    }
                }
                //this['tab' + name] = null;
                //window.console.log(name);
            },
            handleResize(){
                const winHeight = window.innerHeight;
                const other = 100 + 30 + 50;
                const last = winHeight - other;
                //window.console.log(last);
                this.styles = {
                    'height': `${last}px`
                };
                //window.console.log(this.$el.styles);
            }
        },
        computed:{
            activeTab:function(){
                let active;
                active = this.tabs[this.tabs.length-1].title;
                window.console.log(active);
                return active;
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
