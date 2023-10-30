<template>
  <div class="pt-4" style="background-color: #f9f9f9">
    <div class="isMobile container text-center mt-5">
      <img :src="detailService" alt="" style="width: 90%">
      <img style="width: 90%; margin-top: 50px" :src="SMSBRANDNAME" alt="">
      <div style="margin-top: -20px; max-width: 650px">
        <p style="color: #004383; font-size: 15px">About SMS Brandname</p>
        <p style="color: #474443;text-align: center;font-family: Inter;font-size: 32px;font-style: normal;font-weight: 700;line-height: 42px;">Dịch vụ tin nhắn thương hiệu <br>
          SMS brandname</p>
        <p style="color: #4F4F4F;text-align: justify;font-family: Inter;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;">SMS Brandname (Tin nhắn thương hiệu) là dịch vụ gửi tin nhắn hàng loạt, cho phép các doanh nghiệp gửi tin nhắn chăm sóc khách hàng và quảng bá đến hàng trăm ngàn người trong khoảng thời gian ngắn và hiển thị tên thương hiệu của doanh nghiệp ở mục người gửi.</p>
      </div>
      <div class="row" style="margin-top: 120px">
        <div class="col-md-12 col-12 text-center">
          <img :src="WHATWEDO" alt="" style="width: 90%">
          <div style="margin-top: -25px">
            <p style="color: #004383; font-size: 15px">About SMS Brandname</p>
            <p style="color: #474443;text-align: center;font-family: Inter;font-size: 32px;font-style: normal;font-weight: 700;line-height: 42px;">Thành tựu dịch vụ SMS Brandname <br>
              của VMG qua các năm</p>
          </div>
        </div>
      </div>
      <br><br>
      <div class="mt-4" style="overflow-x: auto; margin-left: -250px">
        <div class="image-container">
          <div v-for="image in listAcv" :key="image.name" class="image-item">
            <img :src="image.img" />
            <p class="image-name text-left">{{ image.name }}</p>
            <p style="color: #696E77; text-align: justify; font-family: Inter; font-size: 16px; font-style: normal; font-weight: 400; line-height: 24px;">{{ image.content }}</p>
          </div>
        </div>
      </div>
      <br><br>
      <div class="row">
        <div class="col-md-12 col-12 text-center">
          <img :src="service" alt="" style="width: 80%;">
          <div style="margin-top: -35px">
            <p style="color: #004383; font-size: 15px">About SMS Brandname</p>
            <p style="color: #474443;text-align: center;font-family: Inter;font-size: 32px;font-style: normal;font-weight: 700;line-height: 42px;">Các dịch vụ SMS Brandname của VMG</p>
          </div>
        </div>
      </div>
      <img :src="frameMobile1440" style="width: 97%" alt="">
    </div>
    <div class="isMobile" style="position: relative">
      <div class="row mt-5" style="position: relative">
        <img :src="rectangleMobile" style="width: 100%" alt="">
        <div class="overlay"></div>
      </div>
      <img style="position: absolute; top: 70px; right: 0" :src="rectangleMobile2" alt="">
      <img :src="rectangleMobile1" style="position: absolute; top: 310px; right: 20px" alt="">
      <div style="position: absolute; top: 560px; left: 25px">
        <p style="color: var(--Trng, #FFF);font-family: Inter;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;">About SMS Brandname</p>
            <p style="color: var(--Trng, #FFF);font-family: Inter;font-size: 32px;font-style: normal;font-weight: 700;line-height: 42px; /* 131.25% */">Lý do lựa chọn<br>
              sử dụng dịch vụ</p>
        <svg style="margin-left: 270px; margin-top: -140px" xmlns="http://www.w3.org/2000/svg" width="59" height="60" viewBox="0 0 59 60" fill="none">
          <path d="M53.0074 59.5H20.5112V53.4697H48.8182L0 4.34081L4.19295 0.5L53.0074 49.2467V20.7691H59V53.4697V59.5H53.0074Z" fill="#3091D9"/>
        </svg>
        <br><br>
        <table style="width: 100%">
          <tr>
            <td>
              <svg style="margin-top: -15px; margin-left: -10px; margin-right: 15px" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 2.99994C9.72 2.99994 3 9.71994 3 17.9999C3 26.2799 9.72 32.9999 18 32.9999C26.28 32.9999 33 26.2799 33 17.9999C33 9.71994 26.28 2.99994 18 2.99994ZM13.935 24.4349L8.55 19.0499C7.965 18.4649 7.965 17.5199 8.55 16.9349C9.135 16.3499 10.08 16.3499 10.665 16.9349L15 21.2549L25.32 10.9349C25.905 10.3499 26.85 10.3499 27.435 10.9349C28.02 11.5199 28.02 12.4649 27.435 13.0499L16.05 24.4349C15.48 25.0199 14.52 25.0199 13.935 24.4349Z" fill="#3091D9"/>
              </svg>
            </td>
            <td>
              <p style="color: var(--Trng, #FFF);font-family: Inter;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px; /* 142.857% */">Giải pháp tiếp thị trên diện rộng với mức độ lan truyền cao.</p>
            </td>
          </tr>
          <tr>
            <td>
              <svg style="margin-top: -15px; margin-left: -10px; margin-right: 15px" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 2.99994C9.72 2.99994 3 9.71994 3 17.9999C3 26.2799 9.72 32.9999 18 32.9999C26.28 32.9999 33 26.2799 33 17.9999C33 9.71994 26.28 2.99994 18 2.99994ZM13.935 24.4349L8.55 19.0499C7.965 18.4649 7.965 17.5199 8.55 16.9349C9.135 16.3499 10.08 16.3499 10.665 16.9349L15 21.2549L25.32 10.9349C25.905 10.3499 26.85 10.3499 27.435 10.9349C28.02 11.5199 28.02 12.4649 27.435 13.0499L16.05 24.4349C15.48 25.0199 14.52 25.0199 13.935 24.4349Z" fill="#3091D9"/>
              </svg>
            </td>
            <td>
              <p style="color: var(--Trng, #FFF);font-family: Inter;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px; /* 142.857% */">Tên thương hiệu ở phần Người gửi, không phải là đầu số.</p>
            </td>
          </tr>
          <tr>
            <td>
              <svg style="margin-top: -15px; margin-left: -10px; margin-right: 15px" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 2.99994C9.72 2.99994 3 9.71994 3 17.9999C3 26.2799 9.72 32.9999 18 32.9999C26.28 32.9999 33 26.2799 33 17.9999C33 9.71994 26.28 2.99994 18 2.99994ZM13.935 24.4349L8.55 19.0499C7.965 18.4649 7.965 17.5199 8.55 16.9349C9.135 16.3499 10.08 16.3499 10.665 16.9349L15 21.2549L25.32 10.9349C25.905 10.3499 26.85 10.3499 27.435 10.9349C28.02 11.5199 28.02 12.4649 27.435 13.0499L16.05 24.4349C15.48 25.0199 14.52 25.0199 13.935 24.4349Z" fill="#3091D9"/>
              </svg>
            </td>
            <td>
              <p style="color: var(--Trng, #FFF);font-family: Inter;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px; /* 142.857% */">Tin nhắn quảng cáo</p>
            </td>
          </tr>
          <tr>
            <td>
              <svg style="margin-top: -15px; margin-left: -10px; margin-right: 15px" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M18 2.99994C9.72 2.99994 3 9.71994 3 17.9999C3 26.2799 9.72 32.9999 18 32.9999C26.28 32.9999 33 26.2799 33 17.9999C33 9.71994 26.28 2.99994 18 2.99994ZM13.935 24.4349L8.55 19.0499C7.965 18.4649 7.965 17.5199 8.55 16.9349C9.135 16.3499 10.08 16.3499 10.665 16.9349L15 21.2549L25.32 10.9349C25.905 10.3499 26.85 10.3499 27.435 10.9349C28.02 11.5199 28.02 12.4649 27.435 13.0499L16.05 24.4349C15.48 25.0199 14.52 25.0199 13.935 24.4349Z" fill="#3091D9"/>
              </svg>
            </td>
            <td>
              <p style="color: var(--Trng, #FFF);font-family: Inter;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px; /* 142.857% */">Tin chăm sóc khách hàng</p>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="isComputer">
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

      <div class="row" style="margin-top: 120px">
        <div class="col-md-12 col-12 text-center">
          <img :src="WHATWEDO" alt="">
          <div style="margin-top: -100px">
            <p style="color: #0A397F;font-family: Inter;font-size: 18px;font-style: normal;font-weight: 400;line-height: 28px; /* 155.556% */">About SMS Brandname</p>
            <p style="color: #474443;text-align: center;font-family: Inter;font-size: 40px;font-style: normal;font-weight: 700;line-height: 52px; /* 130% */">Thành tựu dịch vụ SMS Brandname <br>
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
            <p style="color: #0A397F;font-family: Inter;font-size: 18px;font-style: normal;font-weight: 400;line-height: 28px; /* 155.556% */">About SMS Brandname</p>
            <p style="color: #474443;text-align: center;font-family: Inter;font-size: 40px;font-style: normal;font-weight: 700;line-height: 52px; /* 130% */">Các dịch vụ SMS Brandname của VMG</p>
          </div>
        </div>
      </div>
      <br><br>
      <div class="image-container mt-4">
        <img :src="frame" alt="" style="width: 100%">
      </div>
      <br><br>
      <div class="mt-5">
        <img :src="rectangle" style="width: 100%" alt="">
      </div>
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
      frameMobile1440: info.frameMobile144,
      rectangle: info.rectangle,
      rectangleMobile: info.rectangleMobile,
      rectangleMobile1: info.rectangleMobile1,
      rectangleMobile2: info.rectangleMobile2,
    };
  }
};
</script>

<style scoped>
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
  width: 400px;
  position: relative;
  margin-left: 100px;
}

.image-name {
  color: #0F3567;
  /* Title/H4 */
  font-family: Inter,serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px; /* 133.333% */
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
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6); /* Màu đen với độ mờ 50% */
  pointer-events: none; /* Để ảnh vẫn có thể tương tác */
}
</style>
