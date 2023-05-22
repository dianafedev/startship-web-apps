import request from '@/utils/request'

const endpoint = 'api/starships/'

export function fetchData(data) {
  const opt = {
    url: endpoint,
    method: 'GET',
    params: data
  }
  return request(opt)
}

export function fetchDetail(id) {
  const opt = {
    url: endpoint + id,
    method: 'GET'
  }
  return request(opt)
}
