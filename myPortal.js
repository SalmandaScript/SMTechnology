$(document).ready(function() 
{ 
$('#myCollapsible').on('hidden.bs.collapse', function() 
{ 
alert('Collapsible element has been completely closed.'); 
}); 
}); 