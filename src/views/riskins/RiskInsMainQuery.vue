<template>
  <div>
    <div style="padding: 10px;">
      <el-card>
        <div class="title">
          <i class="el-icon-search"></i>
          风控报告查询
        </div>
        <div>
          <el-form ref="riskInsMainVo" :rules="ruleValidate" :model="riskReportMainVo" label-width="120px">
            <el-row>
              <el-col :span="8">
                <el-form-item label="投保险类：" prop="classCode">
                  <el-select v-model="riskReportMainVo.classCode" type="text" placeholder="请选择">
                    <el-option value="222">222</el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="投保险种：" prop="riskCode">
                  <el-select v-model="riskReportMainVo.riskCode" type="text" placeholder="请选择" clearable>
                    <el-option value="333">333</el-option>
                  </el-select>
                </el-form-item>
              </el-col>

            </el-row>
            <div>
              <el-button round type="primary" icon="el-icon-search" @click="search">查询</el-button>
              <el-button round plain type="primary" icon="el-icon-refresh-right">重置
              </el-button>
            </div>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import {queryRiskReport} from '@/api/riskins'
  export default {
      name: 'RiskInsMain',
//    components: {CurrencyDialog},
      data (){
          return {
              riskReportMainVo: {
                  classCode: '',
                  riskCode: ''
              },
              ruleValidate: {}
          }
      },
      methods: {
          search(){
              this.$http.get('api/getNewsList').then((response)=>{
//                  this.newsList=response.data.data;
                  console.log(response);
              }).catch((response)=>{
                  console.log(response);
              })
              queryRiskReport({riskFileNo: params.row.riskFileNo}).then((response) => {

              }, (response) => {
                this.$message({
                      message: '导出报告异常',
                      type: 'warning'
                  })
              })
          }
      }

  }
</script>
<style lang="scss" scoped>
  .form1 {
    margin-bottom: 32px;
  }

  .title {
    margin: -16px -15px 16px;
    padding: 0 12px;
    font-size: 14px;
    line-height: 36px;
    background-color: #fafdff;
  }

  .result-wrapper {
    .btnbox {
      margin: 16px 0;
    }

    th .ivu-table-cell {
      display: block;
    }
  }
</style>
