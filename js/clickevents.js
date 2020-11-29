// SIMPLE CLICK ANIMATIONS ( Self Coded )

/**********************************
 *  Toggle Website Dark Mode
 **********************************/
let box = document.getElementById("box");
let boxTrack = document.getElementById("box-track");
let button = document.querySelector("#btn");
let toggleContent = document.getElementById("toggle-content");
let nav = document.querySelector("nav");

let myBox = false;

boxTrack.addEventListener("click", () => {
  let aTags = document.querySelector("#random-btn");

  myBox = !myBox;

  if (myBox) {
    box.style.transform = "translateX(110%)";
    box.style.backgroundColor = "#eeeeee";
    boxTrack.style.backgroundColor = "forestgreen";
    document.body.style.backgroundColor = "#222222";
    nav.style.backgroundColor = "#111111";
    document.body.style.color = "#ffffff";
    aTags.classList = "darkmode-atags";

    // for (let i = 0; i < aTags.length; i++) {
    //   const element = aTags[i];
    //   element.classList = "darkmode-atags";
    // }
  } else {
    box.style.transform = "translateX(0%)";
    box.style.backgroundColor = "rgb(29, 29, 29)";
    boxTrack.style.backgroundColor = "yellow";
    document.body.style.backgroundColor = "#ffffff";
    nav.style.backgroundColor = "#ffffff";
    document.body.style.color = "unset";
    aTags.classList = "unset";

    // for (let i = 0; i < aTags.length; i++) {
    //   const element = aTags[i];
    //   element.classList = "unset";
    // }
  }
});

/*********** END / Dark Mode **********/

/**********************************
 *            Slider
 **********************************/
let reviews = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/sitespringmedia/image/upload/v1606613249/person-1_fvcuya.svg",
    name: "Quincy Galafinakis",
    job: "ux designer",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse nihil laboriosam molestiae. Iusto autem, repellendus mollitia? ",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/sitespringmedia/image/upload/v1606613249/person-3_zwkin8.svg",
    name: "Peggy Poundcake",
    job: "project manager",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse nihil laboriosam molestiae. Iusto autem, repellendus mollitia?",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/sitespringmedia/image/upload/v1606613249/person-2_hw7yzt.svg",
    name: "Billy Ballbuster",
    job: "digital manager",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse nihil laboriosam molestiae. Iusto autem, repellendus mollitia?",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/sitespringmedia/image/upload/v1606613249/person-4_kbs9p5.svg",
    name: "Andre Chadsworth",
    job: "web developer",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse nihil laboriosam molestiae. Iusto autem, repellendus mollitia?",
  },
  {
    id: 5,
    image:
      "https://res.cloudinary.com/sitespringmedia/image/upload/v1606619500/person-5_yszkx1.svg",
    name: "Wade Sturgeon",
    job: "ER Surgeon",
    bio:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat esse nihil laboriosam molestiae. Iusto autem, repellendus mollitia?",
  },
];

let cardImage = document.getElementById("card-image");
let cardName = document.getElementById("author");
let cardJob = document.getElementById("job");
let cardBio = document.getElementById("bio");

let nextBtn = document.querySelector("#next-btn");
let prevBtn = document.querySelector("#prev-btn");
let randomBtn = document.querySelector("#random-btn");

// Set starting value
let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", () => {
  showPerson();
});

/********** FUNCTION to Show person based on 'item' **********/
function showPerson() {
  const item = reviews[currentItem];

  // Display items from 'reviews' array on page
  cardImage.src = item.image;
  cardName.textContent = item.name;
  cardJob.textContent = item.job;
  cardBio.textContent = item.bio;
}

// Show next person
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// Show prev person
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    // sets the currentItem starting at the back of the array if current slide index is less than 0
    currentItem = reviews.length - 1;
  }
  showPerson();
});

/**
 *  Show Random item from reviews array
 */

randomBtn.addEventListener("click", () => {
  // set 'currentItem' variable that holds the number of the current item in the array
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});

/*********** END / Slider **********/
