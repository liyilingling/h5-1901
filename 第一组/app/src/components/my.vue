<template>
  <div>
    <div class="m-header">
      <div class="m-h-image">
        <img src="https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3437217665,1564280326&fm=26&gp=0.jpg" alt="">
      </div>
      <div class="m-h-title">
        {{my_name}}
      </div>
    </div>
    <div class="my-wrapper">
      <div class="m-list">
        <div class="m-l-box">
          <div class="m-l-item" v-for="(i,$key,index) in list" :key='index'>
            <span>{{i.num}}</span>
            <div class="m-i-name">
              {{i.name}}
            </div>
          </div>
        </div>
        <div class="my-deal my-content">
          <my_title tit='我的交易'>
            <div class="my-deal-item">
              <div class="item" v-for="(i,index) in deal" :key='index'>
                <div class="item-icon iconfont icon-dianhua">
                </div>
                <div>
                  {{i}}
                </div>
              </div>
            </div>
          </my_title>
        </div>
        <div class="my_money my-content">
          <my_title tit='天天赚钱'>
            <div class="my_m-content my-advertising">
              <div class="my_m-text">
                <p class="my_m-title">遍逛遍赚钱最高提现20元</p>
                <div class="my_m-txt">
                  体现致微信零钱
                </div>
              </div>
              <div class="my_m-image">
                <img src="../assets/1.jpg" alt="">
              </div>
            </div>
          </my_title>
        </div>
        <div class="my-tool my-content">
          <my_title tit='推荐工具'>
            <div class="my_t-item">
              <div class="flex" v-for="(i,index) in tool" :key="index">
                <div style="flex:1;text-align:center; margin-bottom: 10px;" v-for="(item,index) in i" :key='index'>
                  <div class="my-f-image">
                    <img :src="item.iconfont" alt="">
                  </div>
                  {{item.text}}
                </div>
              </div>
            </div>
          </my_title>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import my_title from "./components/my-title.vue";
import list1 from "../assets/list1.jpg";
import list2 from "../assets/list2.jpg";
import list3 from "../assets/3.jpg";
import list4 from "../assets/4.jpg";
import list5 from "../assets/5.jpg";
import list6 from "../assets/6.jpg";
import list7 from "../assets/7.jpg";
import list8 from "../assets/8.jpg";
import list9 from "../assets/9.jpg";
import list10 from "../assets/10.jpg";
import list11 from "../assets/11.jpg";
import list12 from "../assets/12.jpg";

export default {
  name: "my",
  data() {
    return {
      my_name: "设置淘宝名称",
      list: [
        {
          name: "购物车",
          num: 1
        },
        {
          name: "购物车",
          num: 1
        },
        {
          name: "红包",
          num: 1
        },
        {
          name: "账单",
          num: 1
        }
      ],
      deal: ["我发布的", "我卖出的", "我买到的", "我收藏的"],
      tool: [
        [
          {
            text: "客服中心",
            iconfont: list1
          },
          {
            text: "我的订阅",
            iconfont: list2
          },
          {
            text: "我的拼团",
            iconfont: list3
          },
          {
            text: "借钱",
            iconfont: list4
          }
        ],
        [
          {
            text: "平带规则",
            iconfont: list5
          },
          {
            text: "活动报名",
            iconfont: list6
          },
          {
            text: "领新人红包",
            iconfont: list7
          },
          {
            text: "办信用卡",
            iconfont: list8
          }
        ],
        [
          {
            text: "活动扫码",
            iconfont: list9
          },
          {
            text: "签到送礼",
            iconfont: list10
          },
          {
            text: "垃圾分类",
            iconfont: list11
          },
          {
            text: "领卷中心",
            iconfont: list12
          }
        ]
      ]
    };
  },
  components: {
    my_title
  }
};
</script>

<style scoped>
.flex {
  display: flex;
  margin-bottom: 20px;
}
.my_m-content {
  display: flex;
  border: 2px solid #ccc;
  padding: 30px 15px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
.my-tool {
  font-size: 26px;
}
.my_m-image {
  width: 200px;
  height: 100px;
}
.my_m-image img {
  width: 100%;
  height: 100%;
}
.my_m-text {
  flex: 3;
}
.m-h-image img {
  border-radius: 50%;
  width: 120px;
}
.my-f-image {
  margin-bottom: 20px;
}
.my-f-image img {
  width: 60px;
  height: 60px;
  display: block;
  margin: 0 auto;
}
.m-header {
  text-align: center;
  padding: 70px 0 200px 0;
  background: rgb(252, 78, 84);
  position: relative;
}
.m-h-title {
  padding-top: 30px;
  font-size: 40px;
}
.my-wrapper {
  background: #f8f8f8;
  padding-bottom: 20px;
}
.m-list {
  background: transparent;
  width: 90%;
  margin: 0 auto;
  margin-top: -150px;
  position: relative;
}
.m-l-box {
  display: flex;
  margin-bottom: 20px;
}
.m-l-box .m-l-item {
  flex: 1;
  text-align: center;
}
.m-l-item {
  font-size: 25px;
}
.my-content {
  background: #fff;
  border-radius: 15px;
  padding: 20px;
  margin-bottom: 30px;
}
.my-deal .title {
  font-size: 30px;
  margin-bottom: 20px;
}
.my-deal .my-deal-item {
  display: flex;
}
.my-deal .my-deal-item .item {
  flex: 1;
  text-align: center;
  font-size: 30px;
}
.my_m-title {
  padding-left: 10px;
  font-size: 30px;
  margin-bottom: 10px;
  color: #303133;
}
.my_m-txt {
  padding-left: 10px;
  font-size: 20px;
  color: #909399;
}
</style>
