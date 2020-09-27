//Variables
const eyesBtn = document.getElementById('eyesBtn');
const eyesDiv = document.getElementById('eyes');
const dEyes = document.getElementById('eyesdefault');
let eyesPath = ''; 
let number = 0;


//Functions

const displayEyes = () => {
    eyesBtn.removeEventListener('click', displayEyes);
    changeEyes();
    dEyes.src = eyesPath; 
    eyesBtn.addEventListener('click', displayEyes);
};

function randomIndex () { 
    number = Math.floor(Math.random() * 3) + 1; 
    return number; 
}

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



//DOM Events
eyesBtn.addEventListener('click', displayEyes);