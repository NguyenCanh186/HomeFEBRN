import axios from "axios";
let serverURL = `http://localhost:8080`
let info = {
  name: "Canh Nguyen",
  logo_name: "Call Me",
  flat_picture: require("./src/assets/slide.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  contact: require("./src/assets/Contact us-pana.png"),
  smsMkt: [
    { name: 'SMS', img: require("./src/assets/smsMkt/App data-cuate.png") },
    { name: 'Viber', img: require("./src/assets/smsMkt/Opinion-cuate.png") },
    { name: 'Zalo', img: require("./src/assets/smsMkt/Home screen-cuate.png") },
    { name: 'Voice', img: require("./src/assets/smsMkt/Receipt-cuate.png") },
    { name: 'My Viettel', img: require("./src/assets/smsMkt/Medical research-cuate.png") },
  ],
  customer: [
    {name: 'logo', img: require("./src/assets/Customer/logo.png") },
    {name: 'logo', img: require("./src/assets/Customer/logo.png") },
    {name: 'logo', img: require("./src/assets/Customer/logo.png") },
    {name: 'logo', img: require("./src/assets/Customer/logo.png") },
    {name: 'logo', img: require("./src/assets/Customer/logo.png") },
    {name: 'logo', img: require("./src/assets/Customer/logo.png") },
    {name: 'logo', img: require("./src/assets/Customer/logo.png") },
    {name: 'logo', img: require("./src/assets/Customer/logo.png") },
    {name: 'logo', img: require("./src/assets/Customer/logo.png") },
    {name: 'logo', img: require("./src/assets/Customer/logo.png") },
  ],
  portfolio: [],
};
axios.get(`${serverURL}/get-data/news`)
    .then(response => {
      info.portfolio = response.data; // Gán dữ liệu từ phản hồi vào info.portfolio
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
export default info;
