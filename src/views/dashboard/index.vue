<template>
    <div class="index_many">
        <div class="index_many_username_many">
            <div class="index_many_username_one">
                <div class="index_many_username_title">
                    <div class="new_username_title">
                        今日新增用户数
                    </div>
                    <div class="new_number">1000人</div>
                    
                </div>
                <div class="many_new_number">
                    <div class="new_number_district">  
                        <div class="district_number_sex" v-for="(item,index) in items" :key="index">
                            <div class="number_sex_state">{{item.district}} {{item.number}}人</div>
                            <div class="number_sex_men"><el-button type="primary" size="mini">男 {{item.men}}人</el-button></div>
                            <div class="number_sex_women"><el-button type="danger" size="mini">女 {{item.woMen}}人</el-button></div>
                        </div>
                    </div>
                    <div class="many_new_number_p">
                        查看详细数据
                    </div>
                </div>
            </div>
            <!-- <div class="air"></div> -->
            <div class="index_many_username_twe">
                <div class="index_many_username_title">
                    <div class="new_username_title">
                        今日新增会员数
                    </div>                    
                </div>
                <div class="many_new_number">
                    <div class="new_number_district">  
                        <div class="district_number_sex" v-for="(item,index) in memberes" :key="index">
                            <div class="number_sex_state">{{item.district}}{{item.number}}人</div>
                            <div class="number_sex_men"><el-button type="primary" size="mini">月会员 {{item.month}}人</el-button></div>
                            <div class="number_sex_women"><el-button type="success" size="mini">季度会员 {{item.quarter}}人</el-button></div>
                            <div class="number_sex_women"><el-button type="danger" size="mini">年卡会员 {{item.year}}人</el-button></div>
                        </div>
                    </div>
                    <div class="many_new_number_p">
                        查看详细数据
                    </div>
                </div>
            </div>
        </div>
        <div class="real_time">
            <div class="real_time_real">实时数据统计</div>
            <div class="real_time_data">
                <div>当前在线人数 1000人</div>
                <div>最高同时在线人数 1000000人</div>
                <div><span class="hot_city">热门城市</span> 长沙市 10000人</div>
            </div>
        </div>
        <div class="air_ing"></div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                items:[
                    {
                        district : '湖南省',
                        number : 100,
                        men : 70,
                        woMen : 40
                    },
                    {
                        district : '湖南省',
                        number : 100,
                        men : 70,
                        woMen : 40
                    },
                    {
                        district : '广东省',
                        number : 100,
                        men : 40,
                        woMen : 60
                    },
                    {
                        district : '上海省',
                        number : 100,
                        men : 50,
                        woMen : 50
                    },
                    {
                        district : '湖北省',
                        number : 100,
                        men : 50,
                        woMen : 50
                    },
                    {
                        district : '台湾省',
                        number : 100,
                        men : 50,
                        woMen : 50
                    },
                ],
                 memberes:[
                    {
                        district : '湖南省',
                        number : 100,
                        month : 70,
                        quarter : 40,
                        year : 100,
                    },
                    {
                        district : '广东省',
                        number : 100,
                        month : 70,
                        quarter : 40,
                        year : 100,
                    },
                    {
                        district : '上海省',
                        number : 100,
                        month : 70,
                        quarter : 40,
                        year : 100,
                    },
                    {
                        district : '湖北省',
                        number : 100,
                        month : 170,
                        quarter : 80,
                        year : 120,
                    },
                    {
                        district : '台湾省',
                        number : 100,
                       month : 20,
                        quarter : 140,
                        year : 70,
                    },
                     {
                        district : '湖南省',
                        number : 100,
                        month : 70,
                        quarter : 40,
                        year : 100,
                    },
                ]
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .index_many {
        margin-top: 200px;
        width: 100%;
        height: auto;
        overflow: scroll;
        .air_ing {
            width: 1200px;
            height: 300px;
        }
    .index_many_username_many {
        width: 98%;
        display: flex;
        // background: pink;
        margin:  0 auto;
        margin-left: 1%;
        margin-right: 1%;
        justify-content: space-between;
        .index_many_username_one {
            width: 40%;
            height: 540px;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // flex-direction: column;
            border: 1px solid  #cdc9c9;
            .index_many_username_title {
                 width: 100%;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                border-bottom: 1px solid  #cdc9c9;
                .new_username_title {
                    // margin-top: -30px;
                    // text-align: center;
                    font-size: 30px;
                    font-weight: 700;
                }
                .new_number {
                    // text-align: center;
                    margin-top: 10px;
                    color: black;
                    font-size: 15px;
                }
            }
            .many_new_number {
                    width: 100%;
                    height: auto;
                    // background: pink;
                    position: relative;
                    margin: 0 auto;
                    font-size: 20px;
                    
                .many_new_number_p {
                  font-size: 15px;
                        margin-top: 25px;
                        right:16px;
                        position: absolute;
                        cursor: pointer;
                    }
                .new_number_district {
                 
                    width: 90%;
                    height: auto;
                    margin-left: 20px;
                    
                    .district_number_sex {
                      font-size: 17px;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin-top: 20px;
                        // border-bottom: 1px solid pink;
                        // padding-bottom: 5px;
                        .number_sex_state {
                            margin-top: 7px;
                        }
                    }
                }
            }
        }
        // .air {
        //     width: 40px;
        //     height: 400px;
        // }
        .index_many_username_twe {
            width: 57%;
            height: 540px;
            border: 1px solid  #cdc9c9;         
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // flex-direction: column;
             .index_many_username_title {
                width: 100%;
                height: 120px;
                 display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                border-bottom: 1px solid  #cdc9c9;
                .new_username_title {
                    // margin-top: 30px;
                    font-size: 30px;
                    text-align: center;
                    font-weight: 700;
                }
               
            }
            .many_new_number {
                width: 100%;
                    height: auto;
                    position: relative;
                .many_new_number_p {
                        margin-top: 25px;
                        right:20px;
                        position: absolute;
                        cursor: pointer;
                        font-size: 15px;
                    }
                .new_number_district {
                    width: 90%;
                    height: auto;
                    margin-left: 20px;
                    
                    .district_number_sex {
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        margin-top: 20px;
                        font-size: 17px;
                        // border-bottom: 1px solid pink;
                        // padding-bottom: 5px;
                        .number_sex_state {
                            margin-top: 7px;
                        }
                    }
                }
            }
        }
       
    }
    .real_time {
        margin: 0 auto;
        margin-top: 40px;
        width: 98%;
        height: 170px;
        border: 1px solid #cdc9c9;
        .real_time_real {
            text-align: center;
            margin-top: 20px;
            font-size: 40px;
            font-weight: 700;
        }
        .real_time_data {
            margin-left: 20px;
            margin-top: 60px;
            width: 97%;
            font-size: 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            .hot_city {
                
                    color: red;
                
            }
        }
    }
    }
</style>
