$(document).ready(function () {
	$(".cordbtn").mouseover(function () {
		$(".cordbtn").trigger("click");
	});
	$("#accordion").mouseleave(function () {
		$(".cordbtn").trigger("click");
	});
});