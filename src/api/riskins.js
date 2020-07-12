import { doGet, doPost } from './index'


export function queryRiskReport(data) {
    return doPost('/riskins/queryRiskReport', data)
}

export function queryRiskReport(data) {
    return doGet('/riskins/queryRiskReport', data)
}


