
overEfect('.item');


function overEfect(item) {

    let nav = {};
    nav = document.querySelectorAll(item);

[...nav].forEach(element => {
    
    element.addEventListener('mouseover', () => {

        element.style.background = '#00cccc';
        element.style.transitionDuration = '0.4s';
        element.style.color = '#fff';
        
    }
)});


[...nav].forEach(element => {
    
    element.addEventListener('mouseout', () => {

        element.style.background = '#fff';
        element.style.transitionDuration = '0.4s';
        element.style.color = '#00cccc';
    }
)}
);
}
