<template>
    <div class="club_card_many">
        <div class="club_card_sace">
            <div class="club_card_sace_settings">
                <div class="sace_settings_title">会员卡设置</div>
            </div>
            <div class="card_number">
                <div class="card_number_three"> 
                    <div class="card_number_three_title">月卡</div>
                    <div class="card_number_three_input">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="card_number_three_tex">
                        <el-input
                            type="textarea"
                            :rows="4"
                            placeholder="请输入内容"
                             v-model="textarea">
                        </el-input>
                    </div>
                </div>
                <div class="card_number_three"> 
                    <div class="card_number_three_title">季卡</div>
                    <div class="card_number_three_input">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="card_number_three_tex">
                        <el-input
                            type="textarea"
                            :rows="4"
                            placeholder="请输入内容"
                             v-model="textarea">
                        </el-input>
                    </div>
                </div>
                <div class="card_number_three"> 
                    <div class="card_number_three_title">年卡</div>
                    <div class="card_number_three_input">
                        <el-input v-model="input" placeholder="请输入内容"></el-input>
                    </div>
                    <div class="card_number_three_tex">
                        <el-input
                            type="textarea"
                            :rows="4"
                            placeholder="请输入内容"
                             v-model="textarea">
                        </el-input>
                    </div>
                </div>
            </div>
            <div class="card_number_button">
                  <el-button type="primary" plain>保 存</el-button>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                input: '',
                textarea: ''
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .club_card_many {
        margin-top: 200px;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        .club_card_sace {
            width: 1200px;
            height: 700px;
            border: 1px solid #dcdcdc;
            margin-top: 30px;
            .club_card_sace_settings {
                width: 1200px;
                height: 100px;
                border-bottom: 1px solid #dcdcdc;
                display: flex;
                align-items: center;
                .sace_settings_title {
                    font-size: 30px;
                    font-weight: 700;
                    margin-left: 20px;
                }
            }
        .card_number {
            width: 1100px;
            .card_number_three {
                margin-top: 20px;
                margin-left: 20px;
                width: 1100px;
                height: auto;
                display: flex;
                justify-content: space-between;
                .card_number_three_title {
                    font-size: 20px;
                    font-weight: 700;
                    margin-top: 8px;
                }
                .card_number_three_input {
                    width: 300px;
                }
                .card_number_three_tex {
                    width: 300px;
                }
            }
        }
        .card_number_button {
            width: 1200px;
            text-align: center;
            margin-top: 50px;
            button {
                width: 100px;
            }
        }
        }
    }
</style>
