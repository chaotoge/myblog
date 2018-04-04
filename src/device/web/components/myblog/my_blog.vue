  <template>
  <div class="my-blog">
      <header>
        <div class="user">
          <img src="" alt="">
          <span>chaotoge</span>
        </div>
        <ul>
          <li>javascript</li>
          <li>node.js</li>
        </ul>
      </header>
      <div class="body">
        <aside>
          <ul>
            <li>你自己发表的内容</li>
            <li>这里表的内容</li>
            <li>这里是你自己发表的内容</li>
          </ul>
        </aside>
        <main>
            <div class = "contain">
              
            </div>
              <div class="question">
                <ul>
                  <li>这里是你自己发表的提问</li>
                  <li>这里是你自己发表的提问</li>
                  <li>这里是你自己发表的提问</li>
                </ul>
              </div>
        </main>
      </div>        
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style lang = "scss" scoped>
  .my-blog{
    height: 100%;
  }
  header {
    height:3rem;
    width:100%;
    background-color:rgb(10,150,210);
    display: flex;
    justify-content:space-between;    
    ul{
      height: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      white-space: nowrap;
    }
    li{
      padding: 0 20px;
      color: #ffffff;
    }
  }
  .body{
    display: flex;
    height: calc(100% - 3rem);
    li{
      height: 35px;
      line-height: 35px;
      overflow: hidden;
      text-overflow: ellipsis;
    } 
  }
  aside{
    flex: 0 0 200px;
    padding: 20px 0 0 20px;
    background-color: #ffffff;   
  }
  main{
    display: flex;
  }
  .contain{
    margin: 0 10px;
    background-color: #ffffff;
  }
  .question{
    flex: 0 0 200px;
    padding: 20px 0 0 20px;
    background-color: #ffffff;
  }
  
</style>

