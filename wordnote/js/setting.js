//variable delcaration
var mybutton = document.getElementById("topbtn");
var ac = document.getElementsByClassName("ac");

var i;

function topfun()
				{
					document.body.scrollTop = 0;
					document.documentElement.scrollTop = 0;
				}
                
function opennav()
				{
					document.getElementById("mynav").style.width = "250px";
				}

			function closenav()
				{
					document.getElementById("mynav").style.width = "0px";
				}


//for loop
for(i = 0;i<ac.length; i++)
    {
        ac[i].addEventListener("click",function()
            {
                this.classList.toggle("active");

                var box = this.nextElementSibling;

                if(box.style.display === "block")
                    {
                        box.style.display = "none";
                    }
                else
                    {
                        box.style.display = "block";
                    }
            });
    }