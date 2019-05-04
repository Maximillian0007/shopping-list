//tells the browser to invoke the function as soon as it's loaded
$(function() {
    //allows us to strike through items that we checked 
    $("ul").on('click','.shopping-item-toggle', function(event) {
      $(this).closest('li').find('.shopping-item').toggleClass("shopping-item__checked");
    })
    //allows us to click delete and remove entire item
    ,$('ul').on('click', '.shopping-item-delete', function(event){
      $(this).closest('li').remove(); 
    })
    $("#js-shopping-list-form").submit(function(event) {
      //stops submit button from engaging in default behavior 
      event.preventDefault();
      //store the value from text box into variable
      let shoppingListBox = $(this).find("#shopping-list-entry");
      //append new list item to bottom
      $(".shopping-list").append(`<li>
      <span class="shopping-item">${shoppingListBox.val()}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`)
    shoppingListBox.val('');
  }   
,);   }) 
