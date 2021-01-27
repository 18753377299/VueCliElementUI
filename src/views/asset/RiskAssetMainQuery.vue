<!--<template>-->
  <!--<div>-->
    <!--<box-head title="采购查询"></box-head>-->
    <!--<div>-->
      <!--<el-card>-->
        <!--<div>-->
          <!--<el-form ref="riskInsMainVo" :rules="ruleValidate" :model="mm.riskReportMainVo" label-width="120px" class="form1">-->
            <!--<el-row>-->
              <!--<el-col :span="8">-->
                <!--<el-form-item label="投保险类" prop="classCode">-->
                  <!--<el-select v-model="mm.riskReportMainVo.classCode" type="text" placeholder="请选择"-->
                             <!--@change="queryRiskCode(mm.riskReportMainVo.classCode)">-->
                    <!--<el-option v-for="(classC,index) in classCodeList" :key="index" :value="classC.code"-->
                               <!--:label="classC.code+'-&#45;&#45;'+classC.name"></el-option>-->
                  <!--</el-select>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
              <!--<el-col :span="8">-->
                <!--<el-form-item label="投保险种" prop="riskCode">-->
                  <!--<el-select v-model="mm.riskReportMainVo.riskCode" type="text" placeholder="请选择" clearable>-->
                    <!--<el-option v-for="(riskC,index) in riskCodeList" :key="index" :value="riskC.code"-->
                               <!--:label="riskC.code + '-&#45;&#45;' + riskC.name"></el-option>-->
                  <!--</el-select>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
              <!--<el-col :span="8">-->
                <!--<el-form-item label="被保险人" prop="insuredName">-->
                  <!--<el-input v-model="mm.riskReportMainVo.insuredName" type="text" placeholder="请输入..."-->
                            <!--class="picc-icon-btn-input">-->
                    <!--<i slot="suffix" @click="codeCodeDialog('insured')" class="el-input__icon el-icon-search"></i>-->
                  <!--</el-input>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row>-->
              <!--<el-col :span="8">-->
                <!--<el-form-item label="风控编号" prop="riskFileNo">-->
                  <!--<el-input v-model="mm.riskReportMainVo.riskFileNo" class="el-input-style"-->
                            <!--placeholder="请输入..."></el-input>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
              <!--<el-col :span="8">-->
                <!--<el-form-item label="查勘人" prop="explorer">-->
                  <!--<el-input v-model="mm.riskReportMainVo.explorerCName" placeholder="请输入..." class="picc-icon-btn-input"-->
                            <!--@blur="queryData('explorer')">-->
                    <!--<i slot="suffix" @click="codeCodeDialog('explorer')" class="el-input__icon el-icon-search"></i>-->
                  <!--</el-input>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
              <!--<el-col :span="8">-->
                <!--<el-form-item label="归属机构" prop="comCode">-->
                  <!--<el-input v-model="mm.riskReportMainVo.comCodeCName" placeholder="请输入..." class="picc-icon-btn-input"-->
                            <!--@blur="queryData('comCode')">-->
                    <!--<i slot="suffix" @click="codeCodeDialog('comCode')" class="el-input__icon el-icon-search"></i>-->
                  <!--</el-input>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row>-->
              <!--<el-col :span="8">-->
                <!--<el-form-item label="查勘起期" prop="exploreDateBegin">-->
                  <!--<el-date-picker v-model="mm.riskReportMainVo.exploreDateBegin" type="date" :clearable="false"-->
                                  <!--format="yyyy/MM/dd" placeholder="请选择"></el-date-picker>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
              <!--<el-col :span="8">-->
                <!--<el-form-item label="查勘止期" prop="exploreDateEnd">-->
                  <!--<el-date-picker v-model="mm.riskReportMainVo.exploreDateEnd" type="date" :clearable="false"-->
                                  <!--format="yyyy/MM/dd" placeholder="请选择"></el-date-picker>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
              <!--<el-col :span="8">-->
                <!--<el-form-item label="查勘类别" prop="exploreType">-->
                  <!--<el-select v-model="mm.riskReportMainVo.exploreType" type="text" placeholder="请选择" clearable>-->
                    <!--<el-option value="1" label="初勘"></el-option>-->
                    <!--<el-option value="2" label="复勘"></el-option>-->
                  <!--</el-select>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row>-->
              <!--<el-col :span="8">-->
                <!--<el-form-item label="报告模板" prop="riskModel">-->
                  <!--<el-select v-model="mm.riskReportMainVo.riskModel" type="text" placeholder="请选择" clearable>-->
                    <!--<el-option value="001" label="2017版财产险风控模板（专职版）"></el-option>-->
                    <!--<el-option value="002" label="2017版财产险风控模板（兼职版）"></el-option>-->
                    <!--<el-option value="004" label="机器损坏险专用风控模板"></el-option>-->
                    <!--<el-option value="005" label="营业中断险专用风控模板"></el-option>-->
                    <!--<el-option value="006" label="火灾风险排查（专业版）"></el-option>-->
                    <!--<el-option value="007" label="火灾风险排查（简化版）"></el-option>-->
                  <!--</el-select>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
              <!--<el-col :span="16">-->
                <!--<el-form-item label="查勘地址" prop="addressDetail">-->
                  <!--<el-input v-model="mm.riskReportMainVo.addressDetail" placeholder="请输入..."></el-input>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
            <!--</el-row>-->
            <!--<el-row>-->
              <!--<el-col :span="24">-->
                <!--<el-form-item label="审核状态" prop="underwriteFlag">-->
                  <!--<el-checkbox-group v-model="mm.riskReportMainVo.underwriteFlag">-->
                    <!--<el-checkbox label="T"><span>暂存</span></el-checkbox>-->
                    <!--<el-checkbox label="0"><span>保存</span></el-checkbox>-->
                    <!--<el-checkbox label="4"><span>待审核</span></el-checkbox>-->
                    <!--<el-checkbox label="1"><span>通过</span></el-checkbox>-->
                    <!--<el-checkbox label="2"><span>不通过</span></el-checkbox>-->
                  <!--</el-checkbox-group>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
            <!--</el-row>-->
            <!--<div :style="{textAlign:center}">-->
              <!--<br>-->
              <!--<el-button round plain type="primary" icon="el-icon-refresh-right" @click="reset('riskInsMainVo')">重置</el-button>-->
              <!--<el-button round type="primary" icon="el-icon-search" @click="search">查询</el-button>-->
              <!--<el-button v-if="exportFlag === true" round plain type="primary" icon="el-icon-document-copy" @click="exportRiskInsMainResult()">导出</el-button>-->
            <!--</div>-->
          <!--</el-form>-->
        <!--</div>-->
      <!--</el-card>-->
    <!--</div>-->
    <!--<div>-->
      <!--<el-card v-show="showFlag">-->
        <!--&lt;!&ndash;<div style="float:right" :width="100">-->
          <!--<el-popconfirm title="您确认删除这些内容吗？" confirm-button-text="确认"-->
                         <!--cancel-button-text="取消" @onConfirm="deleteAll(multipleSelection)">-->
            <!--<el-button slot="reference" round type="primary">删除</el-button>-->
          <!--</el-popconfirm>-->
        <!--</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div style="padding-right:20px;float:right" :width="100">-->
          <!--<el-popconfirm title="您确认导出这些数据吗？" confirm-button-text="确认"-->
                         <!--cancel-button-text="取消" @onConfirm="exportRiskInsMainResult()">-->
            <!--<el-button slot="reference" round type="primary">导出</el-button>-->
          <!--</el-popconfirm>-->
        <!--</div>&ndash;&gt;-->
        <!--<div class="result-wrapper">-->
          <!--<div>-->
            <!--<el-table ref="selection" :data="riskReportMainList"-->
                      <!--class="picc-table picc-table-normal picc-table-selectable" style="width: 100%"-->
                      <!--@sort-change="changeOrderType" @row-dblclick="rowBrowse"-->
                      <!--@select-all="selectAll" @selection-change="selectOne">-->
              <!--<el-table-column type="selection" width="56" fixed></el-table-column>-->
              <!--<el-table-column prop="riskFileNo" label="风控编号" min-width="220"></el-table-column>-->
              <!--<el-table-column prop="riskModel" label="报告模板" min-width="320">-->
                <!--<template slot-scope="scope">-->
                  <!--<span v-if="scope.row.riskModel === '001'">2017版财产险风控模板（专职版）</span>-->
                  <!--<span v-if="scope.row.riskModel === '002'">2017版财产险风控模板（兼职版）</span>-->
                  <!--<span v-if="scope.row.riskModel === '004'">机器损坏险专用风控模板</span>-->
                  <!--<span v-if="scope.row.riskModel === '005'">营业中断险专用风控模板</span>-->
                  <!--<span v-if="scope.row.riskModel === '006'">火灾风险排查（专业版）</span>-->
                  <!--<span v-if="scope.row.riskModel === '007'">火灾风险排查（简化版）</span>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column prop="insuredName" label="被保险人" min-width="300"></el-table-column>-->
              <!--<el-table-column prop="riskCode" label="投保险种" min-width="200"></el-table-column>-->
              <!--<el-table-column prop="explorerCName" label="查勘人" min-width="200"></el-table-column>-->
              <!--<el-table-column prop="comCodeCName" label="归属机构" min-width="110"></el-table-column>-->
              <!--<el-table-column prop="exploreDate" label="查勘日期" :formatter="sendtimeformatter" min-width="110"-->
                               <!--sortable="true"></el-table-column>-->
              <!--<el-table-column prop="exploreType" label="查勘类别" min-width="110"></el-table-column>-->
              <!--<el-table-column prop="mobileFlag" label="录入终端" min-width="100"></el-table-column>-->
              <!--<el-table-column prop="underwriteFlag" label="审核状态" min-width="90">-->
                <!--<template slot-scope="scope">-->
                  <!--<span v-if="scope.row.underwriteFlag === '暂存'"><i class="el-icon-info" style="color:#1890FF"/>{{ scope.row.underwriteFlag }}</span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '通过'"><i class="el-icon-success" style="color:#52C41A"/>{{ scope.row.underwriteFlag }}</span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '自动审核通过'"><i class="el-icon-success" style="color:#52C41A"/>{{ scope.row.underwriteFlag }}</span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '待省公司审核'"><i class="el-icon-question" style="color:#F5F302"/>待二级审核</span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '待市公司审核'"><i class="el-icon-question" style="color:#F5F302"/>待审核 </span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '保存'"><i class="el-icon-info" style="color:#333333"/>{{ scope.row.underwriteFlag }}</span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '不通过'"><i class="el-icon-error" style="color:#D8504B"/>{{ scope.row.underwriteFlag }}</span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '审核中'"><i class="el-icon-question" style="color:#0bb3d8"/>{{ scope.row.underwriteFlag }}</span>-->
                <!--</template>-->
              <!--</el-table-column>-->
              <!--<el-table-column prop="riskFileNo" label="操作" min-width="110">-->
                <!--<template slot-scope="scope">-->
                  <!--<span v-if="scope.row.underwriteFlag === '暂存'">-->
                    <!--<el-popconfirm title="您确认删除这条内容吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                   <!--@onConfirm="deleteRiskReportMain(scope)">-->
                      <!--<el-button type="text" size="small" slot="reference">删除</el-button>-->
                    <!--</el-popconfirm>-->
                    <!--<el-popconfirm title="确定要修改吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                   <!--@onConfirm="updateByRiskFileNo(scope)">-->
                      <!--<el-button type="text" size="small" slot="reference">修改</el-button>-->
                    <!--</el-popconfirm>-->
                  <!--</span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '待省公司审核' || scope.row.underwriteFlag === '待市公司审核'">-->
                    <!--<el-popconfirm title="确定要查看流程吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                   <!--@onConfirm="lct(scope)">-->
                      <!--<el-button type="text" size="small" slot="reference">流程</el-button>-->
                    <!--</el-popconfirm>-->
                  <!--</span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '通过' || scope.row.underwriteFlag === '自动审核通过'">-->
                    <!--<el-popconfirm title="确定要下载吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                   <!--@onConfirm="confirmDownloadFile(scope)">-->
                      <!--<el-button type="text" size="small" slot="reference">下载</el-button>-->
                    <!--</el-popconfirm>-->
                    <!--<el-popconfirm title="确定要查看流程吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                   <!--@onConfirm="lct(scope)">-->
                      <!--<el-button type="text" size="small" slot="reference">流程</el-button>-->
                    <!--</el-popconfirm>-->
                  <!--</span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '不通过'">-->
                    <!--<el-dropdown trigger="click">-->
                      <!--<el-button class="el-dropdown-link" type="text" size="small">更多</el-button>-->
                      <!--<el-dropdown-menu slot="dropdown">-->
                        <!--<el-dropdown-item>-->
                          <!--<el-popconfirm title="确定要修改吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                         <!--@onConfirm="updateByRiskFileNo(scope)">-->
                            <!--<el-button type="text" size="small" slot="reference">修改</el-button>-->
                          <!--</el-popconfirm>-->
                        <!--</el-dropdown-item>-->
                        <!--<el-dropdown-item>-->
                          <!--<el-popconfirm title="确定要提交吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                         <!--@onConfirm="submitUnderwrite(scope)">-->
                            <!--<el-button type="text" size="small" slot="reference">提交</el-button>-->
                        <!--</el-popconfirm>-->
                        <!--</el-dropdown-item>-->
                        <!--<el-dropdown-item>-->
                         <!--<el-popconfirm title="您确认删除这条内容吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                        <!--@onConfirm="deleteRiskReportMain(scope)">-->
                            <!--<el-button type="text" size="small" slot="reference">删除</el-button>-->
                          <!--</el-popconfirm>-->
                        <!--</el-dropdown-item>-->
                        <!--<el-dropdown-item>-->
                           <!--<el-popconfirm title="确定要查看流程吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                          <!--@onConfirm="lct(scope)">-->
                             <!--<el-button type="text" size="small" slot="reference">流程</el-button>-->
                           <!--</el-popconfirm>-->
                        <!--</el-dropdown-item>-->

                      <!--</el-dropdown-menu>-->
                    <!--</el-dropdown>-->
                  <!--</span>-->
                  <!--<span v-if="scope.row.underwriteFlag === '保存'">-->
                    <!--&lt;!&ndash;<el-popconfirm title="确定要下载吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                   <!--@onConfirm="makeWordBefore(scope)">-->
                      <!--<el-button type="text" size="small" slot="reference">下载</el-button>&nbsp;&nbsp;-->
                    <!--</el-popconfirm>&ndash;&gt;-->
                    <!--<el-dropdown trigger="click">-->
                      <!--<el-button class="el-dropdown-link" type="text" size="small">更多</el-button>-->
                      <!--<el-dropdown-menu slot="dropdown">-->
                        <!--<el-dropdown-item>-->
                          <!--<el-popconfirm title="您确认删除这条内容吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                         <!--@onConfirm="deleteRiskReportMain(scope)">-->
                            <!--<el-button type="text" size="small" slot="reference">删除</el-button>-->
                          <!--</el-popconfirm>-->
                        <!--</el-dropdown-item>-->
                        <!--<el-dropdown-item>-->
                          <!--<el-popconfirm title="确定要修改吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                         <!--@onConfirm="updateByRiskFileNo(scope)">-->
                            <!--<el-button type="text" size="small" slot="reference">修改</el-button>-->
                        <!--</el-popconfirm>-->
                        <!--</el-dropdown-item>-->
                        <!--<el-dropdown-item>-->
                          <!--<el-popconfirm title="确定要提交吗？" confirm-button-text="确认" cancel-button-text="取消"-->
                                         <!--@onConfirm="submitUnderwrite(scope)">-->
                            <!--<el-button type="text" size="small" slot="reference">提交</el-button>-->
                          <!--</el-popconfirm>-->
                        <!--</el-dropdown-item>-->
                      <!--</el-dropdown-menu>-->
                    <!--</el-dropdown>-->
                  <!--</span>-->
                <!--</template>-->
              <!--</el-table-column>-->
            <!--</el-table>-->
            <!--<div :style="{textAlign:center}" class="btnbox">-->
              <!--<el-pagination-->
                <!--background-->
                <!--:current-page="mm.pageNo"-->
                <!--:page-sizes="[5,15,50]"-->
                <!--:page-size="mm.pageSize"-->
                <!--:total="mm.totalCount"-->
                <!--layout="total,prev, pager, next, jumper,sizes"-->
                <!--@size-change="changepagesize"-->
                <!--@current-change="changepage"/>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</el-card>-->
      <!--<CurrencyDialog :dialog-config="DialogConfig" @sync-dialog-show-flag="syncDialogShowFlag"-->
                      <!--@click-on-row="CurrencyDialogClickOnRow">-->
      <!--</CurrencyDialog>-->
    <!--</div>-->
    <!--<el-dialog :visible.sync="modal1" title="风控报告审核流程" :before-close="cancel">-->
      <!--<el-timeline :reverse="false" class="picc-steps-vertical">-->
        <!--<el-timeline-item v-for="(item, index) in lctList" :key="index" icon="picc-icon picc-icon-success-mini">-->
          <!--<p>审核步骤：{{item.nodeName}}</p>-->
          <!--<br/>-->
          <!--<p v-if="item.nodeName !='自动审核通过'"> 审核人名称：{{item.operateName}}</p>-->
          <!--<p v-if="item.nodeName !='自动审核通过'"><br/></p>-->
          <!--<p>审核时间：{{item.operateTime}}</p>-->
          <!--<br/>-->
          <!--<p v-if="item.nodeName ==='报告打回'">打回原因：{{item.repulsesugggest}}</p>-->
          <!--<p v-if="item.nodeName ==='报告打回'"><br/></p>-->
          <!--&lt;!&ndash;          <p v-if="item.nodeName.endsWith('打回')">打回原因：{{item.repulsesugggest}}</p>&ndash;&gt;-->
          <!--&lt;!&ndash;          <p v-if="item.nodeName.endsWith('通过')">审核意见：{{item.repulsesugggest}}</p>&ndash;&gt;-->
          <!--<p v-if="item.nodeName ==='一级审核通过'">审核意见：{{item.repulsesugggest}}</p>-->
          <!--<p v-if="item.nodeName ==='一级审核通过'"><br/></p>-->
          <!--<p v-if="item.nodeName ==='二级审核通过'">审核意见：{{item.repulsesugggest}}</p>-->
          <!--<p v-if="item.nodeName ==='二级审核通过'"><br/></p>-->
        <!--</el-timeline-item>-->
      <!--</el-timeline>-->
    <!--</el-dialog>-->
    <!--<div v-show="false">-->
      <!--<el-col :span="12" style="margin-bottom: 10px;position: relative;height: 300px;">-->
        <!--<div id="myChart"-->
             <!--style="width:330px;height: 300px;position: absolute;top: 0;left: 0;right: 0;bottom: 0;margin: auto;"></div>-->
      <!--</el-col>-->
    <!--</div>-->
    <!--<el-dialog :visible.sync="showDownloadModal" title="火灾报告下载" @close="cancelDownloadWord">-->
      <!--<el-form label-width="80px">-->
        <!--<el-form-item label="报告编号">-->
          <!--<el-input v-model="currentRiskReportNo" readonly></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="报告类型">-->
          <!--<el-input v-model="downloadFireDangerWordModel.riskModel" readonly></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="下载版本">-->
          <!--<el-checkbox-group v-model="downloadFireDangerWordModel.reportType">-->
            <!--<el-checkbox label="notice">下载火灾风险隐患整改通知书doc版</el-checkbox>-->
            <!--<el-checkbox label="doc">下载火灾报告doc版</el-checkbox>-->
            <!--<el-checkbox label="pdf">下载火灾报告pdf版</el-checkbox>-->
          <!--</el-checkbox-group>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<p slot="header" style="text-align:center">-->
        <!--<span>火灾报告下载</span>-->
      <!--</p>-->
      <!--<div slot="footer">-->
        <!--<el-button round plain type="primary" @click="cancelDownloadWord">取消</el-button>-->
        <!--<el-button round type="primary" @click="downloadFireDangerWord">下载</el-button>-->
      <!--</div>-->
    <!--</el-dialog>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import {-->
    <!--classCodeQuery,-->
    <!--deleteData,-->
    <!--downloadFireReport,-->
    <!--expertRiskReportMain,-->
    <!--getUnderwriteProcess,-->
    <!--insured,-->
    <!--makeWord,-->
    <!--queryMain,-->
    <!--queryRiskInsState,-->
    <!--queryRiskReport,-->
    <!--riskCodeQuery,-->
    <!--submitUnderwrite,-->
    <!--getServerHostByServerCode-->
  <!--} from '@/api/riskIns'-->
  <!--import {customerQuery, getSalesMsg, queryComCode} from '@/api/risk'-->
  <!--import CurrencyDialog from '@/views/Dialog.vue'-->
  <!--import Cookies from 'js-cookie'-->
  <!--import {convertBase64ToBlob} from '@/utils'-->

  <!--export default {-->
    <!--name: 'RiskInsMain',-->
    <!--components: {CurrencyDialog},-->
    <!--created() {-->
      <!--this.queryClassCode()-->
      <!--this.postListFlag = true-->
      <!--if (this.$store.getters.getDatas !== '') {-->
        <!--this._data = this.$store.getters.getDatas-->
        <!--this.$store.commit('SET_DATAS', '')-->
        <!--this.queryRiskInsMain()-->
      <!--}-->
<!--//      if (this.$store.getters.getUserInfo.postList.toString()) {-->
<!--//        this.postListStr = this.$store.getters.getUserInfo.postList.toString()-->
<!--//        if (this.postListStr.indexOf('风控报告一级审核岗') !== -1 && this.postListStr.indexOf('风控报告二级审核岗') === -1) {-->
<!--//          this.m = '9'-->
<!--//        } else if (this.postListStr.indexOf('风控报告一级审核岗') === -1 && this.postListStr.indexOf('风控报告二级审核岗') !== -1) {-->
<!--//          this.m = '4'-->
<!--//        } else {-->
<!--//          this.m = '4'-->
<!--//          this.m = '9'-->
<!--//        }-->
<!--//        alert(this.m)-->
<!--//      }-->
    <!--},-->
    <!--data() {-->
      <!--const validateExploreDateBegin = (rule, value, callback) => {-->
        <!--if (value !== null && value !== '' && this.mm.riskReportMainVo.exploreDateEnd !== '') {-->
          <!--if (new Date(value).getTime() > new Date(this.mm.riskReportMainVo.exploreDateEnd).getTime()) {-->
            <!--callback(new Error('查勘起期不能大于查询止期'))-->
          <!--} else {-->
            <!--callback()-->
          <!--}-->
        <!--} else {-->
          <!--callback()-->
        <!--}-->
      <!--}-->
      <!--const validateExploreDateEnd = (rule, value, callback) => {-->
        <!--if (value !== null && value !== '' &&-->
          <!--this.mm.riskReportMainVo.exploreDateBegin !== '') {-->
          <!--if (new Date(value).getTime() < new Date(this.mm.riskReportMainVo.exploreDateBegin).getTime()) {-->
            <!--callback(new Error('查勘止期不能小于查询起期'))-->
          <!--} else {-->
            <!--callback()-->
          <!--}-->
        <!--} else {-->
          <!--callback()-->
        <!--}-->
      <!--}-->
      <!--return {-->
        <!--showDownloadModal: false,-->
        <!--downloadFireDangerWordModel: {-->
          <!--reportNo: this.currentRiskReportNo,-->
          <!--riskModel: '',-->
          <!--reportType: []-->
        <!--},-->
        <!--currentRiskReportNo: '',-->
        <!--currentRiskReportUnderwriteflag: '',-->
        <!--orderColumn: 'riskFileNo',-->
        <!--showicon: 'fa fa-angle-double-up fa-2x',-->
        <!--//selectShowFlag: true,-->
        <!--postListFlag: false,-->
        <!--myChart: '',-->
        <!--lctList: [],-->
        <!--multipleSelection: [],-->
        <!--modal1: false,-->
        <!--DialogConfig: {-->
          <!--dialogFlag: false-->
        <!--},-->
        <!--mm: {-->
          <!--riskReportMainVo: {-->
            <!--classCode: '',-->
            <!--riskCode: '',-->
            <!--insuredName: '',-->
            <!--insuredCode: '',-->
            <!--riskFileNo: '',-->
            <!--explorer: '',-->
            <!--explorerCode: '',-->
            <!--explorerCName: '',-->
            <!--comCode: '',-->
            <!--comCodeCName: '',-->
            <!--exploreDateBegin: '',-->
            <!--exploreDateEnd: '',-->
            <!--exploreType: '',-->
            <!--riskModel: '',-->
            <!--addressDetail: '',-->
            <!--underwriteFlag: [],-->
            <!--riskFileNoList: [],-->
            <!--businessType: 'query',-->
            <!--orderColumn: '',-->
            <!--orderType: 'true'-->
          <!--},-->
          <!--repulsesugggest: '',-->
          <!--pageNo: 1,-->
          <!--pageSize: 5,-->
          <!--totalCount: 0,-->
          <!--pageCount: ''-->
        <!--},-->
        <!--ruleValidate: {-->
          <!--exploreDateBegin: [-->
            <!--{validator: validateExploreDateBegin}-->
          <!--],-->
          <!--exploreDateEnd: [-->
            <!--{validator: validateExploreDateEnd}-->
          <!--]-->
        <!--},-->
        <!--m: '',-->
        <!--postListStr: [],-->
        <!--loading: false,-->
        <!--showFlag: false,-->
        <!--exportFlag : false,-->
        <!--classCodeList: [],-->
        <!--riskCodeList: [],-->
        <!--center: 'center',-->
        <!--riskReportMainList: [],-->
        <!--option: {-->
          <!--tooltip: {-->
            <!--show: 'postListFlag',-->
            <!--trigger: 'item'-->
          <!--},-->
          <!--radar: {-->
            <!--grid: { // 控制图的大小，调整下面这些值就可以，-->
              <!--x: 30,-->
              <!--x2: 70,-->
              <!--y2: 170// y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上-->
            <!--},-->
            <!--radius: 106,-->
            <!--center: ['50%', '50%'],-->
            <!--name: {-->
              <!--textStyle: {-->
                <!--color: '#fff',-->
                <!--backgroundColor: '#999',-->
                <!--borderRadius: 3,-->
                <!--padding: [3, 5]-->

              <!--}-->
            <!--},-->
            <!--splitArea: {-->
              <!--areaStyle: {-->
                <!--color: ['rgba(255,23,33,0.5)',-->
                  <!--'rgba(255,204,153,0.5)', 'rgba(255,255,204,0.5)',-->
                  <!--'rgba(153,204,255,0.5)', 'rgba(119,155,255,0.5)']-->
              <!--}-->
            <!--},-->
            <!--indicator: [-->
              <!--{text: '防火灾', max: 100},-->
              <!--{text: '防水灾', max: 100},-->
              <!--{text: '防风灾', max: 100},-->
              <!--{text: '防雷击', max: 100},-->
              <!--{text: '防雪灾', max: 100},-->
              <!--{text: '防盗抢', max: 100},-->
              <!--{text: '防地震', max: 100},-->
              <!--{text: '防地质灾害', max: 100}-->
            <!--]-->
          <!--},-->
          <!--series: [-->
            <!--{-->
              <!--name: '标的评估风险值',-->
              <!--type: 'radar',-->
              <!--lineStyle: {-->
                <!--normal: {-->
                  <!--color: '#FF9900'// 图表中各个图区域的颜色-->
                <!--}-->
              <!--},-->
              <!--data: [-->
                <!--{-->
                  <!--value: [],-->
                  <!--name: '标的评估风险值',-->
                  <!--itemStyle: {-->
                    <!--normal: {-->
                      <!--areaStyle: {-->
                        <!--type: 'default',-->
                        <!--opacity: 0 // 图表中各个图区域的透明度-->
<!--//                        color: '#D8504B' // "#af2009"  //  图表中各个图区域的颜色-->
                      <!--}-->
                    <!--}-->
                  <!--},-->
                  <!--label: {-->
                    <!--normal: {-->
                      <!--show: 'postListFlag',-->
                      <!--color: '#16d820',-->
                      <!--position: 'top',-->
                      <!--offset: [0, 5]-->
                    <!--}-->
                  <!--}-->
                <!--}-->
              <!--]-->
            <!--}-->
          <!--]-->
        <!--}-->
      <!--}-->
    <!--},-->
    <!--mounted() {-->
      <!--/* ECharts图表 */-->
      <!--this.myChart = this.$echarts.init(document.getElementById('myChart'))-->
<!--//      this.myChart2 = this.$echarts.init(document.getElementById('myChart2'))-->
      <!--this.myChart.setOption(this.option)-->
<!--//      this.myChart2.setOption(this.rader)-->
      <!--let _self = this-->
      <!--let sh = this.$store.getters.getServerHosts-->
      <!--let queryPar = {-->
        <!--serverCode: 'image'-->
      <!--}-->
      <!--getServerHostByServerCode(queryPar).then((response) => {-->
        <!--console.log(response)-->
        <!--_self.$store.commit('user/SET_SERVERHOSTS',response)-->
      <!--}, (response) => {-->
        <!--console.error(response)-->
      <!--})-->
    <!--},-->
    <!--methods: {-->
      <!--sendtimeformatter(row, column) {-->
        <!--if (row.exploreDate !== null) {-->
          <!--return row.exploreDate.substring(0, 10)-->
        <!--}-->
      <!--},-->
      <!--selectOne(val) {-->
        <!--this.multipleSelection = val-->
      <!--},-->
      <!--selectAll(val) {-->
        <!--this.multipleSelection = val-->
      <!--},-->
      <!--deleteAll(params) {-->
        <!--if (params.length === 0) {-->
          <!--this.$message({-->
            <!--message: '请选择要删除的数据!',-->
            <!--type: 'warning'-->
          <!--})-->
        <!--} else {-->
          <!--let newList = []-->
          <!--for (var i = 0; i < params.length; i++) {-->
            <!--if (params[i].underwriteFlag === '通过' || params[i].underwriteFlag === '自动审核通过' ||-->
              <!--params[i].underwriteFlag === '待省公司审核' || params[i].underwriteFlag === '待市公司审核' ||-->
              <!--params[i].underwriteFlag === '审核中' || params[i].underwriteFlag === '不通过') {-->
              <!--// this.$message.warning('报告：' + params[i].riskFileNo + ' 已提交审核或审核通过，不允许删除！')-->
              <!--this.$message({-->
                <!--message: "报告：" + params[i].riskFileNo + "状态为'" + params[i].underwriteFlag + "'，不允许删除！", // 多行的可以直接在这边写，长度看具体要求-->
                <!--type: 'warning'-->
              <!--})-->
              <!--// this.multipleSelection = []-->
              <!--this.$refs.selection.clearSelection()-->
              <!--return-->
            <!--} else {-->
              <!--newList.push(params[i].riskFileNo)-->
            <!--}-->
          <!--}-->
          <!--if (newList.length > 0) {-->
            <!--this.mm.riskReportMainVo.riskFileNoList = newList-->
            <!--this.deleteGroup()-->
          <!--}-->
        <!--}-->
      <!--},-->
      <!--exportRiskInsMainResult() {-->

<!--//        对查询条件进行校验和处理-->
        <!--if (this.mm.riskReportMainVo.underwriteFlag.indexOf('4') !== -1) {-->
          <!--if (this.mm.riskReportMainVo.underwriteFlag.indexOf('9') === -1) {-->
            <!--this.mm.riskReportMainVo.underwriteFlag.push('9')-->
          <!--}-->
        <!--} else {-->
          <!--let index = this.mm.riskReportMainVo.underwriteFlag.indexOf('9')-->
          <!--if (index !== -1) {-->
            <!--this.mm.riskReportMainVo.underwriteFlag.splice(index, 1)-->
          <!--}-->
        <!--}-->
        <!--if (this.mm.riskReportMainVo.underwriteFlag.indexOf('1') !== -1) {-->
          <!--if (this.mm.riskReportMainVo.underwriteFlag.indexOf('3') === -1) {-->
            <!--this.mm.riskReportMainVo.underwriteFlag.push('3')-->
          <!--}-->
        <!--} else {-->
          <!--let index = this.mm.riskReportMainVo.underwriteFlag.indexOf('3')-->
          <!--if (index !== -1) {-->
            <!--this.mm.riskReportMainVo.underwriteFlag.splice(index, 1)-->
          <!--}-->
        <!--}-->
        <!--// let instance = this.$piccLoading()-->
<!--//      发送请求到后台-->
        <!--expertRiskReportMain(this._data.mm).then((response) => {-->
          <!--// instance.close()-->
          <!--if (response !== null) {-->
            <!--if (response && response.data === null) {-->
              <!--this.$message({-->
                <!--message: '没有可导出的数据,请更换查询条件',-->
                <!--type: 'warning'-->
              <!--})-->
              <!--return-->
            <!--}-->
            <!--const filePath = response-->
            <!--if (filePath == null) {-->
<!--//              this.$message({-->
<!--//                message: '没有可导出的数据  请更换查询条件',-->
<!--//                type: 'warning'-->
<!--//              })-->
            <!--} else {-->
              <!--// const url = '/' + filePath.substring(filePath.indexOf('downloadExcel'))-->
              <!--window.location.href = filePath.substring(0, filePath.indexOf('?'))-->
              <!--this.$message({-->
                <!--message: '导出风控报告清单成功',-->
                <!--type: 'success'-->
              <!--})-->
            <!--}-->
          <!--} else {-->
            <!--this.$message({-->
              <!--message: '没有可导出的数据,请更换查询条件',-->
              <!--type: 'error'-->
            <!--})-->
          <!--}-->
        <!--}, (response) => {-->
          <!--// this.$message({-->
          <!--//   message: '导出风控报告清单异常',-->
          <!--//   type: 'error'-->
          <!--// })-->
        <!--})-->
      <!--},-->
      <!--cancel() {-->
        <!--this.modal1 = false-->
      <!--},-->
      <!--lct(params) {-->
        <!--// this.$confirm('确定要查看流程吗？', '流程提示', {-->
        <!--//   confirmButtonText: '确定',-->
        <!--//   cancelButtonText: '取消',-->
        <!--//   customClass: 'picc-message-box',-->
        <!--//   roundButton: true, // 必填-->
        <!--//   center: true, // 必填-->
        <!--//   showClose: false, // 必填-->
        <!--//   dangerouslyUseHTMLString: true, // 必填-->
        <!--//   type: 'warning'-->
        <!--// }).then(() => {-->
        <!--this.modal1 = true-->
        <!--let executionId = params.row.executionId-->
        <!--let underwriteFlagCode = params.row.underwriteFlagCode-->
        <!--getUnderwriteProcess({executionId: executionId, underwriteFlag: underwriteFlagCode}).then((response) => {-->
          <!--this.lctList = response-->
        <!--})-->
        <!--// }).catch(() => {-->
        <!--// })-->

      <!--},-->
      <!--// 下载之前进行确认-->
      <!--makeWordBefore(params) {-->
        <!--// this.$confirm('确定要下载吗？', '下载提示', {-->
        <!--//   confirmButtonText: '确定',-->
        <!--//   cancelButtonText: '取消',-->
        <!--//   customClass: 'picc-message-box',-->
        <!--//   roundButton: true, // 必填-->
        <!--//   center: true, // 必填-->
        <!--//   showClose: false, // 必填-->
        <!--//   dangerouslyUseHTMLString: true, // 必填-->
        <!--//   type: 'warning'-->
        <!--// }).then(() => {-->
        <!--this.makeWord(params)-->
        <!--// }).catch(() => {-->
        <!--// })-->
      <!--},-->
      <!--makeWord(params) {-->
<!--//        this.riskInsInputData.underwriteFlag = '1'-->
        <!--if (params.row.underwriteFlag !== '通过' && params.row.underwriteFlag !== '自动审核通过') {-->
          <!--// this.$message.success('该风控报告未审核通过，不允许导出！')-->
          <!--this.$message({-->
            <!--message: '该风控报告未审核通过，不允许导出！',-->
            <!--type: 'error'-->
          <!--})-->
        <!--} else {-->
          <!--queryRiskReport({riskFileNo: params.row.riskFileNo}).then((response) => {-->
            <!--this.riskInsInputData = response-->
            <!--this.riskInsInputData.riskReportMainVo.explorecomCodeCName = this.riskInsInputData.riskReportMainVo.comCodeCName-->
            <!--if (this.riskInsInputData.riskReportMainVo.riskModel === '001' || this.riskInsInputData.riskReportMainVo.riskModel === '002') {-->
              <!--if (response.riskReportAssessList.length > 0) {-->
                <!--this.option.series[0].data[0].value.push(response.riskReportAssessList[0].fireDanger)-->
                <!--this.option.series[0].data[0].value.push(response.riskReportAssessList[0].waterDanger)-->
                <!--this.option.series[0].data[0].value.push(response.riskReportAssessList[0].windDanger)-->
                <!--this.option.series[0].data[0].value.push(response.riskReportAssessList[0].thunderDanger)-->
                <!--this.option.series[0].data[0].value.push(response.riskReportAssessList[0].snowDanger)-->
                <!--this.option.series[0].data[0].value.push(response.riskReportAssessList[0].theftDanger)-->
                <!--this.option.series[0].data[0].value.push(response.riskReportAssessList[0].earthquakeDanger)-->
                <!--this.option.series[0].data[0].value.push(response.riskReportAssessList[0].geologyDanger)-->
              <!--}-->
              <!--this.myChart.setOption(this.option)-->
            <!--}-->
            <!--setTimeout(() => {-->
              <!--this.riskInsInputData.picBase64Info = this.myChart.getDataURL()-->
              <!--//console.log(JSON.stringify(this.riskInsInputData))-->
              <!--makeWord(this.riskInsInputData).then((response) => {-->
                <!--if (response !== null) {-->
                  <!--const filePath = response.data-->
                  <!--// const url = '/' + filePath.substring(filePath.indexOf('downloadFile'))-->
                  <!--const url = filePath.substring(0, filePath.indexOf('?'))-->
                  <!--// this.$message.success('导出报告成功！')-->
                  <!--this.$message({-->
                    <!--message: '导出报告成功',-->
                    <!--type: 'success'-->
                  <!--})-->
                  <!--window.location.href = url-->
                <!--} else {-->
                  <!--this.$message({-->
                    <!--message: '导出报告失败',-->
                    <!--type: 'error'-->
                  <!--})-->
                  <!--// this.$message.success('导出报告失败！')-->
                <!--}-->
              <!--}, (response) => {-->
                <!--this.$message({-->
                  <!--message: '导出报告异常',-->
                  <!--type: 'warning'-->
                <!--})-->
                <!--// this.$message.success('导出报告异常！')-->
              <!--})-->
            <!--}, 100)-->
          <!--})-->
        <!--}-->
      <!--},-->
      <!--//确认下载文档操作-->
      <!--confirmDownloadFile(params) {-->
        <!--// this.$confirm('确定要下载吗？', '下载提示', {-->
        <!--//   confirmButtonText: '确定',-->
        <!--//   cancelButtonText: '取消',-->
        <!--//   customClass: 'picc-message-box',-->
        <!--//   roundButton: true, // 必填-->
        <!--//   center: true, // 必填-->
        <!--//   showClose: false, // 必填-->
        <!--//   dangerouslyUseHTMLString: true, // 必填-->
        <!--//   type: 'warning'-->
        <!--// }).then(() => {-->
        <!--let riskModel = params.row.riskModel-->
        <!--if (riskModel === '006' || riskModel === '007') {-->
          <!--this.currentRiskReportNo = params.row.riskFileNo-->
          <!--this.currentRiskReportUnderwriteflag = params.row.underwriteFlagCode-->
          <!--if (riskModel === '006') {-->
            <!--this.downloadFireDangerWordModel.riskModel = '火灾风险排查（专业版）'-->
          <!--} else if (riskModel === '007') {-->
            <!--this.downloadFireDangerWordModel.riskModel = '火灾风险排查（简化版）'-->
          <!--}-->
          <!--this.showDownloadModal = true-->
        <!--} else {-->
          <!--this.makeWord(params)-->
        <!--}-->
        <!--// }).catch(() => {-->
        <!--// })-->

      <!--},-->
      <!--//取消下载文档-->
      <!--cancelDownloadWord() {-->
        <!--this.showDownloadModal = false-->
        <!--this.downloadFireDangerWordModel.reportType = []-->
      <!--},-->
      <!--//火灾文档下载-->
      <!--downloadFireDangerWord() {-->
        <!--if (this.currentRiskReportUnderwriteflag.indexOf("4") !== -1 || this.currentRiskReportUnderwriteflag.indexOf("9") != -1 || this.currentRiskReportUnderwriteflag.indexOf("2") !== -1) {-->
          <!--// this.$message.success('该风控报告未审核通过，不允许导出！')-->
          <!--this.$message({-->
            <!--message: '该风控报告未审核通过，不允许导出！',-->
            <!--type: 'warning'-->
          <!--})-->
          <!--return-->
        <!--}-->
        <!--let types = this.downloadFireDangerWordModel.reportType-->
        <!--if (types.length === 0) {-->
          <!--// this.$message.info({content: '至少选择一个文档进行下载！'})-->
          <!--this.$message({-->
            <!--message: '至少选择一个文档进行下载！',-->
            <!--type: 'warning'-->
          <!--})-->
          <!--return-->
        <!--}-->
        <!--for (let flag of types) {-->
          <!--downloadFireReport({fireNo: this.currentRiskReportNo, flag: flag}, true)-->
            <!--.then(res => {-->
              <!--if (res) {-->
                <!--if (flag == 'pdf') {-->
                  <!--const blob = convertBase64ToBlob(res, 'application/pdf', 1024)-->
                  <!--const urlFromBlob = window.URL.createObjectURL(blob)-->
                  <!--const a = document.createElement('a')-->
                  <!--a.style.display = 'none'-->
                  <!--a.href = urlFromBlob-->
                  <!--a.download = `${this.currentRiskReportNo}.pdf`-->
                  <!--document.body.appendChild(a)-->
                  <!--a.click()-->
                  <!--window.URL.revokeObjectURL(urlFromBlob)-->
                  <!--document.body.removeChild(a)-->
                <!--} else {-->
                  <!--let path = res-->
                  <!--window.open(path, '_blank')-->
                  <!--this.$message({-->
                    <!--message: '导出报告成功！',-->
                    <!--type: 'success'-->
                  <!--})-->
                <!--}-->
              <!--} else {-->
                <!--this.$message({-->
                  <!--message: '导出报告失败！',-->
                  <!--type: 'error'-->
                <!--})-->
              <!--}-->
            <!--})-->
            <!--.catch(() => {-->
              <!--this.$message({-->
                <!--message: '导出报告失败！',-->
                <!--type: 'error'-->
              <!--})-->
            <!--})-->
        <!--}-->
        <!--this.cancelDownloadWord()-->
      <!--},-->
      <!--// 查询条件显示隐藏-->
      <!--changeselect() {-->
        <!--//this.selectShowFlag = !this.selectShowFlag-->
        <!--if (this.showicon === 'fa fa-angle-double-down fa-2x') {-->
          <!--this.showicon = 'fa fa-angle-double-up fa-2x'-->
        <!--} else {-->
          <!--this.showicon = 'fa fa-angle-double-down fa-2x'-->
        <!--}-->
      <!--},-->
      <!--rowBrowse(data, index) {-->
        <!--this.$store.commit('SET_DATAS', this._data)-->
        <!--if (data.underwriteFlag === '不通过') {-->
          <!--if (data.riskModel === '001') {-->
<!--//          this.$message.success('显示专职页面')-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_input',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: true-->
              <!--}-->
            <!--})-->
          <!--} else if (data.riskModel === '002') {-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_pluralism',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: true-->
              <!--}-->
            <!--})-->
          <!--} else if (data.riskModel === '004') {-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_machine',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: true-->
              <!--}-->
            <!--})-->
          <!--} else if (data.riskModel === '005') {-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_clobusiness',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: true-->
              <!--}-->
            <!--})-->
          <!--} else if (data.riskModel === '006') {-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_firePro',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: true-->
              <!--}-->
            <!--})-->
          <!--} else if (data.riskModel === '007') {-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_firePlu',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: true-->
              <!--}-->
            <!--})-->
          <!--}-->
        <!--} else {-->
          <!--if (data.riskModel === '001') {-->
            <!--//          this.$message.success('显示专职页面')-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_input',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: false-->
              <!--}-->
            <!--})-->
          <!--} else if (data.riskModel === '002') {-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_pluralism',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: false-->
              <!--}-->
            <!--})-->
          <!--} else if (data.riskModel === '004') {-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_machine',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: false-->
              <!--}-->
            <!--})-->
          <!--} else if (data.riskModel === '005') {-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_clobusiness',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: false-->
              <!--}-->
            <!--})-->
          <!--} else if (data.riskModel === '006') {-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_firePro',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: false-->
              <!--}-->
            <!--})-->
          <!--} else if (data.riskModel === '007') {-->
            <!--this.$router.push({-->
              <!--path: '/riskins/riskins_firePlu',-->
              <!--query: {-->
                <!--riskFileNo: data.riskFileNo,-->
                <!--editModel: 'browse',-->
                <!--riskModel: data.riskModel,-->
                <!--returnButtonState: true,-->
                <!--reviewedButtonState: false,-->
                <!--backButtonState: false-->
              <!--}-->
            <!--})-->
          <!--}-->
        <!--}-->
      <!--},-->
      <!--queryClassCode() {-->
        <!--classCodeQuery().then((response) => {-->
          <!--this.classCodeList = response.dataList-->
        <!--}, (response) => {-->
          <!--// error callback-->
        <!--})-->
      <!--},-->
      <!--queryRiskCode(classCode) {-->
        <!--// let instance = this.$piccLoading()-->
        <!--this.mm.riskReportMainVo.riskCode = ''-->
        <!--this.riskCodeList = []-->
        <!--riskCodeQuery({classCode: classCode}).then((response) => {-->
          <!--this.riskCodeList = response.dataList-->
          <!--// instance.close()-->
        <!--}, (response) => {-->
          <!--// error callback-->
        <!--})-->
      <!--},-->
      <!--search() {-->
        <!--this.multipleSelection = []-->
        <!--this.$refs['riskInsMainVo'].validate((valid) => {-->
          <!--if (valid) {-->
            <!--this.mm.pageNo = 1-->
            <!--// this.loading = true-->
            <!--this.showFlag = true-->
            <!--let pageSize = Cookies.get('pageSize')-->
            <!--if (pageSize !== undefined && pageSize !== '') {-->
              <!--this.mm.pageSize = parseInt(pageSize)-->
            <!--}-->
            <!--this.queryRiskInsMain()-->
            <!--//this.selectShowFlag = false-->
            <!--this.showicon = 'fa fa-angle-double-down fa-2x'-->
          <!--} else {-->
            <!--this.$message({-->
              <!--message: '查询条件错误!!!请修改',-->
              <!--type: 'error'-->
            <!--})-->
            <!--// this.$message.error('查询条件错误!!!请修改')-->
          <!--}-->
        <!--})-->
      <!--},-->
      <!--changepage(index) {-->
        <!--this.mm.pageNo = index-->
        <!--// this.loading = true-->
        <!--this.queryRiskInsMain()-->
      <!--},-->
      <!--changepagesize(value) {-->
        <!--this.mm.pageNo = 1-->
        <!--this.mm.pageSize = value-->
        <!--// this.loading = true-->
        <!--Cookies.set('pageSize', value)-->
        <!--this.queryRiskInsMain()-->
      <!--},-->
      <!--queryRiskInsMain() {-->
<!--//        var reg = /^[0-9]+.?[0-9]*$/-->
<!--//        if (this.mm.riskReportMainVo.insuredName.match(reg) !== null) {-->
<!--//          this.mm.riskReportMainVo.insuredCode = this.mm.riskReportMainVo.insuredName-->
<!--//          this.mm.riskReportMainVo.insuredName = ''-->
<!--//        }-->
        <!--if (this.mm.riskReportMainVo.underwriteFlag.indexOf('4') !== -1) {-->
          <!--if (this.mm.riskReportMainVo.underwriteFlag.indexOf('9') === -1) {-->
            <!--this.mm.riskReportMainVo.underwriteFlag.push('9')-->
          <!--}-->
        <!--} else {-->
          <!--let index = this.mm.riskReportMainVo.underwriteFlag.indexOf('9')-->
          <!--if (index !== -1) {-->
            <!--this.mm.riskReportMainVo.underwriteFlag.splice(index, 1)-->
          <!--}-->
        <!--}-->
        <!--if (this.mm.riskReportMainVo.underwriteFlag.indexOf('1') !== -1) {-->
          <!--if (this.mm.riskReportMainVo.underwriteFlag.indexOf('3') === -1) {-->
            <!--this.mm.riskReportMainVo.underwriteFlag.push('3')-->
          <!--}-->
        <!--} else {-->
          <!--let index = this.mm.riskReportMainVo.underwriteFlag.indexOf('3')-->
          <!--if (index !== -1) {-->
            <!--this.mm.riskReportMainVo.underwriteFlag.splice(index, 1)-->
          <!--}-->
        <!--}-->
        <!--queryMain(this._data.mm).then((response) => {-->
         <!--if (response!==null){-->
            <!--this.exportFlag = true-->
          <!--}-->
          <!--this.riskReportMainList = response.dataList-->
          <!--this.mm.totalCount = response.totalCount-->
          <!--this.pageCount = response.totalPage-->
          <!--this.showFlag = true-->
          <!--// this.loading = false-->
        <!--}, (response) => {-->
          <!--// error callback-->
        <!--})-->
      <!--},-->
      <!--reset(name) {-->
        <!--this.exportFlag = false-->
        <!--this.mm.pageNo = 1-->
        <!--this.mm.totalCount = 0-->
        <!--this.showFlag = false-->
        <!--this.mm.riskReportMainVo.classCode = ''-->
        <!--this.mm.riskReportMainVo.riskCode = ''-->
        <!--this.mm.riskReportMainVo.insuredName = ''-->
        <!--this.mm.riskReportMainVo.insuredCode = ''-->
        <!--this.mm.riskReportMainVo.riskFileNo = ''-->
        <!--this.mm.riskReportMainVo.explorer = ''-->
        <!--this.mm.riskReportMainVo.explorerCode = ''-->
        <!--this.mm.riskReportMainVo.explorerCName = ''-->
        <!--this.mm.riskReportMainVo.comCode = ''-->
        <!--this.mm.riskReportMainVo.comCodeCName = ''-->
<!--//      this.mm.riskReportMainVo.exploreDateBegin = ''-->
<!--//      this.mm.riskReportMainVo.exploreDateEnd = ''-->
        <!--this.mm.riskReportMainVo.exploreType = ''-->
        <!--this.mm.riskReportMainVo.riskModel = ''-->
        <!--this.mm.riskReportMainVo.addressDetail = ''-->
        <!--this.riskReportMainList = []-->
        <!--this.riskCodeList = []-->
        <!--this.mm.riskReportMainVo.underwriteFlag = []-->
        <!--this.multipleSelection = []-->
        <!--this.$nextTick(function () {-->
          <!--this.mm.riskReportMainVo.exploreDateBegin = ''-->
          <!--this.mm.riskReportMainVo.exploreDateEnd = ''-->
        <!--})-->
        <!--// 循环清空表单时间域字段值-->
        <!--this.$refs['riskInsMainVo'].fields.forEach(function (e) {-->
          <!--if (e.prop === 'exploreDateBegin') {-->
            <!--e.resetField()-->
          <!--}-->
          <!--if (e.prop === 'exploreDateEnd') {-->
            <!--e.resetField()-->
          <!--}-->
        <!--})-->
      <!--},-->
      <!--delete(params) {-->
        <!--queryRiskInsState({riskFileNo: params.riskFileNo}).then((response) => {-->
          <!--if ('T,0,2'.indexOf(response.message) !== -1) {-->
            <!--this.riskCodeList = response.dataList-->
            <!--this.mm.riskReportMainVo.riskFileNoList = [params.riskFileNo]-->
            <!--deleteData(this._data.mm.riskReportMainVo).then((response) => {-->
              <!--if (response.message === 'success') {-->
                <!--this.$message.success('删除成功!')-->
              <!--}-->
              <!--this.mm.riskReportMainVo.riskFileNoList = []-->
            <!--}, (response) => {-->
              <!--// error callback-->
            <!--})-->
          <!--} else {-->
            <!--this.$message.error(params.riskFileNo + '该风控报告暂不支持删除!')-->
          <!--}-->
        <!--}, (response) => {-->
          <!--// error callback-->
        <!--})-->
      <!--},-->
      <!--deleteGroup() {-->
        <!--// let instance = this.$piccLoading()-->
        <!--deleteData(this._data.mm.riskReportMainVo).then((response) => {-->
          <!--if (response.message === 'success') {-->
            <!--// instance.close()-->
            <!--this.$message.success('删除成功!')-->
            <!--this.multipleSelection = []-->
            <!--this.search()-->
          <!--}-->
          <!--this.mm.riskReportMainVo.riskFileNoList = []-->
        <!--}, (response) => {-->
          <!--// error callback-->
        <!--})-->
      <!--},-->
      <!--changeOrderType(column) {-->
        <!--console.log(column)-->
        <!--// this.loading = true-->
        <!--this.mm.riskReportMainVo.orderColumn = column.prop-->
        <!--if (column.order === 'ascending') {-->
          <!--this.mm.riskReportMainVo.orderType = false-->
          <!--this.queryRiskInsMain()-->
        <!--}-->
        <!--if (column.order === 'descending') {-->
          <!--this.mm.riskReportMainVo.orderType = true-->
          <!--this.queryRiskInsMain()-->
        <!--}-->
        <!--if (column.order === null) {-->
          <!--this.mm.riskReportMainVo.orderColumn = 'riskFileNo'-->
          <!--this.queryRiskInsMain()-->
        <!--}-->
      <!--},-->
      <!--CurrencyDialogClickOnRow(data) { // 接收数据-->
        <!--if (this.DialogConfig.codeType === 'comCode') {-->
          <!--this.mm.riskReportMainVo.comCode = data.col2-->
          <!--this.mm.riskReportMainVo.comCodeCName = data.col3-->
        <!--} else if (this.DialogConfig.codeType === 'UserCode') {-->
          <!--this.mm.riskReportMainVo.explorer = data.col2-->
          <!--this.mm.riskReportMainVo.explorerCName = data.col3-->
          <!--this.mm.riskReportMainVo.explorerCode = data.col4-->
        <!--} else if (this.DialogConfig.codeType === 'insured') {-->
          <!--this.mm.riskReportMainVo.insuredCode = data.col1-->
          <!--this.mm.riskReportMainVo.insuredName = data.col2-->
        <!--}-->
      <!--},-->
      <!--syncDialogShowFlag(val) { // 同步更新父子组件状态-->
        <!--this.DialogConfig.dialogFlag = val-->
      <!--},-->
      <!--codeCodeDialog(val) {-->
        <!--if (val === 'explorer') {-->
          <!--if (this.mm.riskReportMainVo.explorerCName === '') {-->
            <!--this.$message.error('请录入查勘人代码或名称！')-->
            <!--return-->
          <!--}-->
        <!--}-->
        <!--if (val === 'insured') {-->
          <!--if (this.mm.riskReportMainVo.insuredName === '') {-->
            <!--this.$message.error('请录入被保险人代码或名称！')-->
            <!--return-->
          <!--}-->
        <!--}-->
        <!--switch (val) {-->
          <!--case 'comCode':-->
            <!--// 是否取消滚动条-->
            <!--this.DialogConfig.fixedHeader = true-->
            <!--// 展示modal标志-->
            <!--this.DialogConfig.dialogFlag = true-->
            <!--// 业务类型-->
            <!--this.DialogConfig.codeType = 'comCode'-->
            <!--// 关键字描述-->
            <!--this.DialogConfig.keyWordDesc = '查询机构'-->
            <!--// 查询关键字-->
            <!--this.DialogConfig.keyWord = this.mm.riskReportMainVo.comCodeCName-->
            <!--// 接口地址-->
            <!--this.DialogConfig.requestURL = '/riskins/queryComCode'-->
            <!--// 自定义table表头-->
            <!--this.DialogConfig.columnTitles = [-->
              <!--{title: '序号', key: 'index', type: 'index', width: 60, align: 'center'},-->
              <!--{title: '机构代码', key: 'col2', align: 'center'},-->
              <!--{title: '机构简称', key: 'col3', align: 'center'},-->
              <!--{title: '机构名称', key: 'col4', align: 'center'}-->
            <!--]-->
            <!--break-->
          <!--case 'explorer':-->
            <!--// 是否取消滚动条-->
            <!--this.DialogConfig.fixedHeader = true-->
            <!--// 展示modal标志-->
            <!--this.DialogConfig.dialogFlag = true-->
            <!--// 业务类型-->
            <!--this.DialogConfig.codeType = 'UserCode'-->
            <!--// 关键字描述-->
            <!--this.DialogConfig.keyWordDesc = '查勘人'-->
            <!--// 查询关键字-->
            <!--this.DialogConfig.keyWord = this.mm.riskReportMainVo.explorerCName-->
            <!--// 接口地址-->
            <!--this.DialogConfig.requestURL = '/yhzx/getSalesMsg'-->
            <!--// 自定义table表头-->
            <!--this.DialogConfig.columnTitles = [-->
              <!--{title: '序号', key: 'index', type: 'index', width: 60, align: 'center'},-->
              <!--{title: '查勘人代码', key: 'col2', align: 'center'},-->
              <!--{title: '查勘人名称', key: 'col3', align: 'center'},-->
              <!--{title: '集团工号', key: 'col4', align: 'center'}-->
            <!--]-->
            <!--break-->
          <!--case 'insured':-->
            <!--// 是否取消滚动条-->
            <!--this.DialogConfig.fixedHeader = true-->
            <!--// 展示modal标志-->
            <!--this.DialogConfig.dialogFlag = true-->
            <!--// 业务类型-->
            <!--this.DialogConfig.codeType = 'insured'-->
            <!--// 关键字描述-->
            <!--this.DialogConfig.keyWordDesc = '被保险人'-->
            <!--// 查询关键字-->
            <!--this.DialogConfig.keyWord = this.mm.riskReportMainVo.insuredName-->
            <!--// 接口地址-->
            <!--// this.DialogConfig.requestURL = '/common/codeselect/listCodeQuery'-->
            <!--this.DialogConfig.requestURL = '/intf/customer/customerQuery'-->
            <!--// 自定义table表头-->
            <!--this.DialogConfig.columnTitles = [-->
              <!--{title: '序号', key: 'index', type: 'index', width: 60, align: 'center'},-->
              <!--{title: '被保险人代码', key: 'col1', align: 'center'},-->
              <!--{title: '被保险人名称', key: 'col2', align: 'center'},-->
            <!--]-->
            <!--break-->
          <!--default:-->
            <!--this.DialogConfig.dialogFlag = false-->
        <!--}-->
      <!--},-->
      <!--queryData(val) {-->
        <!--var _self = this-->
        <!--var fieldValue = ''-->
        <!--var codeType = ''-->
        <!--let userInfo = this.$store.getters.userInfo-->
<!--//        var displayName = ''-->
        <!--// 依据入参val区分双击域字段，组织关键字-->
        <!--if (val === 'comCode') {-->
          <!--fieldValue = _self.mm.riskReportMainVo.comCodeCName-->
          <!--if (fieldValue === '' && fieldValue.trim() === '') {-->
            <!--_self.mm.riskReportMainVo.comCode = ''-->
            <!--return-->
          <!--}-->
          <!--codeType = 'CodeType_ComCode'-->
        <!--} else if (val === 'explorer') {-->
          <!--fieldValue = _self.mm.riskReportMainVo.explorerCName-->
          <!--if (fieldValue === '' && fieldValue.trim() === '') {-->
            <!--_self.mm.riskReportMainVo.explorer = ''-->
            <!--return-->
          <!--}-->
          <!--codeType = 'UserCode' // UserCode-->
        <!--} else if (val === 'insured') {-->
          <!--fieldValue = _self.mm.riskReportMainVo.insuredName-->
          <!--if (fieldValue === '' && fieldValue.trim() === '') {-->
            <!--_self.mm.riskReportMainVo.insuredCode = ''-->
            <!--return-->
          <!--}-->
          <!--codeType = 'insuredCode'-->
        <!--}-->
        <!--if (codeType === 'UserCode') {-->
          <!--getSalesMsg({-->
            <!--userCode: userInfo.userCode,-->
            <!--comCode: userInfo.comCode,-->
            <!--riskCode: userInfo.riskCode,-->
            <!--codeType: codeType,-->
            <!--pageNo: 1,-->
            <!--pageSize: 10,-->
            <!--keyWord: fieldValue-->
          <!--}, true).then((response) => {-->
            <!--console.log(response)-->
            <!--try {-->
              <!--if (response !== null && response.result.length === 1) {-->
                <!--_self.mm.riskReportMainVo.explorerCName = response.result[0][1]-->
                <!--_self.mm.riskReportMainVo.explorer = response.result[0][0]-->
                <!--_self.mm.riskReportMainVo.explorerCode = response.result[0][3]-->
              <!--} else if (response.data !== null && response.result.length > 1) {-->
                <!--this.codeCodeDialog('explorer')-->
              <!--} else {-->
                <!--this.$message.error('此查勘人不存在')-->
              <!--}-->
            <!--} catch (exception) {-->
              <!--// history.go(0)-->
            <!--}-->
          <!--}, (response) => {-->
            <!--// error callback-->
          <!--})-->
        <!--} else if (codeType === 'CodeType_ComCode') {-->
          <!--queryComCode({-->
            <!--userCode: userInfo.userCode,-->
            <!--pageNo: 1,-->
            <!--pageSize: 5,-->
            <!--keyWord: fieldValue-->
          <!--}, true).then((response) => {-->
            <!--try {-->
              <!--console.log(response)-->
              <!--if (response.data != null && response.data.length === 1) {-->
                <!--_self.mm.riskReportMainVo.comCodeCName = response.data[0][1]-->
                <!--_self.mm.riskReportMainVo.comCode = response.data[0][0]-->
              <!--} else if (response.data != null && response.data.length > 1) {-->
                <!--this.codeCodeDialog('comCode')-->
              <!--} else {-->
                <!--_self.mm.riskReportMainVo.comCode = ''-->
                <!--_self.mm.riskReportMainVo.comCodeCName = ''-->
                <!--this.$message.error('此查勘机构不存在')-->
                <!--return-->
              <!--}-->
            <!--} catch (exception) {-->
              <!--history.go(0)-->
            <!--}-->
          <!--}, (response) => {-->
            <!--// error callback-->
          <!--})-->
        <!--} else if (codeType === 'insuredCode') {-->
          <!--let queryPar = {-->
            <!--customerCode: '',-->
            <!--customerCName: fieldValue,-->
            <!--customerType: '',-->
            <!--pageNo: 1,-->
            <!--pageSize: 5-->
          <!--}-->
          <!--customerQuery(queryPar).then((response) => {-->
            <!--if (response && response.customerVoList !== null) {-->
              <!--if (response.customerVoList.length === 1) {-->
                <!--_self.mm.riskReportMainVo.insuredCode = response.customerVoList[0].customerCode-->
                <!--_self.mm.riskReportMainVo.insuredName = response.customerVoList[0].customerCName-->
              <!--} else if (response.customerVoList.length > 1) {-->
                <!--this.codeCodeDialog('insured')-->
              <!--}-->
            <!--} else {-->
              <!--this.mm.riskReportMainVo.insuredName = ''-->
              <!--this.$message({-->
                <!--message: "该被保险人不存在！",-->
                <!--type: 'error'-->
              <!--})-->
            <!--}-->
          <!--}).catch(() => {-->
            <!--// this.loading = false-->
          <!--})-->
        <!--}-->
      <!--},-->
      <!--// 删除风控报告信息-->
      <!--deleteRiskReportMain(params) {-->
        <!--// this.$confirm('您确认删除这条内容吗？', '删除提示', {-->
        <!--//   confirmButtonText: '确定',-->
        <!--//   cancelButtonText: '取消',-->
        <!--//   customClass: 'picc-message-box',-->
        <!--//   roundButton: true, // 必填-->
        <!--//   center: true, // 必填-->
        <!--//   showClose: false, // 必填-->
        <!--//   dangerouslyUseHTMLString: true, // 必填-->
        <!--//   type: 'warning'-->
        <!--// }).then(() => {-->
        <!--queryRiskInsState({riskFileNo: params.row.riskFileNo}).then((response) => {-->
          <!--if ('T,0,2'.indexOf(response.message) !== -1) {-->
            <!--this.riskCodeList = response.dataList-->
            <!--this.mm.riskReportMainVo.riskFileNoList = [params.row.riskFileNo]-->
            <!--deleteData(this._data.mm.riskReportMainVo).then((response) => {-->
              <!--if (response.message === 'success') {-->
                <!--this.$message.success('删除成功!')-->
                <!--this.search()-->
              <!--}-->
              <!--this.mm.riskReportMainVo.riskFileNoList = []-->
            <!--}, (response) => {-->
              <!--// error callback-->
            <!--})-->
          <!--} else {-->
            <!--this.$message.error('该风控报告暂不支持删除!')-->
          <!--}-->
        <!--}, (response) => {-->
          <!--// error callback-->
        <!--})-->
        <!--// }).catch(() => {-->
        <!--//   // this.loading = false-->
        <!--//   // this.riskInsInputData.riskReportMainVo.insuredName = ''-->
        <!--//   // this.riskInsInputData.riskReportMainVo.insuredCode = ''-->
        <!--// })-->
      <!--},-->
      <!--updateByRiskFileNo(params) {-->
        <!--// this.$confirm('确定要修改吗？', '修改提示', {-->
        <!--//   confirmButtonText: '确定',-->
        <!--//   cancelButtonText: '取消',-->
        <!--//   customClass: 'picc-message-box',-->
        <!--//   roundButton: true, // 必填-->
        <!--//   center: true, // 必填-->
        <!--//   showClose: false, // 必填-->
        <!--//   dangerouslyUseHTMLString: true, // 必填-->
        <!--//   type: 'warning'-->
        <!--// }).then(() => {-->
        <!--if (params.row.underwriteFlag === '通过') {-->
          <!--this.$message.error('已通过的风控报告无法修改！')-->
          <!--return false-->
        <!--}-->
        <!--this.$store.commit('SET_DATAS', this._data)-->
<!--//        this.$store.commit('SET_TOTALCOUNT', this.totalCount)-->
<!--//        this.$store.commit('SET_mm.pageNo', this.pageCount)-->
        <!--if (params.row.riskModel === '001') {-->
<!--//          this.$message.success('riskins_input')-->
          <!--this.$router.push({-->
            <!--path: '/riskins/riskins_input',-->
            <!--query: {-->
              <!--riskFileNo: params.row.riskFileNo,-->
              <!--editModel: 'edit',-->
              <!--riskModel: params.row.riskModel,-->
              <!--returnButtonState: true-->
            <!--}-->
          <!--})-->
        <!--} else if (params.row.riskModel === '002') {-->
          <!--this.$router.push({-->
            <!--path: '/riskins/riskins_pluralism',-->
            <!--query: {-->
              <!--riskFileNo: params.row.riskFileNo,-->
              <!--editModel: 'edit',-->
              <!--riskModel: params.row.riskModel,-->
              <!--returnButtonState: true-->
            <!--}-->
          <!--})-->
        <!--} else if (params.row.riskModel === '004') {-->
          <!--this.$router.push({-->
            <!--path: '/riskins/riskins_machine',-->
            <!--query: {-->
              <!--riskFileNo: params.row.riskFileNo,-->
              <!--editModel: 'edit',-->
              <!--riskModel: params.row.riskModel,-->
              <!--returnButtonState: true-->
            <!--}-->
          <!--})-->
        <!--} else if (params.row.riskModel === '005') {-->
          <!--this.$router.push({-->
            <!--path: '/riskins/riskins_clobusiness',-->
            <!--query: {-->
              <!--riskFileNo: params.row.riskFileNo,-->
              <!--editModel: 'edit',-->
              <!--riskModel: params.row.riskModel,-->
              <!--returnButtonState: true-->
            <!--}-->
          <!--})-->
        <!--} else if (params.row.riskModel === '006') {-->
          <!--this.$router.push({-->
            <!--path: '/riskins/riskins_firePro',-->
            <!--query: {-->
              <!--riskFileNo: params.row.riskFileNo,-->
              <!--editModel: 'edit',-->
              <!--riskModel: params.row.riskModel,-->
              <!--returnButtonState: true-->
            <!--}-->
          <!--})-->
        <!--} else if (params.row.riskModel === '007') {-->
          <!--this.$router.push({-->
            <!--path: '/riskins/riskins_firePlu',-->
            <!--query: {-->
              <!--riskFileNo: params.row.riskFileNo,-->
              <!--editModel: 'edit',-->
              <!--riskModel: params.row.riskModel,-->
              <!--returnButtonState: true-->
            <!--}-->
          <!--})-->
        <!--}-->
        <!--// }).catch(() => {-->
        <!--// })-->

      <!--},-->
      <!--submitUnderwrite(params) {-->
        <!--// this.$confirm('确定要提交吗？', '提交提示', {-->
        <!--//   confirmButtonText: '确定',-->
        <!--//   cancelButtonText: '取消',-->
        <!--//   customClass: 'picc-message-box',-->
        <!--//   roundButton: true, // 必填-->
        <!--//   center: true, // 必填-->
        <!--//   showClose: false, // 必填-->
        <!--//   dangerouslyUseHTMLString: true, // 必填-->
        <!--//   type: 'warning'-->
        <!--// }).then(() => {-->
        <!--submitUnderwrite({riskFileNo: params.row.riskFileNo}, true).then((response) => {-->
          <!--console.log(response)-->
          <!--try {-->
            <!--if (response.data === null && response.statusText-->
              <!--&& response.statusText !== null) {-->
              <!--this.$message.error(response.statusText)-->
            <!--} else if (response !== null) {-->
              <!--this.$message.success(params.row.riskFileNo + '提交审核成功！')-->
              <!--this.search()-->
            <!--} else {-->
              <!--this.$message.error(params.row.riskFileNo + '提交审核失败！')-->
            <!--}-->
          <!--} catch (exception) {-->
            <!--history.go(0)-->
          <!--}-->
        <!--}, (response) => {-->
          <!--this.$message.error(params.row.riskFileNo + '提交审核失败！')-->
        <!--})-->
        <!--// }).catch(() => {-->
        <!--// })-->

      <!--}-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style lang="scss" scoped>-->
  <!--.form1 {-->
    <!--margin-bottom: 32px;-->
  <!--}-->

  <!--.title {-->
    <!--margin: -16px -15px 16px;-->
    <!--padding: 0 12px;-->
    <!--font-size: 14px;-->
    <!--line-height: 36px;-->
    <!--background-color: #fafdff;-->
  <!--}-->

  <!--.result-wrapper {-->
    <!--.btnbox {-->
      <!--margin: 16px 0;-->
    <!--}-->

    <!--th .ivu-table-cell {-->
      <!--display: block;-->
    <!--}-->
  <!--}-->
<!--</style>-->
