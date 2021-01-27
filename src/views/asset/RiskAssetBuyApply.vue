<template>
  <div>
    <box-head title="采购申请"></box-head>
    <div style="padding: 10px;">
      <el-card>
        <div v-show="selectShowFlag" style="padding: 15px; text-align:center">
          <el-form
            ref="riskFactoryCheckApplyVo"
            class="form1"
            :model="riskFactoryCheckApplyVo"
            :rules="ruleValidate"
            label-width="160px"
            style="text-align: center">
            <el-row>
              <!--<el-col :span="8">-->
                <!--<el-form-item label="投保企业名称" prop="companyName">-->
                  <!--<el-input v-model="riskFactoryCheckApplyVo.companyName" placeholder="请输入..." class="picc-icon-btn-input" @blur="queryData('registrationNumber')" :disabled="regDis">-->
                    <!--<i slot="suffix" @click="codeCodeDialog('registrationNumber')" class="el-input__icon el-icon-search" v-if="!regDis"></i>-->
                  <!--</el-input>-->
                <!--</el-form-item>-->
              <!--</el-col>-->
              <el-col :span="8">
                <el-form-item label="归属部门" prop="companyAddress">
                  <el-input v-model="riskFactoryCheckApplyVo.companyAddress" type="text"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="归属团队" prop="companyAddress">
                  <el-input v-model="riskFactoryCheckApplyVo.companyAddress" type="text"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="归属项目" prop="companyAddress">
                  <el-input v-model="riskFactoryCheckApplyVo.companyAddress" type="text"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="员工工号" prop="companyAddress">
                  <el-input v-model="riskFactoryCheckApplyVo.companyAddress" type="text"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="资产总金额" prop="linkName">
                  <el-input v-model="riskFactoryCheckApplyVo.linkName" type="text" />
                </el-form-item>
              </el-col>
            </el-row>
            <div >
              <div>
                <el-form ref="riskReportAddressList" :model="riskInsInputData.riskReportAddressList[0]" label-width="120px" :rules="ruleValidate3">
                  <el-col :span="24">
                    <div class="title">
                      <i class="el-icon-location-outline"></i>
                      标的地址
                    </div>
                  </el-col>
                  <el-col v-if="itemAddressFlag" :span="24">
                    <span style="color:#FF3806;">请添加标的地址表格内容！</span>
                  </el-col>
                  <el-col :span="24">
                    <table class="mytable" border="0" cellspacing="0" cellpadding="0">
                      <thead>
                      <tr>
                        <th style="width: 5%">序号</th>
                        <th style="width: 85%">标的地址</th>
                        <th style="width: 10%">操作</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr v-for="(riskReportAddress,index) in riskInsInputData.riskReportAddressList" :key="index">
                        <td style="width: 10%"><el-input type="text" class="text-center" :value="index+1" disabled></el-input></td>
                        <td style="width: 80%"><el-input v-model="riskReportAddress.itemAddress" type="text" disabled></el-input></td>
                        <td style="width:10%">
                          <el-button type="text"  style="color: #2d8cf0" size="small" @click="riskInsDelete(index)">删除</el-button><!--class="fa fa-remove text-center"-->
                        </td><!--style="width: 10%;color:#D8504B;"-->
                      </tr>
                      </tbody>
                      <tfoot>
                      <tr>
                        <td style="width:10%"></td>
                        <td style="width:80%"></td>
                        <td style="width:10%" class="text-center"><!--;color:#D8504B;-->
                          <el-button type="text" :disabled="browseFlag" style="color: #2d8cf0" size="small" @click="riskInsAddress()">增加</el-button>
                          <el-form ref="itemAddressVo" :rules="ruleValidate15" :model="itemAddressVo" label-width="120px">
                            <el-dialog :visible.sync="modalFlag" icon="el-icon-location-outline" title="标的地址" width="800" :close-on-click-modal="false" @close="modalCancel('itemAddressVo')">
                              <div style="padding: 10px;">
                                <el-form-item label="标的地址" prop="itemAddress" v-picc-input-error>
                                  <el-input v-model="itemAddressVo.itemAddress" type="text" class="el-input-style"></el-input>
                                </el-form-item>
                              </div>
                              <div slot="footer">
                                <el-button round type="primary" icon="el-icon-edit-outline" @click="addAdress">添加</el-button>
                              </div>
                            </el-dialog>
                          </el-form>
                        </td>
                      </tr>
                      </tfoot>
                    </table>
                  </el-col>
                </el-form>
              </div>
              <el-button type="primary" :disabled="!isShowApplyButton" @click="launchRiskCheckApply" round>发起排查申请</el-button>
            </div>
          </el-form>
        </div>
      </el-card>
      <!--<CurrencyDialog :dialog-config="DialogConfig" @sync-dialog-show-flag="syncDialogShowFlag"-->
                      <!--@click-on-row="CurrencyDialogClickOnRow">-->
      <!--</CurrencyDialog>-->
      <el-dialog custom-class="picc-dialog-payment" class="mapcompontent map-width" :visible.sync="mapFlag" width="100%" height="100%" :close-on-click-modal="false" >
        <br/>
        <div>
          <!--<MapCompontent v-if="mapFlag" :config="mapCompontent" @transfer="transfer"></MapCompontent>-->
        </div>
        <div slot="footer">
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
//  import CurrencyDialog from '@/views/Dialog.vue'
  import {launchRiskCheckApply,customerInfoQuery} from '@/api/risksafefactory'
//  import MapCompontent from '@/views/MapCompontent.vue'
import riskInsInputData from '../riskdata/riskInsInputData'
  export default {
    name: "RiskTroubleshootingApply",
    components: {
//      CurrencyDialog,
//      MapCompontent
    },
    data() {
      // 联系方式校验
      const validateLinkNumber = (rule, value, callback) => {
        // 验证带区号的电话(^[0][1-9]{2,3}-[0-9]{5,10}$)
        //验证不带区号的电话(^[1-9]{1}[0-9]{5,8}$)目前采用
        var reg = /(^[1][3,4,5,6,7,8,9][0-9]{9}$)|(^00852-[2,3,6,8,9][0-9]{7}$)|(^00853-6[0-9]{7}$)|(^00853-28[0-9]{6}$)|(^00852[2,3,6,8,9][0-9]{7}$)|(^008536[0-9]{7}$)|(^0085328[0-9]{6}$)|(^[1-9]{1}[0-9]{5,8}$)/
        if (reg.test(value.trim())) {
          this.riskFactoryCheckApplyVo.linkNumber = value
          callback()
        } else {
          if (value.trim() === '') {
            callback('联系电话不能为空')
          } else {
            callback('联系电话错误，请重新输入')
          }
        }
      }
      // 期望服务日期检验
      const validateServiceDate = (rule, value, callback) => {
        var nowDate = new Date()
        let date = {
          year: nowDate.getFullYear(),
          month: nowDate.getMonth() + 1,
          date: nowDate.getDate(),
        }
        let systemDate = date.year + '-' + 0 + date.month + '-' + 0 + date.date
          if(value === ''){
            callback('期望服务日期不能为空，请重新输入')
          }
         else if(value.getTime()<new Date(systemDate).getTime()){
             callback('需晚于当前时间，请重新输入')
          }else{
              this.riskFactoryCheckApplyVo.expectedServiceDate = value
              callback()
          }
      }
      return {
          ruleValidate3: {},
          itemAddressFlag: false,
          riskInsInputData: riskInsInputData.a(),
          itemAddressVo: {
              itemAddress: ''
          },


        mapFlag: false,
        postCodeList: '',
        isShowApplyButton: false,
        selectShowFlag: true,
        regDis: false,

        riskFactoryCheckApplyVo: {
          companyName: '',
          registrationNumber:'',
          companyAddress: '',
          industryInfo:'',
          expectedServiceDate: '',
          linkName:'',
          linkNumber: '',
          withSpecialRequire: '',
          pointx2000: '',
          pointy2000: '',
          addressDetail: '',
          addressProvince: '',
          addressCity: '',
          addressCounty: '',
          addressProvinceCode: '',
          addressCityCode: '',
          addressCountyCode: '',
          addressCode: '',
        },
        mapCompontent: {
          ProCode: '',
          CountryCode: '',
          CityCode: '',
          addressProvince: '',
          addressCity: '',
          addressCountry: '',
          addressDetail: '',
          pointx2000: '',
          pointy2000: '',
          editModel: '',
          disabledFlag: false,
          editFlag: '1',
          exploreDate: '',
          // 显示名称
          showName: '',
          isCheckAddress: false
        },
        industryInfoList:[],
        DialogConfig: {
          dialogFlag: false
        },
        ruleValidate: {
          companyName: [
            {required: true, message: '投保企业名称不能为空', trigger: 'change'}
          ],
          companyAddress: [
            {required: true, message: '企业所在地不能为空', trigger: 'change'}
          ],
          industryInfo: [
            {required: true, message: '所属行业信息不能为空', trigger: 'change'}
          ],
          expectedServiceDate: [
            //{required: true, message: '期望服务日期不能为空', trigger: 'change'}
            {required: true,validator: validateServiceDate}
          ],
          linkName: [
            {required: true, message: '联系人不能为空', trigger: 'change'}
          ],
          withSpecialRequire: [
            {required: true, message: '有无特殊需求不能为空', trigger: 'change'}
          ],
          linkNumber: [
            {required: true,validator: validateLinkNumber}
          ],
        },
      }
    },
    created(){
      this.queryIndustryInfo()
      this.postCodeList = this.$store.getters.userInfo.postCodeList.toString()
      if (this.postCodeList.indexOf('grade_safe_task_create') !== -1) {
        this.isShowApplyButton = true
      }
      if (this.postCodeList.indexOf('grade_safe_danger_resole') !== -1
        &&this.postCodeList.indexOf('grade_safe_report_inputn')===-1
        &&this.postCodeList.indexOf('grade_safe_report_sec_underwrite')===-1) {
        this.regDis = true
//        getConidByUserCode().then(res=> {
//          let contIdTem = res.contid
//          console.log(contIdTem)
//          customerInfoQuery({
//            pageNo: 1,
//            pageSize: 5,
//            contId:contIdTem
//          }).then((res) => {
//            if (res && res.customerVoList != null && res.customerVoList.length >0) {
//              this.riskFactoryCheckApplyVo.companyName = res.customerVoList[0].name
//              this.riskFactoryCheckApplyVo.registrationNumber = res.customerVoList[0].contId
//            }
//          })
//        })
      }
    },
    methods: {
        riskInsDelete (index) {
            // 从 index 开始 删除 1 条
            this.riskInsInputData.riskReportAddressList.splice(index, 1)
        },


      //发起排查申请
      launchRiskCheckApply() {
        if('' === this.riskFactoryCheckApplyVo.registrationNumber){
           this.$message.warning('投保企业名称请先进行查询！')
           return
        }
        if ((this.riskFactoryCheckApplyVo.pointy2000 ===null && this.riskFactoryCheckApplyVo.pointx2000 ===null)||
          (this.riskFactoryCheckApplyVo.pointy2000 === '' && this.riskFactoryCheckApplyVo.pointx2000 === '')) {
          this.$message.warning('请使用地图选择企业所在地!')
          return
        }
        let validFlag = false
        this.$refs['riskFactoryCheckApplyVo'].validate((valid) => {
          if (!valid) {
            validFlag = true
          }
        })
        if (validFlag) {
          this.$message.warning('必录项存在未录入字段，请修改！')
          return false
        } else {
          launchRiskCheckApply(this.riskFactoryCheckApplyVo).then((res) => {
            console.log(res)
            if (res.status === 0) {
              this.$router.push({
                path: '/riskTroubleshooting_Apply_Success'
              })
            }
          }, (res) => {
              console.log(res)
            // error callback
          })
        }
      },
      //行业信息查询
      queryIndustryInfo() {

      },
      //公司名称-查询
      codeCodeDialog(val) {
        if (val === 'registrationNumber') {
          if (this.riskFactoryCheckApplyVo.companyName === '') {
            this.$message.warning('请录入投保企业名称！')
            return
          }
        }
      console.log(val)
        switch (val) {
          case 'registrationNumber':
            // 是否取消滚动条
            this.DialogConfig.fixedHeader = true
            // 展示modal标志
            this.DialogConfig.dialogFlag = true
            // 业务类型
            this.DialogConfig.codeType = 'registrationNumber'
            // 关键字描述
            this.DialogConfig.keyWordDesc = '投保企业'
            // 查询关键字
            this.DialogConfig.keyWord = this.riskFactoryCheckApplyVo.companyName
            // 接口地址
            this.DialogConfig.requestURL = '/intf/customer/customerInfoQuery'
            // 自定义table表头
            this.DialogConfig.columnTitles = [
              {title: '序号', key: 'index', type: 'index', width: 60, align: 'center'},
              {title: '投保企业注册号', key: 'col2', align: 'center'},
              {title: '投保企业名称', key: 'col3', align: 'center'},
            ]
            break
          default:
            this.DialogConfig.dialogFlag = false
        }
      },
      CurrencyDialogClickOnRow(data) { // 接收数据
        if (this.DialogConfig.codeType === 'registrationNumber') {
          this.riskFactoryCheckApplyVo.registrationNumber = data.col2
          this.riskFactoryCheckApplyVo.companyName = data.col3
          console.log(this.riskFactoryCheckApplyVo.registrationNumber)
        }
      },
      syncDialogShowFlag(val) { // 同步更新父子组件状态
        this.DialogConfig.dialogFlag = val
      },
      //不点搜索按钮，执行方法时触发
      queryData (val) {
        var _self = this
        var fieldValue = ''
        var codeType = ''
        // 依据入参val区分双击域字段，组织关键字
        if (val === 'registrationNumber') {
          fieldValue = _self.riskFactoryCheckApplyVo.companyName
          if (fieldValue === '' && fieldValue.trim() === '') {
            _self.riskFactoryCheckApplyVo.registrationNumber = ''
            return
          }
          codeType = 'CodeType_Registrationnumber'
        }
        if (codeType === 'CodeType_Registrationnumber') {
          console.log(codeType)
            customerInfoQuery({
              pageNo: 1,
              pageSize: 5,
              name: fieldValue
            }).then(res => {
            if (res != null && res.customerVoList.length === 1) {
              _self.riskFactoryCheckApplyVo.companyName = res.customerVoList[0].name
              _self.riskFactoryCheckApplyVo.registrationNumber = res.customerVoList[0].contId
            } else if (res != null && res.customerVoList.length > 1) {
              this.codeCodeDialog('registrationNumber')
            }
          }).catch(() => {
              _self.riskFactoryCheckApplyVo.registrationNumber = ''
              _self.riskFactoryCheckApplyVo.companyName = ''
              this.$message.warning('此投保企业名称不存在')
            })
        }
      },
      queryAddressDetail () {
        this.mapFlag = true
        this.mapCompontent.pointx2000 = this.riskFactoryCheckApplyVo.pointx2000
        this.mapCompontent.pointy2000 = this.riskFactoryCheckApplyVo.pointy2000
        this.mapCompontent.editModel = this.editModel
        this.mapCompontent.addressDetail = this.riskFactoryCheckApplyVo.addressDetail
        this.mapCompontent.addressCountry = this.riskFactoryCheckApplyVo.addressCounty
        this.mapCompontent.addressProvince = this.riskFactoryCheckApplyVo.addressProvince
        this.mapCompontent.addressCity = this.riskFactoryCheckApplyVo.addressCity
        this.mapCompontent.ProCode = this.riskFactoryCheckApplyVo.addressProvinceCode
        this.mapCompontent.CityCode = this.riskFactoryCheckApplyVo.addressCityCode
        this.mapCompontent.CountryCode = this.riskFactoryCheckApplyVo.addressCountyCode
        // this.mapCompontent.exploreDate = new Date(this.riskFactoryCheckApplyVo.exploreDate).getFullYear()
        this.mapCompontent.showName = '企业所在地'
        this.mapCompontent.isCheckAddress =true
      },
      transfer (val, val2, val3, val4, val5, val6, val7, val8, val9, val10, val11, val12) {
        if (val12 === '') {
          this.mapFlag = false
          this.transFlag = true
          this.message = '企业所在地未使用地图选择！'
        } else {
          this.address = val
          this.addressDetail = val2
          this.riskFactoryCheckApplyVo.addressDetail = this.address + this.addressDetail
          this.riskFactoryCheckApplyVo.companyAddress = this.riskFactoryCheckApplyVo.addressDetail
          // this.riskInsInputData.riskReportEnvironmentList[0] = val3
          this.riskFactoryCheckApplyVo.pointx2000 = val4
          this.riskFactoryCheckApplyVo.pointy2000 = val5
          this.riskFactoryCheckApplyVo.addressProvince = val6
          this.riskFactoryCheckApplyVo.addressCity = val7
          this.riskFactoryCheckApplyVo.addressCounty = val8
          this.riskFactoryCheckApplyVo.addressProvinceCode = val9
          this.riskFactoryCheckApplyVo.addressCityCode = val10
          this.riskFactoryCheckApplyVo.addressCountyCode = val11
          this.mapFlag = false
        }
      },
    }
  }
</script>

<style lang="scss" scoped>
  /deep/ .map-width .el-dialog{
    max-width: 100% !important;
    margin-top: 0 !important;
  }
  .mapcompontent{
    .ivu-modal{
      top: 0;
    }
  }
  .el-col-1 {
    width: 4.16667%;
    margin-top: 15px;
  }
</style>
