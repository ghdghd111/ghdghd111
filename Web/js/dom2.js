'use-strict';

function change(){
    const span_s = document.querySelector('.span_s');
    const div_f = document.querySelector('.div_f');
    const button = document.querySelector('.button');

    button.addEventListener('click',() => {
        div_f.classList.toggle('active');
        span_s.classList.toggle('active');
    });

}