
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let isInitialLoad = true;

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

//Unsplash API
let initialCount = 5;
const apiKey = '_SUBs6wIKz785H-odwyDaWKYz5Y7X-jd8FnfB50iCSs';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${initialCount}`;


function updateAPIURLWithNewCount (picCount) {
    apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${picCount}`;
  }

// Helper function to set attributes on DOM elements
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

// Check if all images were loaded
function imageLoaded(){
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
    }
}

// Create elements for links & photos
// Add to the DOM
function displayPhotos(){
    totalImages = photosArray.length;
    imagesLoaded = 0;
    // Run function for each object in photosArray
    photosArray.forEach((photo) => {
        //Create <a> to link to Unsplash
        const item = document.createElement('a');
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })
        // Create <img> for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        //Event Listener. check when each is finished loading
        img.addEventListener('load', imageLoaded);
        // Put <img> inside <a> and then put both inside imageContainer element
        item.appendChild(img);
        imageContainer.appendChild(item);
    })
}

//Get photos from Unsplash API
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
        if(isInitialLoad){
            updateAPIURLWithNewCount(30);
            isInitialLoad = false;
        }
    } catch (error){
        console.log(error);
    }
}

// Check to see if the user is scrolling near the end of the page
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        ready = false;
        getPhotos();
    }
});

//On load
getPhotos();