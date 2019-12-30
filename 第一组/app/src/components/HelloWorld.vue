<template>
  <div class="hello iconfont">
    <el-row :span="24">
      <el-col :span="24" class="clearfix">
        <div class="h_header">
          <div>
            <div class="h_search" style="float:left;margin:10px 0 10px 5px;">
              <input type="text" class="iconfont" :placeholder="'\ue630苹果'" style="text-align:center;width:100%;height:20px;color:#fff;" onfocus="location.href='#/search'" />
            </div>
            <div style="float:left;font-size:12px;padding:12px 0;margin-left:15px;"><a href="#/" style="color:aliceblue;verticalAlign:middle;">领现金</a></div>
          </div>
          <div class="header_nav">
            <ul class="nav_item">
              <li><a href="#/s1">热销</a></li>
              <li><a href="#/s2">电脑</a></li>
              <li><a href="#/s3">衣服</a></li>
              <li><a href="#/s4">手机</a></li>
            </ul>
          </div>
        </div>
        <div class="h_content" style="padding:0 10px;">
          <div class="h_swiper" style="margin-top:-40px;height:100px;">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="https://s1.zhuanstatic.com/platform/zzapppages/static/css/classify-banner-0.fa91d15.png" alt=""></div>
                <div class="swiper-slide"><img src="https://s1.zhuanstatic.com/platform/zzapppages/static/css/classify-banner-2.b8051cb.png" alt=""></div>
                <div class="swiper-slide"><img src="https://s1.zhuanstatic.com/platform/zzapppages/static/css/classify-banner-3.0ce19f4.png" alt=""></div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>

              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>

              <!-- 如果需要滚动条 -->
              <div class="swiper-scrollbar"></div>
            </div>
          </div>
          <div class="h_nav">
            <ul class="clearfix">
              <li class="h_server">
                <div><img src="https://m.360buyimg.com/babel/jfs/t1/45423/33/385/778/5cd4f265E442a9342/0aff0a42cece09ee.png" /></div>
                <p>手机</p>
              </li>
              <li class="h_server">
                <div><img src="https://m.360buyimg.com/babel/jfs/t1/57014/6/10297/815/5d773a07Ec7a61fc9/97917a2daa34be0f.png" /></div>
                <p>书</p>
              </li>
              <li class="h_server">
                <div><img src="https://m.360buyimg.com/babel/jfs/t1/44601/19/915/1039/5cd4f1cfE2e46473c/b61f083872a7a1de.png" /></div>
                <p>服饰</p>
              </li>
            </ul>
          </div>
          <div class="h_banner">
            <img src="https://s1.zhuanstatic.com/platform/zzapppages/static/css/banner-1.264332e.jpg" alt="" style="width:100%;">
          </div>
          <div class="h_loading">
            <img src="" alt="">
          </div>
        </div>
        <div>
          <no1></no1>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import Swiper from "./swiper.min.js";
import Swiper from "swiper";
import $ from "jquery";
import no1 from "./components/no1.vue";

export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  components: { no1 },
  methods: {},
  mounted() {
    new Swiper(".swiper-container", {
      autoplay: true,
      loop: true
    });

    // var startY, startX, endX, endY;
    // var mySwiper = new Swiper(".swiper-container", {
    //   preventClicks: true,
    //   pagination: ".swiper-pagination",
    //   paginationClickable: ".swiper-pagination",
    //   preventLinksPropagation: true,
    //   spaceBetween: 30,
    //   effect: "fade",
    //   onSlideChangeEnd: function(swiper) {
    //     alert(swiper.activeIndex + "");
    //     // swiper.activeIndex 这个就是索引， 从 0 开始！ 可看一共有多少元素！
    //   },
    //   onTouchStart: function(swiper, event) {
    //     var touch = event.touches[0];
    //     startY = touch.pageY;
    //     startX = touch.pageX;
    //   },
    //   onTouchMove: function(swiper, event) {
    //     var touch = event.touches[0];
    //     endX = touch.pageX - startX;
    //     endY = touch.pageY - startY;
    //   },
    //   onTouchEnd: function(swiper) {
    //     if (Math.abs(endX) > 5) {
    //       endX = 0;
    //       return false;
    //     } else {
    //       var href;
    //       switch (swiper.index) {
    //         case 1:
    //           href = "https://m.jrj.com.cn/yi/prd/prdxq?type=sr";
    //         case 2:
    //           href = "https://m.jrj.com.cn/yi/prd/prdxq?type=sr";
    //         case 3:
    //           href = "https://m.jrj.com.cn/yi/prd/prdxq?type=sr";
    //         case 4:
    //           href = "https://m.jrj.com.cn/yi/prd/prdxq?type=sr";
    //       }
    //       self.location = href;
    //       endX = 0;
    //     }
    //   }
    // });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import "./assets/swiper.min.css"; */
.clearfix::after {
  display: table;
  content: "";
  clear: both;
}
input {
  background: transparent;
  border: none;
  outline: none;
}
.h_search {
  border: 1px solid #000;
  border-radius: 30px;
  width: 80%;
  margin: 10px 0;
  color: aliceblue;
}
.h_header {
  padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 250px;
  background: url("../img/1.jpg");
  color: aliceblue;
}
.h_nav ul > li {
  float: left;
  width: 33%;
  text-align: center;
}
.header_nav ul > li {
  float: left;
  width: 25%;
  text-align: center;
}
.h_swiper img {
  width: 100%;
  height: 150px;
}
.h_server div img {
  width: 10%;
}
</style>
