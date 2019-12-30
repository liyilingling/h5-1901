<template>
  <div id="TextPage">
    <div class="T-wrapper">
      <Navs :list='N_list'></Navs>
      <recommend :list='R_list'></recommend>
    </div>

  </div>
</template>

<script>
import Navs from "./component/Navs";
import recommend from "./component/recommend";
import image1 from "../assets/images/Navs_03.jpg";
import image2 from "../assets/images/Navs_05.jpg";
import image3 from "../assets/images/Navs_07.jpg";
import image4 from "../assets/images/Navs_09.jpg";
import image5 from "../assets/images/Navs_11.jpg";
import image6 from "../assets/images/Navs_18.jpg";
import image7 from "../assets/images/Navs_19.jpg";
export default {
  props: [],
  name: "",
  data() {
    return {
      N_list: [
        [
          {
            text: "彩妆",
            image: image1
          },
          {
            text: "护肤",
            image: image2
          },
          {
            text: "美容工具",
            image: image3
          },
          {
            text: "香水",
            image: image4
          }
        ],
        [
          {
            text: "洗发护发",
            image: image5
          },
          {
            text: "口腔护理",
            image: image6
          },
          {
            text: "更多",
            image: image7
          }
        ]
      ],
      R_list: [
        [
          {
            id: 1,
            img:
              "https://img12.360buyimg.com/n7/jfs/t1/80648/27/10000/65206/5d78677eE1bfb360c/62837ca868cfea38.jpg",
            name: "iPhone 11",
            cont: "【现货速发-国行正品】苹果 iPhone 11 全网通 手机 绿色 128GB",
            price: "5768.00",
            s: 0
          },
          {
            id: 2,
            img:
              "https://img13.360buyimg.com/n2/jfs/t1/78463/39/8977/60363/5d6c810bE93e7c818/356655852204e3d0.jpg",
            name: "iPhone 8 Plus",
            cont:
              "【二手9成新】Apple iPhone 8 Plus 苹果8P二手 苹果8plus手机 深空灰色 64GB 全网通4G",
            price: "2698.00",
            s: 0
          }
        ],
        [
          {
            id: 3,
            img:
              "https://img12.360buyimg.com/n2/jfs/t1/92936/22/4456/117828/5de75596Edb5ff3f7/ed165932b9ac8e18.jpg!q80.webp",
            name: "你当像鸟飞往你的山",
            cont:
              "你当像鸟飞往你的山（比尔·盖茨年度力荐 登顶《纽约时报》畅销榜80+周 一个真实故事打开无限可能）",
            price: "58.40",
            s: 0
          },
          {
            id: 4,
            img:
              "https://img10.360buyimg.com/n7/jfs/t1/3405/18/3537/69901/5b997c0aE5dc8ed9f/a2c208410ae84d1f.jpg",
            name: "iPhone XR",
            cont:
              "Apple iPhone XR (A2108) 128GB 黑色 移动联通电信4G手机 双卡双待",
            price: "4899.90",
            s: 0
          }
        ]
      ]
    };
  },
  components: {
    Navs,
    recommend
  },
  mounted() {},
  methods: {}
};
</script>

<style  scoped>
</style>