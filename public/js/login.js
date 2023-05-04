const registerButton =document.querySelector('.register-form');


async function handleRegister(event){
  event.preventDefault();
  console.log('you registered!');
}
registerButton.addEventListener('click', handleRegister);
















































// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// BEGINNING DATA*************************************
// // The click for the button is working now. 
// const loginButton = document.querySelector('.btn1');
// console.log('Hello');
// async function handleLogin(event){
//     event.preventDefault();

//     const emailValue = document.querySelector('#email-login').value.trim();
//     const passwordValue = document.querySelector('#password-login').value.trim();

//     console.log({emailValue, passwordValue});
//     if (email && password) {
//         const response = await fetch('/api/user/register', {
//           method: 'POST',
//           body: JSON.stringify({ email, password }),
//           headers: { 'Content-Type': 'application/json' },
//         });
    
//         if (response.ok) {
//           document.location.replace('/');
//         } else {
//           alert(response.statusText);
//         }
//       }
//     };
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// loginButton.addEventListener('click', handleLogin);


// async function loginUser(event) {
//     // username.trim()
//     // password.trim()
//     event.preventDefault();
//     const usernameValue = document.getElementById('username').value.trim();
//     const passwordValue = document.getElementById('password').value.trim();
//     if (usernameValue && passwordValue) {
//       // Send the e-mail and password to the server
//       console.log({ usernameValue, passwordValue });
  
//       const signUpData = {
//         user_name: usernameValue,
//         password: passwordValue,
//       };
  
//       const response = await fetch('/api/users/login', {
//         body: JSON.stringify(signUpData),
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//       });
  
//       if (response.ok) {
//         document.location.replace('/webpage');
//         console.log('login successful');
//       } else {
//         console.log(response);
//       }
//     }
//   }
  
//   login.addEventListener('click', loginUser);
//   createUser.addEventListener('click', newUser);
  