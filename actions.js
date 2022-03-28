$('#submit').on('click', () => {
    const offset = $('#exampleFormControlSelect1').offset().top - 35;
    console.log(offset);
    window.scrollTo({ top: offset, behavior: 'smooth' });
});


let x = document.getElementById('collect-button');
