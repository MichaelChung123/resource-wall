$.ajax({
    method: "GET",
    url: "/api/collections"
}).done((result)=> {
    for (let collections of result) {
        $('<option>'+ collections.name +'</option>')
        .appendTo($('.collection-menu'))
    }  
})