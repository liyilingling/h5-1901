<template>
  <!--购物车-->
  <div id="no2">
    <div v-if="gwc_arr.length">
      <div class="already" style="height:30px;font-size: 0.4rem;">
        <strong>√</strong> “{{$store.state.name}}” 成功添加进您的购物车.
        <a href="#/">继续购物</a>
      </div>
      <!--购物车列表-->
      <div v-for="(i,$index) in gwc_arr" :key="$index">
        <!--{{i}}-->
        <div style="overflow: hidden;margin:0.5rem 0;">
          <div style="float:left;width:5%;font-size:0.5rem;color:#999;padding:0.2rem;box-sizing: border-box;" @click.stop="schu(i.name)">
            ×
          </div>
          <div style="float: left;width:30%;">
            <img :src="i.img" alt="" width="100%" />
          </div>
          <div style="float: left;width:65%;font-size: 0.35rem;padding:0 0.3rem;box-sizing: border-box;">
            <p>{{i.name}}</p>
            <p>{{i.cont}}</p>
            <div style="margin-top:20px ;">
              <div>
                <div style="color: red;float: left;">￥{{i.price}}</div>
                <div style="float: left;padding-left: 1.25rem;">
                  <span class="ipt" @click="jian(i.name)">-</span>
                  <input type="text" v-model="i.s" class="ipt">
                  <span class="ipt" @click="jia(i.name)">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="position:fixed;bottom: 0;left:0;width:100%;min-height: 1rem;background:#ccc;overflow: hidden;font-size: 0.35rem;">
          <div style="float:left;width:70%;padding-left:0.5rem;box-sizing: border-box;">
            <div>合计：￥{{zongji}}</div>
            <div>总额：￥{{zongji}} 优惠0.00</div>
          </div>
          <div style="float:left;width:30%;text-align: center;">
            <div style="background: red;color:#fff;padding:0.25rem 0.5rem;">
              <a href="#/settle" style="color:#fff;">
                去结算({{gwc_arr.length}})
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div v-else>
      <p style="text-align: center;">
        购物车内暂时没有数据 您可以
        <a href="#/" style="color:#2f9a4c;font-size: 20px;">返回商品列表</a>
      </p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["gwc_arr", "zongji"])
  },
  methods: {
    ...mapActions(["jia", "jian", "schu"])
  }
};
</script>

<style>
#no2 {
  font-size: 0.35rem;
}
.already {
  border: 1px solid #88dfae !important;
  font-size: 16px;
  font-weight: normal;
  color: #2f9a4c;
  padding: 0.25rem;
  position: relative;
  background: #ffffff !important;
  margin-bottom: 20px;
}
.already a {
  color: #ffffff;
  border-color: transparent;
  background-image: none;
  background-color: #10ac62;
  font-size: 14px;
  font-weight: normal;
  padding: 0.25rem 0.5rem;
  position: absolute;
  right: 5px;
  top: 5.5px;
}
.ipt {
  width: 26px;
  height: 40px;
  float: left;
  border: 1px solid #ccc;
  line-height: 40px;
  font-size: 14px;
  text-align: center;
}
</style>
