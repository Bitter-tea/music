<template>
        <div >
            <img
              src="../assets/images/player_bar.png"
              class="play_bar"
              :class="{isPlay:isplaying}"
            />
            <!-- 黑胶碟片 -->
            <img
              src="../assets/images/disc.png"
              class="disc autoRotate"
              :class="{playing:isplaying}"
            />
            <img
              :src="coeverurl"
              class="cover autoRotate"
              :class="{playing:isplaying}"
            />
        </div>  
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'cd',
    computed: {
       ...mapState(['isplaying','coeverurl'])
    },
}
</script>

<style>
.play_bar {
  position: absolute;
  left: 200px;
  top: -10px;
  z-index: 10;
  transform: rotate(-25deg);
  transform-origin: 12px 12px;
  transition: 1s;
}
.play_bar.isPlay {
  transform: rotate(0);
}

.disc {
  position: absolute;
  left: 73px;
  top: 60px;
  z-index: 9;
}
.cover {
  position: absolute;
  left: 125px;
  top: 112px;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  z-index: 8;
}
/*动画 */
@keyframes Rotate {
from {
    transform: rotateZ(0);
}
to {
    transform: rotateZ(360deg);
}
}
.autoRotate {
animation-name: Rotate;
animation-iteration-count: infinite;
animation-play-state: paused;
animation-timing-function: linear;
animation-duration: 5s;
}
.playing {
animation-play-state: running;
}
</style>