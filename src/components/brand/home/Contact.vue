<template>
  <div class="" style="">
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
      <div class="container text-center mt-5">
        <div style="position: relative">
          <img :src="email" alt="">
          <svg style="position: absolute; top: 73%; left: 10%" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path d="M35 27.5H50V37.5H45V32.5H35V27.5ZM45 10H20C16.6848 10 13.5054 11.317 11.1612 13.6612C8.81696 16.0054 7.5 19.1848 7.5 22.5V45H2.5V50H52.5C53.8261 50 55.0978 49.4732 56.0355 48.5355C56.9732 47.5978 57.5 46.3261 57.5 45V22.5C57.5 20.8585 57.1767 19.233 56.5485 17.7165C55.9203 16.1999 54.9996 14.8219 53.8388 13.6612C52.6781 12.5004 51.3001 11.5797 49.7835 10.9515C48.267 10.3233 46.6415 10 45 10ZM27.5 45H12.5V22.5C12.5 20.5109 13.2902 18.6032 14.6967 17.1967C16.1032 15.7902 18.0109 15 20 15C21.9891 15 23.8968 15.7902 25.3033 17.1967C26.7098 18.6032 27.5 20.5109 27.5 22.5V45ZM52.5 45H32.5V22.5C32.5 19.8 31.625 17.15 30 15H45C46.9891 15 48.8968 15.7902 50.3033 17.1967C51.7098 18.6032 52.5 20.5109 52.5 22.5V45Z" fill="#3091D9"/>
          </svg>
          <div style="text-align: left; position: absolute; top: 75%; left: 32%">
            <p style="color: var(--Primary, #3091D9);font-family: Inter;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;">Email</p>
          </div>
          <div style="text-align: left; position: absolute; top: 82%; left: 32%">
            <a :href="'mailto:sale.smsbrand@vmgmedia.vn'" style="color: var(--Text-color, #474443);font-family: Inter;font-size: 14px;font-style: normal;font-weight: 700;">Sale.smsbrand@vmgmedia.vn</a>
          </div>
        </div>

        <a :href="'tel:19001255'"><img :src="phone" alt="" class="mt-4"></a>
        <a class="contact-info" href="https://www.google.com/maps/dir/21.0221987,105.8172885/T%E1%BA%A7ng+6+Peakview+Tower,+36+Ho%C3%A0ng+C%E1%BA%A7u,+P.%C3%94+Ch%E1%BB%A3+D%E1%BB%ABa,+Q.%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i/@21.021601,105.8168241,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3135abb4623fb1d3:0x10291e8bc5361d64!2m2!1d105.8236649!2d21.0192364?entry=ttu"><img :src="address" alt="" class="mt-4"></a>

      </div>
      <br><br>
      <p style="color: var(--Primary, #3091D9);text-align: center;font-family: Inter;font-size: 32px;font-style: normal;font-weight: 1000;line-height: 42px;">Vui lòng để lại
        <br>
        thông tin, chúng tôi sẽ <br>
        liên lạc với bạn.</p>
      <div class="container text-center">
        <p style="color: var(--Text-color, #474443);text-align: center;font-family: Inter;font-size: 16px;font-style: normal;font-weight: 500;line-height: 24px; /* 150% */">Chúng tôi rất trân trọng mọi sự quan tâm mà bạn đang dành cho dịch vụ tin nhắn thương hiệu SMS Brandname của VMG MEDIA. </p>
        <br>
        <form style="width: 100%" class="mb-5">
              <input v-model="form.name" type="text" class="custom-form mt-4" id="exampleInputEmail1" placeholder="Tên ">
              <input v-model="form.phoneNumber" type="number" class="custom-form mt-4" id="exampleInputPassword1" placeholder="Số điện thoại">
              <input v-model="form.email" type="email" class="custom-form mt-4" id="exampleInputPassword1" placeholder="Email">
              <input v-model="form.businessName" type="text" class="custom-form mt-4" id="exampleInputPassword1" placeholder="Lĩnh vực kinh doanh của bạn là gì?">
          <div class="form-group mt-4">
            <select v-model="form.customerType" class="custom-form" placeholder="">
              <option :value="null" style="color: rgba(105, 110, 119, 0.50);font-family: Inter,serif;font-size: 9px;font-style: normal;font-weight: 400;line-height: 16px;" disabled selected hidden>Bạn là khách hàng cá nhân hay doanh nghiệp?</option>
              <option>Khách hàng cá nhân</option>
              <option>Doanh nghiệp</option>
            </select>
          </div>
          <div class="form-group mt-4">
            <input v-model="form.address" type="text" class="custom-form" id="exampleInputPassword1" placeholder="Địa chỉ công ty">
          </div>
        </form>
        <div class="d-flex justify-content-end mt-1 mb-4">
          <button type="submit"  style="display: flex;border-radius: 8.065px;background: #FF5151;color: #f9f9f9;width: 100%;padding: 13.825px 35.146px 13.825px 35.582px;flex-direction: column;justify-content: center;align-items: center;" @click="submitForm">GỬI THÔNG TIN</button>
        </div>
      </div>

    </div>
    <div class="isComputer">
      <div class="text-center">
        <div style="position: relative; display: inline-block; width: 100%">
          <img :src="header" style="width: 100%;" alt="">
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.5);"></div>
          <div
              class="container custom-container"
              data-aos="fade"
              data-aos-once="true"
              data-aos-duration="1000"
              style="position: absolute;top: 45%;left: 50%;transform: translate(-50%, -50%);color: #ffffff;height: auto;">
            <img style="z-index: 20; width: 90%" :src="textHeader" alt="">
          </div>
        </div>
      </div>
      <div class="container mt-5">
        <div class="row text-center">
          <div class="col-4">
            <div style="position: relative">
              <img :src="email" style="width: 100%" alt="">
              <svg style="position: absolute; top: 73%; left: 10%" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                <path d="M35 27.5H50V37.5H45V32.5H35V27.5ZM45 10H20C16.6848 10 13.5054 11.317 11.1612 13.6612C8.81696 16.0054 7.5 19.1848 7.5 22.5V45H2.5V50H52.5C53.8261 50 55.0978 49.4732 56.0355 48.5355C56.9732 47.5978 57.5 46.3261 57.5 45V22.5C57.5 20.8585 57.1767 19.233 56.5485 17.7165C55.9203 16.1999 54.9996 14.8219 53.8388 13.6612C52.6781 12.5004 51.3001 11.5797 49.7835 10.9515C48.267 10.3233 46.6415 10 45 10ZM27.5 45H12.5V22.5C12.5 20.5109 13.2902 18.6032 14.6967 17.1967C16.1032 15.7902 18.0109 15 20 15C21.9891 15 23.8968 15.7902 25.3033 17.1967C26.7098 18.6032 27.5 20.5109 27.5 22.5V45ZM52.5 45H32.5V22.5C32.5 19.8 31.625 17.15 30 15H45C46.9891 15 48.8968 15.7902 50.3033 17.1967C51.7098 18.6032 52.5 20.5109 52.5 22.5V45Z" fill="#3091D9"/>
              </svg>
              <div style="text-align: left; position: absolute; top: 75%; left: 32%">
                <p style="color: var(--Primary, #3091D9);font-family: Inter;font-size: 14px;font-style: normal;font-weight: 400;line-height: 20px;">Email</p>
              </div>
              <div style="text-align: left; position: absolute; top: 82%; left: 32%">
                <a :href="'mailto:sale.smsbrand@vmgmedia.vn'" style="color: var(--Text-color, #474443);font-family: Inter;font-size: 14px;font-style: normal;font-weight: 700;">Sale.smsbrand@vmgmedia.vn</a>
              </div>
            </div>
          </div>
          <div class="col-4">
            <img style="width: 100%" :src="phone" alt="">
          </div>
          <div class="col-4">
            <img style="width: 100%" :src="address" alt="">
          </div>
        </div>
        <div class="container mt-5">
          <div class="text-center">
            <p style="color: var(--Primary, #3091D9);text-align: center;font-family: Inter,serif;font-size: 48px;font-style: normal;font-weight: 700;line-height: 64px">
              Vui lòng để lại thông tin,<br>
              chúng tôi sẽ liên lạc với bạn.
            </p>
            <p>
              Chúng tôi rất trân trọng mọi sự quan tâm mà bạn đang dành cho dịch vụ tin <br> nhắn thương hiệu SMS Brandname của VMG MEDIA.
            </p>
          </div>
          <div class="row mt-5">
            <br>
            <form style="width: 100%">
              <div class="row">
                <div class=" col-6">
                  <input v-model="form.name" type="text" class="custom-form" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Tên ">
                </div>
                <div class=" col-6">
                  <input v-model="form.phoneNumber" type="number" class="custom-form" id="exampleInputPassword1" placeholder="Số điện thoại">
                </div>
              </div>
              <div class="row mt-5">
                <div class="form-group  col-6">
                  <input v-model="form.email" type="email" class="custom-form" id="exampleInputPassword1" placeholder="Email">
                </div>
                <div class="form-group  col-6">
                  <input v-model="form.businessName" type="text" class="custom-form" id="exampleInputPassword1" placeholder="Lĩnh vực kinh doanh của bạn là gì?">
                </div>
              </div>
              <div class="form-group mt-4">
                <select v-model="form.customerType" class="custom-form">
                  <option :value="null" disabled selected hidden>Bạn là khách hàng cá nhân hay doanh nghiệp?</option>
                  <option>Khách hàng cá nhân</option>
                  <option>Doanh nghiệp</option>
                </select>
              </div>
              <div class="form-group mt-5">
                <input v-model="form.address" type="text" class="custom-form" id="exampleInputPassword1" placeholder="Địa chỉ công ty">
              </div>
            </form>
            <div class="d-flex text-right">
              <button class="btn btn-primary1" style="" @click="submitForm">GỬI THÔNG TIN</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Snackbar
        :showSnackbar="showSnackbar"
        @close="closeSnackbar"
        :snackbarMessage="snackbarMessage"
        :snackbarColor="snackbarColor"
    />
    <Loading :loading="loading" />
  </div>
</template>

<script>
import info from "../../../../info";
import {GetDataService} from "@/service/get-data-service";
import Snackbar from "@/components/helpers/Snackbar.vue";
import Loading from "@/components/helpers/Loading.vue";
export default {
  name: "Contact",
  components: {Loading, Snackbar},
  data() {
    return {
      loading: false,
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
      selected: '',
      header: info.contact.header,
      headerMobile: info.contact.headerMobile,
      textHeader: info.contact.textHeader,
      email: info.contact.email,
      phone: info.contact.phone,
      address: info.contact.adress,
      form: {
        name: null,
        phoneNumber: null,
        email: null,
        businessName: null,
        customerType: null,
        address: null,
      }
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
    async submitForm() {
      this.loading = true;
      if (this.form.name === null || this.form.phoneNumber === null || this.form.email === null || this.form.businessName === null || this.form.customerType === null || this.form.address === null) {
        this.showSnackbar = true;
        this.snackbarMessage = "Vui lòng nhập đầy đủ thông tin";
        this.snackbarColor = "#f55656";
        this.loading = false;
        return
      }
      await GetDataService.sendMail(this.form).then(res => {
        if (res.data === 'Xong') {
          this.showSnackbar = true;
          this.snackbarMessage = "Cảm ơn bạn đã để lại thông tin";
          this.snackbarColor = "#0cab00";
        } else {
          this.showSnackbar = true;
          this.snackbarMessage = "Gửi thông tin thất bại";
          this.snackbarColor = "#f55656";
        }
        this.loading = false;
      })
    }
  }
}

</script>

<style scoped>
.img-responsive {
  max-width: 100%; /* Hình ảnh sẽ có rộng tối đa là 100% của thẻ div chứa nó */
  height: auto; /* Đảm bảo tỷ lệ chiều rộng/chiều cao không bị méo */
}
.custom-form {
  border-radius: 8.065px;
  border: 1.152px solid #E7EBF0;
  background: #FFF;
  display: flex;
  width: 100%;
  padding: 17.282px 18.434px;
  flex-direction: column;
  align-items: flex-start;
}
.btn-primary1 {
  border-radius: 8.065px;
  background: #FF5151;
  display: flex;
  color: #ffffff;
  width: 303px;
  padding: 13.825px 35.146px 13.825px 35.582px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.custom-form select option:checked {
  background-color: #3091D9;
  color: #fff;
}

/* Tùy chỉnh style cho option đã vô hiệu hóa */
.custom-form select option:disabled {
  background-color: #ddd;
  color: #777;
  cursor: not-allowed;
}
</style>
