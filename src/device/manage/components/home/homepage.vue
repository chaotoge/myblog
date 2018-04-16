<template>
    <div class="home">
        <header>
            <div class="user">
                <!-- <img src="../../assets/timg.jpg" alt=""> -->
                <p>个人博客：</p>
                <span>{{userName}}</span>
            </div>
            <div class="operate">
                <router-link to="/"><i class = "icon iconfont icon-tuichu6"></i></router-link>                                
            </div>       
        </header>
        <div class="contain">
            <aside>
               <ul>
                   <li><router-link :to="{ name: 'textList',query:{id:'1'}}">javascript</router-link></li>
                   <li><router-link :to="{ name: 'nodeList',query:{id:'2'} }">node.js</router-link></li>
                   <li><router-link :to="{ name: 'logList',query:{id:'3'} }">日志</router-link></li>
                   <li><router-link :to="{ name: 'lifeList',query:{id:'4'} }">生活</router-link></li>
                   <li><router-link :to="{ name: 'otherList',query:{id:'5'} }">其他</router-link></li>
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
           //用户  
           userName:window.sessionStorage.getItem('username')      
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
        height: 70px;
        background-color: rgb(84,92,100);
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        padding: 0 40px;
        border-bottom: 1px solid #ffffff; 
        .user{
            height: 100%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
        }
        img{
            height: 100%;
        }
        .operate{
            height: 100%;
            width: 70px;
            a{
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ffffff;
                width: 100%;
                height: 100%;
            }
        }        
    }
    .contain{
        display: flex;
        justify-content: flex-start;
        height: calc(100% - 71px);
        li{
            height: 35px;
            line-height: 35px;
            a{
                display: flex;
                align-items: center;
                color: #ffffff;
                width: 100%;
                height: 100%;
            }
            .router-link-active{
                color:rgb(255, 208, 75);            
            }
        }
    }
    aside{
        flex: 0 0 200px;
        padding:20px 0 0  20px;
        background-color: rgb(84,92,100);
        color: #ffffff;
    }
    main{
        width: calc(100% - 240px);
        background-color: #ffffff;
        padding: 10px 30px 80px 30px;
        overflow: hidden;
        overflow-y: auto;        
    }
</style>
