<template>
  <div id="no1">
    <!--大容器-->
    <div class="j_box">
      <!--头部盒子-->
      <div class="j_header clearfix">
        <!--左边图片/文字-->
        <div class="j_hdL">
          <!--图片-->
          <div class="j_hdlimg">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=504973260,2450831926&fm=11&gp=0.jpg" alt="" />
          </div>
          <!--文字-->
          <div class="j_hdlfont">
            <h4>手机即将变现</h4>
            <div>
              <p>比回收平均多卖<span>42%</span></p>
            </div>
          </div>
        </div>
        <!--右边的文字-->
        <div class="j_hdR">
          <p><span>522万＋</span>人已参与</p>
          <span class="j_hdrSp">
            立即卖钱
          </span>
        </div>
      </div>
      <!--省心快卖-->
      <div class="j_cont1">
        <div class="j_cont1tit">
          <p>省心快卖<span>转转帮你卖 急速成交</span></p>
        </div>
        <div class="j_ct1itmebox clearfix">
          <div class="j_cont1itme">
            <div class="j_c1itmimgbox">
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=504973260,2450831926&fm=11&gp=0.jpg" alt="" />
            </div>
            <div class="j_cont1font">
              <p>手机保卖</p>
              <span><i class="iconfont">&#xe697;</i>帮你拍卖得高价</span>
            </div>
          </div>
          <div class="j_cont1itme">
            <div class="j_c1itmimgbox">
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=504973260,2450831926&fm=11&gp=0.jpg" alt="" />
            </div>
            <div class="j_cont1font">
              <p>手机保卖</p>
              <span><i class="iconfont">&#xe697;</i>帮你拍卖得高价</span>
            </div>
          </div>
          <div class="j_cont1itme">
            <div class="j_c1itmimgbox">
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=504973260,2450831926&fm=11&gp=0.jpg" alt="" />
            </div>
            <div class="j_cont1font">
              <p>手机保卖</p>
              <span><i class="iconfont">&#xe697;</i>帮你拍卖得高价</span>
            </div>
          </div>
          <div class="j_cont1itme">
            <div class="j_c1itmimgbox">
              <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=504973260,2450831926&fm=11&gp=0.jpg" alt="" />
            </div>
            <div class="j_cont1font">
              <p>手机保卖</p>
              <span><i class="iconfont">&#xe697;</i>帮你拍卖得高价</span>
            </div>
          </div>
        </div>
      </div>
      <!--发布闲置-->
      <div class="j_cont2">
        <div class="j_c2title">
          <p>发布闲置<span>神马都能卖 自主定价</span></p>
        </div>
        <div class="j_cont2cont">
          <div class="j_cont2contT clearfix">
            <div class="j_cont2cl">
              <p>发布攻略<i class="iconfont">&#xe61c;</i></p>
              <span>看看大家都在卖什么</span>
            </div>
            <div class="j_cont2cr">
              <p>定价参考<i class="iconfont">&#xe61c;</i></p>
              <span>价格合理卖出快</span>
            </div>
          </div>
          <a href="#/publish">
            <div class="j_cont2btn">
              发布闲置
            </div>
          </a>
        </div>
        <p class="j_cont2gb">
          <i class="iconfont">&#xe63d;</i>
        </p>
      </div>
    </div>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
export default {};
</script>

<style>
body {
  background-color: #fafafa;
}
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  list-style: none;
}

.clearfix::after {
  content: "";
  display: block;
  width: 0px;
  height: 0px;
  visibility: hidden;
  clear: both;
}

.clearfix {
  zoom: 1;
}
#no1 .j_box {
  background-color: #fafafa;
  padding: 1rem 0.7rem 0rem;
  height: 100%;
}

#no1 .j_header {
  background-color: #ffffff;
  padding: 0.6rem 0.525rem;
  border-radius: 0.25rem;
  margin-bottom: 1.75rem;
}

#no1 .j_hdL {
  float: left;
}

#no1 .j_hdlimg {
  float: left;
  width: 2.25rem;
  height: 2.175rem;
  margin-right: 0.25rem;
}

#no1 .j_hdlimg img {
  width: 2.25rem;
  height: 2.175rem;
}

#no1 .j_hdlfont {
  float: left;
}

#no1 .j_hdlfont h4 {
  font-size: 0.75rem;
}

#no1 .j_hdlfont p {
  font-size: 0.5rem;
  color: #040404;
  margin-top: 0.1rem;
  font-weight: bold;
}

#no1 .j_hdlfont p span {
  font-size: 0.8rem;
  color: #ff3a3a;
  margin-left: 0.125rem;
  font-weight: bold;
}

#no1 .j_hdR {
  float: right;
}

#no1 .j_hdR p {
  font-size: 0.45rem;
  font-weight: bold;
  color: #ff4545;
}

#no1 .j_hdR p span {
  font-size: 0.45rem;
  color: #989898;
}

#no1 .j_hdR .j_hdrSp {
  font-size: 0.4rem;
  color: #000000;
  text-align: center;
  padding: 0.22rem 0.5rem;
  border: 0.025rem solid #ccc;
  margin-top: 0.34rem;
  float: right;
  border-radius: 0.125rem;
}

#no1 .j_hdR .j_hdrSp:hover {
  cursor: pointer;
}

#no1 .j_cont1 {
}

#no1 .j_cont1tit {
  margin-bottom: 0.5rem;
}

#no1 .j_cont1tit p {
  font-size: 0.7rem;
  color: #161a1e;
  font-weight: bold;
}

#no1 .j_cont1tit p span {
  font-size: 0.55rem;
  color: #939393;
  margin-left: 0.375rem;
  font-weight: normal;
}

#no1 .j_ct1itmebox {
}

#no1 .j_cont1itme {
  float: left;
  width: 49%;
  padding: 0.4rem 0.1rem 0.4rem 0.4rem;
  box-sizing: border-box;
  background-color: #ffffff;
  margin-bottom: 0.375rem;
  border-radius: 0.25rem;
}

#no1 .j_cont1itme:nth-of-type(odd) {
  margin-right: 2%;
}

#no1 .j_c1itmimgbox {
  float: left;
  width: 1.925rem;
  height: 1.925rem;
  border-radius: 50%;
  margin-right: 0.25rem;
}

#no1 .j_c1itmimgbox img {
  width: 1.925rem;
  border-radius: 50%;
  height: 1.925rem;
}

#no1 .j_cont1font {
  float: left;
  padding-top: 0.3rem;
  line-height: 1;
}

#no1 .j_cont1font p {
  font-size: 0.5rem;
  color: #040404;
}

#no1 .j_cont1font span {
  font-size: 0.3rem;
  color: #a9a9a9;
  line-height: 0.8rem;
}

#no1 .j_cont2 {
  /*position: absolute;*/
  /*bottom: 0;*/
  /*padding: 0 0 1rem;*/
  margin-top: 4rem;
}

#no1 .j_c2title {
  margin-bottom: 0.75rem;
}

#no1 .j_cont2 p {
  font-size: 0.725rem;
  color: #1e2126;
  font-weight: bold;
}

#no1 .j_cont2 p span {
  font-size: 0.45rem;
  color: #939393;
  margin-left: 0.125rem;
  font-weight: normal;
}

#no1 .j_cont2cont {
  padding: 1rem 0.625rem 0.875rem;
  background-color: #ffffff;
}

#no1 .j_cont2contT {
  line-height: 0.95rem;
  margin-bottom: 0.95rem;
  text-align: center;
}
#no1 .j_cont2contT i {
  font-size: 0.35rem;
  color: #ff2222;
  vertical-align: middle;
  margin-left: 0.125rem;
}

#no1 .j_cont2cl {
  float: left;
  width: 50%;
}

#no1 .j_cont2cr {
  width: 50%;
  float: right;
}

#no1 .j_cont2cr span {
  position: relative;
}

#no1 .j_cont2cr span::after {
  content: "";
  display: block;
  clear: both;
  width: 0.05rem;
  height: 1rem;
  background-color: #f3f3f3;
  position: absolute;
  left: -1.525rem;
  top: -80%;
}

#no1 .j_cont2contT p a {
  font-weight: bold;
  color: black;
  font-size: 0.6rem;
  color: red;
}

#no1 .j_cont2contT span {
  font-size: 0.5rem;
  color: #878787;
}

#no1 .j_cont2btn {
  text-align: center;
  padding: 0.5rem 0;
  color: #ffffff;
  background-color: #ff5555;
  font-size: 0.7rem;
  border-radius: 0.25rem;
}

#no1 .j_cont2btn:hover {
  cursor: pointer;
}

#no1 .j_cont2btn a {
  color: #ffffff;
}

#no1 .j_cont2gb {
  text-align: center;
  font-weight: normal;
  font-size: 0.55rem;
  color: #9195a5;
  margin-top: 0.5rem;
}
#no1 .j_cont2gb i {
  color: #9499a7;
}
#no1 .j_cont1font span i {
  vertical-align: middle;
  color: #f84954;
  font-size: 0.45rem;
}
</style>