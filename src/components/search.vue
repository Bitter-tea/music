<template>
    <div>
        <Input v-model="value" placeholder="歌名/歌手" search style="width: 370px;" @on-search="get" />       
    </div>  
</template>

<script>
import axios from 'axios';

export default {
    name: 'search',
    data() {
        return {
                value:"",
    }
        },

    methods: {
        //获取数据
        get(){
            //获取音乐列表
            axios.get("https://autumnfish.cn/search?keywords="+this.value)
            .then((response) => {
                this.$store.commit('getnum',response.data.result.songs)
                })
            .catch((error) => {
                    console.log(error);
                })
        },

    },
}
</script>

<style scoped>
.ivu-input-wrapper /deep/ .ivu-input{
    background:  rgba(255, 255, 255, 0.2);
    border-radius: 17px;
    outline: none;
    border-style:none;
}
</style>

<style>

</style>