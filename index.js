const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

const picture1 = document.getElementById("picture-1");

let pictureCount = 1;

if (pictureCount = 1) {
//    picture1.removeClass('hidden');
}
else {
//    picture1.addClass('hidden');
}

function checkCount() {
    if (pictureCount < 1) {
        pictureCount = 1;
    }
}

nextBtn.addEventListener('click', () => {
    pictureCount++;

    checkCount();

    console.log(pictureCount);
});

prevBtn.addEventListener('click', () => {
    pictureCount--;

    checkCount();

    console.log(pictureCount);  
});