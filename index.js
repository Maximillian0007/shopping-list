//tells the browser to invoke the function as soon as it's loaded
$(function() {
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
    }   
    //allows us to strike through items that we checked 
    ,$(".shopping-item-toggle").click(function(event) {
        $(this).closest("span", ".shopping-item").toggleClass("shopping-item__checked");
        //console.log(this.closest("span"));
    })
,);   }) 
