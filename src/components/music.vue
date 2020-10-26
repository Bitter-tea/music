<template>
    <div>
         <audio  :src='musicurl' controls loop autoplay @play='play' @pause='pause'></audio>   
    </div>  
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'music',
    computed: {
        ...mapState(['musicurl'])
    },
    methods: {
        play(){
            this.$store.commit('getisplayingtrue')
        },
        pause(){
            this.$store.commit('getisplayingfalse')
        }
    },

}
</script>

<style>
audio{
    width: 100%;
}

</style>