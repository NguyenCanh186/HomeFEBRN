<template>
  <div
      class="py-4 p-st"
  >

    <br>
    <div class="container">
      <br />
      <div class="editor-content" v-html="detail.content" />
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
      id: ''
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

</style>
