
// SELECT ELEMENTS BY QUERY SELECTOR CLASS AND STORET IN A VARIABLE: 
const mainBody = document.body;

const lightDark = document.querySelector('.lightDark');
const aboutContent = document.querySelector('.aboutContent');
const biography = document.querySelector('.biography');
const skills = document.querySelector('.skills');
const contactContent = document.querySelector('.contactContent');
const socialMedia = document.querySelector('.socialMedia');
const hello = document.querySelector('.hello');
const homePage = document.querySelector('.homePage');
const verticalNavBar = document.querySelector('.verticalNavBar');
const mainTitle = document.querySelector('.mainTitle');
const dayNight = document.querySelector('.dayNight');
const planetShadow = document.querySelector('.planetShadow');
const planet1 = document.querySelector('.planet1');


const projectsContent1 = document.querySelector('.projectsContent1');
// this is just a temporal adjustment to avoid clasList effect to only first element..
const projectsContent2 = document.querySelector('.projectsContent2');

const projectCard = document.querySelector('.projectCard');



function toggleLightDark() {
  console.log('toggleing...');

  // USE VARIABLES TO CHANGE ITS CLASSLIST :

  aboutContent.classList.toggle('aboutContentDark');
  // lightDark.classList.toggle('lightDark');
  biography.classList.toggle('biographyDark');
  skills.classList.toggle('skillsDark');
  contactContent.classList.toggle('contactContentDark');
  socialMedia.classList.toggle('socialMediaDark');
  hello.classList.toggle('helloDark');

  homePage.classList.toggle('homePageDark');
  verticalNavBar.classList.toggle('verticalNavBarDark');
  mainTitle.classList.toggle('mainTitleDark');
  // dayNight.classList.toggle('dayNightDark');
  planetShadow.classList.toggle('planetShadowDark');
  planet1.classList.toggle('planet1Dark');

  projectsContent1.classList.toggle('projectsContentDark');
  projectsContent2.classList.toggle('projectsContentDark');

  projectCard.classList.toggle('projectCardDark');
  // projectCardLight.classList.toggle('projectCardDark');
  
  mainBody.classList.toggle('bodyDark');
  
}





lightDark.addEventListener("click", toggleLightDark);
