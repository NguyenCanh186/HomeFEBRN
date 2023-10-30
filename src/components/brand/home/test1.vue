<template>
  <div class="mt-3 row">
    <div class="col-5" style="padding-left: 100px;">
      <img :src="detailService" alt="" style=" width: 90%">
    </div>
    <div class="col-7">
      <img style="width: 90%; margin-top: 150px" :src="SMSBRANDNAME" alt="">
      <div style="margin-top: -35px; max-width: 650px">
        <p style="color: #004383">About SMS Brandname</p>
        <p style="color: #474443;font-family: Inter,serif;font-size: 40px;font-style: normal;font-weight: 600;line-height: normal;">Dịch vụ tin nhắn thương hiệu <br>
          SMS brandname</p>
        <p style="color: #4F4F4F;text-align: justify;font-family: Inter,serif;font-size: 18px;font-style: normal;font-weight: 400;line-height: 28px">SMS Brandname (Tin nhắn thương hiệu) là dịch vụ gửi tin nhắn hàng loạt, cho phép các doanh nghiệp gửi tin nhắn chăm sóc khách hàng và quảng bá đến hàng trăm ngàn người trong khoảng thời gian ngắn và hiển thị tên thương hiệu của doanh nghiệp ở mục người gửi.</p>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../../../info";

export default {
  name: "test1",
  data() {
    return {
      detailService: info.detailService,
      SMSBRANDNAME: info.SMSBRANDNAME,
    };
  },
}
</script>

<style scoped>

</style>
