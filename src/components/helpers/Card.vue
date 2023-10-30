<template>
  <div class="my-3 mx-3">
    <div
      class="card smcard"
      :class="{
        'pcard-dark': nightMode,
        pcard: !nightMode,
        'bg-dark3': nightMode,
      }"
    >
      <div style="height: 170px;">
        <img
          class="card-img-top"
          :src="`http://localhost:8080/image/${portfolio.cover}`"
          alt="Card image cap"
        />
        <h5 class="title2 mt-2 ml-3">{{ truncatedTitle }}</h5>
      </div>
      <div class="card-body" style="margin-top: 10px">
        <div>
          <p
            class="card-content"
            v-html="
              portfolio.description.length > 80
                ? portfolio.description.substring(0, 80) + '...'
                : portfolio.description
            "
          >
          </p>
        </div>
        <hr style="width: 90%; margin-top: -10px">
        <a style="color: var(--Primary, #3091D9);
font-family: Inter;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: 20px; /* 142.857% */">Xem chi tiết </a><span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
  <path d="M3 8.25006V9.75006H12L7.875 13.8751L8.94 14.9401L14.88 9.00006L8.94 3.06006L7.875 4.12506L12 8.25006H3Z" fill="#3091D9"/>
</svg></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    portfolio: {
      type: Object,
    },
    nightMode: {
      type: Boolean,
    },
  },
  computed: {
    // Tạo computed property để hiển thị title đã được cắt nếu cần
    truncatedTitle() {
      if (this.portfolio.title.length > 35) {
        return this.portfolio.title.substring(0, 35) + '...';
      } else {
        return this.portfolio.title;
      }
    },
  },
  methods: {
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('vi-VN', options);
    },
    open(url) {
      window.open(url, "_blank");
    },
    showModal() {
      this.$router.push('/newsDetail/' + this.portfolio.id)
    },
  },
};
</script>

<style scoped>
img {
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
}
.card-body {
  margin-top: 30px;
}
.img-div img {
  /* object-fit: cover;
    overflow: hidden; */
  margin-left: auto;
  margin-right: auto;
  display: block;
  /* object-position: 50% 120%;
    max-width: 300px !important; */
}
.card-content {
  color: var(--Text-color, #474443);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.pcard {
  background-color: rgb(255, 255, 255);
  border-radius: 7px;
  border: none;
  box-shadow: 1px 1px 12px rgb(233, 233, 233);
  transition: all 0.5s;
  height: 300px;
}

.pcard:hover {
  transition: all 0.5s;
  /* cursor: pointer; */
  box-shadow: 1px 1px 15px rgb(216, 216, 216);
}

.pcard-dark {
  border-radius: 7px;
  border: none;
  background-color: #30363a !important;
  /* box-shadow: 1px 1px 12px rgb(53, 53, 53); */
  transition: all 0.5s;
  height: 460px;
}

.pcard-dark:hover {
  transition: all 0.5s;
  /* cursor: pointer; */
  box-shadow: 1px 1px 12px rgb(53, 53, 53);
}

.pcard-body {
  border-top: 1px solid rgb(220, 220, 220);
  z-index: -1;
  background-color: rgb(253, 254, 255);
}

.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  color: var(--Text-color, #474443);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 125% */
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.badge {
  background-color: #bbd4dd;
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.btn {
  border-color: #17a2b8;
  color: #17a2b8;
}

.btn:hover {
  background-color: #17a2b8;
  border-color: #17a2b8;
  color: white;
}

.btn:focus {
  background-color: #17a2b8;
  border-color: #17a2b8;
  color: white;
}

.bg-dark3 {
  background-color: rgb(82, 82, 82);
}

.bg-dark4 {
  background-color: #494e55 !important;
}
</style>
