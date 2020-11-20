'use strict';

const heart = ['🧡', '💛', '💙','💔','💚', '💜'];

// for each

heart.forEach(function(heart, index, array){
    console.log(`foreach : ${heart},${index},${array}`);
});

// for of

for(let i=0; i<heart.length; i++){
    const j = heart[i];
    if(j =='💔'){
        heart.splice(heart.indexOf('💔'),1,'🖤');       
    }
    console.log(heart[i]);

}