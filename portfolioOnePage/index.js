// ******************************************
// DOM ELEMENTS : 
// ******************************************

// BACKGROUND ELEMENTS : 

const mainBackground = document.querySelector('.mainBackground');

const welcomeBg = document.querySelector('.welcomeBg');
const engineerBg = document.querySelector('.engineerBg');
const developerBg = document.querySelector('.developerBg');
const portfolioBg = document.querySelector('.portfolioBg');
const contactBg = document.querySelector('.contactBg');


// CONTENT ELEMENTS :

const welcomeContent = document.querySelector('.welcomeContent');
const engineerContent = document.querySelector('.engineerContent');
const developerContent = document.querySelector('.developerContent');
const portfolioContent = document.querySelector('.portfolioContent');
const contactContent = document.querySelector('.contactContent');

// BUTTONS : 

const engineerButton = document.getElementById('engineerButton');
const developerButton = document.getElementById('developerButton');
const portfolioButton = document.getElementById('portfolioButton');
const contactButton = document.getElementById('contactButton');

const userZoom = window.visualViewport.width;


// MAKE APPEAR WELCOME WITH NO SCROLLING
welcomeContent.classList.add('showWelcomeContent'); 
welcomeBg.classList.add('showWelcomeBg'); 


// REFACTORING FUNCTIONS : 
function hideWelcome() {
  welcomeContent.style.display = 'none';
  welcomeBg.style.display = 'none';
}



// ********************************
// **** EVENT LISTENERS : *********
// ********************************


// ******** ENGINIEERING SECTION *********
engineerButton.addEventListener('click', () => {
  // SHOW BACKGROUND :
  engineerBg.classList.add('showEngineerBg');
  // SHOW CONTENT:
  engineerContent.classList.add('slideInX');
  

  // HIDE OTHER ELEMENTS : ---------------

    // HIDE OTHER BACKGROUNDS :
    developerBg.classList.remove('showDeveloperBg');
    portfolioBg.classList.remove('showPortfolioBg');
    contactBg.classList.remove('showContactBg');

    
    // HIDE OTHER CONTENTS:
    developerContent.classList.remove('slideInX');

    portfolioContent.classList.remove('slideInY');
    contactContent.classList.remove('slideInY');

  console.log(userZoom);

  hideWelcome();
});




// ******** DEVELOPER SECTION *********

developerButton.addEventListener('click', () => {
  // SHOW BACKGROUND :
  developerBg.classList.add('showDeveloperBg', 'slideInX');
  
  // SHOW CONTENT:
  // developerContent.classList.add('slideInX');
  developerContent.classList.add('slideInX');

  // HIDE OTHER ELEMENTS : ---------------

  // HIDE OTHER BACKGROUNDS :

  engineerBg.classList.remove('showEngineerBg');

  portfolioBg.classList.remove('showPortfolioBg');
  contactBg.classList.remove('showContactBg');

  
  // HIDE OTHER CONTENTS:
  engineerContent.classList.remove('slideInX');
  portfolioContent.classList.remove('slideInY');

  contactContent.classList.remove('slideInY');
  
  hideWelcome();

});




// ******** PORTFOLIO SECTION *********

portfolioButton.addEventListener('click', () => {
  // SHOW BACKGROUND :
  portfolioBg.classList.add('showPortfolioBg', 'slideToRight');
  
  // SHOW CONTENT:
  portfolioContent.classList.add('slideInY');

  // HIDE OTHER ELEMENTS : ---------------

  // HIDE OTHER BACKGROUNDS :
  engineerBg.classList.remove('showEngineerBg');
  developerBg.classList.remove('showDeveloperBg');

  contactBg.classList.remove('showContactBg');
  
  // HIDE OTHER CONTENTS:
  engineerContent.classList.remove('slideInX');
  developerContent.classList.remove('slideInX');

  contactContent.classList.remove('slideInY');

  hideWelcome();
});



// ******** CONTACT SECTION *********

contactButton.addEventListener('click', () => {
  // SHOW BACKGROUND :
  contactBg.classList.add('showContactBg', 'slideInX');
  
  // SHOW CONTENT:
  contactContent.classList.add('slideInY');

  // HIDE OTHER ELEMENTS : ---------------

  // HIDE OTHER BACKGROUNDS :
  engineerBg.classList.remove('showEngineerBg');
  developerBg.classList.remove('showDeveloperBg');

  portfolioBg.classList.remove('showPortfolioBg');

  
  // HIDE OTHER CONTENTS:
  engineerContent.classList.remove('slideInX');
  developerContent.classList.remove('slideInX');

  portfolioContent.classList.remove('slideInY');


  hideWelcome();
});


    
    
