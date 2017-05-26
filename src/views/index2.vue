<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
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
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
    .layout-menu-left{
        background: #fff;
    }
    .layout-header{
        height: 60px;
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .layout-ceiling-main a{
        color: #9ba7b5;
    }
    /* .layout-hide-text .layout-text{
        display: none;
    }
    .layout-hide-text .sub-menu{
        display: none;
    }
    .layout-hide-text .ivu-menu-submenu-title-icon{
        display: none;
    } */
    .ivu-col{
        transition: width .2s ease-in-out;
    }
    .layout-menu{
        /* background: #464c5b; */
    }
    .hide-text{
         display: none;
    }
</style>
<template>
    <div class="layout" :class="{'layout-hide-text': spanLeft < 5}">
        <Row type="flex">
            <i-col :span="spanLeft" class="layout-menu-left">
                <!-- <Menu active-name="1" theme="dark" width="auto">
                    <div class="layout-logo-left"></div>
                    <Menu-item name="1">
                        <Icon type="ios-navigate" :size="iconSize"></Icon>
                        <span class="layout-text">选项 1</span>
                    </Menu-item>
                    <Menu-item name="2">
                        <Icon type="ios-keypad" :size="iconSize"></Icon>
                        <span class="layout-text">选项 2</span>
                    </Menu-item>
                    <Menu-item name="3">
                        <Icon type="ios-analytics" :size="iconSize"></Icon>
                        <span class="layout-text">选项 3</span>
                    </Menu-item>
                </Menu> -->
                <div class="layout-logo-left"></div>
                <div class="layout-menu" :style="styles">
                    <div :class="{'hide-text': spanLeft < 5}">
                        <Menu  width="auto" @on-select="handleTabsAdd" >
                            <Submenu v-for="(item,index) in menus" :key="index" :name="index">
                                <template slot="title">
                                    <Icon v-bind:type="item.icon" :size="iconSize"></Icon>
                                    <span class="layout-text">{{item.title}}</span>
                                </template>
                                <Menu-item  v-for="(c,i) in item.child"  :key="index + '-' + i" :name="c.title" class="sub-menu" >{{c.title}}</Menu-item>
                            </Submenu>
                        </Menu>
                    </div>
                    <div :class="{'hide-text': spanLeft >= 5}">
                        <Menu  width="auto" >
                            <Menu-item  v-for="(item,index) in menus" :name="item.title">
                                <Dropdown  @on-click="handleTabsAdd" trigger="hover" placement="right-start">
                                    <Icon v-bind:type="item.icon" :size="iconSize"></Icon>
                                    <Dropdown-menu slot="list">
                                        <Dropdown-item  v-for="(c,i) in item.child">{{c.title}}</Dropdown-item>
                                    </Dropdown-menu>
                                </Dropdown>
                            </Menu-item>
                        </Menu>
                    </div>
                    <!-- <Menu  width="auto" @on-select="handleTabsAdd" >
                        <Submenu v-for="(item,index) in menus" :key="index" :name="index">
                            <template slot="title">
                                <Icon v-bind:type="item.icon" :size="iconSize"></Icon>
                                <span class="layout-text">{{item.title}}</span>
                            </template>
                            <Menu-item  v-for="(c,i) in item.child"  :key="index + '-' + i" :name="c.title" class="sub-menu" >{{c.title}}</Menu-item>
                        </Submenu>
                    </Menu> -->
                </div>
            </i-col>
            <i-col :span="spanRight">
                <!-- <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
                <div class="layout-breadcrumb">
                    <Breadcrumb>
                        <Breadcrumb-item href="#">首页</Breadcrumb-item>
                        <Breadcrumb-item href="#">应用中心</Breadcrumb-item>
                        <Breadcrumb-item>某应用</Breadcrumb-item>
                    </Breadcrumb>
                </div>
                <div class="layout-content">
                    <div class="layout-content-main">内容区域</div>
                </div>
                <div class="layout-copy">
                    2011-2016 &copy; TalkingData
                </div> -->
                <div class="layout-header">
                    <i-button type="text" @click="toggleClick">
                        <Icon type="navicon" size="32"></Icon>
                    </i-button>
                </div>
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
                <div class="layout-copy">
                    2012-2017 &copy; PJBEST
                </div>
            </i-col>
        </Row>
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
        data () {
            return {
                spanLeft: 5,
                spanRight: 19,
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
                activeTab:"",
                styles:{}
            }
        },
        computed: {
            iconSize () {
                return this.spanLeft === 5 ? 20 : 36;
            }
        },
        methods: {
            toggleClick () {
                if (this.spanLeft === 5) {
                    this.spanLeft = 2;
                    this.spanRight = 22;
                } else {
                    this.spanLeft = 5;
                    this.spanRight = 19;
                }
            },
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
                            this.activeTab = name; 
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
                this.activeTab = this.computedActiveTab();
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
                const other = 60 + 50;
                const last = winHeight - other;
                //window.console.log(last);
                this.styles = {
                    'height': `${last}px`
                };
                //window.console.log(this.$el.styles);
            },
            computedActiveTab(){
                let activeTab;
                activeTab = this.tabs[this.tabs.length-1].title;
                return activeTab;
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
