<template>
    <div class="text-list">
        <div class="search">
            <el-button type="primary" @click= "addText">新增文章</el-button>
        </div>
        <div class="list">
            <ul>
                <li>
                    <p>这是一个发表博客的主题</p>
                    <span>2018-03-30</span>
                </li>
            </ul>
        </div>
    </div>   
</template>

<script>
export default {
  data(){
      return {

      }
  },
  methods:{
      addText(){
           this.$router.push({name:'addText'});
       }
  }
}
</script>

<style lang = "scss" scoped>
    .text-list{
        li{
            display: flex;
            justify-content: space-between;
            p{
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
            }
            span{
                flex-shrink: 0;
                padding: 0 10px;
            }
        }
    }
    .search{
        padding: 20px 0;
    }
</style>

