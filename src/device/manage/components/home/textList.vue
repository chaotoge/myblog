<template>
    <div class="text-list">
        <div class="search">
            <el-button type="primary" @click= "addText">新增文章</el-button>
        </div>
        <div class="list">
            <ul>
                <li v-for = "item in textlist">
                    <p>{{item.title}}</p>
                    <div class="operte">                        
                        <!-- <el-button v-popover:popover1>hover 激活</el-button> -->
                        <el-popover
                            placement="bottom-end"
                            width="60"
                            popper-class = "popper"
                            trigger="hover">
                            <span slot="reference">{{item.createTime}}</span>
                            <p @click= "editorText(item)">编辑</p>
                            <p @click = "removeText(item)">删除</p>
                        </el-popover>
                    </div>                    
                </li>
            </ul>
        </div>
    </div>   
</template>

<script>
    import managerApi from '../../api/api.js'
export default {
    data(){
        return {
            textlist:[]
        }
    },
    mounted(){
        this.gtextlist();
    },
    watch:{
        '$route.query'(){
            this.gtextlist();
        }
    },
    methods:{
        //获取数据列表
        gtextlist(){
            let _this = this;
            managerApi.textlist({"region":this.$route.query.id},function(res){
                if(res.code == 200){
                    _this.textlist = res.data; 
                }else{
                _this.$notify.error({
                        title: '错误',
                        message: res.message
                    }); 
                }
            })
        },
        addText(){
            this.$router.push({name:'addText',query:{status:1}});
        },
        //editorText
        editorText(itemData){           
            this.$router.push({name:'addText',query:{status:2},params:{data:itemData}});
        },
        //removeText
        removeText(itemData){
            let _this = this;
            managerApi.removeText({"textNo":itemData.textNo},function(res){
                if(res.code == 200){
                    _this.gtextlist();
                }else{
                _this.$notify.error({
                        title: '错误',
                        message: res.message
                    }); 
                }
            })
        }
    }
}
</script>

<style lang = "scss">
    .text-list{
        li{
            display: flex;
            justify-content: space-between;
            height: 35px;
            align-items: center;
            cursor: pointer;
            p{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            .operte{
                width: 150px;
                height: 100%;
                flex-shrink: 0;
                padding: 0 10px;
                line-height: 35px;
            }
        }
    }
    .popper{
        text-align: center;
        min-width: 60px;
        cursor: pointer;
        p{
            height: 35px;
            line-height: 35px;
        }
    }
    .search{
        padding: 20px 0;
    }
</style>

