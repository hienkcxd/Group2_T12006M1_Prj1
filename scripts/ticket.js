function buy()
{

    var name, mail, phone, date, amount, price, total;
    name = document.getElementsByClassName("H_inpname")[0].value;
    mail = document.getElementsByClassName("H_inpmail")[0].value;
    phone = document.getElementsByClassName("H_inpphone")[0].value;
    date = document.getElementsByClassName("H_inpdate")[0].value;
    price = document.getElementsByClassName("H_select")[0].value;
    amount = document.getElementsByClassName("H_inpamount")[0].value;
    total = price*amount;

    document.getElementsByClassName("H_show2")[0].innerHTML = name;
    document.getElementsByClassName("H_show3")[0].innerHTML = mail;
    document.getElementsByClassName("H_show4")[0].innerHTML = phone;
    document.getElementsByClassName("H_show5")[0].innerHTML = date;
    document.getElementsByClassName("H_show6")[0].innerHTML = amount;
    document.getElementsByClassName("H_show7")[0].innerHTML = total + "$";
}

