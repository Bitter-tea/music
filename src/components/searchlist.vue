<template>
    <div class="song_wrapper">
        <List border size="small">
            <ListItem v-for="(list1,index) in list" :key="index">
                <Button type="text"  @click="play(list1.id)" icon="ios-play"></Button>
                {{list1.name}} ——— {{list1.artists[0].name}}
                <Button type="text" icon="logo-youtube" @click="playmv(list1.mvid)" v-if="list1.mvid"></Button>
            </ListItem>
        </List>
    </div>  
</template>

<script>
import axios from 'axios';
import {mapState} from 'vuex'

export default {
    name: 'searchlist',
    computed:{
        // 获取list
            ...mapState(['list'])
    },
    methods: {
        //播放音乐
        play(id){
            // 获取音乐地址
            axios.get('https://autumnfish.cn//song/url?id='+id)
            .then((response) => {
                this.$store.commit('getmusicurl',response.data.data[0].url)
            })
            .catch((error) => {
                console.log(error);
            })
            // 获取音乐封面
            axios.get('https://autumnfish.cn//song/detail?ids='+id)
            .then((response) => {
                this.$store.commit('getcoeverurl',response.data.songs[0].al.picUrl)
                // 改变背景
                let image = document.getElementsByClassName('wrap')[0];
                image.style.backgroundImage = `url(${response.data.songs[0].al.picUrl})`;
            })
            .catch((error) => {
                console.log(error);
            })
            // 获取音乐热门评论
            axios.get('https://autumnfish.cn/comment/hot?type=0&id='+id)
            .then((response) => {
                this.$store.commit('getcommentlist',response.data.hotComments)
            })
            .catch((error) => {
                console.log(error);
            }) 
             
        },
        // 播放mv
        playmv(mvid,){
            axios.get('https://autumnfish.cn/mv/url?id='+mvid)
            .then((response) => {
                this.$store.commit('getmvurl',response.data.data.url)
            })
            .catch((error) => {
                console.log(error);
            }) 
        }
    },
}

</script>

<style>
.song_wrapper {
  width: 400px;
  height: 435px;
  box-sizing: border-box;
  list-style: none;
  background: url('../assets/images/line.png') right center no-repeat;
  position: relative;
  overflow: scroll;
}
</style>