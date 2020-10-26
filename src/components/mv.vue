<template>
    <div class="">
        <video :src="mvurl" controls loop autoplay height='435px'></video>
    </div>  
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'mv',
    computed:{
        // 获取mvurl
        ...mapState(['mvurl'])
    },    
}
</script>

<style>
video {
outline: none;
border-radius: 10px;
}

</style>