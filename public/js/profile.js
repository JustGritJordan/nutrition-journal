// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Save for tutor: how do you use and call this API data?
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


function showNutritionData() {
    // fetch request gets a list of all the repos for the node.js organization
    const requestUrl = "https://api.api-ninjas.com/v1/nutrition?query=";                                           //Why is API KEY not working?
    headers: { 'X-Api-Key'; 'GDPoj1GGfvpCVpqAi3UAYg==YnZXl7SnTbs8tAMJ'};
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        //Loop over the data to generate a table, each table row will have a link to the repo url
        for (var i = 0; i < data.length; i++) {
          // Creating elements, tablerow, tabledata, and anchor
          var createTableRow = document.createElement('tr');
          var tableData = document.createElement('td');
          var link = document.createElement('a');
  
          // Setting the text of link and the href of the link
          link.textContent = data[i].html_url;
          link.href = data[i].html_url;
  
          // Appending the link to the tabledata and then appending the tabledata to the tablerow
          // The tablerow then gets appended to the tablebody
          tableData.appendChild(link);
          createTableRow.appendChild(tableData);
          tableBody.appendChild(createTableRow);
        }
      });
  }


















// const registerButton = document.querySelector('.btn1');
// // console.log is working

// async function handleRegister(event) {
//     event.preventDefault();

//     const emailValue = document.querySelector('#email-register').value.trim();
//     const passwordValue = document.querySelector('#password-register').value.trim();

    

//     console.log({emailValue, passwordValue});
//     const newUser = {
//         email: emailValue,
//         password: passwordValue,
//     };

//     const response = await fetch('/api/register', {
//         body:JSON.stringify(newUser),
//         method: 'POST',
//         headers: {
//             'content-type' : 'application/json'
//         },
//     });

//     if(response.ok) {
//         console.log('it worked');
//         } else {
//             console.log('not working');
//         }
// }


// var query = '1lb brisket and fries'
// $.ajax({
//     method: 'GET',
//     url: 'https://api.api-ninjas.com/v1/nutrition?query=' + query,
//     headers: { 'X-Api-Key': 'YOUR_API_KEY'},
//     contentType: 'application/json',
//     success: function(result) {
//         console.log(result);
//     },
//     error: function ajaxError(jqXHR) {
//         console.error('Error: ', jqXHR.responseText);
//     }
// });




// function showNutritionData() {
//     const showData =
//     fetch("https://api.api-ninjas.com/v1/nutrition?query=")
//     method: "GET",
//     headers:{"X-Api-Key":"GDPoj1GGfvpCVpqAi3UAYg==YnZXl7SnTbs8tAMJ" }  
    
//     .then((data) => data.json())
//       .then((data) => {
//         console.log(data);
//         const {nutritionData} = data;
//         nutritionData.textContent = JSON.stringify();
//       });
//     }
    
    
    //   async function seeProfiles() {
    //     const url = 'https://animechan.vercel.app/api/random';
    //     fetch(url)
    //       .then((data) => data.json())
    //       .then((data) => {
    //         console.log(data);
    //         const { anime } = data;
    //         const { quote } = data;
    //         animeText.textContent = JSON.stringify(anime);
    //         quoteText.textContent = JSON.stringify(quote);
    //       //   description2.textContent = JSON.stringify(anime);
    //       //   description2Half.textContent = JSON.stringify(quote);
    //       });
    //   }


    showNutritionData();