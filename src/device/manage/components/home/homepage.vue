<template>
    <div class="home">
        <header>
            <div class="user">
                <img src="" alt="">
                <span>用户名</span>
            </div>
            <div class="operate">
            
            </div>       
        </header>
        <div class="contain">
            <aside>
               <ul>
                   <li>javascript</li>
                   <li>node.js</li>
                   <li>日志</li>
                   <li>生活</li>
                   <li>其他</li>
                </ul> 
            </aside>
            <main>
                <router-view></router-view>
            </main>
        </div>        
    </div>   
</template>

<script>
export default {
   data(){
       return {
           //
           tableData:[],
           //新增博客弹窗
           dialogTableVisible:false,
          
       }
   },
   methods:{
       
   }
}
</script>

<style lang = "scss" scoped>
    .home{
        height: 100%;
    }
    header{
        height: 3rem;        
    }
    .contain{
        display: flex;
        justify-content: flex-start;
        height: calc(100% - 3rem);
        li{
            height: 35px;
            line-height: 35px;
        }
    }
    aside{
        flex: 0 0 200px;
        padding:20px 0 0  20px;
        background-color: #ffffff;
    }
    main{
        width: calc(100% - 240px);
        background-color: #ffffff;
        padding: 10px 30px 80px 30px;
        overflow: hidden;
        overflow-y: auto;        
    }
</style>
