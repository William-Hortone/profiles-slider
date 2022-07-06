let persons = [
  {
    id: 1,
    name: "William Hortone",
    job: "FrontEnd Engneer",
    img: "image1.jpg",
    text: "A Front End Developer, or Front End Web Developer, is responsible for using their knowledge of programming languages to code user-side applications, including visual elements like menu bars, clickable buttons and the overall layout of websites or web applications. Their duties include communicating with clients to identify their needs, optimizing websites for different formats like desktops and mobile phones and running tests to ensure code strings perform the correct functions.",
  },
  {
    id: 2,
    name: "George",
    job: "UX Designer",
    img: "https://www.jeancoutu.com/globalassets/revamp/photo/conseils-photo/20160302-01-reseaux-sociaux-profil/photo-profil_301783868.jpg",
    text: "A UX Designer, or User Experience Designer, is responsible for monitoring user experience and ensuring that websites, software programs and products are easy to use. Their duties include reviewing user feedback to determine potential defects or areas for clarity, working closely with other IT professionals and company personnel to refine user experience and performing usability tests on software products or website features to ensure functionality. ",
  },
  {
    id: 3,
    name: "Starky didier",
    job: "Doctor Biotechnology",
    img: "https://thumbs.dreamstime.com/b/close-up-portrait-handsome-elegant-groomed-chic-posh-guy-touching-glasses-people-leader-leadership-career-corporate-concept-142616378.jpg",
    text: " Biotechnologists seek to understand and manipulate the basic building blocks of living things, and they use the techniques of molecular biology to do so. They study the genetic, chemical and physical attributes of cells, tissues and organisms, and identify practical uses for this knowledge.",
  },
  {
    id: 4,
    name: "Eunice Sharon",
    job: "Journalist",
    img: "https://www.fidelio73.fr/wp-content/uploads/2021/09/13c7103a389f5a7bda6470425301648c_html_2324430d.jpg",
    text: "A Journalist, or Reporter, is responsible for researching and writing informational news articles and stories about real events using a fair and unbiased perspective. Their duties include interviewing experts, gathering first-hand accounts of events and organizing an outline into a cohesive, interesting story.",
  },
];

let photo = document.getElementById("person_img");
let personName = document.getElementById("name");
let occupation = document.getElementById("job");
let description = document.getElementById("description");

const prevBtn = document.querySelector(".fa-angle-left");
const nextBtn = document.querySelector(".fa-angle-right");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", () => {
  seeProfiles();
});

function seeProfiles() {
  photo.src = persons[currentItem].img;
  personName.innerText = persons[currentItem].name;
  occupation.textContent = persons[currentItem].job;
  description.textContent = persons[currentItem].text;
}
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = persons.length - 1;
  }
  seeProfiles();
});
nextBtn.addEventListener("click", () => {
  currentItem++;
  // let idx = persons.length - 1;
  if (currentItem > persons.length - 1) {
    currentItem = 0;
  }
  seeProfiles();
});
