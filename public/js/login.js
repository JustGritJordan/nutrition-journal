// The click for the button is working now
const loginButton = document.querySelector('.col-lg-7');
console.log('Hello');
async function handleLogin(event){
    event.preventDefault();
    console.log('this shit work?');
}

loginButton.addEventListener('click', handleLogin);

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
  