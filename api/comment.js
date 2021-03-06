import {
  HTTP
} from '../util/http'
const http = new HTTP()
export function whiteComment(gid,star,content) {
  return http.post({
    url: 'comment/write',
    data: {
      'gid': gid,
      'star': star,
      'content': content
    }
  })
}
export function getComment(gid){
  return http.get({
    url: `comment/gid=${gid}`
  })
}