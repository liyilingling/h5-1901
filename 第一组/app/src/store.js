import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  p_arr: [],
  // 商品列表
  list_arr: [
    // {
    //   id: 1,
    //   img: 'https://img12.360buyimg.com/n7/jfs/t1/80648/27/10000/65206/5d78677eE1bfb360c/62837ca868cfea38.jpg',
    //   name: 'iPhone 11',
    //   cont: '【现货速发-国行正品】苹果 iPhone 11 全网通 手机 绿色 128GB',
    //   price: '5768.00',
    //   s: 0
    // },
    // {
    //   id: 2,
    //   img: 'https://img13.360buyimg.com/n2/jfs/t1/78463/39/8977/60363/5d6c810bE93e7c818/356655852204e3d0.jpg',
    //   name: 'iPhone 8 Plus',
    //   cont: '【二手9成新】Apple iPhone 8 Plus 苹果8P二手 苹果8plus手机 深空灰色 64GB 全网通4G',
    //   price: '2698.00',
    //   s: 0
    // },
    // {
    //   id: 3,
    //   img: 'https://img12.360buyimg.com/n2/jfs/t1/92936/22/4456/117828/5de75596Edb5ff3f7/ed165932b9ac8e18.jpg!q80.webp',
    //   name: '你当像鸟飞往你的山',
    //   cont: '你当像鸟飞往你的山（比尔·盖茨年度力荐 登顶《纽约时报》畅销榜80+周 一个真实故事打开无限可能）',
    //   price: '58.40',
    //   s: 0
    // },
    // {
    //   id: 4,
    //   img: 'https://img10.360buyimg.com/n7/jfs/t1/3405/18/3537/69901/5b997c0aE5dc8ed9f/a2c208410ae84d1f.jpg',
    //   name: 'iPhone XR',
    //   cont: 'Apple iPhone XR (A2108) 128GB 黑色 移动联通电信4G手机 双卡双待',
    //   price: '4899.90',
    //   s: 0
    // },
    // {
    //   id: 5,
    //   img: 'https://img12.360buyimg.com/n2/jfs/t1/68848/36/15220/442182/5dca7d51E524bbd09/22771e2eceb6cfe7.jpg!q95.webp',
    //   name: '魔力的胎动',
    //   cont: '东野圭吾新作：魔力的胎动（限量东野圭吾印签版本）',
    //   price: '32.40',
    //   s: 0
    // }
    {
      type: 'book',
      id: 1,
      img: 'https://cbu01.alicdn.com/img/ibank/2019/443/828/10397828344_92984003.220x220.jpg',
      name: '',
      cont: '文都2020何凯文考研英语写作高分攻略考研教材考研书籍',
      price: '17.99',
      s: 0
    },
    {
      type: 'book',
      id: 2,
      img: 'https://cbu01.alicdn.com/img/ibank/2018/900/945/9529549009_92984003.220x220.jpg',
      name: '',
      cont: '文都2020何凯文考研英语历年真题全解析97-07真题基础版考研教材',
      price: '45.99',
      s: 0
    },
    {
      type: 'book',
      id: 3,
      img: 'https://cbu01.alicdn.com/img/ibank/2019/303/519/12748915303_168678822.220x220.jpg',
      name: '',
      cont: '巨微中考英语四轮复习安徽版 2020初中英语总复习 安徽 书籍批发',
      price: '26.94',
      s: 0
    },
    {
      type: 'book',
      id: 4,
      img: 'https://cbu01.alicdn.com/img/ibank/2019/917/886/12859688719_2015254741.220x220.jpg',
      name: '',
      cont: '原书正版霍达文选(套装共9册) 霍达 人民文学出版社',
      price: '700',
      s: 0
    },
    {
      type: 'book',
      id: 5,
      img: 'https://cbu01.alicdn.com/img/ibank/2019/091/905/12498509190_168678822.220x220.jpg',
      name: '',
      cont: '厂家直销初中英语语法清单中考词汇2020版初中词汇单词手册',
      price: '27.47',
      s: 0
    },
    {
      type: 'book',
      id: 6,
      img: 'https://cbu01.alicdn.com/img/ibank/2019/110/474/10825474011_1857624684.220x220.jpg',
      name: '',
      cont: '民谣吉他考级教材 民谣吉他考级教程 民谣吉他考级曲集 弹唱指弹',
      price: '18.00',
      s: 0
    }, {
      type: 'book',
      id: 7,
      img: 'https://cbu01.alicdn.com/img/ibank/2019/059/024/12861420950_1588896732.220x220.jpg',
      name: '',
      cont: '畅销书排行榜 受益一生的五本书励志成功书籍 为人处世墨菲定律',
      price: '3.50',
      s: 0
    }, {
      type: 'book',
      id: 8,
      img: 'https://cbu01.alicdn.com/img/ibank/2019/321/857/10725758123_1588896732.220x220.jpg',
      name: '',
      cont: '红色经典爱国故事书 红孩子王二小闪闪红星 儿园硬壳硬皮精装绘本',
      price: '6.80',
      s: 0
    }, {
      type: 'book',
      id: 9,
      img: 'https://cbu01.alicdn.com/img/ibank/2019/334/715/12082517433_1192427786.220x220.jpg',
      name: '',
      cont: '小学生满分作文大全3-6年级写作辅导课外阅读现货批发包邮7-12岁',
      price: '6.00',
      s: 0
    }, {
      type: 'book',
      id: 10,
      img: 'https://cbu01.alicdn.com/img/ibank/2019/313/461/12331164313_2015254741.220x220.jpg',
      name: '',
      cont: '其实你很棒三到六年级全套10册 6-12岁儿童书籍校园成长励志正版',
      price: '62.5',
      s: 0
    },
    { type: 'phone', id: '1', img: 'https://img.alicdn.com/bao/uploaded/i8/TB1UxZ2qlr0gK0jSZFnObHRRXXa_121211.jpg', name: 'Apple/苹果 iPhone 8 Plus', cont: '', price: '¥4999.00', s: '0' },
    { type: 'phone', id: '2', img: 'https://img.alicdn.com/bao/uploaded/i7/TB12CZWqkY2gK0jSZFgumM5OFXa_121109.jpg', name: 'Apple/苹果 iPhone 8', cont: '', price: '¥3999.00', s: '0' },
    { type: 'phone', id: '3', img: 'https://img.alicdn.com/bao/uploaded/i2/TB13SaTl7T2gK0jSZFkybcIQFXa_023836.jpg', name: 'vivo NEX 3 5G', cont: '', price: '¥4998.00', s: '0' },
    { type: 'phone', id: '4', img: 'https://img.alicdn.com/bao/uploaded/i7/TB1xWL5jrr1gK0jSZR09U2P8XXa_011932.jpg', name: 'OPPO Reno Ace', cont: '', price: '¥3199.00', s: '0' },
    { type: 'phone', id: '5', img: 'https://img.alicdn.com/bao/uploaded/i4/1917047079/O1CN01cOgvYi22AEJ7jj9V6_!!2-item_pic.png', name: 'Apple/苹果 iPhone 11 Pro', cont: '', price: '¥9598.00', s: '0' },
    { type: 'phone', id: '6', img: 'https://img.alicdn.com/bao/uploaded/i4/TB1IcUVeRWD3KVjSZKPqaup7FXa_092737.jpg', name: 'vivo Z5X', cont: '', price: '¥1698.00', s: '0' },
    { type: 'phone', id: '7', img: 'https://img.alicdn.com/bao/uploaded/i3/TB1HF5ebkT2gK0jSZFkcNoIQFXa_015826.jpg', name: 'honor/荣耀 荣耀9x', cont: '', price: '¥1399.00', s: '0' },
    { type: 'phone', id: '8', img: 'https://img.alicdn.com/bao/uploaded/i7/TB1xHH3HHvpK1RjSZFqmR.XUVXa_123431.jpg', name: 'Xiaomi/小米 小米9', cont: '', price: '¥2569.00', s: '0' },
    { type: 'phone', id: '9', img: 'https://img.alicdn.com/bao/uploaded/i3/TB15pwacrr1gK0jSZR066nP8XXa_100958.jpg', name: 'Apple/苹果 iPhone XS', cont: '', price: '¥5688.00', s: '0' },
    { type: 'phone', id: '10', img: 'https://img.alicdn.com/bao/uploaded/i3/TB1N2sfkhv1gK0jSZFF00b0sXXa_080704.jpg', name: 'vivo iQOO Neo 855', cont: '', price: '¥2498.00', s: '0' }

  ],

  // 购物车
  gwc_arr: [
  ]

}
var getters = {
  get_arr (state) {
    return state.p_arr
  },
  list_arr (state) {
    return state.list_arr
  },
  gwc_arr (state) {
    return state.gwc_arr
  },
  //	g_arr(state){
  //		return state.arr2
  //	},
  zongji (state) {
    var sum = 0
    for (var i = 0; i < state.gwc_arr.length; i++) {
      sum += state.gwc_arr[i].price * state.gwc_arr[i].s
    }
    return sum
  }
}

var mutations = {
  m_drawer (state, obj) {
    state.p_arr.push(obj)
    console.log(state.p_arr)
  },
  a_arr (state, n_arr) {
    location.href = '#/amply'
    state.name = n_arr.name
    var type = true
    for (var i = 0; i < state.gwc_arr.length; i++) {
      if (state.gwc_arr[i].name == n_arr.name) {
        type = false
        state.gwc_arr[i].s++
      }
    }
    if (type) {
      n_arr.s = 1
      state.gwc_arr.push(n_arr)
    }
  },
  m_jian (state, name) {
    for (var i = 0; i < state.gwc_arr.length; i++) {
      if (state.gwc_arr[i].name == name) {
        if (state.gwc_arr[i].s > 1) {
          state.gwc_arr[i].s--
          console.log(state.gwc_arr[i].s)
        }
      }
    }
  },
  m_jia (state, name) {
    for (var i = 0; i < state.gwc_arr.length; i++) {
      if (state.gwc_arr[i].name == name) {
        state.gwc_arr[i].s++
        console.log(state.gwc_arr[i].s)
      }
    }
  },
  m_schu (state, name) {
    for (var i = 0; i < state.gwc_arr.length; i++) {
      if (state.gwc_arr[i].name == name) {
        state.gwc_arr.splice(i, 1)
      }
    }
  }
}

var actions = {
  a_drawer ({ commit }, obj) {
    commit('m_drawer', obj)
  },
  btn ({ commit }, n_arr) {
    commit('a_arr', n_arr)
  },
  jian ({ commit }, name) {
    commit('m_jian', name)
  },
  jia ({ commit }, name) {
    commit('m_jia', name)
  },
  schu ({ commit }, name) {
    commit('m_schu', name)
  }

}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
