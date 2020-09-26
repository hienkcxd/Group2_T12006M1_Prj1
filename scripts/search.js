  function search()
  {
        var name = document.getElementsByClassName("H_name");
        var search = document.getElementsByName("search")[0].value.toLowerCase();
        var i=0;

        for(i; i<name.length; i++)
        {   
            if(name[i].innerHTML.toLowerCase().search(search)>-1)
            {
            document.getElementsByClassName("itemBox")[i].style.display = 'block';
            }
            else
            {
            document.getElementsByClassName("itemBox")[i].style.display = 'none';
            }
        }          
    
  }
