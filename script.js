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
        $(par).html(`<span ondblclick="doubleclickSpan()"><s>${txt}</s></span><div class="circle">X</div></div>`);
    });

    $('body').on("click", ".circle", (event)=>{
        let par = $(event.currentTarget).parent();
        let id = $(par).attr("id");
        $(`#${id}`).remove();
    });

    $('body').on("dblclick", "span", ()=> {
        let txt = $(event.currentTarget).text();
        txt = txt.substring(0, txt.length - 1);
        let par = $(event.currentTarget).parent();
        let id = $(par).attr("id");
        //$(par).html(`<input type="text" class="input_text">${txt}</input><div class="circle">X</div>`)
        console.log(event.currentTarget);
    });
});
