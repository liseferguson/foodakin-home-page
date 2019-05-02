$('#registerForm').validate({
    rules: {
        "Email": { required: true, email: true },
        "FirstName": { required: true },
        "LastName": { required: true },
        //"Password": { required: true, minlength: 10 },
        //"ConfirmPassword": { required: true, minlength: 10, equalTo: "#Password" },
        "AccountName": { required: true }
    }
});

jQuery.extend(jQuery.validator.messages, {
    required: "Required.",
    email: "Not a valid email address.",
    minlength: "At least 10 characters.",
    equalTo: "Passwords must match."
});

$(function () {
    $("#Email").change(
        function () {
            $("#Email-error").html("");
        }
    );
});

//$(function () {
//    var validForm = true;
//    $('#registerForm').submit(function () {

//        // email
//        if (!required("Email")) {
//            validForm = false;
//        }
//        else {
//            if (!validEmailAddress("Email") {
//                validForm = false;
//            }
//        }

//        // first
//        if (!required("FirstName")) {
//            validForm = false;
//        }

//        // last
//        if (!required("LastName")) {
//            validForm = false;
//        }




//    });

//});



//function required(id) {
//    var rtn = true;
//    if ($("#" + id).val() == "") {
//        showError(id, "Required");
//        validForm = false;
//        rtn = false;
//    }
//    else {
//        clearError(id);
//    }
//    return rtn;
//}

//function validEmailAddress(id) {
//    var rtn = true;
//    var email = $("#" + id).val();
//    if (!isValidEmailAddress(email)) {
//        showError("Email", "Not a valid email address.");
//        validForm = false;
//        rtn = false;
//    }
//    else {
//        clearError("Email");
//    }
//    return rtn;
//}

//function isValidEmailAddress(emailAddress) {
//    var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
//    return pattern.test(emailAddress);
//};

//function showError(id, text) {
//    $("#" + id + "-error").html(text);
//}

//function clearError(id) {
//    $("#" + id + "-error").html("");
//}


//$(function () {
//    var validForm;


//    $('#registerForm').submit(function () {
//        validForm = true;

//        if (required("Email")) {
//            if (validEmailAddress("Email")) {

//                var origin = window.location.origin;
//                var api = "/Umbraco/Api/LoginCheck/LoginExists?name=";
//                var loginName = $("#Email").val();
//                var url = origin + api + loginName;
                
//                $.getJSON(url, function (data) {
//                    var result = data.OK;
//                    if (result == true) {
//                        showError("Email", "Email address is already in use");
//                        //validForm = false;
//                        return false;
//                    }
//                    else {
//                        clearError("Email");
//                        //validForm = true;
//                    }
//                });
//            }
//        }

        //required("FirstName");
        //if (!required("FirstName")) {
        //    validForm = false;
        //}

        //required("LastName");
        //if (!required("LastName")) {
        //    validForm = false;
        //}

        //if (required("Password")) {
        //    validLength("Password", 10);
        //}

        //if (required("ConfirmPassword")) {
        //    validLength("ConfirmPassword", 10);
        //}

        //required("AccountName");

            //if (!validLength("Password", 10)) {
        //        validForm = false;
        //    }
        //}
        //else {
        //    validForm = false;
        //}

        //if (required("ConfirmPassword")) {
        //    if (!validLength("ConfirmPassword", 10)) {
        //        validForm = false;
        //    }
        //}
        //else {
        //    validForm = false;
        //}

        // make sure passwords match

        //if (!required("AccountName")) {
        //    validForm = false;
        //}


        //if (validForm) {
        //    alert("valid");
        //}
        //else {
        //    alert("not valid");
        //}
        //if (!validForm) {
        //    return false;
        //}
        //else {
        //    return true;
        //}
        //return false;
//    });







//});


//function validLength(id, length) {
//    var rtn = true;
//    var val = $("#" + id).val();
//    if (val.length < length) {
//        showError(id, length + " Characters Minimum");
//        validForm = false;
//        rtn = false;
//    }
//    else {
//        clearError(id);
//    }
//    return rtn;
//}

