<template>
  <div class="row">
    <div class="col-8">
      <CustomerNews />
    </div>
    <div class="col-4">
      <p style="font-size: 20px;font-style: normal;font-weight: 700;line-height: 28px; margin-top: 10px">Tin nổi bật</p>
      <div class="row" style="margin-top: -15px">
        <div class="col-11 card  mt-1" v-for="item in desgin_info" :key="item.id" @click="showModalDetail(item.id)">
          <div>
            <div class="card-body">
              <div class="row justify-content-center">
                <div class="col-4 image-container">
                  <img :src="`http://localhost:8080/image/${item.cover}`" alt="Image" class="img-fluid" />
                </div>
                <div class="col-8">
                  <h5 class="card-title">{{ item.title }}</h5>
                    <p>Ngày đăng: {{ formatDate(item.date) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

.image-container img {
  height: 100%; /* Set the height of the image to 100% to fill the container */
  object-fit: cover; /* Maintain the aspect ratio and cover the container */
}
</style>

