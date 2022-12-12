var SelectedGender = 0;

function SubmitForm_SubmitBtn(){
    var Confirm;

    /*window.alert(document.querySelector("#StdDate").value);
    window.alert(document.querySelector("#Nationality").value);
    window.alert(document.querySelector("#Male").checked);
    window.alert(document.querySelector("#Female").checked);
    window.alert(document.querySelector("#Other").checked);
    window.alert(document.querySelector("#Email").value);
    window.alert(SelectedGender);

    Confirm = window.confirm("Do You Want to Submit?");

    //window.alert(Confirm);

    if (Confirm == true)
    {
        //window.alert("Form Submit");
        if (document.querySelector("#GrNum").value == "")
        {
            window.alert("Gr Number cannot be left NULL");
            return false;
        }
        else if (isNaN(Number(document.querySelector("#GrNum").value)) == true){
            window.alert("Gr Number is not a Number");
            return false;
        }
        return true;
    }
    else
    {
        return false;
    }*/
}

function SubmitForm_TypeBtn(){
    var Confirm;
    var TargetForm = document.querySelector("#StdDetail");

    Confirm = window.confirm("Do You Want to Submit?");

    //window.alert(Confirm);

    if (Confirm == true)
    {
        
        TargetForm.submit();
    }
    else
    {
        TargetForm.reset();
        return false;
    }
}

function CountChar(TargetInput){
    document.getElementById("StdNameCount").innerText = TargetInput.value.length;
}

function GetNationality(Target){
    //window.alert(Target.value);
    SelectedGender = Target.value;
}

function FormSubmitted(){
    window.alert("Form Submitted");
    //return false;
}

function InvalidNumber(){
    document.getElementById("StdNameCount").innerText = "Mobile Number Cannot be Null"
}

function InvalidEmail(){
    document.getElementById("StdNameCount").innerText = "Invalid Email Address"
}