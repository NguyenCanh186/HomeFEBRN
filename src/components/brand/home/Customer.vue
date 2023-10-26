<template>
  <div
    class="py-4 p-st"
  >
    <div class="container">
      <div class="col-md-12 col-12 text-center">
        <img :src="partner" alt="">
        <div style="margin-top: -100px">
          <p style="color: #0A397F;

/* Body/L */
font-family: Inter;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: 28px; /* 155.556% */">Partner</p>
          <p style="color: #474443;
text-align: center;

/* Title/H2 */
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 700;
line-height: 52px; /* 130% */">Đối tác sử dụng dịch vụ </p>
        </div>
        <br><br>
        <div>
          <img :src="frame151" alt=""><br><br><br>
          <img :src="frame152" alt="">
        </div>
      </div>
      <Snackbar
        :showSnackbar="showSnackbar"
        @close="closeSnackbar"
        :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor"
      />
    </div>
  </div>
</template>

<script>
import Snackbar from "../../helpers/Snackbar.vue";
import info from "../../../../info";

export default {
  name: "Contact",
  components: {
    Snackbar,
  },
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
      listImg: info.customer,
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
</style>
