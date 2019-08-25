$('document').ready(()=>{
    let i = 0;
    $('#message').on("keypress", (event)=>{
        if(event.which == 13) {
            $('body').append(`<div class="item" id="div${i}"><input type="checkbox" id="check${i}" class="check"><label for="check${i}">${$('#message').val()}</label><div class="circle">X</div></div>`);
            i ++;
        };
    });

    $('body').on("change",".check", (event)=>{
        let id = $(event.currentTarget).attr("id");
        let txt = $(`label[for ='${id}']`).text();
        let par = $(event.currentTarget).parent();
        $(par).html(`<span><s>${txt}</s></span><div class="circle">X</div></div>`);
    });

    $('body').on("click", ".circle", (event)=>{
        let par = $(event.currentTarget).parent();
        let id = $(par).attr("id");
        $(`#${id}`).remove();
    })
});