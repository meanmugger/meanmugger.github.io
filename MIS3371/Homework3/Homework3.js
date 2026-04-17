function errorFlags() {
    let error_flag = 0;
    console.log(error_flag);
}
function retrieveData() {
    let formcontents = document.getElementById("getdata");
    let formoutput;
    let datatype;
    let i;
    formoutput = "<table class='output'><th>Dataname</th><th>Value</th>";
    for (i= 0; i < formcontents.length; i++) {
        console.log("item: " + i + " " +formcontents.elements[i].name + " = " + formcontents.elements[i].value);
        datatype = formcontents.elements[i].type;
        switch (datatype) {
            case "checkbox":
                if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                    formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                    formoutput = formoutput +"<td class='outputdata'>Checked</td></tr>";
                }
                break;
            case "radio":
                if (formcontents.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                      formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                      formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
                }
                break;
            case "button": case "submit": case "reset":
                break;
            default:
                formoutput = formoutput + "<tr><td align='right'>"+formcontents.elements[i].name+"</td>";
                  formoutput = formoutput +"<td align='right'>"+ datatype + "</td>";
                  formoutput = formoutput +"<td class='outputdata'>"+ formcontents.elements[i].value+"</td></tr>";
        }
    }
    if (formoutput.length>0) {
        formout = formout + "</table>";
        document.getElementById("outputformdata").innerHTML = formout;
    }
}

function checkFirstName() {
    let x = document.getElementById("firstname").value;
    if(x.length < 1) {
        document.getElementById("name_message").innerHTML = "Please enter your name"
        error_flag = 1;
    }
    else if(x.match(/[a-zA-Z'-]+$/)) {
        document.getElementById("name_message") = "";
    }
    else {
        document.getElementById("name_message").innerHTML = "Invalid characters in name";
        error_flag = 1;
    }
}

function checkMiddleInitial() {
    let x = document.getElementById("middleinit").value;
    if(x.length > 0) {
        if (x.match(/[a-zA-Z ]/)) {
            document.getElementById("name_message").innerHTML = "";
        }
        else {
            document.getElementById("name_message").innerHTML = "Invalid characters in Middle Initial";
            error_flag = 1;
        }
    }
}

function checkLastName() {
    let x = document.getElementById("lastname").value;
    if(x < 0) {
        document.getElementById("name_message").innerHTML = "Please enter Last Name";
        error_flag = 1;
    }
    else if(x.match(/[a-zA-Z'-]+$/)) {
        document.getElementById("name_message").innerHTML = "";
    }
    else {
        document.getElementById("name_message").innerHTML = "invalid characters in last name"
        error_flag = 1
    }
}
// check SSN and Birthday 
function checkSocialSecurity() {
    let x = document.getElementById("ssn").value;
    if(x < 9) {
        document.getElementById("ssn_message").innerHTML = "SSN must be 9 digits";
        error_flag = 1
    }
    else {
        document.getElementById("ssn_message").innerHTML = "";
    }
}

function checkDateOfBirth() {
    let x = document.getElementById("birthday").value;
    
}

function addDashesToSocial() {
    let ssnInput = document.getElementById("ssn");

    ssnInput.addEventListener("input", (r) => {
        let value = r.target.value.replace(/\D/g, "");

        if (value.length >3 && value.length <= 5) {
            value = value.slice(0,3) + "-" + value.silce(3);
        }
        else if(value.length > 5) {
            value = value.slice(0, 3) + "-" + value.slice(3, 5) + "-" + value.slice(5, 9);
        }
        errorFlags.target.value = value;
    })
}

function checkAddr1() {
    let x = document.getElementById("addr1").value;
    console.log(x.value);
    console.log(x.length);
    if(x.length < 2 || x.length > 30) {
        document.getElementById("addr1_message").innerHTML = "Invalid address";
        error_flag = 1;
        console.log(error_flag);
    }
    else {
        document.getElementById("addr1_message").innerHTML = "";
    }
    console.log(addr1_message);
}

function checkAddr2() {
    let x = document.getElementById("addr2").value;
    console.log(x.value);
    console.log(x.length);
    if(x.length < 2 || x.length > 30) {
        document.getElementById("addr2_message").innerHTML = "Invalid address";
        error_flag = 1;
        console.log(error_flag);
    }
    else {
        document.getElementById("addr2_message").innerHTML = "";
    }
    console.log(addr2_message)
}

function checkCity() {
    let x = document.getElementById("city").value;
    if(x.length < 2 || x.length > 30) {
        document.getElementById("city_message").innerHTML = "Invalid City";
        error_flag = 1;
    } 
    else {
        document.getElementById("city_message").innerHTML = "";
    }
}

function checkState() {
    let x = document.getElementById("state").value;
    if(x=="") {
        document.getElementById("state_message").innerHTML = "Please choose a state";
        error_flag = 1;
    }
    else {
        document.getElementById("state_message").innerHTML = "";
    }
}

function checkZip() {
    let x = document.getElementById("zip").value;
    if(x.length != 5) {
        document.getElementById("zip_message").innerHTML = "Please enter your 5 digit Zip Code";
        error_flag = 1;
    }
    else {
        document.getElementById("zip_message").innerHTML = "";
    }
}

// switch for user id and password

function checkUserId() {
    let x = document.getElementById("user").value;

    switch(x) {
        case 1:
            if(x.length < 5 || x.length > 20) {
                document.getElementById("user_message").innerHTML = "Invalid # of characters";
                error_flag = 1;
            }
            break;
        case 2:
            if(x.match(/^\b\w/)) {
                document.getElementById("user_message").innerHTML = "First character must not be a number";
                error_flag = 1;
            }
            break;
        case 3:
            if(x.match(/[a-zA-Z0-9-_]/)) {
                document.getElementById("user_message").innerHTML = "Invalid characters in username";
                error_flag = 1;
            }
            break;
        default:
            document.getElementById("user_message").innerHTML = "";
    }
}
/*
    }
    else if(x.match(/[a-zA-Z0-9-_]/)) {
        document.getElementById("user_message").innerHTML = "";
    }
    else {
        document.getElementById("user_message").innerHTML = "Invalid characters in Username";
        error_flag = 1;
    }
}
*/


function checkPassword() {
    let x = document.getElementById("password").value;
    let y = document.getElementById("user").value;

    switch(x) {
        case 0:
            if(x.length < 8) {
                document.getElementById("password_message1").innerHTML = "Password too short";
                error_flag = 1;
            }
            break;
        case 1:
            if(x.match(/[^A-Z]+$/)) {
                document.getElementById("password_message2").innerHTML = "Must have at least 1 upper case letter";
                error_flag = 1;
            }
            break;
        case 2:
            if(x.match(/[^a-z]+$/)) {
                document.getElementById("password_message3").innerHTML = "Must have at least 1 lower case letter";
                error_flag = 1;
            }
            break;
        case 3:
            if(x.match(/[^0-9]+/)) {
                document.getElementById("password message4").innerHTML = "Must have at least 1 number";
                error_flag = 1;
            }
            break;
        case 4:
            if(x == y) {
                document.getElementById("password_message5").innerHTML = "Password cannot be the same as ID"
                error_flag = 1;
            }
            break;
        default :
            document.getElementById("password_message").innerHTML = "";
    }
}

function passwordMatch() {
    let x = document.getElementById("password").value;
    let y = document.getElementById("confirm").value;

    if(x != y) {
        document.getElementById("confirm_text").innerHTML = "Password Do Not Match!";
        error_flag = 1;
    }
    else {
        document.getElementById("confirm_text").innerHTML = "";
    }
}

function checkForm() {
    error_flag = 0;
    checkFirstName();
    checkMiddleInitial();
    checkLastName();
    checkDateOfBirth();
    checkSocialSecurity();
    checkEmail();
    checkPhone();
    checkAddr1();
    checkAddr2();
    checkCity();
    checkState();
    checkZip();
    checkUserId();
    checkPassword();
    passwordMatch();
    console.log("Error flag: " + error_flag);
    if(error_flag == "1") {
        alert("Please fix the errors on your form");
    }
    else {
        document.getElementById("submit").disabled = false;
    }
}
