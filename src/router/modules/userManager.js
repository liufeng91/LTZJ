/**
 * 需求描述：用户管理
 * Author: liuf
 * Time: 2019.04.29 10:48
 * **/

import Layout from '@/layout'

const userManagerRouter = {
  path: '/userManager',
  component: Layout,
  alwaysShow: true,
  redirect: '/news/index',
  name: 'userManager',
  meta: {
    title: 'userManager',
    icon: 'user',
    roles: ['admin']
  },
  children: [
    {
      path: 'userList',
      component: () => import('@/views/icons/index'),
      name: 'userList',
      meta: { title: 'userList', roles: ['admin'] }
    }
  ]
}
export default userManagerRouter
