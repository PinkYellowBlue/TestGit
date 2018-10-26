<template>
    <div class="system_many">
        <div class="system_many_user">用户协议</div>
        <div class="system_many_user_input">
            <div class="user_input_post">
                <el-input
  type="textarea"
  :rows="10"
  placeholder="请输入内容"
  v-model="textarea">
</el-input>
            </div>
        </div>
        <div class="system_many_user_button">
            <div class="user_button">
                <el-button type="primary" plain>保 存</el-button>
            </div>

         </div>
    </div>
</template>

<script>
    export default {
         data() {
    return {
      textarea: '1.今天星期五2.今天星期六3.今天星期七'
    }
  }
    }
</script>

<style lang="scss" scoped>
    .system_many {
        width: 100%;
        height: auto;
        margin-top: 200px;
        .system_many_user {
            font-size: 30px;
            font-weight: 700;
            margin-top: 20px;
            margin-left: 25px;
        }
        .system_many_user_input {
            width: 100%;
            display: flex;
            justify-content: center;
            .user_input_post {
                margin-top: 30px;
                width: 1200px;
                height: auto;
            }
        }
        .system_many_user_button {
            width: 100%;
            display: flex;
            justify-content: center;
            .user_button {
                margin-top: 20px;
                button {
                    width: 150px;
                }
                
            }
        }
    }
</style>
