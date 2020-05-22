"use strict";

// Part 1

$('#get-fortune-button').on('click', () => {
  $.get('/fortune', (response) => {
    $('#fortune-text').html(response)
  });
});


// Part 2

$('#weather-form').on('submit', (evt) => {
  evt.preventDefault();

  const formData = {
    zipcode: $('#zipcode-field').val()
  };
console.log (formData)
  // TODO: choose a request method (GET or POST) by uncommenting one of
  // these blocks of code

  $.get('/weather', formData, (response) => {
    console.log(response)
    // $('#zipcode-field').html(`${response.forecast}`)
    $('#weather-info').html(`${response.forecast}`)
  });

  // $.post('/replaceMe', formData, (response) => {
  //   // Fill in the callback function
  // });
});


// Part 3

$("#order-form").on('submit', (evt) => {
  evt.preventDefault();

  const melon_order = {
    qty : $('#qty-field').val(),
    type : $('#melon-type-field').val()
  };
  console.log(melon_order)

  $.post('/order-melons', melon_order, (response) => {
    console.log(response)
    if (response.code === 'ERROR'){
    $('#order-status').html(`${response.msg}`);
    }
    else{
      $('#order-status').html(`${response.msg}`);
    }
    });
});
  // dhjfjdsfhsfhfh
  // dgfdsifsiefhg