import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: '',
    musicurl:'',
    coeverurl:'',
    commentlist:'',
    mvurl:'',
    isplaying:false,
    ismvpalaying:false,

  },
  getters: {

},
  mutations: {
    // 传值list
    getnum(state,id){
      state.list=id;
    },
    //传值musicurl,ismvpalaying
    getmusicurl(state,url){
      state.musicurl=url;
      state.ismvpalaying=false;
    },
     //传值coeverurl
     getcoeverurl(state,url){
      state.coeverurl=url;
    },
    //传值commentlist
    getcommentlist(state,list1){
      state.commentlist=list1
    },
     //传值mvurl,ismvpalaying
     getmvurl(state,url){
      state.mvurl=url;
      state.ismvpalaying=true;
    },
    // 播放碟子
    getisplayingtrue(state){
      state.isplaying=true;
      
    },
  // 暂停碟子
  getisplayingfalse(state){
    state.isplaying=false;
  },

},
  actions: {
  },
  modules: {
  }
})
