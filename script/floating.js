const handleFloatingLabel = function(){
    const floatingInput = document.querySelector('.js-name-input'),
    floatingLabel = document.querySelector('.js-name-label');
    floatingInput.addEventListener('blur', function(){
        

        if(floatingInput.value.length > 0){
            floatingLabel.classList.add('is-floating');
        }
        else{
            floatingLabel.classList.remove('is-floating');
        }
    });
   
}







document.addEventListener('DOMContentLoaded', function(){
    console.log('script loaded');
    handleFloatingLabel();
})