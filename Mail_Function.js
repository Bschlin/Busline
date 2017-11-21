function confirmlist()
        {
            var name, email;
            
            name=document.mailinglist.txtName.value;
            email=document.mailinglist.txtemal.value;
            
            alert ("Thank You " + name + "! You've been added to our mailing list with the email: " + email + ".")
        }