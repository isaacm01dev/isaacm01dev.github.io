// DOM ELEMENTS : ******************* 

// DIV BUTTONS 
const sliderHandle = document.querySelectorAll('.sliderHandle');
const sliderHandlePlaceBtn= document.getElementById('sliderHandlePlaceBtn');
const sliderHandleMenuBtn = document.getElementById('sliderHandleMenuBtn');
 
// TITLE BUTTONS & NAVBAR
const welcomePlaceBtn = document.getElementById('welcomePlaceBtn');
const welcomeMenuBtn = document.getElementById('welcomeMenuBtn');

const navBar = document.querySelector('.navBar');

const aboutBtn = document.getElementById('aboutBtn');
const reservationsBtn = document.getElementById('reservationsBtn');


// SECTIONS -----------------------------------

// WELCOME SECTIONS DIV
const welcomePlaceSection = document.getElementById('welcomePlaceSection');
const welcomeMenuSection = document.getElementById('welcomeMenuSection');
// WELCOME SECTION CONTENT
const welcomePlaceContent = document.querySelector('.welcomePlaceContent');
const welcomeMenuContent = document.querySelector('.welcomeMenuContent');
// WELCOME SECTIONS BG IMAGES
const placeWelcomeImage = document.getElementById('placeWelcomeImage');
const menuWelcomeImage = document.getElementById('menuWelcomeImage');

// WELCOME RESTAURANT MAIN NAME
const restaurantName = document.querySelector('.restaurantName');


// ABOUT SECTION
const aboutUs = document.querySelector('.aboutUs');
// RESERVATION SECTION
const reservations = document.querySelector('.reservations');


// RESTAURANT IMAGES ----------------------------------
const place = document.querySelector('.place');
// MENU BOOK
const book = document.querySelector('.book');


// *************************************************************
// ********************* EVENT LISTENERS ***********************
// *************************************************************

  // // ******************************************
  // // WELCOME TITLE BUTTONS :
  // // ******************************************

// ************ WELCOME PLACE BUTTON  "Our Place" **********

welcomePlaceBtn.addEventListener('click', () => {
  // MOVE WELCOME SECTIONS 
  welcomePlaceSection.classList.add('placeSectionShowImage');
  welcomeMenuSection.classList.add('menuSectionHidden');
  
  welcomePlaceContent.classList.add('movePlaceSectionContent');
  
  // SHOW BACKGROUND IMAGE
  placeWelcomeImage.style.opacity = '0.4';
  
  // SHOW CLOSE BUTTON
  sliderHandlePlaceBtn.style.transform = 'translate(-25vw)';
  sliderHandlePlaceBtn.style.opacity = '1';
  sliderHandlePlaceBtn.style.cursor = 'pointer';
  // sliderHandlePlaceBtn.classList.add('.sliderHandlePlaceMove');
  
  // DISPLAY NEW PAGE
  place.classList.add('restaurant');
  
  navBar.classList.add('showNavBar');
  
  reservations.classList.remove('showReservations');
  
  aboutUs.classList.remove('showOurStory');
  
  restaurantName.style.display = 'none';
});


// ************ WELCOME MENU BUTTON "Our Menu" **********

welcomeMenuBtn.addEventListener('click', () => {
  // MOVE WELCOME SECTIONS
  welcomeMenuSection.classList.add('menuSectionShowImage');
  welcomePlaceSection.classList.add('placeSectionHidden');  
  
  welcomeMenuContent.classList.add('moveMenuSectionContent');
  
  
  // SHOW BACKGROUND IMAGE 
  menuWelcomeImage.style.opacity = '0.4';
  
  // SHOW CLOSE BUTTON
  sliderHandleMenuBtn.style.transform = 'translate(25vw)';
  sliderHandleMenuBtn.style.opacity = '1';
  sliderHandleMenuBtn.style.cursor = 'pointer';
  // sliderHandleMenuBtn.classList.add('.sliderHandleMenuMove');
  
  book.classList.add('showBookMenu');
  
  navBar.classList.add('showNavBar');
  // showMenuSection.style.display = 'flex'; 
  reservations.classList.remove('showReservations');
  
  aboutUs.classList.remove('showOurStory');
  restaurantName.style.display = 'none';
});


  // // ******************************************
  // // SLIDER SECTION CLOSE BUTTONS *************
  // // ******************************************
  
  sliderHandlePlaceBtn.addEventListener('click', () => {
    welcomePlaceSection.classList.remove('placeSectionShowImage');
    welcomeMenuSection.classList.remove('menuSectionHidden');
    
    welcomePlaceContent.classList.remove('movePlaceSectionContent');
    
    sliderHandlePlaceBtn.style.opacity = '0';
    // sliderHandlePlaceBtn.classList.remove('.sliderHandlePlaceMove');
    
    place.classList.remove('restaurant');
    
    navBar.classList.remove('showNavBar');
    
    reservations.classList.remove('showReservations');
    
    aboutUs.classList.remove('showOurStory'); 
    
  });
  
  sliderHandleMenuBtn.addEventListener('click', () => {
    welcomeMenuSection.classList.remove('menuSectionShowImage');
    welcomePlaceSection.classList.remove('placeSectionHidden');
    
    welcomeMenuContent.classList.remove('moveMenuSectionContent');   
    
    sliderHandleMenuBtn.style.opacity = '0';  
    // sliderHandlePlaceBtn.classList.remove('.sliderHandleMenuMove');
    
    book.classList.remove('showBookMenu');

    navBar.classList.remove('showNavBar');
    
    reservations.classList.remove('showReservations');

    aboutUs.classList.remove('showOurStory');
  
  });


// // ******************************************
// // NAV BAR BUTTONS **************************
// // ******************************************

aboutBtn.addEventListener('click', () =>{
  aboutUs.classList.add('showOurStory');

  reservations.classList.remove('showReservations');

  place.classList.remove('restaurant');
  book.classList.remove('showBookMenu');

});

reservationsBtn.addEventListener('click', () =>{
  reservations.classList.add('showReservations');

  aboutUs.classList.remove('showOurStory');

  place.classList.remove('restaurant');
  book.classList.remove('showBookMenu');

});

