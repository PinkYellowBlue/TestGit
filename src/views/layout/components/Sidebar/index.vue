<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <div class="text"></div>
    <el-menu
      :show-timeout="200"
      :default-active="$route.path"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item v-for="route in permission_router" :key="route.name" :item="route" :base-path="route.path"/>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'addRouters',
      'sidebar',
      'permission_router'
    ]),
    routes() {
      console.log(this.$router.options.routes,'路由');
      return this.$router.options.routes
      
    },
    isCollapse() {
      console.log(!this.sidebar.opened,'sss');
      return !this.sidebar.opened
    }
  }
}
</script>
<style lang="scss">
.text {
  height: 110px;
  // background: pink;
  background-image: url(../../../../assets/input/log.png);
  background-size: 100% 100%;
  
}
</style>

