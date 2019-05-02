function percentOnly(textBox) {
    var perFlag = false;
    

    $(textBox).keydown(function (event) {
        var textValue = $(textBox).val();
        if ((event.keyCode == 190 || event.keyCode == 110) && !perFlag) {
            // don't allow multiple decimal pts
            if (textValue.indexOf(".") < 0) {
                return;
            }
        }// Allow: backspace, delete, tab, escape, and enter
        if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 ||
            // Allow: Ctrl+A
        (event.keyCode == 65 && event.ctrlKey === true) ||
            // Allow: home, end, left, right
        (event.keyCode >= 35 && event.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.shiftKey || (event.keyCode < 48 || event.keyCode > 57) && (event.keyCode
            < 96 || event.keyCode > 105)) {
                
                event.preventDefault();
            }
            else {
                //alert(String.fromCharCode(event.which));
                //alert("Is");
                
                //alert(newValue);


                //var keyChar = String.fromCharCode(event.which);
                //var newValue = textValue + keyChar;
                //if (newValue > 100) {
                //    event.preventDefault();
                //}



            }
        }


    });

    $(textBox).keypress(function (event) {
        //alert(String.fromCharCode(event.which));
        var textValue = $(textBox).val();
        var newKey = String.fromCharCode(event.which);
        var newValue = textValue + newKey;
        //alert(newValue);
        if (newValue > 100) {
            event.preventDefault();
            $(textBox).val(textValue).toFixed(2);
        }
    })
}