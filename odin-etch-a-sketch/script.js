function paintBlack(){
    const items = document.querySelectorAll("#item");

    items.forEach((item) => {
        item.addEventListener('mousedown',()=>{
            item.style.backgroundColor='black';
            
        });
    });
}

function paintWhite(){
    const items = document.querySelectorAll("#item");

    items.forEach((item) => {
        item.addEventListener('mousedown',()=>{
            item.style.backgroundColor='white';
        });
    });
}

function clear(){
    const items = document.querySelectorAll("#item");

    items.forEach((item) => {
            item.style.backgroundColor='white';
        });
}



function generateGame(){
    const mainContainer = document.querySelector('#main-container')
    for(let i=1; i<17;i++){
        const container = document.createElement('div');
        container.setAttribute('class','container-horizontally')
        container.setAttribute('id','container'+i)
        for(let j=1; j<17;j++){
            const div = document.createElement('div');
            div.setAttribute('class','item');
            div.setAttribute('id','item');
            container.appendChild(div);
        }
        mainContainer.appendChild(container);
    }
}

generateGame()

const buttonBlack = document.querySelector('#paint-black');
buttonBlack.addEventListener('click',paintBlack);

const buttonWhite = document.querySelector('#paint-white');
buttonWhite.addEventListener('click',paintWhite);

const buttonClear = document.querySelector('#clear');
buttonClear.addEventListener('click',clear);


console.log('oi')