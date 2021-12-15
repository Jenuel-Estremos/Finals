$(document).ready(function()
{
	$(window).scroll(function()
	{	
		if(this.scrollY>20)
		{
			$('.navbar').addClass("sticky")
		}
		else
		{
			$('.navbar').removeClass("sticky")
		}
	})


});
function togglePopup()
{
	document.getElementById("popup-1").classList.toggle("active");
}

