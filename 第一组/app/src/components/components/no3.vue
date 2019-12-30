<template>
  <!--结算-->
  <div id="no3">
    <div class="js_h">
      <span style="padding-right:6rem;">
        <a href="#/amply" style="color:#000;">
          <</a> </span> <span>确认订单</span>
    </div>
    <div class="js_address">
      <div style="padding: 0.25rem;line-height: 1rem;border:1px solid #ccc;box-sizing: border-box;">
        <span>新增地址</span>
        <span style="float: right;">></span>
      </div>
    </div>
    <div style="padding: 0.4rem;box-sizing: border-box;">
      <div style="box-sizing: border-box;box-shadow: 2px 2px 5px 2px #ccc;padding: 0.4rem;">
        <div v-for="(i,$index) in gwc_arr" :key="$index" style="padding-top: 0.5rem;">
          <!--{{i}}-->
          <div style="overflow: hidden;margin:0.5rem 0;">
            <div style="float: left;width:30%;">
              <img :src="i.img" alt="" width="100%" />
            </div>
            <div style="float: left;width:70%;font-size: 0.35rem;padding:0 0.5rem;box-sizing: border-box;">
              <p>{{i.name}}</p>
              <p>{{i.cont}}</p>
              <p style="color:red;margin-top:1rem;">{{i.price}}</p>
              <p style="color:red;margin-top:1rem;">{{i.s}}个</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="position:fixed;bottom: 0;left:0;width:100%;min-height: 1rem;background:#ccc;overflow: hidden;">
      <div style="float:left;width:70%;">
        <div style="line-height: 1rem;padding-left:0.5rem;box-sizing: border-box;">合计：￥{{zongji}}</div>
      </div>
      <div style="float:left;width:30%;text-align: center;">
        <div style="background: red;color:#fff;padding:0.25rem 0.5rem;">
          <a href="#" style="color:#fff;">
            确认下单
          </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["gwc_arr", "zongji"])
  }
};
</script>

<style>
#no3 {
  font-size: 0.35rem;
}

#no3 .js_h {
  width: 100%;
  line-height: 1.5rem;
  font-size: 0.5rem;
  border-bottom: 1px solid #ccc;
}

#no3 .js_address {
  margin: 0.5rem 0;
  padding: 0 0.5rem;
}
</style>
