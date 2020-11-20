'use-strict';

const animals = document.querySelector('.animals');
const btnBox = document.querySelector('.footer_img')
const btn = document.querySelectorAll('button');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', (event)=>{
        const id = event.target.dataset.id;
        console.log(id);

        const animal = createAnimal(id);
        animals.appendChild(animal);
    })
})

/*
btnBox.addEventListener('click', (event) => {
    const id = event.target.dataset.id;
    console.log(id);

    const animal = createAnimal(id);
    animals.appendChild(animal);
})
*/
function createAnimal(id){
    const animalRow = document.createElement('li');
    animalRow.setAttribute('class', 'animal');
    
    if(id == 0 ){
        animalRow.innerHTML = '<div class="cat">🐱</div>'
    }

    if(id == 1){
        animalRow.innerHTML = '<div class="dog">🐶</div>'
    }

    if(id == 2){
        animalRow.innerHTML = '<div class="rabbit">🐰</div>'
    }

    if(id == 3){
        animalRow.innerHTML = '<div class="pig">🐷</div>'
    }

    return animalRow;
}
