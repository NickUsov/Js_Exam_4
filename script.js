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
    });

    $('body').on("dblclick", "span", (event)=> {
        event.preventDefault();
        let txt = $(event.currentTarget).text();
        let par = $(event.currentTarget).parent();
        $(par).html(`<input type="text" class="input_text" value="${txt}"></input><div class="circle">X</div>`)
        console.log(txt);
    });

    $('body').on("keypress", ".input_text", (event)=> {
        if(event.which == 13) {
            let txt = event.currentTarget.value;
            let parent_id = $(event.currentTarget).parent().attr("id");
            let index = +(parent_id[3]);
            $(`#${parent_id}`).html(`<input type="checkbox" id="check${index}" class="check"><label for="check${index}">${txt}</label><div class="circle">X</div>`);
        };
    });
});
