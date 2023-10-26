<template>
  <div
      class="py-4 p-st"
      :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="mt-3 row">
      <div class="col-5" style="padding-left: 100px;">
        <img :src="detailService" alt="" style=" width: 90%">
      </div>
      <div class="col-7">
        <img style="width: 90%; margin-top: 150px" :src="SMSBRANDNAME" alt="">
        <div style="margin-top: -35px; max-width: 650px">
          <p style="color: #004383">About SMS Brandname</p>
          <p style="color: #474443;
font-family: Inter,serif;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;">Dịch vụ tin nhắn thương hiệu <br>
            SMS brandname</p>
          <p style="color: #4F4F4F;
text-align: justify;

/* Body/L */
font-family: Inter,serif;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */">SMS Brandname (Tin nhắn thương hiệu) là dịch vụ gửi tin nhắn hàng loạt, cho phép các doanh nghiệp gửi tin nhắn chăm sóc khách hàng và quảng bá đến hàng trăm ngàn người trong khoảng thời gian ngắn và hiển thị tên thương hiệu của doanh nghiệp ở mục người gửi.</p>
        </div>
      </div>
    </div>

    <div class="row" style="margin-top: 120px">
      <div class="col-md-12 col-12 text-center">
        <img :src="WHATWEDO" alt="">
        <div style="margin-top: -100px">
          <p style="color: #0A397F;

/* Body/L */
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */">About SMS Brandname</p>
          <p style="color: #474443;
text-align: center;

/* Title/H2 */
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 52px; /* 130% */">Thành tựu dịch vụ SMS Brandname <br>
            của VMG qua các năm</p>
        </div>
      </div>
    </div>
    <br><br>
    <div class="image-container mt-4" style="max-height: 600px; overflow-y: auto;">
      <div
          v-for="image in listAcv"
          :key="image.name"
          class="image-item"
          style="width: 350px"
      >
        <img :src="image.img" />
        <p class="image-name text-left">{{ image.name }}</p>
        <p style="color: #696E77; text-align: justify; font-family: Inter; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;">{{ image.content }}</p>
      </div>
    </div>
    <br><br>
    <div class="row">
      <div class="col-md-12 col-12 text-center">
        <img :src="service" alt="">
        <div style="margin-top: -100px">
          <p style="color: #0A397F;

/* Body/L */
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */">About SMS Brandname</p>
          <p style="color: #474443;
text-align: center;

/* Title/H2 */
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 52px; /* 130% */">Các dịch vụ SMS Brandname của VMG</p>
        </div>
      </div>
    </div>
    <br><br>
    <div class="image-container mt-4">
      <img :src="frame" alt="" style="width: 100%">
    </div>
    <br><br>
    <div class="row mt-5">
      <img :src="rectangle" style="width: 100%" alt="">
    </div>
  </div>
</template>

<script>
import info from "../../../../info";
export default {
  name: "Portfolio",
  components: {
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      listImg: info.smsMkt,
      listAcv: info.achievement,
      detailService: info.detailService,
      SMSBRANDNAME: info.SMSBRANDNAME,
      WHATWEDO: info.WHATWEDO,
      service: info.service,
      frame: info.frame,
      rectangle: info.rectangle,
    };
  }
};
</script>

<style scoped>
.h5-spacing {
  margin-bottom: 40px; /* Tuỳ chỉnh khoảng cách giữa các thẻ h5 */
}
.image-container {
  scrollbar-width: thin;
  scrollbar-color: #f8f9fa #fffefe;
  display: flex;
  margin: 0 180px; /* Cách lề 2 bên 20px */
}
.image-container::-webkit-scrollbar {
  width: 0;
}

.image-container::-webkit-scrollbar-thumb {
  background-color: #f8f9fa;
}

.image-container::-webkit-scrollbar-thumb:hover {
  background-color: #f8f9fa;
}

.image-container::-webkit-scrollbar-track {
  background-color: #f8f9fa;
}
.image-item {
  width: 300px;
  position: relative;
  margin-left: 100px;
}

.secvice-item {
  width: 250px; /* Tuỳ chỉnh kích thước ảnh theo nhu cầu */
  height: 250px; /* Để tự động điều chỉnh chiều cao dựa trên tỷ lệ */
}

.image-name {
  color: #0F3567;
  /* Title/H4 */
  font-family: Inter,serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
}
.title {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
}
</style>
