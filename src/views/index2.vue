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
    }
    .layout-copy{
        text-align: center;
        padding: 10px 0 20px;
        color: #9ea7b4;
    }
</style>
<template>
    <div class="layout">
        <div class="layout-header">
            <div class="layout-logo"></div>
        </div>

        <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu  width="auto">
                        <Submenu v-for="(item,index) in menus" :key="index" :name="index">
                            <template slot="title">
                                <Icon v-bind:type="item.icon"></Icon>
                                {{item.name}}
                            </template>
                            <Menu-item  v-for="(c,i) in item.child" :key="index + '-' + i" :name="index + '-' + i">{{c.name}}</Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="19">
                    <div class="layout-content-main">
                        <Tabs type="card" closable @on-tab-remove="handleTabRemove" v-model:value="activeTab">
                            <Tab-pane v-for="(tab,it) in tabs" :key="tab" :name="tab.title" :closable="tab.closable" :label="tab.title">
                                <component v-bind:is="tab.content">
                                  <!-- 组件在 vm.currentview 变化时改变！ -->
                                </component>
                            </Tab-pane>
                            <Button type="ghost" @click="handleTabsAdd" size="small" slot="extra" >增加</Button>
                        </Tabs>
                    </div>
                </i-col>
            </Row>
        </div>

        <!-- <div class="layout-content">
            <Row>
                <i-col span="5">
                    <Menu active-name="1-2" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                导航一
                            </template>
                            <Menu-item name="1-1">选项 1</Menu-item>
                            <Menu-item name="1-2">选项 2</Menu-item>
                            <Menu-item name="1-3">选项 3</Menu-item>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                导航二
                            </template>
                            <Menu-item name="2-1">选项 1</Menu-item>
                            <Menu-item name="2-2">选项 2</Menu-item>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                导航三
                            </template>
                            <Menu-item name="3-1">选项 1</Menu-item>
                            <Menu-item name="3-2">选项 2</Menu-item>
                        </Submenu>
                    </Menu>
                </i-col>
                <i-col span="19">
                    <div class="layout-content-main">内容区域</div>
                </i-col>
            </Row>
        </div> -->
        <div class="layout-copy">
            2012-2017 &copy; PJBEST
        </div>
    </div>
</template>
<script>
    import Vue from 'vue';
    import contentComponent from './content.vue'
    import contentComponent2 from './content2.vue'

    export default {
        
        data(){
            return {
                menus:[
                    {
                        name:'导航一',
                        icon:'ios-navigate',
                        child:[
                            {
                                name:'选项1',
                                icon:'',
                                child:{}
                            },
                            {
                                name:'选项2',
                                icon:'',
                                child:{}
                            },
                            {
                                name:'选项3',
                                icon:'',
                                child:{}
                            }
                        ]
                    },
                    {
                        name:'导航二',
                        icon:'ios-keypad',
                        child:[
                            {
                                name:'选项1',
                                icon:'',
                                child:{}
                            },
                            {
                                name:'选项2',
                                icon:'',
                                child:{}
                            }
                        ]
                    },
                    {
                        name:'导航三',
                        icon:'ios-analytics',
                        child:[
                            {
                                name:'选项1',
                                icon:'',
                                child:{}
                            },
                            {
                                name:'选项2',
                                icon:'',
                                child:{}
                            }
                        ]
                    }
                ],
                tabs:[
                    {
                        title:'工单提醒',
                        name:'',
                        content:'contentView1',
                        closable:false
                    },
                    {
                        title:'创建工单0',
                        name:'',
                        content:'contentView2',
                        closable:true
                    },
                    {
                        title:'创建工单1',
                        name:'',
                        content:'contentView1',
                        closable:true
                    }
                ],
                tabIndex:2
            }
        },
        components:{
            contentView1:contentComponent,
            contentView2:contentComponent2
        },
        methods: {
            handleTabsAdd () {
                //var cur = this.tabs;
                var curView = Math.floor(Math.random()*2) + 1;
                window.console.log(this.tabs);
                var tab = {
                        title:'创建工单' + this.tabIndex,
                        name:'',
                        content:'contentView' + curView,
                        closable:true
                    }
                this.tabs.push(tab);
                this.tabIndex++;
            },
            handleTabRemove (name) {
                for (var i = this.tabs.length - 1; i >= 0; i--) {
                    if (this.tabs[i].title === name) {
                        this.tabs.splice(i,1);
                        break;
                    }
                }
                //this['tab' + name] = null;
                //window.console.log(name);
            }
        },
        computed:{
            activeTab:function(){
                var active;
                active = this.tabs[this.tabs.length-1].title;
                window.console.log(active);
                return active;
            }
        }
        
    }
</script>
