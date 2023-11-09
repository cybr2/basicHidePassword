const pass = document.getElementById('password');
const eyeIcon = document.getElementById('eyeIcon');



eyeIcon.addEventListener('click', () => {
    if(pass.type === 'password'){
        pass.type = 'text';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
        eyeIcon.style.color = '#fb8a09';
    }else{
        pass.type = 'password';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
        eyeIcon.style.color = '#000000';
    }     
})



