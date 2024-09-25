import { vacation_data, review_data, locationImageMap } from "./data.js";

// Destination drop down menu
function setupDestinationDropdown() {
  const des = document.getElementsByClassName("destinations")[0];
  const desBut = des.firstChild;
  const dropDownMenu = document.getElementById("drop_down_menu");

  desBut.addEventListener("click", () => {
    const menuStyle = window.getComputedStyle(dropDownMenu);
    if (menuStyle.getPropertyValue("visibility") === "hidden") {
      showDropdownMenu(desBut, dropDownMenu);
    } else {
      hideDropdownMenu(desBut, dropDownMenu);
    }
  });
}

function showDropdownMenu(button, menu) {
  button.classList.add("down");
  menu.style.setProperty("visibility", "visible");
  menu.style.setProperty("animation", "showMenu 0.5s");
}

function hideDropdownMenu(button, menu) {
  button.classList.remove("down");
  menu.style.setProperty("animation", "closeMenu 0.5s");
  setTimeout(() => {
    menu.style.setProperty("visibility", "hidden");
  }, 500);
}

// Country hover effects
function setupCountryHoverEffects() {
  const countriesList = document.getElementsByClassName("country");

  for (const country of countriesList) {
    const h4 = country.firstElementChild.firstElementChild;
    const h5 = h4.nextElementSibling;
    const countryName = h4.innerHTML;
    const bgImg = locationImageMap.get(countryName);

    country.addEventListener("mouseover", () => {
      applyHoverEffect(country, h4, h5, bgImg);
    });

    country.addEventListener("mouseleave", () => {
      removeHoverEffect(country, h4, h5);
    });
  }
}

function applyHoverEffect(element, h4, h5, bgImg) {
  element.style.setProperty("transition", "background 0.5s");
  element.style.setProperty(
    "background",
    `linear-gradient(rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)),center/cover no-repeat  url(${bgImg})`
  );
  h4.style.setProperty("color", "white");
  h5.style.setProperty("color", "white");
}

function removeHoverEffect(element, h4, h5) {
  element.style.setProperty("background", "none");
  h4.style.setProperty("color", "black");
  h5.style.setProperty("color", "black");
}

// Header background image rotation
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

function setupHeaderImageRotation() {
  const header = document.querySelector("header");
  const rightArrow = document.querySelector("#right_arrow");
  const leftArrow = document.querySelector("#left_arrow");
  const cityName = document.querySelector("#city_name");
  const price = document.querySelector("#price");
  const box = document.querySelector(".slide_container");
  let index = 0;

  rightArrow.addEventListener("click", () => rotateImage(1));
  leftArrow.addEventListener("click", () => rotateImage(-1));

  function rotateImage(direction) {
    index = (index + direction + backgroundList.length) % backgroundList.length;
    updateHeaderImage(index);
  }

  function updateHeaderImage(index) {
    box.classList.add("small");
    setTimeout(() => {
      cityName.innerHTML = backgroundList[index].name;
      price.innerHTML = backgroundList[index].price;
      box.classList.remove("small");
    }, 900);

    header.style.setProperty(
      "background",
      `linear-gradient(rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)), url(${backgroundList[index].url})`
    );
    header.style.setProperty("background-position", "center");
  }
}

// Left nav bar translation
function setupLeftNavBarTranslation() {
  const liBoxes = document.getElementsByClassName("location");
  const imageMap = new Map([
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
      const loc = box.firstElementChild.innerHTML;
      const bgImg = imageMap.get(loc);
      const styles = `
        .location_bg {
          width: 100%; 
          height: 100%; 
          background: linear-gradient(rgba(15, 19, 38, 0.55), rgba(15, 19, 38, 0.55)), url(${bgImg}) center/cover;
        }
          `;
      const style = document.createElement("style");
      style.innerHTML = styles;
      document.head.appendChild(style);

      if (imageMap.has(loc)) {
        box.classList.add("location_bg");
        box.style.setProperty("color", "white");
        box.style.setProperty("transform-style", "preserve-3d");
        box.style.setProperty("transform", "scale3d(1.07, 1.07, 1)");
      }
    });
  }

  for (const box of liBoxes) {
    box.addEventListener("mouseout", () => {
      const loc = box.firstElementChild.innerHTML;
      if (imageMap.has(loc)) {
        box.classList.remove("location_bg");
        box.style.setProperty("color", "black");
        box.style.setProperty("transform", "scale3d(1, 1, 1)");
      }
    });
  }
}

// Left nav bar button
function setupLeftNavBarButton() {
  const leftNavButton = document.getElementsByClassName("left_nav_button")[0];
  const leftNavBar = document.getElementById("left_nav_bar");
  let navOpen = false;

  leftNavButton.addEventListener("click", () => {
    if (navOpen) {
      leftNavBar.style.setProperty("transform", "translateX(-450px)");
      navOpen = false;
    } else {
      leftNavBar.style.setProperty("transform", "translateX(450px)");
      navOpen = true;
    }
  });
}

// Top nav bar showing up while scrolling
function setupTopNavBarScroll() {
  const topNav = document.querySelector(".top_nav");
  const navMid = document.querySelector(".nav_mid");
  const mainNav = document.querySelector(".main_nav");
  const desBut = document.querySelector(".des_but");
  const navDropDown = document.querySelector(".nav_drop_down");
  const topNavBg = document.querySelector(".top_nav_bg");
  const topMax = 100;

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const rate = scrollTop / topMax;
    if (scrollTop > topMax) {
      topNavBg.style.setProperty("top", "0px");
      mainNav.style.setProperty("color", "rgb(8,28,58)");
      desBut.style.setProperty("color", "rgb(8,28,58)");
    } else {
      topNavBg.style.setProperty("top", `${-1 * (1 - rate) * 80}px`);
      mainNav.style.setProperty(
        "color",
        `rgb(${255 * (1 - rate) + 8 * rate}, ${255 * (1 - rate) + 28 * rate}, ${
          255 * (1 - rate) + 58 * rate
        })`
      );
      desBut.style.setProperty(
        "color",
        `rgb(${255 * (1 - rate) + 8 * rate}, ${255 * (1 - rate) + 28 * rate}, ${
          255 * (1 - rate) + 58 * rate
        })`
      );
    }
  });
}

// Video player
function setupVideoPlayer() {
  const videoBtnWrapper = document.getElementById("video_btn_wrapper");
  const videoPlayer = document.querySelector(".video_player");
  const videoContainer = document.querySelector(".video_container");
  const videoButton = document.querySelector("#video_button");

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

  videoBtnWrapper.addEventListener("mouseenter", () => {
    videoPlayer.style.setProperty("visibility", "visible");
    videoButton.classList.add("small");
    videoBtnWrapper.classList.add("small");
    videoContainer.style.setProperty("transform", "scale(1)");
    videoContainer.classList.add("shadow");
    videoPlayer.play();
  });

  videoBtnWrapper.addEventListener("mouseleave", () => {
    videoPlayer.pause();
    videoContainer.style.setProperty("transform", "scale(0)");
    videoButton.classList.remove("small");
    videoBtnWrapper.classList.remove("small");
    videoContainer.classList.remove("shadow");
    setTimeout(() => {
      videoPlayer.style.setProperty("visibility", "hidden");
      videoPlayer.currentTime = 0;
    }, 400);
  });
}

// Gallery
function setupGallery() {
  const overlay1 = document.querySelector(".overlay.overlay1");
  const overlay2 = document.querySelector(".overlay.overlay2");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 144) {
      overlay1.classList.add("open");
      overlay2.classList.add("open");
    }
  });
}

// Benefits
function setupBenefits() {
  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const overlayUp = document.querySelector(".white_overlay_up");
    const overlayDown = document.querySelector(".white_overlay_down");

    if (scrollTop >= 700) {
      overlayUp.style.setProperty("top", "-50%");
      overlayDown.style.setProperty("top", "100%");
    }
  });
}

// Comments
function setupComments() {
  const leftArrowComment = document.querySelector(
    "section.comments .comment_container .buttons .left_button"
  );
  const rightArrowComment = document.querySelector(
    "section.comments .comment_container .buttons .right_button"
  );
  const commentContent = document.querySelector(".comment_content");
  const commentCustomer = document.querySelector(".comment_customer");

  const commentData = [
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

  let commentIndex = 0;
  const commentLen = commentData.length;

  leftArrowComment.addEventListener("click", () => {
    commentIndex = (commentIndex - 1 + commentLen) % commentLen;
    updateComment(commentIndex);
  });

  rightArrowComment.addEventListener("click", () => {
    commentIndex = (commentIndex + 1) % commentLen;
    updateComment(commentIndex);
  });

  function updateComment(index) {
    commentContent.classList.add("small");
    commentCustomer.classList.add("small");

    setTimeout(() => {
      commentContent.innerHTML = commentData[index].comment;
      commentCustomer.innerHTML = commentData[index].name;
      commentContent.classList.remove("small");
      commentCustomer.classList.remove("small");
    }, 1000);
  }
}

// Popular vacations
function setupPopularVacations() {
  const vacationCountryList =
    document.getElementsByClassName("vacation_country");
  const blueBar = document.querySelector(".blue_bar");
  let blueBarPosition = 1;

  const [btn0, btn1, btn2, btn3] = vacationCountryList;

  btn0.lastElementChild.previousElementSibling.addEventListener("click", () => {
    updateBlueBar(1);
  });

  btn1.lastElementChild.previousElementSibling.addEventListener("click", () => {
    updateBlueBar(2);
  });

  btn2.lastElementChild.previousElementSibling.addEventListener("click", () => {
    updateBlueBar(3);
  });

  btn3.lastElementChild.previousElementSibling.addEventListener("click", () => {
    updateBlueBar(4);
  });

  function updateBlueBar(position) {
    blueBarPosition = position;
    updateButtonsAndBar();
    updateVacationCities(position);
  }

  function updateButtonsAndBar() {
    for (let i = 0; i < vacationCountryList.length; i++) {
      const btn =
        vacationCountryList[i].lastElementChild.previousElementSibling;
      const circle = btn.lastElementChild;
      const isActive = i < blueBarPosition;

      btn.classList.toggle("active", isActive);
      circle.classList.toggle("active", isActive);
      blueBar.classList.toggle(`active${i + 1}`, isActive);
    }
  }

  function updateVacationCities(position) {
    const vacationList = document.getElementsByClassName("vacation_list")[0];
    const vacationCountryName =
      vacationCountryList[position - 1].firstElementChild.firstElementChild
        .innerHTML;
    const vacationCityDatas = vacation_data.find(
      (item) => item.country === vacationCountryName
    );

    vacationList.style.setProperty("animation", "closeCities 0.5s");
    setTimeout(() => {
      vacationList.style.setProperty("animation", "showCities 0.5s");
    }, 300);

    const vacationCities = document.getElementsByClassName("vacation_city");
    for (let index = 0; index < vacationCityDatas.cities.length; index++) {
      const city = vacationCities[index];
      city.firstElementChild.firstElementChild.style.setProperty(
        "background-image",
        `url(${vacationCityDatas.cities[index].img})`
      );
      city.firstElementChild.nextElementSibling.firstElementChild.innerHTML =
        vacationCityDatas.cities[index].name;
    }
  }

  const vacationCities = document.getElementsByClassName("vacation_city");
  for (let city of vacationCities) {
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
}

// How it works section
function setupHowItWorks() {
  const bgOverlay1 = document.querySelector(".bg_overlay_1");
  const bgOverlay2 = document.querySelector(".bg_overlay_2");

  window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    if (scrollTop >= 4188) {
      bgOverlay1.classList.add("open");
      bgOverlay2.classList.add("open");
    }
  });
}

// Review photos swipe when hover
function setupReviewPhotosSwipe() {
  const reviewPhotos = document.querySelector(".review_photos");
  const photos = document.getElementsByClassName("photo");
  const halfWindow = window.innerWidth / 2;

  reviewPhotos.addEventListener("mouseover", (e) => {
    const moveDisRate = (-1 * (e.x - halfWindow)) / halfWindow;
    reviewPhotos.style.setProperty(
      "transform",
      `translateX(${40 * moveDisRate}vw)`
    );
  });

  reviewPhotos.addEventListener("mouseleave", () => {
    reviewPhotos.style.setProperty("transform", "none");
  });

  for (let i = 0; i < photos.length; i++) {
    photos[i].addEventListener("mouseenter", (e) => {
      e.target.firstElementChild.style.setProperty("visibility", "visible");
    });
    photos[i].addEventListener("mouseleave", (e) => {
      e.target.firstElementChild.style.setProperty("visibility", "hidden");
    });
    photos[i].style.setProperty(
      "background-image",
      `url(${review_data[i].img})`
    );
  }
}

// Agent photos
function setupAgentPhotos() {
  const agentIntros = document.getElementsByClassName("agent_intro");

  for (let intro of agentIntros) {
    intro.addEventListener("mouseenter", (e) => {
      e.target.firstElementChild.firstElementChild.classList.add("large");
    });
    intro.addEventListener("mouseleave", (e) => {
      e.target.firstElementChild.firstElementChild.classList.remove("large");
    });
  }
}

// Post photos
function setupPostPhotos() {
  const postList = document.getElementsByClassName("post");
  const mainPostBg = document.getElementsByClassName("main_post_bg")[0];

  mainPostBg.addEventListener("mouseenter", (e) => {
    e.target.style.setProperty("transform", "scale(1.1)");
  });

  mainPostBg.addEventListener("mouseleave", (e) => {
    e.target.style.setProperty("transform", "none");
  });

  for (let post of postList) {
    post.addEventListener("mouseenter", (e) => {
      const postBg = e.target.firstElementChild.firstElementChild;
      postBg.style.setProperty("transform", "scale(1.1)");
    });
    post.addEventListener("mouseleave", (e) => {
      const postBg = e.target.firstElementChild.firstElementChild;
      postBg.style.setProperty("transform", "none");
    });
  }
}

// Main execution
document.addEventListener("DOMContentLoaded", () => {
  setupDestinationDropdown();
  setupCountryHoverEffects();
  setupHeaderImageRotation();
  setupLeftNavBarTranslation();
  setupLeftNavBarButton();
  setupTopNavBarScroll();
  setupVideoPlayer();
  setupGallery();
  setupBenefits();
  setupComments();
  setupPopularVacations();
  setupHowItWorks();
  setupReviewPhotosSwipe();
  setupAgentPhotos();
  setupPostPhotos();
});
