'use strict';

//function to get random number of dogs from 1 to 50
// function numberOfDogs()
// {
//   //$( "select#foo" ).val();


//assign number from type 
//let dogs= $('#random-dogs').val();

// return(dogs);

// }
function getDogImage() {
  //get number entered from text field
  let dogs= $('#random-dogs').val();

  //get dogbreed name
//substitute "random" for ${dogbreedname}
  
  //pass the number to the fetch to get that number of dog urls
  fetch(`https://dog.ceo/api/breeds/image/random/${dogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

//need an array of urls the length of $('#random-dogs').val();
//let urlArray = 

function displayResults(responseJson) {
  console.log(responseJson);

  //clear all the images from the previous display of images
$(".results-img").remove();

//loop through json messages and append them (images) to the "results"
for(let i = 0; i <responseJson.message.length; i++)
{
  $('.results').append(`<img src="${responseJson.message[i]}" class="results-img">`);
}

  // //replace the existing image with the new one
  // $('.results-img').replaceWith(
  //   `<img src="${responseJson.message}" class="results-img">`
  // )
  //display the results section
  $('.results').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});