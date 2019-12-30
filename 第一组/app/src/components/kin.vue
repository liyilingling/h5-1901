<template>
  <div id="Particulars">
    <div>
      <div class="P_image">
        <img src="https://cbu01.alicdn.com/img/ibank/2019/110/474/10825474011_1857624684.220x220.jpg" alt="" />
      </div>
      <div class="P_txt">
        <p class="P_price"><span class="P_del">￥</span><span class="P_del">189</span> 原价: ￥219 包邮</p>
        <h3 class="P_title">2019棉衣女短款冬季外套面包服学生韩版宽松元素风棉衣女63</h3>
      </div>
    </div>
    <div class="content">
      <h3 class="P_title">商品详情</h3>
      <div>
        <p>尺码 : <span>均码</span></p>
        <p>新旧程度 : <span>全新从未拆开</span></p>
        <p>尺码 : <span>均码</span></p>
        <p>新旧程度 : <span>全新从未拆开</span></p>
      </div>
      <p>2019棉衣女短款冬季外套面包服学生韩版宽松元素风棉衣女63</p>
      <img src="" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      arr: [{}]
    };
  }
};
</script>

<style scoped >
* {
  padding: 0;
  margin: 0;
}
.P_image {
  width: 100%;
  margin-bottom: 20px;
}
.P_image img {
  display: block;
  width: 80%;
  margin: auto;
}

.P_price {
  padding: 20px 0;
  font-size: 30px;
  color: #f40;
}
.P_del {
  text-decoration-line: line-through;
  color: #909399;
}
.P_title {
  padding: 20px 30px 20px 0;
  font-size: 26px;
  color: #303133;
}
.content p {
  margin-bottom: 10px;
  font-size: 24px;
}
</style>

