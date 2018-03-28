/**
 * Created by @chaotoge on 2018/1/19.
 */
export default {
  //注册
  register:(state,res) => {
    state.user = '@chaotoge'
  },
  //登录
  login:(state,res) => {
    let result = res.data;
    if(result.code == 0){
      state.user.userName = result.data.userName;
      state.user.userPassword = result.data.userPassword;
    }
  }
}
