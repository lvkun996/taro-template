import { request } from '../service/request'

export const text = () => {
    return request({
        baseUrl: 'https://open.luojigou.vip',
        url: '/forum/index/adv'
    })
}
