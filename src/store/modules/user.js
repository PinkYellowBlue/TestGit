import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()

      return new Promise((resolve, reject) => {
        setToken('admin')
          commit('SET_TOKEN', 'admin')
          console.log('执行');
          resolve()
          .catch(error => {
            reject(error)
          })
        // login(username, userInfo.password)
        // .then(response => {
        //   const data = response.data
        //   console.log(data,'参数聚合');
        //   setToken(data.data.token)
        //   commit('SET_TOKEN', data.data.token)
        //   console.log(data.data.token, 'cook是什么')
        //   resolve()
        // })
        // .catch(error => {
        //   reject(error)
        // })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        var roles = ['admin']
        var name = "admin"
        var avatar = "http://thirdwx.qlogo.cn/mmopen/hgXWbMaaqmAj8fAKJJq1nozVgMrm7CfOd7w1W7UleKwFJT2dQbE7W9qRWr04Zra7W1PRQ5fibRZgqr7myOiadx6Q/132"
        if (roles && roles.length > 0) { // 验证返回的roles是否是一个非空数组
            console.log('长度大于1');
            
          commit('SET_ROLES', roles)
          console.log(roles,'获得权限');
          
        } else {
          reject('getInfo: roles must be a non-null array !')
        }
        commit('SET_NAME', name)
        commit('SET_AVATAR', avatar)
        resolve()
        .catch(error => {
          reject(error)
        })
        // getInfo(state.token)
        // .then(response => {
        //   const data = response.data
        //   console.log(data,'用户信息');
          
        //   if (data.data.roles && data.data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
        //     commit('SET_ROLES', data.data.roles)
        //   } else {
        //     reject('getInfo: roles must be a non-null array !')
        //   }
        //   commit('SET_NAME', data.data.name)
        //   commit('SET_AVATAR', data.data.avatar)
        //   resolve(response)
        // }).catch(error => {
        //   reject(error)
        // })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_ROLES', [])
          removeToken()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
