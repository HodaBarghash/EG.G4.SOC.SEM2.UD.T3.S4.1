function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6i7oCB339c9":
        Script1();
        break;
      case "5elclTDPDar":
        Script2();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwqPNM00RRbHp8ATbKOyoXCKS2kFjx49XqPy_4tSoJ6r3RLxl6jUYINSwm_2GGzEh8L/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

function Script2()
{
  const url="https://script.google.com/macros/s/AKfycbwqPNM00RRbHp8ATbKOyoXCKS2kFjx49XqPy_4tSoJ6r3RLxl6jUYINSwm_2GGzEh8L/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

