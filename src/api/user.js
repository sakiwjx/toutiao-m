import request from '../utils/request'
export const login = (data) => {
  return request({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: data
  })
}
export const sendSms = (mobile) => {
  return request({
    method: 'GET',
    url: `/v1_0/sms/codes/${mobile}`
  })
}
