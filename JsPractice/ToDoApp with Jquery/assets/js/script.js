$('.btn-todo').click(function(){
    var value = $('.ToDoInput').val(); 
    if(value !== ''){
        var element=$('<li class="todo-li"></li>').text(value);
        var btn = $('<i class="fa-solid fa-trash delete"></i>');
        $(element).append(btn);
        $('.myUl').append(element);
        $('.ToDoInput').val('');
    }
    else{
        alert('Please write to do..')
    }
    
      $(element).dblclick(function(){
          $(element).toggleClass('toggle');
      })

      
        $('.deleteAll').click(function(){
        $('.myUl').empty();     
    })
       
      $(btn).click(function(){
          $(element).remove();
      })

      
})


$('.ToDoInput').keypress(function(event){
	if(event.keyCode === 13){
		$('.btn-todo').click();
	}
});