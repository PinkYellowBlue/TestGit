<template>
    <div class=" new_user">
        <div class="new_user_top">
            <div class="new_user_top_case">
                <div class="new_user_top_case_flex">
                    <div>
                        <el-cascader size="large" :options="optionss" v-model="selectedOptions" @change="handleChange" placeholder="请选择地址">
    
                        </el-cascader>
                    </div>
                   <div class="list_case_bottom">
          <div class="list_case_date">注册时间:</div>
          <div>
               <el-date-picker
      v-model="value6"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
          </div>
         
        </div>
                    <div>
                        <el-button type="primary" plain @click="showwToggest">列表/图表</el-button>
                    </div>
                     <div class="button_ex">
                    <div>
                        <el-button type="primary" plain>查 询</el-button>
                    </div>
                    <div>
                        <el-button type="primary" plain>导出EXCEL</el-button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div class="new_user_data">
            <div class="new_data">
                2018年11月12日至2018年11月22日 全国新用户统计
            </div>
            <div class="new_button" @click="showToggest">
                <el-button type="warning" plain>柱状图/折线图</el-button>
            </div>
        </div>
        <div v-if="showw" class="tab_user">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="province" label="省份">
                </el-table-column>
                <el-table-column prop="number" label="数量">
                </el-table-column>
            </el-table>
        </div>
        <div v-else>
            <ve-line :data="chartData" v-if="show"></ve-line>
            <ve-histogram :data="chartData" v-else></ve-histogram>
        </div>
        <div class="air_scoon"></div>
    </div>
</template>

<script>
    import VeLine from 'v-charts/lib/line.common'
    import VeHistogram from 'v-charts/lib/histogram.common'
    import {
        provinceAndCityData
    } from 'element-china-area-data'
    export default {
        components: {
            VeLine,
            VeHistogram
        },
        data() {
            return {
                optionss: provinceAndCityData,
                selectedOptions: [],
                show: true,
                showw: true,
                chartData: {
                    columns: ['date', 'PV'],
                    rows: [
                        {
                            'date': '湖南省',
                            'PV': 1231
                        },
                        {
                            'date': '浙江省',
                            'PV': 1223
                        },
                        {
                            'date': '湖北省',
                            'PV': 2123
                        },
                        {
                            'date': '广东省',
                            'PV': 4123
                        },
                        {
                            'date': '山东省',
                            'PV': 3123
                        },
                        {
                            'date': '台湾省',
                            'PV': 7123
                        },
    
                    ]
                },
                //     chartData: {
                //   columns: ['日期', '访问用户', '下单用户', '下单率'],
                //   rows: [
                //     { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
                //     { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
                //     { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
                //     { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
                //     { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
                //     { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
                //   ]
                // },
                value6: '',
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value: '',
                tableData: [{
                    province: '湖南省',
                    number: '2000',
                }, {
                    province: '湖南省',
                    number: '2000',
                }, {
                    province: '湖南省',
                    number: '2000',
                }, {
                    province: '湖南省',
                    number: '2000',
                }, {
                    province: '湖南省',
                    number: '2000',
                }, ]
            }
    
        },
        methods: {
            showToggest() {
                var that = this
                // this.show = false
                if (this.show) {
                    console.log('响应');
                    this.show = false
                } else {
                    this.show = true
                }
                console.log(that.selectedOptions, '数据');
    
            },
            showwToggest() {
                // this.show = false
                if (this.showw) {
                    console.log('响应');
                    this.showw = false
                } else {
                    this.showw = true
                }
            },
            handleChange(value) {
    
                console.log(value, '数据是什么')
    
            }
    
        }
    }
</script>

<style lang="scss" scoped>
    .new_user {
        width: 100%;
        height: auto;
        margin-top: 200px;
        .air_scoon {
            width: 100%;
            height: 200px;
        }
        .tab_user {
            margin-top: 10px;
            margin-left: 20px;
        }
        .new_user_top {
            width: 100%;
            height: auto;
            display: flex;
            justify-content: center;
            .new_user_top_case {
                width: 100%;
                height: auto;
                margin-top: 20px;
                display: flex;
                justify-content: center;
                border: 1px solid #DCDCDC;
                .new_user_top_case_flex {
                    // background: paleturquoise;
                    margin-top: 20px;
                    width: 1300px;
                    display: flex;
                    margin-left: 30px;
                    justify-content: space-between;
                            .list_case_bottom {
                                
          display: flex;
          justify-content: space-between;
          .list_case_date {
            margin-top: 10px;
            margin-right: 10px;
          }
        }
                }
                .button_ex {
                    width: 300px;
                    display: flex;
                    margin-left: 30px;
                    // margin-top: 20px;
                    margin-bottom: 20px;
                    justify-content: space-between;
                }
            }
        }
        .new_user_data {
            margin-top: 20px;
            margin-left: 30px;
            width: 98%;
            display: flex;
            justify-content: space-between;
            .new_data {
                margin-top: 12px;
            }
            .new_button {
                margin-right: 20px;
            }
        }
    }
</style>
