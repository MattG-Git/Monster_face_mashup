//Button variables
const eyesBtn = document.getElementById('eyesBtn');
const noseBtn = document.getElementById('noseBtn');
const mouthBtn = document.getElementById('mouthBtn');
const wholeFaceBtn = document.getElementById('wholeFaceBtn');

//Image variables
const dEyes = document.getElementById('eyesdefault');
const dNose = document.getElementById('nosedefault');
const dMouth = document.getElementById('mouthdefault');

//Img Path Variables
let eyesPath = ''; 
let nosePath = '';
let mouthPath = '';

//Global Vars
let number = 0;


//Global Functions
function randomIndex () { 
    number = Math.floor(Math.random() * 3) + 1; 
    return number; 
}
//Whole Face Randomization Function
const displayFace= () => {
    wholeFaceBtn.removeEventListener('click', displayFace);
    wholeFaceBtn.addEventListener('click', displayFace);
    displayEyes();
    displayNose();
    displayMouth(); 
    function jumpto(anchor){
        window.location.href = '#'+anchor;
    };
    jumpto('eyesdefault')
};


//Eyes Functions 
const displayEyes = () => {
    eyesBtn.removeEventListener('click', displayEyes);
    changeEyes();
    dEyes.src = eyesPath; 
    eyesBtn.addEventListener('click', displayEyes);
};

const changeEyes = () => {  
    randomIndex(); 
    switch(number) {
        case 1:
            eyesPath="Images/Frankenstein/Forehead/Frank_Eyes_1.svg";
        break;
        case 2:
            eyesPath="Images/Frankenstein/Forehead/Frank_eyes_2.svg";
        break;
        case 3:
            eyesPath="Images/Frankenstein/Forehead/Frank_Eyes_3.svg";
        break;          
    }
return eyesPath; 
};


//Nose Functions 
const displayNose = () => {
    noseBtn.removeEventListener('click', displayNose);
    changeNose();
    dNose.src = nosePath; 
    noseBtn.addEventListener('click', displayNose);
};

const changeNose = () => {  
    randomIndex(); 
    switch(number) {
        case 1:
            nosePath="Images/Frankenstein/Nose/Frank_nose_1.svg";
        break;
        case 2:
            nosePath="Images/Frankenstein/Nose/Frank_nose_2.svg";
        break;
        case 3:
            nosePath="Images/Frankenstein/Nose/Frank_nose_3.svg";
        break;          
    }
return nosePath; 
};

//Mouth Functions 
const displayMouth = () => {
    mouthBtn.removeEventListener('click', displayMouth);
    changeMouth();
    dMouth.src = mouthPath; 
    mouthBtn.addEventListener('click', displayMouth);
};

const changeMouth = () => {  
    randomIndex(); 
    switch(number) {
        case 1:
            mouthPath="Images/Frankenstein/Mouth/Frank_mouth_1.svg";
        break;
        case 2:
            mouthPath="Images/Frankenstein/Mouth/Frank_mouth_2.svg";
        break;
        case 3:
            mouthPath="Images/Frankenstein/Mouth/Frank_mouth_3.svg";
        break;          
    }
return mouthPath; 
};


//DOM Events
eyesBtn.addEventListener('click', displayEyes);
noseBtn.addEventListener('click', displayNose);
mouthBtn.addEventListener('click', displayMouth);
wholeFaceBtn.addEventListener('click', displayFace);