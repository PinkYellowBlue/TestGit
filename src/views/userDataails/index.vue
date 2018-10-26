<template>
    <div class="user_dataails">
        <div class="user_dataails_top">
            <div class="user_top">
                <div class="user_top_center">
                    <div class="user_top_message">
                        <div class="img_yuan">
                            <img src="../../assets/registe/a.jpg" alt="">
                        </div>
                    </div>
                    <div class="user_top_let">
                        <div class="message_flex">
                            <div>未闻花名</div>
                            <div class="sex_flex">
                                <div>性别</div>
                                <div>男</div>
                            </div>
                            <div class="name_flex">
                                <div>真实姓名</div>
                                <div>吴彦祖</div>
                            </div>
                            <div class="city_flex">
                                <div>注册省市</div>
                                <div>湖南省长沙市</div>
                            </div>
                            <div class="date_flex">
                                <div>注册时间</div>
                                <div>2019年18月20日</div>
                            </div>
                        </div>
                        <div class="message_flex_bottom">
                            <div class="message_flex">
                                <div class="name_flex">
                                    <div>生日</div>
                                    <div>1991年9月22日</div>
                                </div>
                                <div class="name_flex">
                                    <div>手机号</div>
                                    <div>137763837383</div>
                                </div>
                                <div class="city_flex">
                                    <div>会员类型</div>
                                    <div>年卡会员</div>
    
                                </div>
                                <div class="date_flex">
                                    <div>账户余额</div>
                                    <div>128元</div>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="user_dataails_bottom">
            <div class="dataails_bottom_dynamic">
                <div class="dynamic_number">动态 9527条</div>
                <div class="bottom_dynamic_left">
                    <div class="dynamic_left_scllo">
                        <div class="dynamic_left_list" v-for="(item, index) in listDataails" :key="index">
                            <div class="dynamic_left_list_str">
                                {{item.str}}
                            </div>
                            <div class="dynamic_left_list_img">
                                <img :src="item.img" alt="">
                                <img :src="item.imgg" alt="">
                                <img :src="item.imggg" alt="">
                                <img :src="item.imgggg" alt="">
                                <img :src="item.imgggg" alt="">
                                <img :src="item.i" alt="">
                                <!-- <img :src="item.im" alt="">
                                                    <img :src="item.imgi" alt="">
                                                    <img :src="item.imgii" alt=""> -->
    
                            </div>
                            <div class="button_right" @click="deleterMessage(index)">
                                <el-button type="danger" plain>点击删除</el-button>
                            </div>
                        </div>
                    </div>
                    <div class="paginatt">
                        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-size="10" layout="total, prev, pager, next, jumper" :total="100">
                        </el-pagination>
                    </div>
                </div>
            </div>
            <div class="dataails_bottom_friends">
                <div class="bottom_friend_top">
                    好友233位
                </div>
                <div class="bottom_friend_right">
                    <div class="friend_right_scllo">
                        <div class="friend_right_scllo_center">
                        <div class="friend_right_list">
                            <div class="friend_right_img_title" >
                                <div class="header_many_user_many" v-for="(title, index) in pinkk" :key="index">
                                    <div class="header_many_user_pink">
                                        <div class="header_many_user_img">
                                            <img :src="title.img" alt="">
                                        </div>
                                    </div>
                                    <div class="header_many_user_name">{{title.t}}</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div class="paginatt">
                        <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-size="10" layout=" prev, pager, next" :total="100">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
         <div class="air_scool"></div>
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            <span>确定要删除此动态吗？</span>
            <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="deleteIndex">确 定</el-button>
                      </span>
        </el-dialog>
    </div>
</template>

<script>
    const log = console.log.bind(console)
    export default {
        data() {
            return {
                currentPage4: 4,
                dialogVisible: false,
                listDataails: [{
                        str: '今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好',
                        img: 'src/assets/registe/w.jpg',
                        imgg: 'src/assets/registe/e.jpg',
                        imggg: 'src/assets/registe/s.jpg',
                        imgggg: 'src/assets/registe/q.jpg',
                        i: 'src/assets/registe/x.jpg',
                        // im: 'src/assets/input/log.png',
                        // imgi: 'src/assets/input/log.png',
                        // imgii: 'src/assets/input/log.png',
                    },
                    {
                        str: '今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好',
                        img: 'src/assets/input/log.png',
                        imgg: 'src/assets/input/log.png',
                        imggg: 'src/assets/input/log.png',
                    },
                    //                     {
                    //     str: '今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好今天星期日我,我在上班真好',
                    //     img: 'src/assets/input/log.png',
                    //     imgg: 'src/assets/input/log.png',
                    //     imggg: 'src/assets/input/log.png',
                    // },
                ],
                pinkk:[
                    {
                        t: '今天星期日',
                        img: 'src/assets/registe/q.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/a.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/w.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/e.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/s.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/d.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/a.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/w.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/e.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/s.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/d.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/a.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/w.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/e.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/s.jpg',
                    },{
                        t: '今天星期日',
                        img: 'src/assets/registe/d.jpg',
                    },
                    
                ]
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleClose(done) {
                this.$confirm('确认关闭？')
                    .then(_ => {
                        done();
                    })
                    .catch(_ => {});
            },
            deleterMessage(index) {
                var that = this
                log(index, '是什么')
                that.dialogVisible = true
                localStorage.setItem('list', index);
    
            },
    
            // deleterOne(index) {
            //     var that = this
            //     var b = that.listDataails[index]
            //     log(b, '找到信息了')
    
            // },
            deleteIndex() {
                var that = this
                var index = localStorage.getItem('list')
                that.listDataails.splice(index, 1)
                that.dialogVisible = false
            }
        }
    };
</script>

<style lang="scss" scoped>
    .user_dataails {
        width: 100%;
        height: auto;
        margin-left: 30px;
        margin-top: 200px;
        .air_scool {
            width: 100%;
            height: 300px;
        }
        .user_dataails_top {
            width: 100%;
            height: 100px;
            border-bottom: 1px solid pink;
            border-top: 1px solid pink;
            // background: pink;
            .user_top {
                display: flex;
                align-items: center;
                width: 100%;
                height: 100px;
                .user_top_center {
                    display: flex;
                    justify-content: center;
                    width: 80%;
                    align-items: center;
                    // background: pink;
                }
                .user_top_message {
                    width: 70px;
                    height: 70px;
                    border-radius: 50%;
                    margin-left: 30px;
                    background: seagreen;
                    .img_yuan {
                        img {
                            width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        background: seagreen;    
                        }
                        width: 70px;
                        height: 70px;
                        border-radius: 50%;
                        background: seagreen;
                    }
                }
                .user_top_let {
                    width: 80%;
                    // background: khaki;
                    margin-left: 40px;
                    .message_flex {
                        width: 100%;
                        display: flex;
                        font-size: 15px;
                        justify-content: space-between;
                        // background: sienna;
                        .name_flex {
                            width: 150px;
                            display: flex;
                            justify-content: space-between;
                        }
                        .sex_flex {
                            width: 80px;
                            display: flex;
                            justify-content: space-between;
                        }
                        .city_flex {
                            width: 220px;
                            display: flex;
                            justify-content: space-between;
                        }
                        .date_flex {
                            width: 200px;
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                    .message_flex_bottom {
                        width: 90%;
                        display: flex;
                        font-size: 15px;
                        margin-top: 10px;
                        justify-content: space-between;
                        // background: sienna;
                        .name_flex {
                            width: 150px;
                            display: flex;
                            justify-content: space-between;
                        }
                        .city_flex {
                            width: 150px;
                            display: flex;
                            justify-content: space-between;
                        }
                        .date_flex {
                            width: 150px;
                            display: flex;
                            justify-content: space-between;
                        }
                    }
                }
            }
        }
        .user_dataails_bottom {
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            .dataails_bottom_dynamic {
                width: 50%;
                // background: rgb(133, 71, 81);
                // border: 1px solid palevioletred;
                height: 700px;
                .dynamic_number {
                    width: 100%;
                    height: 40px;
                    text-align: center;
                    color: #fff;
                    background: rgb(48, 65, 86);
                    line-height: 40px;
                    font-size: 20px;
                }
                .bottom_dynamic_left {
                    width: 100%;
                    margin-top: 10px;
                    // background: peru;
                    height: 700px;
                    overflow: hidden;
                    border: 1px solid skyblue;
                    .paginatt {
                        width: 100%;
                        display: flex;
                        margin-top: 20px;
                        justify-content: center;
                    }
                    >.dynamic_left_scllo {
                        // background: seagreen;
                        width: 102%;
                        height: 600px;
                        line-height: 30px;
                        // text-align: center;
                        overflow-y: scroll;
                        .dynamic_left_list {
                            margin-top: 20px;
                            width: 98%;
                            height: auto;
                            // border-bottom: 1px solid palevioletred;
                            // padding-bottom: 20px;
                            // position: relative;
                            // border: 1px solid palegreen;
                            // background: pink;
                            .button_right {
                                margin-left: 83%;
                                // position: absolute;
                                // right: 0px;
                                // bottom: 0px;
                            }
                            .dynamic_left_list_str {
                                margin-left: 10px;
                                padding-top: 10px;
                            }
                            .dynamic_left_list_img {
                                margin-top: 20px;
                                margin-left: 20px;
                                // display: flex;
                                
                                img {
                                    width: 250px;
                                    //  height: 250px;
                                }
                            }
                        }
                    }
                }
            }
            .dataails_bottom_friends {
                width: 40%;
                // background: palegreen;
                height: 700px;
                .bottom_friend_top {
                    width: 100%;
                    height: 40px;
                    text-align: center;
                    color: #fff;
                    background: rgb(48, 65, 86);
                    line-height: 40px;
                    font-size: 20px;
                }
                .bottom_friend_right {
                    width: 100%;
                    margin-top: 10px;
                    // background: peru;
                    height: 700px;
                    overflow: hidden;
                    border: 1px solid skyblue;
                            .paginatt {
                                width: 100%;
                                display: flex;
                                margin-top: 20px;
                                justify-content: center;
                    }
                    >.friend_right_scllo {
                        // background: seagreen;
                        width: 102%;
                        height: 600px;
                        line-height: 30px;
                        // text-align: center;
                        overflow-y: scroll;
                        .friend_right_scllo_center {
                            width: 100%;
                            display: flex;
                            justify-content: center;
                            
                        .friend_right_list {
                            margin-top: 20px;
                            width: 400px;
                            height: auto;
                            display: flex;
                            justify-content: center;
                            .friend_right_img_title {
                                width: 80%;
                                height: auto;
                                // background: plum;
                                display: flex;
                                flex-direction: row;
                                flex-wrap: wrap;
                                .header_many_user_many {
                                    margin-top: 10px;
                                    height: 100px;
                                    width: 100px;
                                    // background: paleturquoise;
                                    //  margin-right: 200px;
                                    .header_many_user_pink {
                                        display: flex;
                                        justify-content: center;
                                        .header_many_user_img {
                                            width: 50px;
                                            height: 50px;
                                            // background: pink;
                                            border-radius: 50%;
                                            img {
                                                width: 50px;
                                            height: 50px;
                                            // background: pink;
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
                        }
                    }  
                    }
                }
            }
        }
    }
</style>
