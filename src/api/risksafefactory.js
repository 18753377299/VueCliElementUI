/**
 * 安全工厂
 */
import {doGet,doJSONPost} from "./index"

export function saveRiskFactory(data) {
  return doJSONPost('/riskfactory/gradeAndSaveDetail', data)
}
export function temporarySaveRiskFactory(data) {
  return doJSONPost('/riskfactory/temporarySave', data)
}
//安全工厂根据风控报告编号查询详细信息
export function queryRiskFactory(data) {
  return doGet('/riskfactory/queryRiskReport', data)
}
//安全工厂通过任务来生成风控报告信息
export function saveRiskReportByTask(data) {
  return doGet('/riskfactory/generateRiskReportByTask', data)
}
//安全工厂多条件分页查询风控报告
export function queryRiskFactoryMain(data) {
  return doJSONPost('/riskfactory/queryMainPage', data)
}

export function saveRiskApraisalFirmDetailsInfo(data) {
  return doJSONPost('/riskfactory/customerMechanismInfo/saveMechanismInfo', data)
}

export function queryRiskReportMechanism(data) {
  return doJSONPost('/riskfactory/queryRiskReportMechanism', data)
}

export function queryMechanismInfoById(data) {
  return doGet('/riskfactory/customerMechanismInfo/queryMechanismInfoById', data)
}
//隐患整改根据单号查询
export function queryDangerList(data){
  return doGet('/riskfactory/queryDangerList', data)
}
//安全工厂发起风险排查申请
export function launchRiskCheckApply(data) {
  return doJSONPost('/riskfactory/launchRiskCheckApply', data)
}
//安全工厂开展风险排查分页查询
export function queryRiskCheckTask(data) {
  return doJSONPost('/riskfactory/queryRiskCheckPage', data)
}
//投保信息查询
export function customerInfoQuery(data) {
  return doJSONPost('/intf/customer/customerInfoQuery', data)
}

export function mechanismInfoRegisterUser(data) {
  return doJSONPost('/riskfactory/customerMechanismInfo/mechanismInfoRegisterUser', data)
}

export function mechanismInfoAddAccount(data) {
  return doJSONPost('/riskfactory/customerMechanismInfo/mechanismInfoAddAccount', data)
}

export function mechanismInfoAddPower(data) {
  return doJSONPost('/riskfactory/customerMechanismInfo/mechanismInfoAddPower', data)
}
export function viewRiskReportExpertById(data) {
  return doGet('/riskfactory/viewRiskReportExpertById', data)
}

//添加专家信息
export function addRiskReportExpert(data) {
  return doJSONPost('/riskfactory/addRiskReportExpert', data)
}
//发起风险排查申请-查询所属行业信息
export function queryIndustryInfo(data) {
  return doGet('/riskfactory/getIndustryInfo', data)
}
//排查任务分配-查询所有机构（下拉框）
export function queryRiskCheckMechanismAll(data) {
  return doGet('/riskfactory/queryRiskCheckMechanismAll', data)
}
//排查任务分配-查询所有机构（下拉框）
export function queryRiskCheckExpertAll(data) {
  return doGet('/riskfactory/queryRiskCheckExpertAll', data)
}
//根据机构查询专家
export function getExpertByItem(data) {
  return doGet('/riskfactory/getExpertByItem', data)
}
//风险排查任务分配
export function AssortRiskTask(data) {
  return doJSONPost('/riskfactory/assortRiskCheckTask', data)
}
//根据单号查询安全工厂状态
export function queryReportState(data){
  return doGet('/riskfactory/queryReportState', data)
}
//根据编号集合删除报告
export function riskReportDelete(data){
  return doJSONPost('/riskfactory/riskReportDelete', data)
}

//根据任务编号删除任务信息
export function riskReportTaskDelete(data){
  return doGet('/riskfactory/riskReportTaskDelete', data)
}

export function queryRiskReportExpert(data) {
  return doJSONPost('/riskfactory/queryRiskReportExpert', data)
}
//企业查询是否授权
export function queryRiskReportUserInfoById(data) {
  return doGet('/riskfactory/customerMechanismInfo/queryRiskReportUserInfoById', data)
}

export function getUserGrade() {
  return doGet('/yhzx/getGradeByUserCode')
}
//企业查询是否授权
export function getUserModifyInfo(data) {
  return doJSONPost('/riskfactory/customerMechanismInfo/getUserModifyInfo', data)
}
//企业查询是否授权
export function deleteUserInfoMsg(data) {
  return doJSONPost('/riskfactory/customerMechanismInfo/deleteUserInfoMsg', data)
}
//修改页面 保存按钮
export function modifyUserInfoMsg(data) {
  return doJSONPost('/riskfactory/customerMechanismInfo/modifyUserInfoMsg', data)
}

//保存隐患整改清单
export function addDangerList(data){
  return doJSONPost('/riskfactory/addDangerList', data)
}
//删除隐患整改列表
export function deleteDangerList(data){
  return doJSONPost('/riskfactory/deleteDangerList', data)
}
//安全工厂风险报告查询  提交
export function submitUnderwrite(data){
  return doGet('/riskfactory/process/submitProcess', data)
}
//安全工厂风险报告审核  处理
export function underwriteRisk(data){
  return doJSONPost('/riskfactory/process/processReview', data)
}
//查看历史流程
export function getHistoryProcess(data){
  return doGet('/riskfactory/process/getHistoryProcess', data)
}
//安全工厂风险报告查询  提交
export function submitProcessZG(data){
  return doGet('/riskfactory/process/submitProcessZG', data)
}
//安全工厂风险报告审核  处理
export function processReviewZG(data){
  return doJSONPost('/riskfactory/process/processReviewZG', data)
}
//投保企业查询企业注册号
export function getConidByUserCode(){
  return doGet('/riskfactory/customerMechanismInfo/getConidByUserCode')
}

//安全工厂风险报告审核  处理
export function queryRiskFactoryTaskScoreDiscuss(data){
  return doGet('/riskfactory/queryRiskFactoryTaskScoreDiscuss', data)
}

//安全工厂风险报告审核  处理
export function saveRiskFactoryTaskScoreDiscuss(data){
  return doJSONPost('/riskfactory/saveRiskFactoryTaskScoreDiscuss', data)
}
//安全工厂风险报告数量统计
export function queryRiskFactoryCount(data){
  return doGet('/riskins/queryRiskFactoryCount', data)
}
//安全工厂风险整改数量统计
export function queryRectifyFlagCount(data){
  return doGet('/riskins/queryRectifyFlagCount', data)
}
//安全工厂风险专家数量
export function queryRiskFactoryExpertCount(data){
  return doGet('/riskins/queryRiskFactoryExpertCount', data)
}
//安全工厂风险任务报告数量
export function queryRiskFactoryTaskFlagCount(data){
  return doGet('/riskins/queryRiskFactoryTaskFlagCount', data)
}
