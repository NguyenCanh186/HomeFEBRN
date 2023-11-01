<template>
  <div id="app" :class="{ 'text-dark': !nightMode, 'text-light': nightMode }">
    <div class="chat-bubble" style="text-align: center">
      <details class="dropdown">
        <summary role="button">
          <a class="button" style="color: whitesmoke; background-color: transparent;">
            <img :src="back" alt="">
          </a>
        </summary>
        <ul>
          <li><a href="#"><img :src="back1" alt=""></a></li>
          <li><a href="#"><img :src="back2" alt=""></a></li>
          <li><a href="#"><img :src="back3" alt=""></a></li>
        </ul>
      </details>
    </div>
  </div>
</template>



<script>
import info from "../../../../info";

export default {
  name: "Chat",
  data() {
    return {
      nightMode: false,
      back: info.chat.back,
      back1: info.chat.back1,
      back2: info.chat.back2,
      back3: info.chat.back3,
    };
  },
}
</script>

<style scoped>
.chat-bubble {
  position: fixed !important;
  bottom: 600px !important;
  right: 0px !important;
  background-color: transparent;
  /*box-shadow: 0 5px 30px rgba(0, 0, 0, 0.1);*/
  z-index: 9999;
  transition: opacity 0.3s ease;
}
@media only screen and (max-width: 768px) {
  .chat-bubble {
    right: -30px !important;
  }
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
/* Ẩn bong bóng chat khi không hover hiển thị lại bong bóng chat khi người dùng hover */
.chat-bubble:hover {
  opacity: 0.8;
}

:root {
  --button-background: dodgerblue;
  --button-color: white;

  --dropdown-highlight: dodgerblue;
  --dropdown-width: 100px;
  --dropdown-background: transparent;
  --dropdown-color: black;
}

/* Center the planet */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #222229;
}

/* Boring button styles */
a.button {
  /* Frame */
  display: inline-block;
  padding: 20px 28px;
  border-radius: 50px;
  box-sizing: border-box;

  /* Style */
  border: none;
  background: var(--button-background);
  color: var(--button-color);
  font-size: 24px;
  cursor: pointer;
}

a.button:active {
  filter: brightness(75%);
}

/* Dropdown styles */
.dropdown {
  position: relative;
  padding: 0;
  margin-right: 1em;

  border: none;
}

.dropdown summary {
  list-style: none;
  list-style-type: none;
}

.dropdown > summary::-webkit-details-marker {
  display: none;
}

.dropdown summary:focus {
  outline: none;
}

.dropdown summary:focus a.button {
}

.dropdown summary:focus {
  outline: none;
}

.dropdown ul {
  position: absolute;
  width: var(--dropdown-width);
  margin-left: calc((var(--dropdown-width) / 2)  * -1);
  box-sizing: border-box;
  z-index: 2;
  left: -28%;
  background: var(--dropdown-background);
  border-radius: 6px;
  list-style: none;
}

.dropdown ul li {
  padding: 0;
  margin: 0;
}

.dropdown ul li a:link, .dropdown ul li a:visited {
  display: inline-block;
  padding: 10px 0.8rem;
  width: 100%;
  box-sizing: border-box;

  color: var(--dropdown-color);
  text-decoration: none;
}

.dropdown ul li a:hover {
  background-color: var(--dropdown-highlight);
  color: var(--dropdown-background);
}

/* Dropdown triangle */


/* Close the dropdown with outside clicks */
.dropdown > summary::before {
  display: none;
}

.dropdown[open] > summary::before {
  content: ' ';
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
}
</style>

