const no_tie_results = [2, 0, 1];


function calculate ()
{
    var form = document.forms["main_form"];
    var you_threw = form.you_played.value;
    print_results (no_tie_results[you_threw]);
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

    if (document.getElementById("checkbox").checked)
    {
        switch (input)
        {
            case 0:
                output = "paper or scissors has the greatest chance of winning the next round.";
                break;
            case 1:
                output = "rock or scissors has the greatest chance of winning the next round.";
                break;
            case 2:
                output = "rock or paper has the greatest chance of winning the next round.";
                break;
        }
    }        
    else
        output = number_to_item (input) + " has the greatest of chance of winning the next round.";

    document.getElementById ("result").innerHTML = output;
}
