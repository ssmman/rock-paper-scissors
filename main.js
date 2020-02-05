function calculate ()
{
	var form = document.forms["main_form"];
	var you_threw = parseInt (form.elements[0].value, 10);
	var opp_threw = parseInt (form.elements[1].value, 10);

	switch (opp_threw)
	{
		case 0:
			switch (you_threw)
			{
				case 0:
					print_results (99);
					break;
				case 1:
					print_results (0);
					break;
				case 2:
					print_results (1);
					break;
			}
			break;
		case 1:
			switch (you_threw)
			{
				case 0:
					print_results (2);
					break;
				case 1:
					print_results (99);
					break;
				case 2:
					print_results (1);
					break;
			}
			break;
		case 2:
			switch (you_threw)
			{
				case 0:
					print_results (2);
					break;
				case 1:
					print_results (0);
					break;
				case 2:
					print_results (99);
					break;
			}
			break;	
	}
}


function number_to_item (input)
{
	switch (input)
	{
		case 0:
			return "rock";
			break;
		case 1:
			return "paper";
			break;
		case 2:
			return "scissors";
			break;
	}
}


function print_results (input)
{
	var output;
	
	if (input === 99)
		output = "it was a tie! just play whatever you want; it makes no difference"
	else
		output = number_to_item (input) + " has the greatest of chance of winning the next round.";
	
	document.getElementById ("result").innerHTML = output;
}