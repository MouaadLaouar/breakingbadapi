const left = document.querySelector('.left');
const right = document.querySelector('.right');

const Name = document.getElementById('Name');
const nickname = document.getElementById('Nichname');
const birthday = document.getElementById('Birthday');
const occupation = document.getElementById('Occupation');
const Status = document.getElementById('Status');
const img = document.getElementById('img');

let b = 1;

const a = "https://www.breakingbadapi.com/api/characters/" + b ;
async function get(){
    const response = await fetch("https://www.breakingbadapi.com/api/characters/" + b);
    const data = await response.json();
    img.src = data[0].img;
    Name.textContent = data[0].name;
    nickname.textContent = data[0].nickname;
    birthday.textContent =data[0].birthday;
    occupation.textContent =data[0].occupation[0];
    Status.textContent =data[0].status;
}

get();

const change = () => {
    right.addEventListener('click', () => {
        b++;
        get();
    });
    left.addEventListener('click', () => {
        b--;
        if (b < 1) {
            b = 1;
        };
        get()
    })
}

change();
