<template>
  <div>
    <div class="isMobile">
      <nav
          class="navbar navbar-expand-lg navbar-dark fixed-top p-st"
          style="background-color: white"
      >
        <div class="container">
          <div class="row">
            <div class="col-10">
              <a
                  class="navbar-brand"
                  href="/public"
                  @click.prevent="goToHome"
              >
                <Logo :nightMode="nightMode" />
              </a>
            </div>
            <div class="col-2">
              <button
                  class="navbar-toggler mt-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
          <span style="color: #1682ff; font-size: 23px;"
          ><i class="fas fa-bars"></i>
            </span>
              </button>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-5">
                <a class="nav-link nav-content" href="/portfolio" @click.prevent="goToHome">Trang chủ</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link nav-content" href="/news" @click.prevent="goToNewsPage">Tin tức</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link nav-content" href="/api" @click.prevent="goToApi">API</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link nav-content" href="" @click.prevent="goContact">Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
    <div class="isComputer">
      <nav
          class="navbar navbar-expand-lg navbar-dark fixed-top p-st"
          style="background-color: white"
      >
        <div class="container1">
          <div class="row">
            <div class="col-10">
              <a
                  class="navbar-brand"
                  href="/public"
                  @click.prevent="goToHome"
              >
                <Logo :nightMode="nightMode" />
              </a>
            </div>
            <div class="col-2">
              <button
                  class="navbar-toggler mt-2"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
              >
          <span style="color: #1682ff; font-size: 23px;"
          ><i class="fas fa-bars"></i>
            </span>
              </button>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item mx-5">
                <a class="nav-link nav-content" href="/portfolio" @click.prevent="goToHome">Trang chủ</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link nav-content" href="/news" @click.prevent="goToNewsPage">Tin tức</a>
              </li>
              <li class="nav-item mx-5">
                <a class="nav-link nav-content" href="/api" @click.prevent="goToApi">API</a>
              </li>
              <li class=" mx-5">
                <a class="nav-link nav-content" href="" @click.prevent="goContact">Liên hệ</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import Logo from "../helpers/Logo.vue";
import info from "../../../info";
import Snackbar from "@/components/helpers/Snackbar.vue";

export default {
  name: "Navbar",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      navbarConfig: info.config.navbar,
      localNightMode: this.nightMode,
      showDesignModal: false,
      showSnackbar: false,
      snackbarMessage: "",
      snackbarColor: "",
    };
  },
  components: {
    Logo,
    Snackbar,
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    closeSnackbar(val) {
      if (!val) {
        setTimeout(() => {
          this.showSnackbar = val;
        }, 1000);
      }
    },
    goToNewsPage() {
      this.$router.push('/news').catch(() => {});
    },
    goToHome() {
      this.$router.push('/').catch(() => {});
    },
    goContact() {
      this.$router.push('/contact').catch(() => {});
    },
    goToApi() {
      this.$router.push('/api').catch(() => {});
    },
    switchMode() {
      this.localNightMode = !this.localNightMode;
      this.$emit("nightMode", this.localNightMode);
    },
    closeModal() {
      this.showModal = false;
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showDesignModalFn() {
      this.showDesignModal = true;
    },
  },
};
</script>

<style scope>
.nav-link {
  color: #3380CB !important;
  font-weight: 500;
}
.nav-link:hover{
  color: white;
}
.container1 {
  width: 100%;
  padding-right: 0px;
  padding-left: 200px;
  display: flex;
}
.nav-content {
  text-align: center;
  /* Body/L medium */
  font-family: Inter,serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
}
button {
  border: none;
  outline: none;
}

button:hover {
  border: none;
  outline: none;
}

nav {
  border-bottom: 1px solid rgba(160, 159, 159, 0.336);
  position: fixed !important;
}

.navbar-blur {
  backdrop-filter: blur(12px);
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
