class Renderer{
    render(messagesArr){
        let source = $('#message-template').html();
        let template = Handlebars.compile(source);
        let newHTML = template({messagesArr});
        $('#messages').empty().append(newHTML);
    }
}