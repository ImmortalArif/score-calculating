var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2");
var p1p=document.querySelector("#p1play");
var reset=document.querySelector("#rest");
var numinput=document.querySelector("input[type=number]");
p1score=0
var gameover=false;
var totalscore=5;
p1button.addEventListener("click",function(){
	if(!gameover){
	p1score++;
	if (p1score===totalscore){
		p1p.classList.add("won");
		gameover=true;
	}

	p1p.textContent=p1score;
}})
var p2p=document.querySelector("#p2play")
p2score=0
p2button.addEventListener("click",function(){
	if(!gameover){
	p2score++;
	if(p2score===totalscore){
		p2p.classList.add("won");
		gameover=true;
	}
	p2p.textContent=p2score;
}})

reset.addEventListener("click",function(){
	reseting();
	}
	)
function reseting(){
	p1score=0;
	p2score=0;
	p1p.textContent=p1score;
	p2p.textContent=p2score;
	p1p.classList.remove("won");
	p2p.classList.remove("won");
	gameover=false;
}
var value=document.querySelector("#maxlim");
numinput.addEventListener("change",function(){
	value.textContent=numinput.value;
	totalscore=Number(numinput.value);
	reseting();
})

