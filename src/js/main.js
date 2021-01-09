$( document ).ready(function() {
    //Form input
    var textInput = document.querySelector('input');
    console.log(textInput)
    console.log(textInput.nextElementSibling)
    
    textInput.addEventListener('focusout', () => {
      console.log(textInput.value)
      if (textInput.value === '') {
        textInput.nextElementSibling.classList.remove('has-value')
      } else {
        textInput.nextElementSibling.classList.add('has-value')
      }
    });


    $('select').niceSelect();
});
