<template>
    <div class="card_set">
        <div class=" card_set_top">
            <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="card"
      label="卡类型"
      >
    </el-table-column>
    <el-table-column
      prop="money"
      label="金额"
      >
    </el-table-column>
    <el-table-column
      prop="state"
      label="卡说明">
    </el-table-column>
  </el-table>
        </div>
        <div class="card_market">卡销售统计</div>
        <div class="screen_five">
            <el-select v-model="value" placeholder="卡类型选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
  <el-date-picker
      v-model="value6"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
              <el-cascader size="large" :options="optionss" v-model="selectedOptions" @change="handleChange">
  
          </el-cascader>
    <el-button type="primary" plain>查 询</el-button>
  <el-button type="primary" plain>导出EXCEL</el-button>

        </div>
        <div>
             <el-table
      :data="cardData"
      style="width: 100%">
      <el-table-column
        prop="card"
        label="卡类型"
        >
      </el-table-column>
      <el-table-column
        prop="number"
        label="数量"
        >
      </el-table-column>
      <el-table-column
        prop="data"
        label="时间">
      </el-table-column>
    </el-table>
        </div>
        <div class="air_boom"></div>
    </div>
</template>

<script>
import { provinceAndCityData } from "element-china-area-data";
export default {
  data() {
    return {
      optionss: provinceAndCityData,
      selectedOptions: [],
      value6: "",
      options: [
        {
          value: "月卡",
          label: "月卡"
        },
        {
          value: "季卡",
          label: "季卡"
        },
        {
          value: "年卡",
          label: "年卡"
        },
      ],
      value: "",
      key: "",
      tableData: [
        {
          card: "月卡",
          money: "6元",
          state:
            "上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄上海市普陀区金沙江路 1518 弄"
        },
        {
          card: "季卡",
          money: "15元",
          state:
            "上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄上海市普陀区金沙江路 1517 弄"
        },
        {
          card: "年卡",
          money: "60元",
          state:
            "上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄上海市普陀区金沙江路 1519 弄"
        }
      ],
      cardData: [
        {
          data: "2016年5月2日",
          number: "100",
          card: "月卡"
        },
        {
          data: "2016年5月2日",
          number: "100",
          card: "月卡"
        },
        {
          data: "2016年5月2日",
          number: "100",
          card: "月卡"
        },
        {
          data: "2016年5月2日",
          number: "100",
          card: "月卡"
        }
      ]
    };
  },
  methods: {
    handleChange(value) {
      console.log(value, "数据是什么");
    }
  }
};
</script>

<style lang="scss" scoped>
.card_set {
  margin-top: 200px;
  width: 100%;
  height: auto;
  margin-left: 10px;
  .air_boom {
    width: 100%;
    height: 300px;
  }
  .card_set_top {
    margin-top: 20px;
    width: 98%;
    height: auto;
  }
  .card_market {
    margin-top: 30px;
    font-size: 20px;
    font-weight: 700;
  }
  .screen_five {
    width: 98%;
    // background: pink;
    display: flex;
    margin-top: 20px;
    justify-content: space-between;
  }
}
</style>
