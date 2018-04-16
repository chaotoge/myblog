<template>
  <div class="add-text">
        <h3>新增文章</h3>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="发布类型">
                <el-select v-model="form.region" placeholder="发布类型" :disabled = "$route.query.status == 2">
                <el-option label="javascript" value="1"></el-option>
                <el-option label="node.js" value="2"></el-option>
                <el-option label="笔记" value="3"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="标题">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="摘要">
                <el-input v-model="form.digest"></el-input>
            </el-form-item>
        </el-form>
        <div class="ue">
            <ueditor :value = "defaultMag" :config = "ueConfig" ref = "ue" @input = "change"></ueditor>
        </div>
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="asure">确 定</el-button>
  </div>
</template>

<script>
    import managerApi from '../../api/api';
export default {
    data(){
        return {
            form:{
                title:'',
                digest:'',
                region:''
            },
            defaultMag:'',
            ueConfig:{}
        }
    },
    mounted(){
        if(this.$route.params.data){
            this.form.title = this.$route.params.data.title;
            this.form.digest = this.$route.params.data.digest;
            this.form.region = this.$route.params.data.region;
        }
    },
    methods:{
        //asure
        asure(){
            if(this.form.region == ''){
                this.$notify({
                    title: '警告',
                    message: '请选择发布类型',
                    type: 'warning'
                });
                return 
            }else if(this.form.title == ''){
                this.$notify({
                    title: '警告',
                    message: '请输入标题',
                    type: 'warning'
                });
                return
            }else if(this.form.digest == ''){
                this.$notify({
                    title: '警告',
                    message: '请输入摘要',
                    type: 'warning'
                });
                return
            }
            //$route.query.status == 1 新增模式   ==2 编辑模式
            if(this.$route.query.status == 1){
                managerApi.addText({
                    "region":this.form.region,
                    "title":this.form.title,
                    "digest":this.form.digest,
                    "content":this.$refs.ue.getUEContent()
                },function(res){
                    if(res.code == 200){

                    }
                })
            }else{
               managerApi.updateText({
                   "textNo":this.$route.params.data.textNo,
                    "title":this.form.title,
                    "digest":this.form.digest,
                    "content":this.$refs.ue.getUEContent()
                },function(res){
                    if(res.code == 200){
                        
                    }
                }) 
            }
            
        },
        //cancel
        cancel(){
            this.$router.back();
        },
        change(data){
            this.defaultMag = data.content;
        }
    },

}
</script>

<style lang = "scss" scoped>
    .add-text{
        max-width: 902px;
    }
    .ue{
        margin-bottom: 20px;
    }
</style>

