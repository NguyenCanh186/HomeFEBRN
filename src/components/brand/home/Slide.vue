<template>
  <div
      :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
      class="p-st"
  >
    <div class="isMobile" style="margin-top: -13px">
      <div style="position:relative;">
        <img :src="slideMobile" alt="" style="width: 100%; height: 100%;">
        <div class="overlay"></div>
      </div>
      <div
          class="container custom-container"
          data-aos="fade"
          data-aos-once="true"
          data-aos-duration="1000"
          style="position: absolute;top: 6%;left: 50%;transform: translate(-50%, -50%);color: #ffffff;height: auto;">
        <h1 style="color: #FFF;font-family: Inter,serif;font-size: 25px;font-style: normal;font-weight: 700;line-height: 30px;">HỆ THỐNG TIN NHẮN <br> THƯƠNG HIỆU </h1>
        <h1 style="font-weight: 700;font-size: 35px;">SMS BRANDNAME <br> VMG</h1>
        <hr style="background-color: white; width: 350px; margin-left: 0">
        <h5 style="color: #FFF;font-family: Inter,serif;font-size: 16px;font-style: normal;font-weight: 700;line-height: 20px;">
          Hỗ trợ hiển thị tên thương hiệu (Brandname) khi gửi tin nhắn <br>Quảng cáo và tin nhắn Chăm sóc khách hàng
        </h5>
        <div class="mt-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="252" height="50" fill="none" @click="goContact">
            <rect width="252" height="50" rx="12" fill="#F87B07"/>
            <text x="45%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="white">ĐĂNG KÝ NGAY </text>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" x="75%" y="20%">
              <path d="M2.16663 18.4167V21.6667H10.8333V19.6192H4.22496V18.4167C4.22496 17.7233 7.61579 16.1417 10.8333 16.1417C11.8733 16.1525 12.9025 16.2933 13.8991 16.5533L15.5458 14.9067C14.0291 14.3975 12.4583 14.1158 10.8333 14.0833C7.94079 14.0833 2.16663 15.5242 2.16663 18.4167ZM10.8333 4.33333C8.43913 4.33333 6.49996 6.27249 6.49996 8.66666C6.49996 11.0608 8.43913 13 10.8333 13C13.2275 13 15.1666 11.0608 15.1666 8.66666C15.1666 6.27249 13.2275 4.33333 10.8333 4.33333ZM10.8333 10.8333C9.64163 10.8333 8.66663 9.86916 8.66663 8.66666C8.66663 7.46416 9.64163 6.49999 10.8333 6.49999C12.025 6.49999 13 7.47499 13 8.66666C13 9.85833 12.0358 10.8333 10.8333 10.8333ZM23.5083 14.4625L22.425 15.5458L20.2041 13.3792L21.2875 12.2958C21.515 12.0683 21.8941 12.0683 22.1216 12.2958L23.5083 13.6825C23.7358 13.91 23.7358 14.2892 23.5083 14.5167M13 20.5183L19.565 13.9533L21.7858 16.12L15.2858 22.6958H13V20.5183Z" fill="white"/>
            </svg>
          </svg>
          <br>
          <svg class="mt-3" xmlns="http://www.w3.org/2000/svg" width="252" height="50" viewBox="0 0 252 50" fill="none">
            <rect x="0.5" y="0.5" width="251" height="49" rx="11.5" fill="black" fill-opacity="0.3" stroke="#3091D9"/>
            <text x="45%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="white">TIN KHUYẾN MÃI </text>
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" x="75%" y="20%">
              <path d="M23.8334 13V21.6667C23.8334 22.2413 23.6051 22.7924 23.1988 23.1987C22.7924 23.6051 22.2413 23.8333 21.6667 23.8333H4.33337C3.75874 23.8333 3.20764 23.6051 2.80131 23.1987C2.39498 22.7924 2.16671 22.2413 2.16671 21.6667V13C1.87939 13 1.60384 12.8859 1.40067 12.6827C1.19751 12.4795 1.08337 12.204 1.08337 11.9167V8.66667C1.08337 8.09204 1.31165 7.54094 1.71798 7.13461C2.1243 6.72828 2.67541 6.5 3.25004 6.5H6.68421C6.56504 6.16417 6.50004 5.79584 6.50004 5.41667C6.50004 4.55472 6.84245 3.72807 7.45194 3.11857C8.06144 2.50908 8.88809 2.16667 9.75004 2.16667C10.8334 2.16667 11.7867 2.70834 12.3825 3.51V3.49917L13 4.33334L13.6175 3.49917V3.51C14.2134 2.70834 15.1667 2.16667 16.25 2.16667C17.112 2.16667 17.9386 2.50908 18.5481 3.11857C19.1576 3.72807 19.5 4.55472 19.5 5.41667C19.5 5.79584 19.435 6.16417 19.3159 6.5H22.75C23.3247 6.5 23.8758 6.72828 24.2821 7.13461C24.6884 7.54094 24.9167 8.09204 24.9167 8.66667V11.9167C24.9167 12.204 24.8026 12.4795 24.5994 12.6827C24.3962 12.8859 24.1207 13 23.8334 13ZM4.33337 21.6667H11.9167V13H4.33337V21.6667ZM21.6667 21.6667V13H14.0834V21.6667H21.6667ZM9.75004 4.33334C9.46272 4.33334 9.18717 4.44747 8.98401 4.65064C8.78084 4.8538 8.66671 5.12935 8.66671 5.41667C8.66671 5.70399 8.78084 5.97954 8.98401 6.1827C9.18717 6.38587 9.46272 6.5 9.75004 6.5C10.0374 6.5 10.3129 6.38587 10.5161 6.1827C10.7192 5.97954 10.8334 5.70399 10.8334 5.41667C10.8334 5.12935 10.7192 4.8538 10.5161 4.65064C10.3129 4.44747 10.0374 4.33334 9.75004 4.33334ZM16.25 4.33334C15.9627 4.33334 15.6872 4.44747 15.484 4.65064C15.2808 4.8538 15.1667 5.12935 15.1667 5.41667C15.1667 5.70399 15.2808 5.97954 15.484 6.1827C15.6872 6.38587 15.9627 6.5 16.25 6.5C16.5374 6.5 16.8129 6.38587 17.0161 6.1827C17.2192 5.97954 17.3334 5.70399 17.3334 5.41667C17.3334 5.12935 17.2192 4.8538 17.0161 4.65064C16.8129 4.44747 16.5374 4.33334 16.25 4.33334ZM3.25004 8.66667V10.8333H11.9167V8.66667H3.25004ZM14.0834 8.66667V10.8333H22.75V8.66667H14.0834Z" fill="white"/>
            </svg>
          </svg>
        </div>
      </div>
      <DetailServive />
      <Customer />
    </div>
    <div class="isComputer container1" >
      <div style="position: relative">
        <div class="image-container">
          <img :src="picture" style="width: 100%; height: auto;" />
          <div class="overlay"></div>
        </div>
        <div style="position: absolute; top: 30%; left: 15%">
          <div
              style="z-index: 1000;color: #ffffff;height: auto;">
            <h1 class="slide-title">HỆ THỐNG <br>TIN NHẮN THƯƠNG HIỆU </h1>
            <h1 style="font-weight: 700;font-size: 50px;">SMS BRANDNAME VMG</h1>
            <hr style="background-color: white; width: 500px; margin-left: 0">
            <h5 class="slide-content">
              Hỗ trợ hiển thị tên thương hiệu (Brandname) khi gửi tin nhắn <br>Quảng cáo và tin nhắn Chăm sóc khách hàng
            </h5>
            <div class="mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="252" height="50" viewBox="0 0 252 50" fill="none" @click="goContact">
                <rect width="252" height="50" rx="12" fill="#F87B07"/>
                <text x="45%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="white">ĐĂNG KÝ NGAY </text>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" x="75%" y="20%">
                  <path d="M2.16663 18.4167V21.6667H10.8333V19.6192H4.22496V18.4167C4.22496 17.7233 7.61579 16.1417 10.8333 16.1417C11.8733 16.1525 12.9025 16.2933 13.8991 16.5533L15.5458 14.9067C14.0291 14.3975 12.4583 14.1158 10.8333 14.0833C7.94079 14.0833 2.16663 15.5242 2.16663 18.4167ZM10.8333 4.33333C8.43913 4.33333 6.49996 6.27249 6.49996 8.66666C6.49996 11.0608 8.43913 13 10.8333 13C13.2275 13 15.1666 11.0608 15.1666 8.66666C15.1666 6.27249 13.2275 4.33333 10.8333 4.33333ZM10.8333 10.8333C9.64163 10.8333 8.66663 9.86916 8.66663 8.66666C8.66663 7.46416 9.64163 6.49999 10.8333 6.49999C12.025 6.49999 13 7.47499 13 8.66666C13 9.85833 12.0358 10.8333 10.8333 10.8333ZM23.5083 14.4625L22.425 15.5458L20.2041 13.3792L21.2875 12.2958C21.515 12.0683 21.8941 12.0683 22.1216 12.2958L23.5083 13.6825C23.7358 13.91 23.7358 14.2892 23.5083 14.5167M13 20.5183L19.565 13.9533L21.7858 16.12L15.2858 22.6958H13V20.5183Z" fill="white"/>
                </svg>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="252" height="50" viewBox="0 0 252 50" fill="none" style="margin-left: 20px">
                <rect x="0.5" y="0.5" width="251" height="49" rx="11.5" fill="black" fill-opacity="0.3" stroke="#3091D9"/>
                <text x="45%" y="50%" text-anchor="middle" alignment-baseline="middle" fill="white">TIN KHUYẾN MÃI </text>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none" x="75%" y="20%">
                  <path d="M23.8334 13V21.6667C23.8334 22.2413 23.6051 22.7924 23.1988 23.1987C22.7924 23.6051 22.2413 23.8333 21.6667 23.8333H4.33337C3.75874 23.8333 3.20764 23.6051 2.80131 23.1987C2.39498 22.7924 2.16671 22.2413 2.16671 21.6667V13C1.87939 13 1.60384 12.8859 1.40067 12.6827C1.19751 12.4795 1.08337 12.204 1.08337 11.9167V8.66667C1.08337 8.09204 1.31165 7.54094 1.71798 7.13461C2.1243 6.72828 2.67541 6.5 3.25004 6.5H6.68421C6.56504 6.16417 6.50004 5.79584 6.50004 5.41667C6.50004 4.55472 6.84245 3.72807 7.45194 3.11857C8.06144 2.50908 8.88809 2.16667 9.75004 2.16667C10.8334 2.16667 11.7867 2.70834 12.3825 3.51V3.49917L13 4.33334L13.6175 3.49917V3.51C14.2134 2.70834 15.1667 2.16667 16.25 2.16667C17.112 2.16667 17.9386 2.50908 18.5481 3.11857C19.1576 3.72807 19.5 4.55472 19.5 5.41667C19.5 5.79584 19.435 6.16417 19.3159 6.5H22.75C23.3247 6.5 23.8758 6.72828 24.2821 7.13461C24.6884 7.54094 24.9167 8.09204 24.9167 8.66667V11.9167C24.9167 12.204 24.8026 12.4795 24.5994 12.6827C24.3962 12.8859 24.1207 13 23.8334 13ZM4.33337 21.6667H11.9167V13H4.33337V21.6667ZM21.6667 21.6667V13H14.0834V21.6667H21.6667ZM9.75004 4.33334C9.46272 4.33334 9.18717 4.44747 8.98401 4.65064C8.78084 4.8538 8.66671 5.12935 8.66671 5.41667C8.66671 5.70399 8.78084 5.97954 8.98401 6.1827C9.18717 6.38587 9.46272 6.5 9.75004 6.5C10.0374 6.5 10.3129 6.38587 10.5161 6.1827C10.7192 5.97954 10.8334 5.70399 10.8334 5.41667C10.8334 5.12935 10.7192 4.8538 10.5161 4.65064C10.3129 4.44747 10.0374 4.33334 9.75004 4.33334ZM16.25 4.33334C15.9627 4.33334 15.6872 4.44747 15.484 4.65064C15.2808 4.8538 15.1667 5.12935 15.1667 5.41667C15.1667 5.70399 15.2808 5.97954 15.484 6.1827C15.6872 6.38587 15.9627 6.5 16.25 6.5C16.5374 6.5 16.8129 6.38587 17.0161 6.1827C17.2192 5.97954 17.3334 5.70399 17.3334 5.41667C17.3334 5.12935 17.2192 4.8538 17.0161 4.65064C16.8129 4.44747 16.5374 4.33334 16.25 4.33334ZM3.25004 8.66667V10.8333H11.9167V8.66667H3.25004ZM14.0834 8.66667V10.8333H22.75V8.66667H14.0834Z" fill="white"/>
                </svg>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <DetailServive />
      <Customer />
    </div>

  </div>
</template>

<style scoped>

</style>

<script>
import info from "../../../../info";
import Customer from "@/components/brand/home/Customer.vue";
import DetailServive from "@/components/brand/home/DetailServive.vue";
export default {
  name: "Home",
  components: {
    DetailServive,
    Customer,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      slideMobile: info.slideMobile,
    };
  },
  methods: {
    goContact() {
      this.$router.push('/contact').catch(() => {});
    },
  },
};
</script>

<style scoped>
.custom-container {
  color: #ffffff;
}

.btn {
  width: 218px;
  padding: 16px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-color: #ffffff;
  background-color: white;
  color: #3380CB;
}
.btn:hover {
  background-color: #3380CB;
  border-color: white;
  color: white;
}
.image-container {
  position: relative;
}
.container1 {
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
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
.btn:focus {
  background-color: #3380CB;
  border-color: #3380CB;
  color: white;
}
.slide-title {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
}
.slide-content {
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px;
}
img {
  max-width: 100%;
  max-height: 100%;
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

/* LEAVES */
</style>
