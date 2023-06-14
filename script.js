//This is return array.
const accordians = document.querySelectorAll('.accordian');

accordians.forEach((accordian)=>{
    const icons = accordian.querySelector('.icon');
    const answer = accordian.querySelector('.answer');

    accordian.addEventListener('click',() => {
    //    icons.classList.toggle('active');
    //    answer.classList.toggle('active');
        if(icons.classList.contains('active')){
            icons.classList.remove('active');
            answer.style.maxHeight=null;
        }
        else {
            icons.classList.add('active');
            answer.style.maxHeight=answer.scrollHeight+'px'; 
        }
    });
});