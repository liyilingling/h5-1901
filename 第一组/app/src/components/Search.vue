<template id='Search'>
  <div>
    <mt-header title=" " style="margin-bottom:20px;">
      <router-link to="/" slot="left">
        <mt-button icon="back">back</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div style="padding:0 10px;" class="clearfix">
      <div class="s_search" style="float:left;"><input type="text" ref="Int"></div><span style="float:left;margin-left:15px;">搜索</span>
    </div>
    <p class="s_recom">推荐搜索</p>
    <div class="s_list">
      <span>面包车</span>
      <span>自行车</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: [],
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {
    this.$nextTick(() => {
      this.$refs.Int.focus();
    });
  }
};
</script>

<style>
.clearfix::after {
  display: table;
  content: "";
  clear: both;
}
input {
  background: transparent;
  border: none;
  outline: none;
  text-indent: 1em;
}
input::-webkit-input-placeholder {
  color: #f1f1f1 !important;
}
.s_search {
  width: 85%;
  height: 40px;
  border: 1px solid #000;
  border-radius: 30px;
  color: #f1f1f1;
}
.s_recom {
  padding: 20px 10px;
  font-weight: bold;
}
.s_list {
  padding: 40px;
}
.s_list span {
  display: inline-block;
  padding: 5px 15px;
  margin: 5px;
  background: #f1f1f1;
  color: #000;
  text-align: center;
  border-radius: 15px;
}
.mint-header {
  background: rgb(228, 99, 39);
}
</style>
