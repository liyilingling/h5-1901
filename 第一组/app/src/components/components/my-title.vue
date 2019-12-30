<template>
  <div>
    <div>
      <h3 class="my_title">{{title}}</h3>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tit"],
  name: "",
  data() {
    return {
      title: this.tit
    };
  },
  components: {},
  mounted() {},
  methods: {}
};
</script>

<style  scoped>
.my_title {
  font-size: 34px;
  margin-bottom: 30px;
}
</style>