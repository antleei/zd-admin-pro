import type { MockMethod } from 'vite-plugin-mock'
import type { MockParams } from '@/types/mock'
import { failResponseWrap, successResponseWrap } from '@/utils/mock-response'

const userInfoList = [
    {
        name: '管理员',
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        role: 'admin',
        routeList: [],
    },
    {
        name: '普通用户',
        avatar: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        role: 'user',
        routeList: [],
    },
]

export default [
    {
        url: '/user/login',
        method: 'post',
        response: ({ body }: MockParams<{ username: string; password: string }>) => {
            const { username, password } = body
            if (!username)
                return failResponseWrap(null, '用户名不能为空', 0)

            if (!password)
                return failResponseWrap(null, '密码不能为空', 0)

            if (username === 'admin' && password === 'admin') {
                return successResponseWrap({
                    token: '12345',
                })
            }
            if (username === 'user' && password === 'user') {
                return successResponseWrap({
                    token: '54321',
                })
            }

            return failResponseWrap(null, '用户名或者密码错误', 0)
        },
    },
    {
        url: '/user/info',
        method: 'post',
        response: ({ body }: MockParams<{ token: string }>) => {
            const { token } = body
            const role = token === '12345' ? 'admin' : 'user'
            const userInfo = userInfoList.find(item => item.role === role)

            return successResponseWrap(userInfo)
        },
    },
    {
        url: '/user/logout',
        method: 'post',
        response: () => {
            return successResponseWrap(null)
        },
    },
] as MockMethod[]
