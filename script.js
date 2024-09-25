// import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";
import { vacation_data } from "./data.js";
import { review_data } from "./data.js";
import { locationImageMap } from "./data.js";

// Destination drop down menu

let des = document.getElementsByClassName("destinations")[0];
let countries_list = document.getElementsByClassName("country");
let desBut = des.firstChild;
//default up angle
desBut.addEventListener("click", function () {
  let drop_down_menu = document.getElementById("drop_down_menu");
  let menu_style = window.getComputedStyle(drop_down_menu);

  if (menu_style.getPropertyValue("visibility") === "hidden") {
    desBut.classList.add("down");
    drop_down_menu.style.setProperty("visibility", "visible");
    drop_down_menu.style.setProperty("animation", "showMenu 0.5s");
  } else {
    desBut.classList.remove("down");
    drop_down_menu.style.setProperty("animation", "closeMenu 0.5s");
    setTimeout(() => {
      drop_down_menu.style.setProperty("visibility", "hidden");
    }, "500");
  }
});

for (const country of countries_list) {
  let h4 = country.firstElementChild.firstElementChild;
  let h5 = h4.nextElementSibling;
  let country_name = country.firstElementChild.firstElementChild.innerHTML;
  let bg_img = locationImageMap.get(country_name);
  country.addEventListener("mouseover", () => {
    console.log(country);
    country.style.setProperty("transition", "background 0.5s");
    country.style.setProperty(
      "background",
      `linear-gradient(rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)),center/cover no-repeat  url(${bg_img})`
    );

    h4.style.setProperty("color", "white");
    h5.style.setProperty("color", "white");
  });
  country.addEventListener("mouseleave", () => {
    country.style.setProperty("background", "none");
    h4.style.setProperty("color", "black");
    h5.style.setProperty("color", "black");
  });
}

//TODO: header backgroud image selection
function BackgroundImages(url, name, price) {
  this.url = url;
  this.name = name;
  this.price = price;
}

const backgroundList = [
  new BackgroundImages(
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd2961c3e396968aac28_031.jpeg",
    "Denpasar, Indonesia",
    "1900"
  ),
  new BackgroundImages(
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd3355581e17e093caed_011.jpeg",
    "Thessaloniki, Greece",
    "6700"
  ),
  new BackgroundImages(
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg",
    "Bahariya Oasis, Egypt",
    "6700"
  ),
];

let header = document.querySelector("header");
let right_arrow = document.querySelector("#right_arrow");
let left_arrow = document.querySelector("#left_arrow");
let city_name = document.querySelector("#city_name");
let price = document.querySelector("#price");
let box = document.querySelector(".slide_container");
let len = backgroundList.length;
let index = 0;

right_arrow.addEventListener("click", function () {
  index++;
  index %= len;
  box.classList.add("small");
  setTimeout(() => {
    city_name.innerHTML = backgroundList[index].name;
    price.innerHTML = backgroundList[index].price;
    box.classList.remove("small");
  }, 900);

  header.style.setProperty(
    "background",
    `linear-gradient(rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)), url(${backgroundList[index].url})`
  );
  header.style.setProperty("background-position", "center");
});

left_arrow.addEventListener("click", function () {
  index--;
  index < 0 ? (index = len - (Math.abs(index) % len)) : (index = index);
  box.classList.add("small");
  setTimeout(() => {
    city_name.innerHTML = backgroundList[index].name;
    price.innerHTML = backgroundList[index].price;
    box.classList.remove("small");
  }, 900);

  header.style.setProperty(
    "background",
    `linear-gradient(rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)), url(${backgroundList[index].url})`
  );
  header.style.setProperty("background-position", "center");
});

//TODO: left nav bar translation

let liBoxes = document.getElementsByClassName("location");
let imageMap = new Map([
  [
    "Africa",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg",
  ],
  [
    "Asia",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd2961c3e396968aac28_031.jpeg",
  ],
  [
    "Europe",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcebe459b2b2910bdb3cd_015.jpeg",
  ],
  [
    "France",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dd011e021d45c28b27a10_021.jpeg",
  ],
  [
    "Indonesia",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcd2961c3e396968aac28_031.jpeg",
  ],
  [
    "Greece",
    "https://assets.website-files.com/606764630d23c37bf9d41bb1/607dcebe459b2b2910bdb3cd_015.jpeg",
  ],
]);
for (const box of liBoxes) {
  box.addEventListener("mouseover", () => {
    let loc = box.firstElementChild.innerHTML;
    let bgImg = box.lastElementChild;
    console.log(box);
    console.log(loc);
    const styles = `
      .location_bg {
        width: 100%; 
        height: 100%; 
        background: linear-gradient(rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)), url(${imageMap.get(
          loc
        )}) center/cover;
      }
        `;
    const style = document.createElement("style");
    style.innerHTML = styles;
    document.head.appendChild(style);

    if (imageMap.has(loc)) {
      console.log("in if");
      box.classList.add("location_bg");
      box.style.setProperty("color", "white");

      box.style.setProperty("transform-style", "preserve-3d");
      box.style.setProperty("transform", "scale3d(1.07, 1.07, 1)");
    }
  });
}

for (const box of liBoxes) {
  box.addEventListener("mouseout", () => {
    let loc = box.firstElementChild.innerHTML;
    let bgImg = box.lastElementChild;
    console.log(box);
    console.log(loc);
    if (imageMap.has(loc)) {
      console.log("in if");
      // box.style.setProperty("background-color", "red");
      box.classList.remove("location_bg");
      box.style.setProperty("color", "black");
      box.style.setProperty("transform", "scale3d(1, 1, 1)");
    }
  });
}

let left_nav_button = document.getElementsByClassName("left_nav_button")[0];
const left_nav_bar = document.getElementById("left_nav_bar");
let nav_open = false;
left_nav_button.addEventListener("click", () => {
  if (nav_open) {
    left_nav_bar.style.setProperty("transform", "translateX(-450px)");
    nav_open = false;
  } else {
    left_nav_bar.style.setProperty("transform", "translateX(450px)");
    nav_open = true;
  }
});

//TODO: top nav bar showing up while scrolling
let top_nav = document.querySelector(".top_nav");
let nav_mid = document.querySelector(".nav_mid");
let main_nav = document.querySelector(".main_nav");
let des_but = document.querySelector(".des_but");
let nav_drop_down = document.querySelector(".nav_drop_down");
let top_nav_bg = document.querySelector(".top_nav_bg");
const top_max = 100;

window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  let rate = scrollTop / top_max;
  if (scrollTop > top_max) {
    // top_nav.classList.add("main_nav_white_bg");
    top_nav_bg.style.setProperty("top", "0px");
    // console.log(top_nav.classList);
    main_nav.style.setProperty("color", "rgb(8,28,58)");
    des_but.style.setProperty("color", "rgb(8,28,58)");
  } else {
    // top_nav.classList.remove("main_nav_white_bg");
    top_nav_bg.style.setProperty("top", `${-1 * (1 - rate) * 80}px`);
    // main_nav.classList.remove("main_nav_blue_text");
    main_nav.style.setProperty(
      "color",
      `rgb(${255 * (1 - rate) + 8 * rate}, ${255 * (1 - rate) + 28 * rate}, ${
        255 * (1 - rate) + 58 * rate
      })`
    );
    des_but.style.setProperty(
      "color",
      `rgb(${255 * (1 - rate) + 8 * rate}, ${255 * (1 - rate) + 28 * rate}, ${
        255 * (1 - rate) + 58 * rate
      })`
    );
  }
});

//TODO: video player
let video_btn_wrapper = document.getElementById("video_btn_wrapper");
let video_player = document.querySelector(".video_player");
let video_container = document.querySelector(".video_container");
let video_button = document.querySelector("#video_button");

const styleTag = `
  #video_btn_wrapper.small {
    transform: scale(0.7);
    background-color: white;
  }
  
  #video_button.small {
    transform: scale(0.8);
    background-color: #081c3a;
  }

  .video_container.shadow {
    animation: 3s ease-in 0s infinite expandShadow 
  }

`;

const style = document.createElement("style");
style.innerHTML = styleTag;
document.head.appendChild(style);

video_btn_wrapper.addEventListener("mouseenter", () => {
  video_player.style.setProperty("visibility", "visible");
  video_button.classList.add("small");
  video_btn_wrapper.classList.add("small");
  video_container.style.setProperty("transform", "scale(1)");
  video_container.classList.add("shadow");
  video_player.play();
});
video_btn_wrapper.addEventListener("mouseleave", () => {
  video_player.pause();
  video_container.style.setProperty("transform", "scale(0)");
  video_button.classList.remove("small");
  video_btn_wrapper.classList.remove("small");
  video_container.classList.remove("shadow");
  setTimeout(() => {
    video_player.style.setProperty("visibility", "hidden");
    video_player.currentTime = 0;
  }, "400");
});

//gallery
let overlay1 = document.querySelector(".overlay.overlay1");
let overlay2 = document.querySelector(".overlay.overlay2");

window.addEventListener("scroll", function () {
  //获取滚动条高度
  let scrollTop = document.documentElement.scrollTop;
  // console.log(`scrolltop = ${scrollTop}`);
  if (scrollTop >= 144) {
    overlay1.classList.add("open");
    overlay2.classList.add("open");
  }
});

//benefits
window.addEventListener("scroll", function () {
  let scrollTop = document.documentElement.scrollTop;
  const overlayUp = document.querySelector(".white_overlay_up");
  const overlayDown = document.querySelector(".white_overlay_down");

  if (scrollTop >= 700) {
    overlayUp.style.setProperty("top", "-50%");
    overlayDown.style.setProperty("top", "100%");
  }
});

//comments
let left_arrow_comment = document.querySelector(
  "section.comments .comment_container .buttons .left_button"
);
let right_arrow_comment = document.querySelector(
  "section.comments .comment_container .buttons .right_button"
);
let comment_content = document.querySelector(".comment_content");
let comment_customer = document.querySelector(".comment_customer");

const comment_data = [
  {
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta esse assumenda inventore fugiat doloremque eum adipisci, tenetur dolorum illum ipsum similique odit odio tempora aspernatur quis rem laboriosam dignissimos incidunt!",
    name: "Samantha Vohnhale",
  },
  {
    comment:
      "Soluta esse assumenda inventore fugiat doloremque eum adipisci, tenetur dolorum illum ipsum similique odit odio tempora aspernatur quis rem laboriosam dignissimos incidunt!",
    name: "xxxxxxxxxxxxxxxx",
  },
  {
    comment:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. tenetur dolorum illum ipsum similique odit odio tempora aspernatur quis rem laboriosam dignissimos incidunt!",
    name: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",
  },
];

let comment_index = 0;
let comment_len = comment_data.length;

left_arrow_comment.addEventListener("click", () => {
  comment_index--;
  comment_index < 0
    ? (comment_index = comment_len - (Math.abs(comment_index) % comment_len))
    : (icomment_index = comment_index);
  // console.log(left_arrow_comment);
  comment_content.classList.add("small");
  comment_customer.classList.add("small");

  setTimeout(() => {
    comment_content.innerHTML = comment_data[comment_index].comment;
    comment_customer.innerHTML = comment_data[comment_index].name;
    comment_content.classList.remove("small");
    comment_customer.classList.remove("small");
  }, 1000);
});

right_arrow_comment.addEventListener("click", () => {
  comment_index++;
  comment_index %= len;
  // console.log(left_arrow_comment);
  comment_content.classList.add("small");
  comment_customer.classList.add("small");

  setTimeout(() => {
    comment_content.innerHTML = comment_data[comment_index].comment;
    comment_customer.innerHTML = comment_data[comment_index].name;
    comment_content.classList.remove("small");
    comment_customer.classList.remove("small");
  }, 1000);
});

//popular vacations
let vacation_country_list = document.getElementsByClassName("vacation_country");
let blue_bar = document.querySelector(".blue_bar");
let blue_bar_position = 1;
let vacation_country_0 = vacation_country_list[0];
let btn_0 = vacation_country_0.lastElementChild.previousElementSibling;
let vacation_country_1 = vacation_country_list[1];
let btn_1 = vacation_country_1.lastElementChild.previousElementSibling;
let vacation_country_2 = vacation_country_list[2];
let btn_2 = vacation_country_2.lastElementChild.previousElementSibling;
let vacation_country_3 = vacation_country_list[3];
let btn_3 = vacation_country_3.lastElementChild.previousElementSibling;

btn_0.addEventListener("click", () => {
  if (blue_bar_position <= 1) {
    btn_0.classList.add("active");
    btn_0.lastElementChild.classList.add("active");
    blue_bar.classList.add("active1");
    blue_bar_position = 1;
  } else {
    btn_1.classList.remove("active");
    btn_1.lastElementChild.classList.remove("active");
    btn_2.classList.remove("active");
    btn_2.lastElementChild.classList.remove("active");
    btn_3.classList.remove("active");
    btn_3.lastElementChild.classList.remove("active");
    blue_bar.classList.remove("active2");
    blue_bar.classList.remove("active3");
    blue_bar.classList.remove("active4");
    blue_bar_position = 0;
  }
});

btn_1.addEventListener("click", () => {
  if (blue_bar_position <= 2) {
    btn_0.classList.add("active");
    btn_1.classList.add("active");
    btn_0.lastElementChild.classList.add("active");
    btn_1.lastElementChild.classList.add("active");
    blue_bar.classList.add("active2");
    blue_bar_position = 2;
  } else {
    btn_2.classList.remove("active");
    btn_3.classList.remove("active");
    btn_2.lastElementChild.classList.remove("active");
    btn_3.lastElementChild.classList.remove("active");
    blue_bar.classList.remove("active3");
    blue_bar.classList.remove("active4");
    blue_bar.classList.add("active2");
    blue_bar_position = 2;
  }
});

btn_2.addEventListener("click", () => {
  if (blue_bar_position <= 3) {
    btn_0.classList.add("active");
    btn_1.classList.add("active");
    btn_2.classList.add("active");
    btn_0.lastElementChild.classList.add("active");
    btn_1.lastElementChild.classList.add("active");
    btn_2.lastElementChild.classList.add("active");
    blue_bar.classList.add("active3");
    blue_bar_position = 3;
  } else {
    btn_3.classList.remove("active");
    btn_3.lastElementChild.classList.remove("active");
    blue_bar.classList.remove("active4");
    blue_bar.classList.add("active3");
    blue_bar_position = 3;
  }
});

btn_3.addEventListener("click", () => {
  btn_0.classList.add("active");
  btn_1.classList.add("active");
  btn_2.classList.add("active");
  btn_3.classList.add("active");
  btn_0.lastElementChild.classList.add("active");
  btn_1.lastElementChild.classList.add("active");
  btn_2.lastElementChild.classList.add("active");
  btn_3.lastElementChild.classList.add("active");
  blue_bar.classList.add("active4");
  blue_bar_position = 4;
});

let vacation_city = document.getElementsByClassName("vacation_city");
let vacation_list = document.getElementsByClassName("vacation_list")[0];

//change vacation cities info when click on country btns
[btn_0, btn_1, btn_2, btn_3].forEach((btn) => {
  btn.addEventListener("click", () => {
    vacation_list.style.setProperty("animation", "closeCities 0.5s");
    setTimeout(() => {
      vacation_list.style.setProperty("animation", "showCities 0.5s");
    }, "300");
    let vacation_country_name =
      btn.previousElementSibling.firstElementChild.innerHTML;
    let vacation_city_datas = vacation_data.find(
      (item) => item.country === vacation_country_name
    );
    // console.log(vacation_city_datas);
    for (let index = 0; index < vacation_city_datas.cities.length; index++) {
      vacation_city[
        index
      ].firstElementChild.firstElementChild.style.setProperty(
        "background-image",
        `url(${vacation_city_datas.cities[index].img})`
      );
      vacation_city[
        index
      ].firstElementChild.nextElementSibling.firstElementChild.innerHTML =
        vacation_city_datas.cities[index].name;
    }
  });
});
// scale vacation city photos when hover
for (let city of vacation_city) {
  city.addEventListener("mouseenter", () => {
    city.firstElementChild.firstElementChild.style.setProperty(
      "transform",
      "scale(1.05)"
    );
  });
  city.addEventListener("mouseleave", () => {
    city.firstElementChild.firstElementChild.style.setProperty(
      "transform",
      "scale(1)"
    );
  });
}

// how it works section
let bg_overlay1 = document.querySelector(".bg_overlay_1");
let bg_overlay2 = document.querySelector(".bg_overlay_2");

window.addEventListener("scroll", function () {
  //获取滚动条高度
  let scrollTop = document.documentElement.scrollTop;
  // console.log(`scrolltop = ${scrollTop}`);
  if (scrollTop >= 4188) {
    bg_overlay1.classList.add("open");
    bg_overlay2.classList.add("open");
    // console.log("testestst");
  }
});

//review photos swipe when hover
let review_photos = document.querySelector(".review_photos");
let photos = document.getElementsByClassName("photo");
const half_window = window.innerWidth / 2;

review_photos.addEventListener("mouseover", (e) => {
  let move_dis_rate = (-1 * (e.x - half_window)) / half_window;
  // console.log(e.x);
  review_photos.style.setProperty(
    "transform",
    `translateX(${40 * move_dis_rate}vw)`
  );
});

review_photos.addEventListener("mouseleave", (e) => {
  // let move_dis_rate = (-1 * (e.x - half_window)) / half_window;
  // console.log(e.x);
  review_photos.style.setProperty("transform", "none");
});

for (let i = 0; i < photos.length; i++) {
  photos[i].addEventListener("mouseenter", (e) => {
    e.target.firstElementChild.style.setProperty("visibility", "visible");
  });
  photos[i].addEventListener("mouseleave", (e) => {
    e.target.firstElementChild.style.setProperty("visibility", "hidden");
  });
  photos[i].style.setProperty("background-image", `url(${review_data[i].img})`);
}

//agent photos
let agent_intros = document.getElementsByClassName("agent_intro");
let photo_containers = document.getElementsByClassName("photo_container");

for (let intro of agent_intros) {
  intro.addEventListener("mouseenter", (e) => {
    e.target.firstElementChild.firstElementChild.classList.add("large");
  });
  intro.addEventListener("mouseleave", (e) => {
    e.target.firstElementChild.firstElementChild.classList.remove("large");
  });
}

//post photos
let post_list = document.getElementsByClassName("post");
let main_post_bg = document.getElementsByClassName("main_post_bg")[0];

main_post_bg.addEventListener("mouseenter", (e) => {
  e.target.style.setProperty("transform", "scale(1.1)");
  // e.target.style.setProperty("filter", "blur(5px)");
});

main_post_bg.addEventListener("mouseleave", (e) => {
  e.target.style.setProperty("transform", "none");
  // e.target.style.setProperty("filter", "blur(0px)");
});

for (let post of post_list) {
  post.addEventListener("mouseenter", (e) => {
    let post_bg = e.target.firstElementChild.firstElementChild;
    post_bg.style.setProperty("transform", "scale(1.1)");
  });
  post.addEventListener("mouseleave", (e) => {
    let post_bg = e.target.firstElementChild.firstElementChild;
    post_bg.style.setProperty("transform", "none");
  });
}
