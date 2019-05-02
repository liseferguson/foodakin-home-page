// override jquery validate plugin defaults
$.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    // disable all messages
    errorPlacement: function (error, element) { }

    // put message below
    //errorPlacement: function (error, element) {
    //    if (element.parent('.input-group').length) {
    //        error.insertAfter(element.parent());
    //    } else {
    //        error.insertAfter(element);
    //    }
    //}

});
