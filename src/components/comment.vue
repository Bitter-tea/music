<template>
    <div class="comment_list">
        <b>热门评论</b>
        <List v-for="(list1,index) in commentlist" :key="index">
            <ListItem>
                <ListItemMeta :avatar="list1.user.avatarUrl" :title="list1.user.nickname" :description="list1.content" />
            </ListItem>
        </List>       
    </div>  
</template>

<script>
import {mapState} from 'vuex'

export default {
    name: 'comment',
        computed:{
        // 获取hotComments
            ...mapState(['commentlist'])
    },
}
</script>

<style>
.comment_list {
  width: 400px;
  height: 435px;
  box-sizing: border-box;
  padding: 10px;
  list-style: none;
  background: url('../assets/images/line.png') left center no-repeat;
  overflow: scroll;
  position: relative;
}
</style>