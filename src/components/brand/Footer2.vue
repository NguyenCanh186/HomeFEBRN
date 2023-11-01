<template>
  <div>
    <div class="isMobile">
      <div class="text-center" style="position: relative">
        <img :src="rectangleMobile90" alt="" style="width: 100%">
        <p style="color: var(--Trng, #FFF);font-family: Inter;font-size: 15px;font-style: normal;font-weight: 700;line-height: 20px; position: absolute; top: 15px; left: 50%; transform: translateX(-50%);">Bạn có câu hỏi nào không ?</p>
        <div  style="position: absolute; top: 60px; left: 50%;" @click="isClick">
          <img style="color: var(--Trng, #FFF);font-family: Inter;width: 100%;font-style: normal;font-weight: 700;line-height: 20px; transform: translateX(-50%);" :src="group4" alt="">
        </div>
      </div>
      <div class="container" style="background-color: #0F3567">
        <div>
          <br>
          <div class="col-12">
            <div style="margin-top: 20px; margin-left: 10px" class="row">
              <div class="col-6"><img :src="logobrand" alt="" style="width: 95%"></div>
              <div class="col-6 mt-2"><a :href="'tel:19001255'" class="contact-info-mobile"><img :src="group724" alt="" style="width: 80%"></a></div>
            </div>
          </div>
          <br>
          <div class="col-12"><img :src="frame4023" alt="" style="width: 100%"></div>
          <br>
          <p style="color: #E4E4E4;font-family: Inter,serif;font-size: 20px;font-style: normal;font-weight: 700;line-height: 32px; /* 133.333% */">Thông tin liên hệ</p>
          <div>
            <div>
              <h5 style="color: #bbd4dd; font-size: 16px">Trụ sở chính</h5>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                <path d="M21.75 10.875C21.75 19.8025 12.375 24.9375 12.375 24.9375C12.375 24.9375 3 19.8025 3 10.875C3 8.3886 3.98772 6.00403 5.74587 4.24587C7.50403 2.48772 9.8886 1.5 12.375 1.5C14.8614 1.5 17.246 2.48772 19.0041 4.24587C20.7623 6.00403 21.75 8.3886 21.75 10.875Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.125 10.875C16.125 11.8696 15.7299 12.8234 15.0267 13.5267C14.3234 14.2299 13.3696 14.625 12.375 14.625C11.3804 14.625 10.4266 14.2299 9.72335 13.5267C9.02009 12.8234 8.625 11.8696 8.625 10.875C8.625 9.88044 9.02009 8.92661 9.72335 8.22335C10.4266 7.52009 11.3804 7.125 12.375 7.125C13.3696 7.125 14.3234 7.52009 15.0267 8.22335C15.7299 8.92661 16.125 9.88044 16.125 10.875Z" fill="white"/>
              </svg><span><a class="contact-info-mobile" href="https://www.google.com/maps/dir/21.0221987,105.8172885/T%E1%BA%A7ng+6+Peakview+Tower,+36+Ho%C3%A0ng+C%E1%BA%A7u,+P.%C3%94+Ch%E1%BB%A3+D%E1%BB%ABa,+Q.%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i/@21.021601,105.8168241,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3135abb4623fb1d3:0x10291e8bc5361d64!2m2!1d105.8236649!2d21.0192364?entry=ttu">Tầng 6 Peakview Tower, 36 Hoàng Cầu, P.Ô Chợ Dừa, Q.Đống Đa, Hà Nội</a></span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M20.75 3.75V8.25M20.75 3.75H16.25M20.75 3.75L14.75 9.75M17.75 21.75C9.466 21.75 2.75 15.034 2.75 6.75V4.5C2.75 3.90326 2.98705 3.33097 3.40901 2.90901C3.83097 2.48705 4.40326 2.25 5 2.25H6.372C6.888 2.25 7.338 2.601 7.463 3.102L8.569 7.525C8.679 7.965 8.515 8.427 8.152 8.698L6.859 9.668C6.67393 9.80198 6.537 9.99207 6.46854 10.21C6.40009 10.428 6.40375 10.6623 6.479 10.878C7.08087 12.5151 8.03141 14.0018 9.26478 15.2352C10.4981 16.4686 11.9849 17.4191 13.622 18.021C14.063 18.183 14.55 18.017 14.832 17.641L15.802 16.348C15.9348 16.1708 16.1169 16.0366 16.3256 15.9625C16.5342 15.8883 16.7601 15.8773 16.975 15.931L21.398 17.037C21.898 17.162 22.25 17.612 22.25 18.128V19.5C22.25 20.0967 22.0129 20.669 21.591 21.091C21.169 21.5129 20.5967 21.75 20 21.75H17.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg><span class="contact-info-mobile"><a :href="'tel:(04) 35378820'" class="contact-info-mobile">(04) 3 537 8820 </a>  | <a :href="'tel:19001255'" class="contact-info-mobile">19001255</a> | <a :href="'tel:0961027266'" class="contact-info-mobile">0961027266</a></span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 9H18V4H8V20H22V12C22 10.34 20.66 9 19 9ZM10 6H16V9H10V6ZM14 17H10V12H14V17ZM16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17ZM16 14C15.45 14 15 13.55 15 13C15 12.45 15.45 12 16 12C16.55 12 17 12.45 17 13C17 13.55 16.55 14 16 14ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17ZM19 14C18.45 14 18 13.55 18 13C18 12.45 18.45 12 19 12C19.55 12 20 12.45 20 13C20 13.55 19.55 14 19 14ZM4.5 8C3.12 8 2 9.12 2 10.5V18.5C2 19.88 3.12 21 4.5 21C5.88 21 7 19.88 7 18.5V10.5C7 9.12 5.88 8 4.5 8Z" fill="white"/>
              </svg><span><a :href="'tel:(04) 37726091'" class="contact-info-mobile">(04) 3 772 6091</a></span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M22.25 6.75V17.25C22.25 17.8467 22.0129 18.419 21.591 18.841C21.169 19.2629 20.5967 19.5 20 19.5H5C4.40326 19.5 3.83097 19.2629 3.40901 18.841C2.98705 18.419 2.75 17.8467 2.75 17.25V6.75M22.25 6.75C22.25 6.15326 22.0129 5.58097 21.591 5.15901C21.169 4.73705 20.5967 4.5 20 4.5H5C4.40326 4.5 3.83097 4.73705 3.40901 5.15901C2.98705 5.58097 2.75 6.15326 2.75 6.75M22.25 6.75V6.993C22.25 7.37715 22.1517 7.75491 21.9644 8.0903C21.7771 8.42569 21.5071 8.70754 21.18 8.909L13.68 13.524C13.3252 13.7425 12.9167 13.8582 12.5 13.8582C12.0833 13.8582 11.6748 13.7425 11.32 13.524L3.82 8.91C3.49292 8.70854 3.22287 8.42669 3.03557 8.0913C2.84827 7.75591 2.74996 7.37815 2.75 6.994V6.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>
  <a class="contact-info-mobile" :href="'mailto:sale.smsbrand@vmgmedia.vn'">sale.smsbrand@vmgmedia.vn</a>
</span><br>
            </div>
            <div>
              <h5 style="color: #bbd4dd; font-size: 16px">Trụ sở Hồ Chí Minh</h5>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                <path d="M21.75 10.875C21.75 19.8025 12.375 24.9375 12.375 24.9375C12.375 24.9375 3 19.8025 3 10.875C3 8.3886 3.98772 6.00403 5.74587 4.24587C7.50403 2.48772 9.8886 1.5 12.375 1.5C14.8614 1.5 17.246 2.48772 19.0041 4.24587C20.7623 6.00403 21.75 8.3886 21.75 10.875Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.125 10.875C16.125 11.8696 15.7299 12.8234 15.0267 13.5267C14.3234 14.2299 13.3696 14.625 12.375 14.625C11.3804 14.625 10.4266 14.2299 9.72335 13.5267C9.02009 12.8234 8.625 11.8696 8.625 10.875C8.625 9.88044 9.02009 8.92661 9.72335 8.22335C10.4266 7.52009 11.3804 7.125 12.375 7.125C13.3696 7.125 14.3234 7.52009 15.0267 8.22335C15.7299 8.92661 16.125 9.88044 16.125 10.875Z" fill="white"/>
              </svg><span class="contact-info-mobile">Toà nhà Văn phòng VMG, 96-98 Đào Duy Anh, P.9, Q.Phú Nhuận, TP.HCM</span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M20.75 3.75V8.25M20.75 3.75H16.25M20.75 3.75L14.75 9.75M17.75 21.75C9.466 21.75 2.75 15.034 2.75 6.75V4.5C2.75 3.90326 2.98705 3.33097 3.40901 2.90901C3.83097 2.48705 4.40326 2.25 5 2.25H6.372C6.888 2.25 7.338 2.601 7.463 3.102L8.569 7.525C8.679 7.965 8.515 8.427 8.152 8.698L6.859 9.668C6.67393 9.80198 6.537 9.99207 6.46854 10.21C6.40009 10.428 6.40375 10.6623 6.479 10.878C7.08087 12.5151 8.03141 14.0018 9.26478 15.2352C10.4981 16.4686 11.9849 17.4191 13.622 18.021C14.063 18.183 14.55 18.017 14.832 17.641L15.802 16.348C15.9348 16.1708 16.1169 16.0366 16.3256 15.9625C16.5342 15.8883 16.7601 15.8773 16.975 15.931L21.398 17.037C21.898 17.162 22.25 17.612 22.25 18.128V19.5C22.25 20.0967 22.0129 20.669 21.591 21.091C21.169 21.5129 20.5967 21.75 20 21.75H17.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg><span><a :href="'tel:(08) 39990998'" class="contact-info-mobile">(08) 3 999 0998</a>
</span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 9H18V4H8V20H22V12C22 10.34 20.66 9 19 9ZM10 6H16V9H10V6ZM14 17H10V12H14V17ZM16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17ZM16 14C15.45 14 15 13.55 15 13C15 12.45 15.45 12 16 12C16.55 12 17 12.45 17 13C17 13.55 16.55 14 16 14ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17ZM19 14C18.45 14 18 13.55 18 13C18 12.45 18.45 12 19 12C19.55 12 20 12.45 20 13C20 13.55 19.55 14 19 14ZM4.5 8C3.12 8 2 9.12 2 10.5V18.5C2 19.88 3.12 21 4.5 21C5.88 21 7 19.88 7 18.5V10.5C7 9.12 5.88 8 4.5 8Z" fill="white"/>
              </svg><span class="contact-info-mobile"><a :href="'tel:(08) 39309037'" class="contact-info-mobile">(08) 3 930 9037</a></span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M22.25 6.75V17.25C22.25 17.8467 22.0129 18.419 21.591 18.841C21.169 19.2629 20.5967 19.5 20 19.5H5C4.40326 19.5 3.83097 19.2629 3.40901 18.841C2.98705 18.419 2.75 17.8467 2.75 17.25V6.75M22.25 6.75C22.25 6.15326 22.0129 5.58097 21.591 5.15901C21.169 4.73705 20.5967 4.5 20 4.5H5C4.40326 4.5 3.83097 4.73705 3.40901 5.15901C2.98705 5.58097 2.75 6.15326 2.75 6.75M22.25 6.75V6.993C22.25 7.37715 22.1517 7.75491 21.9644 8.0903C21.7771 8.42569 21.5071 8.70754 21.18 8.909L13.68 13.524C13.3252 13.7425 12.9167 13.8582 12.5 13.8582C12.0833 13.8582 11.6748 13.7425 11.32 13.524L3.82 8.91C3.49292 8.70854 3.22287 8.42669 3.03557 8.0913C2.84827 7.75591 2.74996 7.37815 2.75 6.994V6.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span>
  <a class="contact-info-mobile" :href="'mailto:sale.smsbrand@vmgmedia.vn'">sale.smsbrand@vmgmedia.vn</a>
</span><br>
            </div>
          </div>
        </div>
        <div class="row mt-3">
          <div class="row col-12 d-flex">
            <div class="col-4">
              <img :src="ft" alt="" style="width: 140%; margin-left: 15px">
            </div>
            <div class="col-8 d-flex mt-2 mb-5">
              <a :href="'https://www.facebook.com/sms.brandname.96?fref=ts'">
                <img :src="ft5" alt="" style="margin-left: 50px; width: 37.624px; height: 37.624px">
              </a>
              <a href="">
                <img :src="ft4" alt="" style="margin-left: 10px; width: 37.624px; height: 37.624px">
              </a>
              <a :href="'skype:hotro.smsbrand'">
                <img :src="ft3" alt="" style="margin-left: 10px; width: 37.624px; height: 37.624px">
              </a>
              <a href="">
                <img :src="ft2" alt="" style="margin-left: 10px; width: 37.624px; height: 37.624px">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="isComputer">
      <div class="container text-center" style="; margin-bottom: -100px">
        <div class="mt-5" style="margin-bottom: -145px">
          <img style="width: 100%" :src="frame153" alt="">
        </div>
        <div class="row" style="padding: 50px 0 50px 0">
          <div class="col-6 text-right">
            <p style="
            color: white;
             font-family: Inter,serif;
             font-size: 34.297px;
             font-style: normal;
             font-weight: 700;
             line-height: 45.729px; /* 133.333% */">Bạn có câu hỏi nào không?</p>
          </div>
          <div class="col-6 text-left" @click="isClick">
            <img style="margin-left: 150px" :src="group4" alt="">
          </div>
        </div>
      </div>
      <div class="" style="background-color: #0F3567">
        <div class="container">
          <br>
          <div class="row">
            <div style="margin-top: 100px" class="row">
              <div class="col-3"><img :src="logobrand" alt=""></div>
              <div class="col-6"><img :src="frame4023" alt=""></div>
              <div class="col-3"><img :src="group724" alt=""></div>
            </div>
          </div>
          <br>
          <p style="color: #E4E4E4;
font-family: Inter,serif;
font-size: 24px;
font-style: normal;
font-weight: 700;
line-height: 32px; /* 133.333% */">Thông tin liên hệ</p>
          <div class="row">
            <div class="col-6">
              <h5 style="color: #bbd4dd">Trụ sở chính</h5>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                <path d="M21.75 10.875C21.75 19.8025 12.375 24.9375 12.375 24.9375C12.375 24.9375 3 19.8025 3 10.875C3 8.3886 3.98772 6.00403 5.74587 4.24587C7.50403 2.48772 9.8886 1.5 12.375 1.5C14.8614 1.5 17.246 2.48772 19.0041 4.24587C20.7623 6.00403 21.75 8.3886 21.75 10.875Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.125 10.875C16.125 11.8696 15.7299 12.8234 15.0267 13.5267C14.3234 14.2299 13.3696 14.625 12.375 14.625C11.3804 14.625 10.4266 14.2299 9.72335 13.5267C9.02009 12.8234 8.625 11.8696 8.625 10.875C8.625 9.88044 9.02009 8.92661 9.72335 8.22335C10.4266 7.52009 11.3804 7.125 12.375 7.125C13.3696 7.125 14.3234 7.52009 15.0267 8.22335C15.7299 8.92661 16.125 9.88044 16.125 10.875Z" fill="white"/>
              </svg><span><a class="contact-info" href="https://www.google.com/maps/dir/21.0221987,105.8172885/T%E1%BA%A7ng+6+Peakview+Tower,+36+Ho%C3%A0ng+C%E1%BA%A7u,+P.%C3%94+Ch%E1%BB%A3+D%E1%BB%ABa,+Q.%C4%90%E1%BB%91ng+%C4%90a,+H%C3%A0+N%E1%BB%99i/@21.021601,105.8168241,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3135abb4623fb1d3:0x10291e8bc5361d64!2m2!1d105.8236649!2d21.0192364?entry=ttu">Tầng 6 Peakview Tower, 36 Hoàng Cầu, P.Ô Chợ Dừa, Q.Đống Đa, Hà Nội</a></span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M20.75 3.75V8.25M20.75 3.75H16.25M20.75 3.75L14.75 9.75M17.75 21.75C9.466 21.75 2.75 15.034 2.75 6.75V4.5C2.75 3.90326 2.98705 3.33097 3.40901 2.90901C3.83097 2.48705 4.40326 2.25 5 2.25H6.372C6.888 2.25 7.338 2.601 7.463 3.102L8.569 7.525C8.679 7.965 8.515 8.427 8.152 8.698L6.859 9.668C6.67393 9.80198 6.537 9.99207 6.46854 10.21C6.40009 10.428 6.40375 10.6623 6.479 10.878C7.08087 12.5151 8.03141 14.0018 9.26478 15.2352C10.4981 16.4686 11.9849 17.4191 13.622 18.021C14.063 18.183 14.55 18.017 14.832 17.641L15.802 16.348C15.9348 16.1708 16.1169 16.0366 16.3256 15.9625C16.5342 15.8883 16.7601 15.8773 16.975 15.931L21.398 17.037C21.898 17.162 22.25 17.612 22.25 18.128V19.5C22.25 20.0967 22.0129 20.669 21.591 21.091C21.169 21.5129 20.5967 21.75 20 21.75H17.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg><span class="contact-info"><a :href="'tel:(04) 3 537 8820'" class="contact-info">(04) 3 537 8820</a> | <a :href="'tel:19001255'" class="contact-info">19001255</a> | <a :href="'tel:0961027266'" class="contact-info">0961027266</a></span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 9H18V4H8V20H22V12C22 10.34 20.66 9 19 9ZM10 6H16V9H10V6ZM14 17H10V12H14V17ZM16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17ZM16 14C15.45 14 15 13.55 15 13C15 12.45 15.45 12 16 12C16.55 12 17 12.45 17 13C17 13.55 16.55 14 16 14ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17ZM19 14C18.45 14 18 13.55 18 13C18 12.45 18.45 12 19 12C19.55 12 20 12.45 20 13C20 13.55 19.55 14 19 14ZM4.5 8C3.12 8 2 9.12 2 10.5V18.5C2 19.88 3.12 21 4.5 21C5.88 21 7 19.88 7 18.5V10.5C7 9.12 5.88 8 4.5 8Z" fill="white"/>
              </svg><span class="contact-info"><a :href="'tel:(04) 3 772 6091'" class="contact-info">(04) 3 772 6091</a></span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M22.25 6.75V17.25C22.25 17.8467 22.0129 18.419 21.591 18.841C21.169 19.2629 20.5967 19.5 20 19.5H5C4.40326 19.5 3.83097 19.2629 3.40901 18.841C2.98705 18.419 2.75 17.8467 2.75 17.25V6.75M22.25 6.75C22.25 6.15326 22.0129 5.58097 21.591 5.15901C21.169 4.73705 20.5967 4.5 20 4.5H5C4.40326 4.5 3.83097 4.73705 3.40901 5.15901C2.98705 5.58097 2.75 6.15326 2.75 6.75M22.25 6.75V6.993C22.25 7.37715 22.1517 7.75491 21.9644 8.0903C21.7771 8.42569 21.5071 8.70754 21.18 8.909L13.68 13.524C13.3252 13.7425 12.9167 13.8582 12.5 13.8582C12.0833 13.8582 11.6748 13.7425 11.32 13.524L3.82 8.91C3.49292 8.70854 3.22287 8.42669 3.03557 8.0913C2.84827 7.75591 2.74996 7.37815 2.75 6.994V6.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span><a class="contact-info" :href="'mailto:sale.smsbrand@vmgmedia.vn'">sale.smsbrand@vmgmedia.vn</a></span><br>
            </div>
            <div class="col-6">
              <h5 style="color: #bbd4dd">Trụ sở Hồ Chí Minh</h5>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="26" viewBox="0 0 25 26" fill="none">
                <path d="M21.75 10.875C21.75 19.8025 12.375 24.9375 12.375 24.9375C12.375 24.9375 3 19.8025 3 10.875C3 8.3886 3.98772 6.00403 5.74587 4.24587C7.50403 2.48772 9.8886 1.5 12.375 1.5C14.8614 1.5 17.246 2.48772 19.0041 4.24587C20.7623 6.00403 21.75 8.3886 21.75 10.875Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.125 10.875C16.125 11.8696 15.7299 12.8234 15.0267 13.5267C14.3234 14.2299 13.3696 14.625 12.375 14.625C11.3804 14.625 10.4266 14.2299 9.72335 13.5267C9.02009 12.8234 8.625 11.8696 8.625 10.875C8.625 9.88044 9.02009 8.92661 9.72335 8.22335C10.4266 7.52009 11.3804 7.125 12.375 7.125C13.3696 7.125 14.3234 7.52009 15.0267 8.22335C15.7299 8.92661 16.125 9.88044 16.125 10.875Z" fill="white"/>
              </svg><span class="contact-info">Toà nhà Văn phòng VMG, 96-98 Đào Duy Anh, P.9, Q.Phú Nhuận, TP.HCM</span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M20.75 3.75V8.25M20.75 3.75H16.25M20.75 3.75L14.75 9.75M17.75 21.75C9.466 21.75 2.75 15.034 2.75 6.75V4.5C2.75 3.90326 2.98705 3.33097 3.40901 2.90901C3.83097 2.48705 4.40326 2.25 5 2.25H6.372C6.888 2.25 7.338 2.601 7.463 3.102L8.569 7.525C8.679 7.965 8.515 8.427 8.152 8.698L6.859 9.668C6.67393 9.80198 6.537 9.99207 6.46854 10.21C6.40009 10.428 6.40375 10.6623 6.479 10.878C7.08087 12.5151 8.03141 14.0018 9.26478 15.2352C10.4981 16.4686 11.9849 17.4191 13.622 18.021C14.063 18.183 14.55 18.017 14.832 17.641L15.802 16.348C15.9348 16.1708 16.1169 16.0366 16.3256 15.9625C16.5342 15.8883 16.7601 15.8773 16.975 15.931L21.398 17.037C21.898 17.162 22.25 17.612 22.25 18.128V19.5C22.25 20.0967 22.0129 20.669 21.591 21.091C21.169 21.5129 20.5967 21.75 20 21.75H17.75Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg><span><a :href="'tel:(08) 39990998'" class="contact-info">(08) 3 999 0998</a></span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 9H18V4H8V20H22V12C22 10.34 20.66 9 19 9ZM10 6H16V9H10V6ZM14 17H10V12H14V17ZM16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17ZM16 14C15.45 14 15 13.55 15 13C15 12.45 15.45 12 16 12C16.55 12 17 12.45 17 13C17 13.55 16.55 14 16 14ZM19 17C18.45 17 18 16.55 18 16C18 15.45 18.45 15 19 15C19.55 15 20 15.45 20 16C20 16.55 19.55 17 19 17ZM19 14C18.45 14 18 13.55 18 13C18 12.45 18.45 12 19 12C19.55 12 20 12.45 20 13C20 13.55 19.55 14 19 14ZM4.5 8C3.12 8 2 9.12 2 10.5V18.5C2 19.88 3.12 21 4.5 21C5.88 21 7 19.88 7 18.5V10.5C7 9.12 5.88 8 4.5 8Z" fill="white"/>
              </svg><span><a :href="'tel:(08) 3 930 9037'" class="contact-info">(08) 3 930 9037</a></span><br>

              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M22.25 6.75V17.25C22.25 17.8467 22.0129 18.419 21.591 18.841C21.169 19.2629 20.5967 19.5 20 19.5H5C4.40326 19.5 3.83097 19.2629 3.40901 18.841C2.98705 18.419 2.75 17.8467 2.75 17.25V6.75M22.25 6.75C22.25 6.15326 22.0129 5.58097 21.591 5.15901C21.169 4.73705 20.5967 4.5 20 4.5H5C4.40326 4.5 3.83097 4.73705 3.40901 5.15901C2.98705 5.58097 2.75 6.15326 2.75 6.75M22.25 6.75V6.993C22.25 7.37715 22.1517 7.75491 21.9644 8.0903C21.7771 8.42569 21.5071 8.70754 21.18 8.909L13.68 13.524C13.3252 13.7425 12.9167 13.8582 12.5 13.8582C12.0833 13.8582 11.6748 13.7425 11.32 13.524L3.82 8.91C3.49292 8.70854 3.22287 8.42669 3.03557 8.0913C2.84827 7.75591 2.74996 7.37815 2.75 6.994V6.75" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span><a :href="'mailto:sale.smsbrand@vmgmedia.vn'" class="contact-info">sale.smsbrand@vmgmedia.vn</a></span><br>
            </div>
          </div>
          <div class="row mt-3">
            <div class="row col-6">
              <div class="col-4">
                <img :src="ft" alt="">
              </div>
              <div class="col-8">
                <a :href="'https://www.facebook.com/sms.brandname.96?fref=ts'">
                  <img :src="ft5" alt="" style="margin-left: 70px">
                </a>
                <img :src="ft4" alt="" style="margin-left: 15px">
                <a :href="'skype:hotro.smsbrand'">
                  <img :src="ft3" alt="" style="margin-left: 15px">
                </a>
                <img :src="ft2" alt="" style="margin-left: 15px">
              </div>
            </div>
            <div class="col-6"></div>
          </div>
          <br><br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../../info";
export default {
  name: "Footer2",
  data() {
    return {
      isMobile: true,
      rectangleMobile90: info.rectangleMobile90,
      logobrand: info.logobrand,
      group4: info.group4,
      frame153: info.frame153,
      ft: info.ft,
      ft5: info.ft5,
      ft4: info.ft4,
      ft3: info.ft3,
      ft2: info.ft2,
      frame4023: info.frame4023,
      group724: info.group724,
      imgQuestion: info.frame153,
    };
  },
  methods: {
    isClick() {
      this.$router.push({ name: 'Contact' });
    },
  },
}
</script>

<style scoped>
.contact-info {
  margin-left: 10px;
  margin-top: 15px;
  color: white;
  font-family: Inter,serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.contact-info-mobile {
  margin-left: 10px;
  margin-top: 15px;
  color: white;
  font-family: Inter,serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
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
