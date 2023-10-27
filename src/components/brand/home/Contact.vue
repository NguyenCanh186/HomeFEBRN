<template>
  <div class="mt-4" style="">
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
    <div class="container mt-5">
      <div class="row text-center">
        <div class="col-4">
          <img :src="email" alt="">
        </div>
        <div class="col-4">
          <img :src="phone" alt="">
        </div>
        <div class="col-4">
          <img :src="address" alt="">
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
                <input v-model="form.phone" type="number" class="custom-form" id="exampleInputPassword1" placeholder="Số điện thoại">
              </div>
            </div>
            <div class="row mt-5">
              <div class="form-group  col-6">
                <input v-model="form.email" type="email" class="custom-form" id="exampleInputPassword1" placeholder="Email">
              </div>
              <div class="form-group  col-6">
                <input v-model="form.business" type="text" class="custom-form" id="exampleInputPassword1" placeholder="Lĩnh vực kinh doanh của bạn là gì?">
              </div>
            </div>
            <div class="form-group mt-4">
              <select v-model="form.customerType" class="custom-form">
                <option disabled value="">Bạn là khách hàng cá nhân hay doanh nghiệp?</option>
                <option>Đọt bí xào tỏi</option>
                <option>Canh bông điên điển</option>
                <option>Lẩu nấm</option>
              </select>
            </div>
            <div class="form-group mt-5">
              <input v-model="form.address" type="text" class="custom-form" id="exampleInputPassword1" placeholder="Địa chỉ công ty">
            </div>
            <div class="d-flex justify-content-end">
              <button type="submit" class="btn btn-primary1" style="" @click="submitForm">GỬI THÔNG TIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../../../info";
import {GetDataService} from "@/service/get-data-service";
export default {
  name: "Contact",
  data() {
    return {
      selected: '',
      header: info.contact.header,
      textHeader: info.contact.textHeader,
      email: info.contact.email,
      phone: info.contact.phone,
      address: info.contact.adress,
      form: {
        name: '',
        phone: '',
        email: '',
        business: '',
        customerType: '',
        address: '',
      }
    };
  },
  methods: {
    async submitForm() {
      await GetDataService.sendMail().then(res => {
        if (res.data.status === 200) {
          alert('Gửi thông tin thành công');
        } else {
          alert('Gửi thông tin thất bại');
        }
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
.form-container {
  display: inline-block; /* Để div chỉ chiếm không gian cần thiết */
  padding: 10px; /* Khoảng cách giữa div và form */
  border-radius: 10px; /* Độ cong của border (bo góc) */
}
</style>
