const registerForm = document.querySelector(".register-form");

async function handleRegister(event) {
  event.preventDefault();

  const emailRegister = document.querySelector("#email-register").value.trim();
  const passwordRegister = document.querySelector("#password-register").value.trim();

    // console.log({emailRegister, passwordRegister});

  const newUser = {
    email: emailRegister,
    password: passwordRegister,
  };

  const response = await fetch('/api/login', {
    body: JSON.stringify(newUser),
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
  });

  if (response.ok) {
    console.log('working!');
  } else {
    console.log('not working!');
  }

  signupForm.reset();
};
registerForm.addEventListener("submit", handleRegister);
