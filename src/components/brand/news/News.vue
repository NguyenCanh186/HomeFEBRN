<template>
  <div>
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
            style="position: absolute;top: 6%;left: 50%;transform: translate(-50%, -50%);color: #ffffff;height: auto;">
          <img style="z-index: 20; width: 100%" :src="textHeader" alt="">
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
    </div>

<!--    <div class="image-container mt-4" style="max-height: 100%; overflow-x: auto;">-->
<!--      <div-->
<!--          v-for="item in desgin_info"-->
<!--          :key="item.id"-->
<!--          class="image-item"-->
<!--      >-->
<!--        <div>-->
<!--          <div class="card-body">-->
<!--                <img :src="`http://localhost:8080/image/${item.cover}`" alt="Image" style="max-width: 100%;" />-->
<!--                <h5 class="card-title">{{ item.title }}</h5>-->
<!--                <p>Ngày đăng: {{ formatDate(item.date) }}</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->

    <!--      <div>-->
<!--        <p style="font-size: 20px;font-style: normal;font-weight: 700;line-height: 28px; margin-top: 10px">Tin nổi bật</p>-->
<!--        <div class="row" style="margin-top: -15px">-->
<!--          <div class="col-11 card  mt-1" v-for="item in desgin_info" :key="item.id" @click="showModalDetail(item.id)">-->
<!--            -->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    <div>-->
      <CustomerNews />
<!--    </div>-->
  </div>
</template>


<script>
import CustomerNews from "@/components/brand/news/CustomerNews.vue";
import info from "../../../../info";
import axios from "axios";

export default {
  name: "News",
  components: { CustomerNews },
  data() {
    return {
      header: info.news.header,
      headerMobile: info.news.headerMobile,
      textHeader: info.news.textHeader,
      all_info: info.portfolio,
      desgin_info: [],
      portfolio_info: [],
      showModal: false,
      showDesignModal: false,
      modal_info: {},
      design_modal_info: {},
      number: 5,
      shower: 0,
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    };
  },
  created() {
    axios.get(`http://localhost:8080/get-data/news`)
        .then(response => {
          this.all_info = response.data; // Gán dữ liệu từ phản hồi vào all_info
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        })
        .finally(() => {
          this.isLoading = false; // Kết thúc quá trình tải
          this.loadInitialData(); // Gọi hàm để tải dữ liệu ban đầu
        });
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.reloadData();
    });
  },
  watch: {
    number() {
      this.desgin_info = [];
      for (var i = 0; i < this.number; i++) {
        this.desgin_info.push(this.all_info[i]);
      }
    },
  },
  methods: {
    loadInitialData() {
      for (var i = 0; i < this.number; i++) {
        this.desgin_info.push(this.all_info[i]);
      }
      console.log(this.desgin_info)
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('vi-VN', options);
    },
    reloadData() {
      // this.desgin_info = info.portfolio;
    },
    showModalDetail(portfolioId) {
      this.$router.push('/newsDetail/' + portfolioId);
    },
  }
}
</script>


<style scoped>
.card:hover {
  opacity: 0.7; /* You can adjust the opacity as per your preference */
  cursor: pointer;
}
.image-container {
  overflow: hidden; /* Hide any overflow from the image */
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
.image-item {
  width: 300px;
  position: relative;
  margin-left: 100px;
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
.img-fluid {
  max-width: 300px;
  height: auto;
}
.image-container img {
  height: 100%; /* Set the height of the image to 100% to fill the container */
  object-fit: cover; /* Maintain the aspect ratio and cover the container */
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

