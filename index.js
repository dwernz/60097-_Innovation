const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const picture = document.getElementById("picture");

//Change to have max number of photos.
const pictureTotal = 8;

let pictureCount = 0;

function checkCount() {
    if (pictureCount < 0) {
        pictureCount = pictureTotal - 1;
    }
    else if (pictureCount > pictureTotal - 1) {
        pictureCount = 0;    
    }
}

nextBtn.addEventListener('click', () => {
    pictureCount++;

    checkCount();

    picture.src = `./assets/images/carousel/picture${pictureCount}.jpg`;

    console.log(pictureCount);
});

prevBtn.addEventListener('click', () => {
    pictureCount--;

    checkCount();

    picture.src = `./assets/images/carousel/picture${pictureCount}.jpg`;

    console.log(pictureCount);  
});