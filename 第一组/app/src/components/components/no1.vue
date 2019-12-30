<template>
  <!--商品列表-->
  <div id="no1">
    <div v-for="(i,$index) in list_arr" :key="$index">
      <a style="display:block;">
        <div style="float:left;width:22%;min-height:5.5rem;background: #ccc;margin:0.2rem ;">
          <div style="width:100%;height:3rem;">
            <img :src="i.img" alt="" width="100%" height="100%" />
          </div>
          <div style="text-align: center;">
            {{i.name}}
          </div>
          <div style="text-align: center;">
            价格：<span style="color:red;">{{i.price}}</span>
          </div>
          <div style="text-align: right;cursor: pointer;">
            <span @click="btn(i)">加入购物车</span>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["list_arr"])
  },
  methods: {
    ...mapActions(["btn"])
  }
};
</script>

<style>
#no1 {
  font-size: 0.35rem;
}
</style>
