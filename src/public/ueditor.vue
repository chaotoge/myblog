<template>
  <div>
    <script id="editor" type="text/plain" ></script>
  </div>
</template>

<script>
    import '../static/ueditor/ueditor.config.js';
    import '../static/ueditor/ueditor.all.js';
    import '../static/ueditor/lang/zh-cn/zh-cn';
export default {
    name: "UEditor",
    props: {
      id: {
          type: String
      },
      config: {
          type: Object
      }
    },
    data() {
      return {
        editor: null
      }
    },
    mounted() {
      //初始化UE
      const _this = this;
      this.editor = UE.getEditor('editor',this.config);
    },
    destoryed() {
      this.editor.destory();
    },
    methods:{
      getUEContent: function(){
       return this.editor.getContent();
      }
    }
  }
</script>

<style lang = "scss">
  .ueditor{
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-x: auto;
  }
  .edui-editor{
    width: 100%;
    height: 100%;
  }
  .edui-editor-iframeholder{
    height: calc(100% - 100px)
  }
</style>

