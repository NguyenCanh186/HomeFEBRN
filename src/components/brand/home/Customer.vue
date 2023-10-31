<template>
  <div
    class="py-4 p-st" style="background-color: #f9f9f9"
  >
    <div class="container isMobile" >
      <div class="col-md-12 col-12 text-center" style="position: relative">
        <img :src="partner" alt="" style="width: 85%">
        <div style="margin-top: -20px; max-width: 650px">
          <p style="color: #004383; font-size: 15px">About SMS Brandname</p>
          <p style="color: #474443;text-align: center;font-family: Inter;font-size: 32px;font-style: normal;font-weight: 700;line-height: 42px;">Đối tác sử dụng
            dịch vụ</p>
          <img :src="frame154" alt="">
        </div>
      </div>
    </div>
    <div class="container1 isComputer">
      <div class="col-md-12 col-12 text-center">
        <img :src="partner" alt="">
        <div style="margin-top: -100px">
          <p style="color: #0A397F;font-family: Inter;font-size: 18px;font-style: normal;font-weight: 400;line-height: 28px; /* 155.556% */">Partner</p>
          <p style="color: #474443;text-align: center;font-family: Inter;font-size: 40px;font-style: normal;font-weight: 700;line-height: 52px; /* 130% */">Đối tác sử dụng dịch vụ </p>
        </div>
        <br><br>
        <div>
          <img style="width: 70%" :src="frame151" alt=""><br><br><br>
          <img style="width: 70%" :src="frame152" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../../../info";

export default {
  name: "Contact",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      partner: info.partner,
      frame151: info.frame151,
      frame152: info.frame152,
      frame153: info.frame153,
      frame154: info.frame154,
      listImg: info.customer,
      group4: info.group4,
      email: "",
      name: "",
      text: "",
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
    };
  },
  methods: {
    closeSnackbar(val) {
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val;
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
.image-name {
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  text-align: center;
}
.image-container {
  display: flex;
  flex-wrap: wrap; /* To wrap images into multiple lines if needed */
  justify-content: center; /* Horizontally center the images */
  align-items: center; /* Vertically center the images */
}
.container1 {
  width: 100%;
  padding-right: 0px;
  padding-left: 0px;
}
/* Tuỳ chỉnh kích thước của hình ảnh nếu cần thiết */
.image-container img {
  width: 180px; /* Ví dụ: đặt kích thước 100px cho hình ảnh */
  height: auto; /* Để tự động điều chỉnh chiều cao dựa trên tỷ lệ */
  margin: 20px; /* Add a 40px spacing between each image */
}
.title {
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 52px;
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
