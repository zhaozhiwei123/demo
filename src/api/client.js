import { axios } from '@/utils/request'
import qs from 'qs'
const api = {
  ryClient: '/system/ryClient'
}

export function getRyClientList (parameter) {
  return axios({
    url: api.ryClient + '/list',
    method: 'get',
    params: parameter
  })
}

export function saveRyClient (parameter) {
  return axios({
    url: api.ryClient + (parameter.id > 0 ? '/update' : '/save'),
    method: 'post',
    data: parameter,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

export function delRyClient (parameter) {
  return axios({
    url: api.ryClient + '/remove',
    method: 'post',
    params: parameter
  })
}
export function baseInfo (params) {
  return axios({
    url: api.ryClient + '/get/' + params.id,
    method: 'get',
    params
  })
}
export function fileList (data) {
  return axios({
    url: api.ryClient + '/fileList',
    method: 'post',
    data: qs.stringify(data)
  })
}
export const ryClientExport = api.ryClient + '/export'
