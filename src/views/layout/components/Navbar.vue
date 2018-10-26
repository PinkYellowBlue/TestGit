<template>
  <el-menu class="navbar" mode="horizontal">
     <div class="header_many">
       <div class="header_many_flex">
        <div class="header_many_message_button">
          <el-button type="primary" size="small">20条未读消息</el-button>
        </div>
        <div class="header_many_user_many">
          <div class="header_many_user_pink">
            <div class="header_many_user_img">
                <img src="../../../assets/input/log.png" alt="">
              </div>         
          </div>
           <div class="header_many_user_name">超级管理员</div>
        </div>
        </div>
      </div>
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>
    <breadcrumb />
    <!-- <el-dropdown class="avatar-container" trigger="click">
      <div class="avatar-wrapper">
        <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
        <i class="el-icon-caret-bottom"/>
      </div>
      <el-dropdown-menu slot="dropdown" class="user-dropdown">
        <router-link class="inlineBlock" to="/">
          <el-dropdown-item>
            Home
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <span style="display:block;" @click="logout">LogOut</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown> -->
  </el-menu>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'

export default {
  components: {
    Breadcrumb,
    Hamburger
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('ToggleSideBar')
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.navbar {
  height: 155px;
  line-height: 50px;
  width: 100%;
  position: fixed;
  z-index: 9999;
  // background: #9f9f9f;
  border-radius: 0px !important;
  //头部用户css
  .header_many {
    width: 100%;
    justify-content: flex-end;
    // padding-right: 300px;
    // display: flex;
    height: 110px;
    // flex-direction: row;
    border-bottom: 1px solid #9f9f9f;
    .header_many_flex {
      width: 89%;
      display: flex;
      // background: honeydew;
      
      height: 100px;
      flex-direction: row;
      justify-content: flex-end;
      // padding-right: 100px;
    }
    .header_many_message_button {
        margin-top: 40px;
        margin-right: 0px;
        width: 100px;
        height: 100px;
    }
     .header_many_user_many{
       margin-top: 10px;
       height: 100px;
       width: 150px;
      //  margin-right: 200px;
       
       .header_many_user_pink {
         display: flex;
         justify-content: center;
          .header_many_user_img {
         width: 50px;
         height: 50px;
         background: pink;
         border-radius: 50%; 
         img {
            width: 50px;
         height: 50px;
        //  background: pink;
         border-radius: 50%; 
         }
       }    
       }
       .header_many_user_name {
         color: black;
         font-size: 16px;
         text-align: center;
         
       }
     
       
     }
  }
  .hamburger-container {
    
    line-height: 30px;
    height: 50px;
    float: left;
    margin-top: 13px;
    padding: 0 10px;
  }
  .screenfull {
    position: absolute;
    right: 90px;
    top: 16px;
    color: red;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
</style>

