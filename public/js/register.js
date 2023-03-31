const loginButton = document.querySelector('.col-lg-7');
console.log('Hello');
async function handleLogin(event){
    event.preventDefault();
    console.log('this shit work?');

    const emailValue = document.querySelector('email')
}

loginButton.addEventListener('click', handleLogin);




// const registerFormHandler = async (event) => {
//     event.preventDefault();
  
//     // const name = document.querySelector('#name-signup').value.trim();
//     const email = document.querySelector('#email-register').value.trim();
//     const password = document.querySelector('#password-register').value.trim();
  
//     if (email && password) {
//       const response = await fetch('/api/users', {
//         method: 'POST',
//         body: JSON.stringify({email, password }),
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert(response.statusText);
//       }
//     }
//   };
  

//   document
//     .querySelector('.register-form')
//     .addEventListener('submit', registerFormHandler);