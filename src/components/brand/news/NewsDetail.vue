<template>
  <div
      class="py-4 p-st"
  >

    <div class="isMobile">
      <div class="text-center" style="margin-top: -50px; position: relative">
        <div style="position: relative; display: inline-block; width: 100%">
          <img :src="headerMobile" style="width: 100%;" alt="">
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);"></div>
        </div>
        <div
            class="container custom-container"
            style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);color: #ffffff;height: auto;">
          <img style="z-index: 20; width: 100%" :src="textHeader" alt="">
        </div>
      </div>
    </div>
    <div class="isComputer">
      <div class="text-center" style="position: relative; margin-top: -15px">
        <div style="position: relative; display: inline-block; width: 100%">
          <img :src="header" style="width: 100%;" alt="">
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);"></div>
        </div>
        <div
            class="container custom-container"
            style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);color: #ffffff;height: auto;">
          <img style="z-index: 20" :src="textHeader" alt="">
        </div>
      </div>
    </div>
    <br>
    <div class="container">
      <br />
      <div class="editor-content container" v-html="detail.content" />
    </div>
  </div>
</template>

<script>

import info from "../../../../info";
import {GetDataService} from "@/service/get-data-service";
export default {
  name: "CustomerNews",
  components: {
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      all_info: info.portfolio,
      detail: {},
      id: '',
      header: info.news.header,
      headerMobile: info.news.headerMobile,
      textHeader: info.news.textHeader,
    };
  },
  created() {
    this.convertData();
  },
  methods: {
    async convertData() {
      const fullPath = this.$route.fullPath;
      this.id = fullPath.split("/")[2];
      await GetDataService.getNewsById(this.id).then((response) => {
        this.detail = response.data
      });
    }
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.isMobile {
  display: none;
}

.isComputer {
  display: block;
}
@media only screen and (max-width: 768px) {
  .isMobile {
    display: block;
  }
  .isComputer {
    display: none;
  }
}
</style>
