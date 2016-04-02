// Modified from http://genome-game.dcs.aber.ac.uk/game/#
"use strict";
var lang = "English";
function changeLang(id) {
	var Title = document.getElementById("Title");
	if (id.innerHTML == "Cymraeg"){
		id.innerHTML = "English";
		lang = "Cymraeg";
		Title.src = "images/DNA_NEIDR.png";
		setLanguageStrings();
	} else {
		id.innerHTML = "Cymraeg";
		lang = "English";
		Title.src = "images/DNA_SNAKE.png";
		setLanguageStrings();
	}
}

var translate = {
    "English": {
	"r_menu": "DNA Replication",
	"s_menu": "Protein Synthesis",
	"m_menu": "Menu",
	"main_menu": "MAIN MENU",
	"lvl_one": "Level One",
	"lvl_two": "Level Two",
	"leader1": "Level 1 Leader Board",
	"leader2": "Level 2 Leader Board",
	"clear_leader": "Clear Leader Board",
	"reminder": "Remember: ",
	"speed": "Slow",
	"start": "Start",
	"collect": "Collect",
	"next": "Next",
	"a_collect": "Already Collected",
	"DNA_r": "DNA REPLICATION",
	"protein_s": "PROTEIN SYNTHESIS",
	"start_p": "Start Practice",
	"press_s": "Press Space",
	"take_t": "Take Test",
	"press_t": "Press T",
	"how_play": "Learn More",
	"press_h": "Press L",
	"over": "Game Over!",
	"take_t_over": "Take Test",
	"press_t_over": "Press T",
	"start_p_over": "Start Practice",
	"press_s_over": "Press Space",
	"over_leader": "You're on the Leader Board!",
	"enter3": "Enter a 3 character name",
	"press_e": "Press enter to complete",
	"score": "Score: ",
	"play_vid": "How to Play",
	"play_1": "Level One",
	"play_2": "Level Two",
	"": ""
    },
    "Cymraeg": {
	"r_menu": "DNA Dyblygu",
	"s_menu": "Protein Synthesisau",
	"m_menu": "Dewislen",
	"main_menu": "PRIF DDEWISLEN",
	"lvl_one": "Lefel Un",
	"lvl_two": "Lefel Dau",
	"leader1": "Lefel 1 Bwrdd Arweinydd",
	"leader2": "Lefel 2 Bwrdd Arweinydd",
	"clear_leader": "Bwrdd Arweinydd Clirio",
	"reminder": "Cofiwch: ",
	"speed": "Araf",
	"start": "Dechrau",
	"collect": "Casglu",
	"next": "Nesaf",
	"a_collect": "A gasglwyd eisoes",
	"DNA_r": "DNA DYBLYGU",
	"protein_s": "PROTEIN SYNTHESISAU",
	"start_p": "Ymarfer Cychwyn",
	"press_s": "Wasg Gofod",
	"take_t": "Cymryd y prawf",
	"press_t": "Wasg T",
	"how_play": "Dysgu Mwy",
	"press_h": "Wasg L",
	"over": "Gem Drosodd!",
	"take_t_over": "Cymryd y prawf",
	"press_t_over": "Wasg T",
	"start_p_over": "Ymarfer Cychwyn",
	"press_s_over": "Wasg Gofod",
	"over_leader": "Rydych chi ar y Bwrdd Arweinydd!",
	"enter3": "Rhowch enw 3 cymeriad",
	"press_e": "Wasg yn mynd i gwblhau",
	"score": "Sgor: ",
	"play_vid": "Sut i Chwarae",
	"play_1": "Lefel Un",
	"play_2": "Lefel Dau",
	"": ""
    }
};

function setLanguageStrings() {
	document.getElementById("r_menu").innerHTML  = (translate[lang]["r_menu"]);
	document.getElementById("s_menu").innerHTML  = (translate[lang]["s_menu"]);
	document.getElementById("m_menu").innerHTML  = (translate[lang]["m_menu"]);
	document.getElementById("main_menu").innerHTML  = (translate[lang]["main_menu"]);
	document.getElementById("lvl_one").innerHTML  = (translate[lang]["lvl_one"]);
	document.getElementById("lvl_two").innerHTML  = (translate[lang]["lvl_two"]);
	document.getElementById("leader1").innerHTML  = (translate[lang]["leader1"]);
	document.getElementById("leader2").innerHTML  = (translate[lang]["leader2"]);
	document.getElementById("clear_leader").innerHTML  = (translate[lang]["clear_leader"]);
	document.getElementById("reminder").innerHTML  = (translate[lang]["reminder"]);
	document.getElementById("speed").innerHTML  = (translate[lang]["speed"]);
	document.getElementById("start").innerHTML  = (translate[lang]["start"]);
	document.getElementById("collect").innerHTML  = (translate[lang]["collect"]);
	document.getElementById("next").innerHTML  = (translate[lang]["next"]);
	document.getElementById("a_collect").innerHTML  = (translate[lang]["a_collect"]);
	document.getElementById("DNA_r").innerHTML  = (translate[lang]["DNA_r"]);
	document.getElementById("protein_s").innerHTML  = (translate[lang]["protein_s"]);
	document.getElementById("start_p").innerHTML  = (translate[lang]["start_p"]);
	document.getElementById("press_s").innerHTML  = (translate[lang]["press_s"]);
	document.getElementById("take_t").innerHTML  = (translate[lang]["take_t"]);
	document.getElementById("press_t").innerHTML  = (translate[lang]["press_t"]);
	document.getElementById("how_play").innerHTML  = (translate[lang]["how_play"]);
	document.getElementById("press_h").innerHTML  = (translate[lang]["press_h"]);
	document.getElementById("over").innerHTML  = (translate[lang]["over"]);
	document.getElementById("start_p_over").innerHTML  = (translate[lang]["start_p_over"]);
	document.getElementById("press_s_over").innerHTML  = (translate[lang]["press_s_over"]);
	document.getElementById("take_t_over").innerHTML  = (translate[lang]["take_t_over"]);
	document.getElementById("press_t_over").innerHTML  = (translate[lang]["press_t_over"]);
	document.getElementById("over_leader").innerHTML  = (translate[lang]["over_leader"]);
	document.getElementById("enter3").innerHTML  = (translate[lang]["enter3"]);
	document.getElementById("press_e").innerHTML  = (translate[lang]["press_e"]);
	document.getElementById("score").innerHTML  = (translate[lang]["score"]);
	document.getElementById("play_vid").innerHTML  = (translate[lang]["play_vid"]);
	document.getElementById("play_1").innerHTML  = (translate[lang]["play_1"]);
	document.getElementById("play_2").innerHTML  = (translate[lang]["play_2"]);
}