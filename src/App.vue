<template>
  <div id="app">
    <div class="wrap">
      <div class="play_wrap">
        <div class="search_bar">
          <img src="./assets/images/player_title.png" alt="" />
          <search class="search_bar_input"></search>
        </div>

        <div class="center_con">
          <searchlist> </searchlist>

          <div class="player_con" v-show="!ismvpalaying">
            <cd> </cd>
          </div>

          <comment v-show="!ismvpalaying"> </comment>

          <mv v-if="ismvpalaying" class="center_con_mv"></mv>
        </div>

        <div class="audio_con myaudio">
          <music v-if="!ismvpalaying"></music>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "./components/search";
import searchlist from "./components/searchlist";
import music from "./components/music";
import comment from "./components/comment";
import mv from "./components/mv";
import cd from "./components/cd";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    search,
    searchlist,
    music,
    comment,
    mv,
    cd,
  },
  computed: {
    // 获取list
    ...mapState(["ismvpalaying"]),
  },
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
}
.wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: url("./assets/images/bg.jpg") no-repeat;
  background-size: 100% 100%;
}
.play_wrap {
  width: 1200px;
  height: 544px;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -600px;
  margin-top: -272px;
}
.search_bar {
  height: 60px;
  background-color: #1eacda;
  overflow: hidden;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 11;
}

.search_bar img {
  margin-left: 23px;
}
.search_bar_input {
  margin-right: 23px;
}
.center_con {
  height: 435px;
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
}
.center_con_mv {
  margin: auto;
}

.player_con {
  width: 400px;
  height: 435px;
  position: relative;
}

.audio_con {
  height: 54px;
  background-color: #f1f3f4;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
audio {
  outline: none;
  background-color: #f1f3f4;
}
/* 在全局CSS里引用: */
/* 滚动条宽度 */
::-webkit-scrollbar {
  width: 0px;
  height: 0px;
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: #a1a3a9;
  border-radius: 3px;
}
</style>
