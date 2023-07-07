function validateUSN()
{
    let usn=prompt("Enter USN")
    // let pattern = /1[Nn][Tt][0-9]{2}[A-z]{2}[0-9]{3}/g
    let pattern = /1[Nn][Tt][0-9]{2}[A-Za-z]{2}[0-9]{3}/           // for USN verify
    // let pattern = /^[A-Za-z0-9._=%+-*]+@[A-Za-z._]+\.[a-z]{2,}/    // for emai verify
    
    if(pattern.test(usn))
    {
        alert("Its a valid USN")
    }
    else
    {
        alert("Its not a valid USN")
    }
}

validateUSN()