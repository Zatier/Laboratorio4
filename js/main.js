$('#NewTask').on('click',function(){
    var task = $("<li class='lis'></li>").text($(".txtb").val());
    var Check = $("<button class = 'checar' type='button'> Check </button>").on('click',function(){
        task.css("text-decoration", "line-through")
    });
    var Remove = $("<button class = 'del' type='button'> Delete </button>").on('click',function(){
        task.remove()
    });
    task.append(Check);
    task.append(Remove);
    $('#TaskList').append(task);
});