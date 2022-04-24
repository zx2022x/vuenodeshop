<template>
  <div>
    <div class="item">
      <div class="itemHeader">
        <h1>水果</h1>
        <div class="more">
          <!-- <router-view to="/FenedItemList">查看更多</router-view> -->
          <router-link
            :to="{ name: 'FenedItemList', params: { goods_fm: 1 } }"
            class="goDetail"
            >查看更多</router-link
          >
        </div>
      </div>
      <div class="itemlist">
        <ul>
          <li
            v-for="(item, index) in getItemList1"
            :key="item.id"
            @click="goDetail(item)"
          >
            <el-image
              style="width: 160px; height: 160px"
              :src="api1 + item.goods_img"
              fit="fill"
              class="imgli"
            >
            </el-image>
            <span>¥{{ item.goods_price }}</span>
            <h1>{{ item.goods_name }}</h1>
          </li>
        </ul>
      </div>
    </div>

    <div class="item">
      <div class="itemHeader">
        <h1>肉类</h1>
        <div class="more">
          <!-- <router-view to="/FenedItemList">查看更多</router-view> -->
          <router-link
            :to="{ name: 'FenedItemList', params: { goods_fm: 2 } }"
            class="goDetail"
            >查看更多</router-link
          >
        </div>
      </div>
      <div class="itemlist">
        <ul>
          <li
            v-for="(item, index) in getItemList2"
            :key="item.id"
            @click="goDetail(item)"
          >
            <el-image
              style="width: 160px; height: 160px"
              :src="api1 + item.goods_img"
              fit="fill"
              class="imgli"
            >
            </el-image>
            <span>¥{{ item.goods_price }}</span>
            <h1>{{ item.goods_name }}</h1>
          </li>
        </ul>
      </div>
    </div>

    <div class="item">
      <div class="itemHeader">
        <h1>粗粮</h1>
        <div class="more">
          <!-- <router-view to="/FenedItemList">查看更多</router-view> -->
          <router-link
            :to="{ name: 'FenedItemList', params: { goods_fm: 3 } }"
            class="goDetail"
            >查看更多</router-link
          >
        </div>
      </div>
      <div class="itemlist">
        <ul>
          <li
            v-for="(item, index) in getItemList3"
            :key="item.id"
            @click="goDetail(item)"
          >
            <el-image
              style="width: 160px; height: 160px"
              :src="api1 + item.goods_img"
              fit="fill"
              class="imgli"
            >
            </el-image>
            <span>¥{{ item.goods_price }}</span>
            <h1>{{ item.goods_name }}</h1>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      api1: "http://localhost:3000/",
    };
  },
  mounted() {
    this.getData(1, 15, 1, "getItemList1");
    this.getData(1, 15, 2, "getItemList2");
    this.getData(1, 15, 3, "getItemList3");
    //  this.getData(1,10,3)
  },
  methods: {
    async getData(pageNum = 1, pageSize = 10, goods_fm, actionTarget) {
      await this.$store.dispatch(actionTarget, {
        pageNum,
        pageSize,
        goods_fm,
      });
      //  await this.$store.dispatch('getItemList',pageNum,pageSize,goods_fm)
      //  await this.$store.dispatch('getItemList',pageNum,pageSize,goods_fm)
    },
    goDetail(item) {
      this.$router.push({ path: "/itemdetail", query: item });
    },
    //随机整数，返回数组
    getRandomNumber(n, min, max) {
      let arr = [];
      for (let i = 0; i < n; i++) {
        arr[i] = parseInt(Math.random() * (max - min + 1) + min);
      }
      for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
          if (arr[i] === arr[j]) {
            this.getRandomNumber(n, min, max);
            return false;
          }
        }
      }
      return arr;
    },
  },
  computed: {
    ...mapGetters(["getItemList1", "getItemList2", "getItemList3"]),
  },
  watch: {
    getItemList1: {
      handler(nV, oV) {
        // const arr= this.getRandomNumber(4,1,13)
        console.log("新数据");
        this.$bus.$emit("arr", nV);
        
        //  const a=nV.length
        //  console.log(nV[a-1],nV[a-2])
        //  console.log(arr)
      },
    },
    // getItemList2: {
    //   handler(nV, oV) {
    //     // const arr= this.getRandomNumber(4,1,13)
    //     console.log("新数据");
    //     this.$bus.$emit("getItemList2", nV);
    //     //  const a=nV.length
    //     //  console.log(nV[a-1],nV[a-2])
    //     //  console.log(arr)
    //   },
    // },
    // getItemList3: {
    //   handler(nV, oV) {
    //     // const arr= this.getRandomNumber(4,1,13)
    //     console.log("新数据");
    //     this.$bus.$emit("getItemList3", nV);
    //     //  const a=nV.length
    //     //  console.log(nV[a-1],nV[a-2])
    //     //  console.log(arr)
    //   },
    // },
  },
};
</script>

<style scoped lang="less">
@font-face {
  font-family: "iconfont";
  src: url("@/common/iconfont1.ttf?t=1649143183049") format("truetype");
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.clearfix {
  &::before,
  &::after {
    content: "";
    display: table;
  }
  &::after {
    clear: both;
  }
  & {
    *zoom: 1;
  }
}

.item {
  margin-top: 20px;
  width: 100%;
  .itemHeader {
    .clearfix;
  }
  h1 {
    float: left;
    display: block;
    font-size: 25px;
    font-family: "SimSun";
    font-weight: normal;
  }
  .more {
    float: right;
    height: 30px;
    width: 119px;
    color: #424242;

    font-size: 20px;
    .goDetail {
      display: block;
      color: #424242;

      &:hover {
        color: #ff6700;
      }
      &::after {
        padding-left: 18px;
        content: "\e634";
        font-family: "iconfont";
      }
    }
  }

  .itemlist {
    .clearfix;
    margin-top: 15px;
    width: 100%;
    height:600px;
    overflow: hidden;
    li {
      list-style: none;
      float: left;
      width: 246px;
      height: 285.5px;
      margin-left: 15px;
      margin-bottom: 15px;
      background-color: #ffffff;
    }
    li:nth-child(1) {
      margin-left: 0;
    }
    li:nth-child(6) {
      margin-left: 0;
    }
    .sks {
      list-style: none;
      width: 100%;
      height: 100%;
      li {
        margin-left: 0;
        width: 100%;
        height: 135.75px;
        margin-bottom: 15px;
        background-color: rgb(200, 208, 123);
      }
      li:last-child {
        margin-bottom: 0;
      }
    }
    .imgli {
      margin: 40px 43px 8px 43px;
    }
    span {
      display: block;
      height: 18px;
      margin-bottom: 12px;
      margin-left: 15px;
      color: #ff4400;
      font-family: bold;
      font-size: 18px;
    }
    h1 {
      width: 225px;
      // height: 35px;
      display: block;
      margin-left: 10px;
      font-size: 14px;
      // overflow:hidden;
      // text-overflow: ellipsis;
      // white-space:nowrap
      overflow: hidden;
      //两行溢出就用...代替省略
      text-overflow: ellipsis;

      display: -webkit-box;

      -webkit-box-orient: vertical;

      -webkit-line-clamp: 2;
    }
  }
}
</style>