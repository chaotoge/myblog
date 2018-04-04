<template>
  <div class="add-text">
        <h3>新增文章</h3>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="发布类型">
                <el-select v-model="form.region" placeholder="发布类型">
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
export default {
    data(){
        return {
            form:{
                title:'',
                digest:''
            },
            defaultMag:'',
            ueConfig:{}
        }
    },
    methods:{
        //asure
        asure(){
            console.log(this.$refs.ue.getUEContent());
        },
        //cancel
        cancel(){
            this.$router.push({name:'textList'});
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

