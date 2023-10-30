<template>
  <div style="background-color: #f9f9f9">
    <div class="isMobile">
      <div class="text-center" style="margin-top: -15px">
        <div style="position: relative; display: inline-block; width: 100%">
          <img :src="headerMobile" style="width: 100%;" alt="">
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);"></div>
        </div>
        <div
            class="container custom-container"
            data-aos="fade"
            data-aos-once="true"
            data-aos-duration="1000"
            style="position: absolute;top: 7%;left: 50%;transform: translate(-50%, -50%);color: #ffffff;height: auto;">
          <img style="z-index: 20; width: 100%" :src="textHeader" alt="">
        </div>
      </div>
      <div class="container text-center">
        <img class="mt-5" style="width: 85%; text-align: center" :src="p1" alt="">
        <div style="position: relative">
          <img :src="api" style="width: 100%; margin-top: 70px" alt="">
          <p style="color: #474443;text-align: center;font-family: Inter;font-size: 32px;font-style: normal;font-weight: 700;line-height: 42px; margin-top: -20px">
            Giới thiệu <br> hệ thống API
          </p><br>
          <p style="color: var(--Text-color, #474443);text-align: justify;font-family: Inter;font-size: 18px;font-style: normal;font-weight: 400;line-height: 28px;">Nếu Website, hệ thống của bạn đang cần tính năng gửi SMS đến điện thoại khác hàng chẳng hạn như nhắn mã xác nhận khi đăng ký Website, hay phần mêm quản lý nhân sự cần nhắn tin thông báo lịch họp, chúc mừng sinh nhật nhân viên, Website thương mại điện tử nhắn tin thông báo giao dịch … Hệ thống SMS API của VMG sẽ đáp ứng được hoàn toàn các yêu cầu của bạn.
            Hệ thống API của chúng tôi đảm bảo tính nhanh, đơn giản, tin cậy và dễ dàng tích hợp vào bất kỳ hệ thống nào.</p>
          <br>
          <img class="mt-1" style="width: 95%; text-align: center" :src="p2" alt="">
        </div>
      </div>
      <br>
      <div class="container">
        <p style="color: #474443;font-family: Inter;font-size: 24px;font-style: normal;font-weight: 700;line-height: 32px; /* 133.333% */">Hướng dẫn kết nối API</p>
        <ul>
          <li>Bước 1: Thực hiện khai báo mở mã với nhà mạng (Viettel, Vinaphone, Mobifone)</li>
          <li>Bước 2: Tiến hành xây dựng, kết nối API</li>
          <li>Bước 3: Nghiệm thu và triển khai kinh doanh dịch vụ.</li>
        </ul>
        <br>
        <div class=" text-center mb-5">
          <img style="width: 90%" :src="button" alt="">
        </div>
      </div>
    </div>
    <div class="isComputer">
      <div class="text-center">
        <div style="position: relative; display: inline-block; width: 100%">
          <img :src="header" style="width: 100%;" alt="">
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);"></div>
        </div>
        <div
            class="container custom-container"
            data-aos="fade"
            data-aos-once="true"
            data-aos-duration="1000"
            style="position: absolute;top: 15%;left: 50%;transform: translate(-50%, -50%);color: #ffffff;height: auto;">
          <img style="z-index: 20" :src="textHeader" alt="">
        </div>
      </div>
      <div style="padding: 50px 200px 0 200px">
        <div class="row">
          <div class="col-5">
            <img :src="p1" alt="">
          </div>
          <div class="col-7">
            <img :src="api" style="width: 100%; margin-top: 130px" alt="">
            <p style="color: #474443;font-family: Inter,serif;font-size: 40px;font-style: normal;font-weight: 600;line-height: normal; margin-top: -50px">
              Giới thiệu hệ thống API
            </p>
            <br>
            <p style="font-size: 25px">Nếu Website, hệ thống của bạn đang cần tính năng gửi SMS đến điện thoại khác hàng chẳng hạn như nhắn mã xác nhận khi đăng ký Website, hay phần mêm quản lý nhân sự cần nhắn tin thông báo lịch họp, chúc mừng sinh nhật nhân viên, Website thương mại điện tử nhắn tin thông báo giao dịch … Hệ thống SMS API của VMG sẽ đáp ứng được hoàn toàn các yêu cầu của bạn.
              Hệ thống API của chúng tôi đảm bảo tính nhanh, đơn giản, tin cậy và dễ dàng tích hợp vào bất kỳ hệ thống nào.</p>
          </div>
        </div>
        <div class="row">
          <div class="col-6 text-center" style="margin-top: 100px">
            <p style="color: #474443;font-family: Inter,serif;font-size: 40px;font-style: normal;font-weight: 600;line-height: normal;">
              Hướng dẫn kết nối API
            </p>
            <img :src="step" alt="" style="margin-top: 20px">
            <div class="mt-5">
              <img :src="button" alt="">
            </div>
          </div>
          <div class="col-6">
            <img style="width: 100%" :src="p2" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../../../info";

export default {
  name: "API",
  data() {
    return {
      header: info.API.header,
      headerMobile: info.API.headerMobile,
      textHeader: info.API.textHeader,
      p1: info.API.p1,
      p2: info.API.p2,
      button: info.API.button,
      api: info.API.api,
      step: info.API.step,
    };
  },
}
</script>

<style scoped>
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
li {
  color: var(--Text-color, #474443);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
}
</style>
