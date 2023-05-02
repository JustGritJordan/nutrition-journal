const registerButton = document.querySelector('.btn1');
// console.log is working

async function handleRegister(event) {
    event.preventDefault();

    const emailValue = document.querySelector('#email-register').value.trim();
    const passwordValue = document.querySelector('#password-register').value.trim();

    

    console.log({emailValue, passwordValue});
    const newUser = {
        email: emailValue,
        password: passwordValue,
    };

    const response = await fetch('/api/register', {
        body:JSON.stringify(newUser),
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
    });

    if(response.ok) {
        console.log('it worked');
        } else {
            console.log('not working');
        }
}


registerButton.addEventListener('click', handleRegister);



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



// LOOK HERE**********************************************
// How do I create new user data?
// How do I get logins to work?
// Still need to make notes page
// How do I tie into API
// Technologies?
