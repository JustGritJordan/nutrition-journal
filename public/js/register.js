// How do I get the register here link to register people"

const registerHere = document.querySelector('.form my-4 mx-5')

async function registerUser(event){
  event.preventDefault();
  console.log("Registration Works!");
}
registerHere.addEventListener("btn1", registerUser);




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