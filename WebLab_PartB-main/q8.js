function validate(email)
{
    let regex= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    if(regex.test(email))
    {
        alert("Valid")
    }
    else
    {
        alert("Invalid")
    }
}
let Email=prompt("Enter you email");
validate(Email);