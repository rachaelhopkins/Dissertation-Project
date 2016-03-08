window.onload = function() {
    var mycanv = document.getElementById("canvas1");
    var ctx = mycanv.getContext("2d");
    var snake_x = 5,
        snake_y = 5;
    var snake_array = new Array(4);
    var protein_array = new Array("head", "A2", "A2");
    var single_array = new Array("C", "G", "A", "G", "T", "T", "C", "A", "G", "T", "C", "A", "T", "G", "A", "C", "C", "T", "A", "T", "G", "C", "G", "A");
    var double_array = new Array(0);
    var collected_array = new Array(0);
	var ribosome_array = new Array("C", "G", "A", "G", "T", "T", "C", "A", "G", "T", "C", "A", "T", "G", "A", "C", "C", "T", "A", "T", "G", "C", "G", "A");
    var correct = Math.floor(Math.random() * 4) + 0;
    var direction = 0;
    var score = 0;
    var level = 0;
    var speed = 150;
    var active = false;
    var start = true;
    var lost = false;
    var test_level = false;
    var entering_name = false;
    var player_name;
    var new_protein = 0;
    var protein;
    var position = 25;
	var menu = "main";
    var img_A = new Image(),
        img_G = new Image(),
        img_C = new Image(),
        img_T = new Image();
    helix = new Image();
	ribosome = new Image();
    snake_A = new Image();
    snake_G = new Image();
    snake_T = new Image();
    snake_C = new Image();
    black_A = new Image();
    black_G = new Image();
    black_T = new Image();
    black_C = new Image();
    grey_A = new Image();
    grey_G = new Image();
    grey_T = new Image();
    grey_C = new Image();
    img_head = new Image();
    round_A = new Image();
    round_C = new Image();
    round_G = new Image();
    round_T = new Image();
    round_black = new Image();
    grey = new Image();
	bond = new Image();
	box  = new Image();
	box.src = "images/box.png";
    grey.src = "images/grey.jpg";
    round_black.src = "images/black.png";
    round_A.src = "images/A5.png";
    round_C.src = "images/C5.png";
    round_G.src = "images/G5.png";
    round_T.src = "images/T5.png";
    black_A.src = "images/A.png";
    black_G.src = "images/G.jpg";
    black_T.src = "images/T.jpg";
    black_C.src = "images/C.jpg";
    snake_A.src = "images/A3.png";
    snake_T.src = "images/T3.jpg";
    snake_G.src = "images/G3.jpg";
    snake_C.src = "images/C3.jpg";
    grey_A.src = "images/A4.png";
    grey_G.src = "images/G4.jpg";
    grey_T.src = "images/T4.jpg";
    grey_C.src = "images/C4.jpg";
    helix.src = "images/double-helix3.png";
	ribosome.src = "images/ribosome.png";
    img_head.src = "images/head_right.png";
	bond.src = "images/bond.png"

    // Creates the 2-dimentional matrix for the game
    var map = new Array(60);
    for (var i = 0; i < map.length; i++) {
        map[i] = new Array(60);
    }

    start_menu();

    function start_menu() {
        document.getElementById("player").style.visibility = "hidden";
		ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        my_gradient = ctx.createLinearGradient(0, 0, 670, 0);
        my_gradient.addColorStop(0, "darkslategrey");
        my_gradient.addColorStop(0.68, "teal");
        my_gradient.addColorStop(1, "darkslategrey");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(0, 20, mycanv.width, 475);
        ctx.strokeRect(0, 20, mycanv.width, 475);
		ctx.fillStyle = "#000000";
		ctx.font = "bold 55px sans-serif";
		ctx.fillText("MAIN MENU", mycanv.width - 610, 90);
		ctx.font = "bold 45px sans-serif";
		ctx.fillText("Level One", mycanv.width - 560, 160);
		ctx.font = "45px sans-serif";
        ctx.fillText("DNA Replication", mycanv.width - 615, 210);
		ctx.fillText("Press 1", mycanv.width - 530, 260);
		ctx.font = "bold 45px sans-serif";
		ctx.fillText("Level Two", mycanv.width - 560, 340);
		ctx.font = "45px sans-serif";
        ctx.fillText("Protein Synthesis", mycanv.width - 625, 390);
		ctx.fillText("Press 2", mycanv.width - 530, 440);
        snake_x = 5;
        snake_y = 5;
        snake_array = new Array(4);
        protein_array = new Array("head", "A2", "A2");
        collected_array = new Array(0)
		double_array = new Array(0);
		position = 25;
		new_protein = 0;
        direction = 0;
        score = 0;
        level = 0;
        speed = 75;
        lost = false;
        var protein;
        img_head.src = "images/head_right.png";
        for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[0].length; y++) {
                map[x][y] = 0;
            }
        }
		menu = "main";
    }

	function synthesis_menu(){
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
		draw_background_synthesis();
		draw_ribosome();
		sort_ribosome();
		ctx.fillStyle = "#000000";
        ctx.font = "bold 55px sans-serif";
        ctx.fillText("PROTEIN SYNTHESIS", mycanv.width - 835, 90);
		ctx.font = "bold 45px sans-serif";
        ctx.fillText("Start Practise", mycanv.width - 695, 150);
		ctx.font = "45px sans-serif";
        ctx.fillText("Press Space", mycanv.width - 680, 200);
		ctx.font = "bold 45px sans-serif";
        ctx.fillText("Take Test", mycanv.width - 660, 275);
		ctx.font = "45px sans-serif";
        ctx.fillText("Press T", mycanv.width - 630, 325);
		menu = "synthesis";
		start = false;
		if (active == true) {
            correct_letter();
            map = draw_snake(map);
            map = draw_letters(map);
            game_loop_synthesis();
        } else if (test_level == true) {
            correct_letter();
            map = draw_snake(map);
            map = draw_letters(map);
            game_loop_synthesis();
        }
	}
	
	//similar to synthesis_menu function but is caled when game has been lost, 
    //therefore to play again, some vaiables need to be redefined and the map cleared
    function restart_game_synthesis() {
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        snake_x = 5;
        snake_y = 5;
        snake_array = new Array(4);
        protein_array = new Array("head", "A2", "A2");
        collected_array = new Array(0)
        direction = 0;
        score = 0;
        level = 0;
        speed = 75;
        lost = false;
        var protein;
        img_head.src = "images/head_right.png";
        for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[0].length; y++) {
                map[x][y] = 0;
            }
        }
        if (active == true) {
            new_protein = 0;
            correct_letter();
            map = draw_snake(map);
            map = draw_letters(map);
            game_loop_synthesis();
        } else if (test_level == true) {
            new_protein = 0;
            correct_letter();
            map = draw_snake(map);
            map = draw_letters(map);
            game_loop_synthesis();
        }
    }
	
    //Menu shown at start of the game, shows options and starts game 
    function replication_menu() {
        draw_background();
        sort_helix();
        draw_helix();
        sort_leaderboard();
		menu = "replication";
        ctx.fillStyle = "#000000";
        ctx.font = "bold 55px sans-serif";
        ctx.fillText("DNA REPLICATION", mycanv.width - 800, 90);
        ctx.font = "bold 45px sans-serif";
        ctx.fillText("Start Practise", mycanv.width - 695, 150);
		ctx.font = "45px sans-serif";
        ctx.fillText("Press Space", mycanv.width - 680, 200);
		ctx.font = "bold 45px sans-serif";
        ctx.fillText("Take Test", mycanv.width - 660, 275);
		ctx.font = "45px sans-serif";
        ctx.fillText("Press T", mycanv.width - 630, 325);
		ctx.font = "bold 45px sans-serif";
        ctx.fillText("Leader Board", mycanv.width - 700, 400);
		ctx.font = "45px sans-serif";
        ctx.fillText("Press L", mycanv.width - 630, 450);
        if (active == true) {
            correct_letter();
            map = draw_snake(map);
            map = draw_letters(map);
            game_loop();
        } else if (test_level == true) {
            correct_letter();
            map = draw_snake(map);
            map = draw_letters(map);
            game_loop();
        }
    }

    //similar to replication_menu function but is caled when game has been lost, 
    //therefore to play again, some vaiables need to be redefined and the map cleared
    function restart_game() {
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        snake_x = 5;
        snake_y = 5;
        snake_array = new Array(4);
        protein_array = new Array("head", "A2", "A2");
        collected_array = new Array(0)
        direction = 0;
        score = 0;
        level = 0;
        speed = 150;
        lost = false;
        var protein;
        img_head.src = "images/head_right.png";
        for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[0].length; y++) {
                map[x][y] = 0;
            }
        }
        if (active == true) {
            new_protein = 0;
            position = 25;
            correct_letter();
            map = draw_snake(map);
            map = draw_letters(map);
            game_loop();
        } else if (test_level == true) {
            new_protein = 0;
            position = 25;
            correct_letter();
            map = draw_snake(map);
            map = draw_letters(map);
            game_loop();
        }
    }

    //this function displays the leaderboard but the results are displayed differently 
    //depending on if they have been assigned a value by the user.
    function leader_board() {
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        document.getElementById("player").style.visibility = "hidden";
        entering_name = false;
        draw_background();
        //sort_helix();
        my_gradient = ctx.createLinearGradient(0, 0, 1600, 0);
        my_gradient.addColorStop(0.44, "darkred");
        my_gradient.addColorStop(0.5, "darkslategrey");
        my_gradient.addColorStop(0.55, "darkred");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(700, 20, mycanv.width - 700, 475);
        ctx.fillStyle = "#000000";
        ctx.font = "bold 50px sans-serif";
        ctx.fillText("Leader Board", mycanv.width - 715, 100);
        ctx.font = "bold 28px sans-serif";
        if (sessionStorage.highscore == -100) {
            ctx.fillText("1st :" + sessionStorage.highscore_name, mycanv.width - 600, 150);
        } else {
            ctx.fillText("1st " + sessionStorage.highscore_name + ": " + sessionStorage.highscore, mycanv.width - 640, 150);
        }
        if (sessionStorage.second == -100) {
            ctx.fillText("2nd :" + sessionStorage.second_name, mycanv.width - 600, 180);
        } else {
            ctx.fillText("2nd " + sessionStorage.second_name + ": " + sessionStorage.second, mycanv.width - 640, 180);
        }
        if (sessionStorage.third == -100) {
            ctx.fillText("3rd :" + sessionStorage.third_name, mycanv.width - 600, 210);
        } else {
            ctx.fillText("3rd " + sessionStorage.third_name + ": " + sessionStorage.third, mycanv.width - 640, 210);
        }
        if (sessionStorage.fourth == -100) {
            ctx.fillText("4th :" + sessionStorage.fourth_name, mycanv.width - 600, 240);
        } else {
            ctx.fillText("4th " + sessionStorage.fourth_name + ": " + sessionStorage.fourth, mycanv.width - 640, 240);
        }
        if (sessionStorage.fifth == -100) {
            ctx.fillText("5th :" + sessionStorage.fifth_name, mycanv.width - 600, 270);
        } else {
            ctx.fillText("5th " + sessionStorage.fifth_name + ": " + sessionStorage.fifth, mycanv.width - 640, 270);
        }
        if (sessionStorage.sixth == -100) {
            ctx.fillText("6th :" + sessionStorage.sixth_name, mycanv.width - 600, 300);
        } else {
            ctx.fillText("6th " + sessionStorage.sixth_name + ": " + sessionStorage.sixth, mycanv.width - 640, 300);
        }
        if (sessionStorage.seventh == -100) {
            ctx.fillText("7th :" + sessionStorage.seventh_name, mycanv.width - 600, 330);
        } else {
            ctx.fillText("7th " + sessionStorage.seventh_name + ": " + sessionStorage.seventh, mycanv.width - 640, 330);
        }
        if (sessionStorage.eighth == -100) {
            ctx.fillText("8th :" + sessionStorage.eighth_name, mycanv.width - 600, 360);
        } else {
            ctx.fillText("8th " + sessionStorage.eighth_name + ": " + sessionStorage.eighth, mycanv.width - 640, 360);
        }
        if (sessionStorage.ninth == -100) {
            ctx.fillText("9th :" + sessionStorage.ninth_name, mycanv.width - 600, 390);
        } else {
            ctx.fillText("9th " + sessionStorage.ninth_name + ": " + sessionStorage.ninth, mycanv.width - 640, 390);
        }
        if (sessionStorage.tenth == -100) {
            ctx.fillText("10th:" + sessionStorage.tenth_name, mycanv.width - 600, 420);
        } else {
            ctx.fillText("10th" + sessionStorage.tenth_name + ": " + sessionStorage.tenth, mycanv.width - 640, 420);
        }
        ctx.fillText("To play again spess space", mycanv.width - 730, 460);
    }

    //This function waits and listens for when a key is pressed and then reacts differently
    //dependingon which is pressed
    window.addEventListener('keydown', function(e) {
        if (e.keyCode === 38 && direction !== 3 && snake_array[0].y - 1 != snake_array[1].y) {
            direction = 2; // Up
            img_head.src = "images/head_up.png";
        } else if (e.keyCode === 40 && direction !== 2 && snake_array[0].y + 1 != snake_array[1].y) {
            direction = 3; // Down
            img_head.src = "images/head_down.png";
        } else if (e.keyCode === 37 && direction !== 0 && snake_array[0].x - 1 != snake_array[1].x) {
            direction = 1; // Left
            img_head.src = "images/head_left.png";
        } else if (e.keyCode === 39 && direction !== 1 && snake_array[0].x + 1 != snake_array[1].x) {
            direction = 0; // Right
            img_head.src = "images/head_right.png";
        } else if (e.keyCode == 76 && active == false && entering_name == false && start == false) { //L
            if(menu != "synthesis"){
				leader_board();
			}
		}else if(e.keyCode == 77 && active == false && entering_name == false && start == false){ //m
			start = true;
			lost = false;
			for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[0].length; y++) {
                map[x][y] = 0;
            }
        }
			start_menu();
        } else if (e.keyCode == 13 && entering_name == true && start == false) { //Enter
            player_name = document.getElementById('player').value;
            if (player_name.length != 3) {
                ctx.fillStyle = "#000000";
                ctx.font = "bold 24px sans-serif";
                ctx.fillText("Please enter a three letter name", mycanv.width - 730, 460);
            } else {
                shift_scores();
                document.getElementById('player').value = "";
                leader_board();
            }
		} else if(e.keyCode == 49 && start == true && entering_name == false && active == false && lost == false){ //1
			start = false;
            replication_menu();
		} else if (e.keyCode == 50 && entering_name == false && start == true){ //2
			synthesis_menu();
		}
        if (e.keyCode == 84 && start == false && entering_name == false && lost == false) { //t
            if(menu == "replication"){
				test_level = true;
				active = true;
				start = false;
				replication_menu();
			} else if(menu == "synthesis"){
				test_level = true;
				active = true;
				start = false;
				synthesis_menu();
			}
        }
        if (e.keyCode == 84 && lost == true && entering_name == false && start == false) { //t
            if(menu == "replication"){
				test_level = true;
				active = true;
				restart_game();
			}else if(menu == "synthesis"){
				test_level = true;
				active = true;
				restart_game_synthesis();
			}
        }
		if (e.keyCode == 32) { //space 
            if (start == false && entering_name == false && active == false && lost == false && menu == "replication") {
                active = true;
                replication_menu();
            }else if(start == false && entering_name == false && active == false && lost == false && menu == "synthesis"){
				active = true;
				synthesis_menu();
			}
        }
        if (e.keyCode == 32) { //space
            if (lost == true && entering_name == false && active == false && menu == "replication") {
                active = true;
                restart_game();
			}else if(lost == true && entering_name == false && active == false && menu == "synthesis"){
				active = true;
                restart_game_synthesis();
			}
        }
    });

	function game_loop_synthesis(){
		ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        ctx.fillStyle = "#000000";
        ctx.font = "bold 24px sans-serif";
		//var jj = collected_array()
        ctx.fillText("Score: " + score + " " + collected_array[0] + " " + collected_array[23], 20, 17);
        for (var i = snake_array.length - 1; i >= 0; i--) {

            if (i === 0) {
                switch (direction) {
                    case 0:
                        move_right(); // Right
                        break;
                    case 1:
                        move_left(); // Left
                        break;
                    case 2:
                        move_up(); // Up
                        break;
                    case 3:
                        move_down(); // Down
                        break;
                }
				
			if (snake_array[i].x < 0 ||
                    snake_array[i].x >= 28 ||
                    snake_array[i].y < 0 ||
                    snake_array[i].y >= 19) {
						game_over_synthesis();
                    return;
                }
			if (map[snake_array[0].x][snake_array[0].y] === 1) {
						game_over_synthesis();
					
                    return;
                }
			if (map[snake_array[0].x][snake_array[0].y] === 2 || map[snake_array[0].x][snake_array[0].y] === 3 || map[snake_array[0].x][snake_array[0].y] === 4 || map[snake_array[0].x][snake_array[0].y] === 5) {
                    if (map[snake_array[0].x][snake_array[0].y] === 2) {
                        if (ribosome_array[new_protein] != "A") {
                            protein_array.splice(1, 0, "A2");
                            collected_array.push("A_not_collected");
                        } else {
                            protein_array.splice(1, 0, "A");
                            collected_array.push("A_collected");
                        }
                        if (protein == 0) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
						if (speed > 40) {
							speed = speed - 0.025;
						}
                    } else if (map[snake_array[0].x][snake_array[0].y] === 3) {
                        if (ribosome_array[new_protein] != "G") {
                            protein_array.splice(1, 0, "G2");
                            collected_array.push("G_not_collected");
                        } else {
                            protein_array.splice(1, 0, "G");
                            collected_array.push("G_collected");
                        }
                        if (protein == 1) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
						if (speed > 40) {
							speed = speed - 0.025;
						}
                    } else if (map[snake_array[0].x][snake_array[0].y] === 4) {
                        if (ribosome_array[new_protein] != "T") {
                            protein_array.splice(1, 0, "T2");
                            collected_array.push("T_not_collected");
                        } else {
                            protein_array.splice(1, 0, "T");
                            collected_array.push("T_collected");
                        }
                        if (protein == 2) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
						if (speed > 40) {
							speed = speed - 0.025;
						}
                    } else if (map[snake_array[0].x][snake_array[0].y] === 5) {
                        if (ribosome_array[new_protein] != "C") {
                            protein_array.splice(1, 0, "C2");
                            collected_array.push("C_not_collected");
                        } else {
                            protein_array.splice(1, 0, "C");
                            collected_array.push("C_collected");
                        }
                        if (protein == 3) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
						if (speed > 40) {
							speed = speed - 0.025;
						}
                    }
				snake_array.push({
                        x: snake_array[snake_array.length - 1].x,
                        y: snake_array[snake_array.length - 1].y
                    });
                    for (var x = 0; x < map.length; x++) {
                        for (var y = 0; y < map[0].length; y++) {
                            if (map[x][y] != 1) {
                                map[x][y] = 0;
                            }
                        }
                    }
                    new_protein = new_protein + 1;
                    correct_letter();
                    draw_letters(map);
                    //position += 40;
                }
				
				map[snake_array[0].x][snake_array[0].y] = 1;
            } else {

                if (i === (snake_array.length - 1)) {
                    map[snake_array[i].x][snake_array[i].y] = null;
                }

                snake_array[i] = {
                    x: snake_array[i - 1].x,
                    y: snake_array[i - 1].y
                };
                map[snake_array[i].x][snake_array[i].y] = 1;

            }
        }
		draw_background_synthesis();
		draw_ribosome();
		sort_ribosome();
			
			 for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[0].length; y++) {
                if (map[x][y] === 1) {
                    for (var j = 0; j < snake_array.length - 1; j++) {
                        if (x == snake_array[j].x && y == snake_array[j].y) {
                            if (protein_array[j] == "head") {
                                ctx.drawImage(img_head, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "G") {
                                ctx.drawImage(round_G, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "C") {
                                ctx.drawImage(round_C, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "T") {
                                ctx.drawImage(round_T, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "A") {
                                ctx.drawImage(round_A, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "A2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "G2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "T2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "C2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            }
                        }
                    }
                } else if (map[x][y] === 2) {
                    ctx.drawImage(img_A, x * 25, y * 25 + 20, 25, 25);
                } else if (map[x][y] === 3) {
                    ctx.drawImage(img_G, x * 25, y * 25 + 20, 25, 25);
                } else if (map[x][y] === 4) {
                    ctx.drawImage(img_T, x * 25, y * 25 + 20, 25, 25);
                } else if (map[x][y] === 5) {
                    ctx.drawImage(img_C, x * 25, y * 25 + 20, 25, 25);
                }
            }
        }
        if (active) {
            // if (speed > 40) {
                // speed = speed - 0.025;
            // }
            setTimeout(game_loop_synthesis, (speed));
        }
	}
	
    //controls everything that happens once the game is active, including movement, collision detection
    //and drawing the elements of the game
    function game_loop() {
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        ctx.fillStyle = "#000000";
        ctx.font = "bold 24px sans-serif";
        ctx.fillText("Score: " + score, 20, 17);
        for (var i = snake_array.length - 1; i >= 0; i--) {

            if (i === 0) {
                switch (direction) {
                    case 0:
                        move_right(); // Right
                        break;
                    case 1:
                        move_left(); // Left
                        break;
                    case 2:
                        move_up(); // Up
                        break;
                    case 3:
                        move_down(); // Down
                        break;
                }

                if (snake_array[i].x < 0 ||
                    snake_array[i].x >= 28 ||
                    snake_array[i].y < 0 ||
                    snake_array[i].y >= 19) {
                    if (test_level == true) {
                        if (score >= sessionStorage.tenth) {
                            enter_name();
                        } else if (score < sessionStorage.tenth) {
                            game_over();
                        }
                    } else {
                        game_over();
                    }
                    return;
                }

                if (map[snake_array[0].x][snake_array[0].y] === 1) {
                    if (test_level == true && menu == "replication") {
                        if (score > sessionStorage.tenth) {
                            enter_name();
                        } else if (score < sessionStorage.tenth) {
                            game_over();
                        }
                    }else {
                        game_over();
                    }
                    return;
                }

                if (map[snake_array[0].x][snake_array[0].y] === 2 || map[snake_array[0].x][snake_array[0].y] === 3 || map[snake_array[0].x][snake_array[0].y] === 4 || map[snake_array[0].x][snake_array[0].y] === 5) {
                    if (map[snake_array[0].x][snake_array[0].y] === 2) {
                        if (double_array[new_protein] != "A") {
                            protein_array.splice(1, 0, "A2");
                            collected_array.push("A_not_collected");
                        } else {
                            protein_array.splice(1, 0, "A");
                            collected_array.push("A_collected");
                        }
                        if (protein == 0) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
                    } else if (map[snake_array[0].x][snake_array[0].y] === 3) {
                        if (double_array[new_protein] != "G") {
                            protein_array.splice(1, 0, "G2");
                            collected_array.push("G_not_collected");
                        } else {
                            protein_array.splice(1, 0, "G");
                            collected_array.push("G_collected");
                        }
                        if (protein == 1) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
                    } else if (map[snake_array[0].x][snake_array[0].y] === 4) {
                        if (double_array[new_protein] != "T") {
                            protein_array.splice(1, 0, "T2");
                            collected_array.push("T_not_collected");
                        } else {
                            protein_array.splice(1, 0, "T");
                            collected_array.push("T_collected");
                        }
                        if (protein == 2) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
                    } else if (map[snake_array[0].x][snake_array[0].y] === 5) {
                        if (double_array[new_protein] != "C") {
                            protein_array.splice(1, 0, "C2");
                            collected_array.push("C_not_collected");
                        } else {
                            protein_array.splice(1, 0, "C");
                            collected_array.push("C_collected");
                        }
                        if (protein == 3) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
                    }
                    snake_array.push({
                        x: snake_array[snake_array.length - 1].x,
                        y: snake_array[snake_array.length - 1].y
                    });
                    for (var x = 0; x < map.length; x++) {
                        for (var y = 0; y < map[0].length; y++) {
                            if (map[x][y] != 1) {
                                map[x][y] = 0;
                            }
                        }
                    }
                    new_protein = new_protein + 1;
                    correct_letter();
                    draw_letters(map);
                    position += 40;
                }

                map[snake_array[0].x][snake_array[0].y] = 1;
            } else {

                if (i === (snake_array.length - 1)) {
                    map[snake_array[i].x][snake_array[i].y] = null;
                }

                snake_array[i] = {
                    x: snake_array[i - 1].x,
                    y: snake_array[i - 1].y
                };
                map[snake_array[i].x][snake_array[i].y] = 1;

            }
        }
		
		draw_background();
		draw_helix();
		sort_helix();		

        for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[0].length; y++) {
                if (map[x][y] === 1) {
                    for (var j = 0; j < snake_array.length - 1; j++) {
                        if (x == snake_array[j].x && y == snake_array[j].y) {
                            if (protein_array[j] == "head") {
                                ctx.drawImage(img_head, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "G") {
                                ctx.drawImage(round_G, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "C") {
                                ctx.drawImage(round_C, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "T") {
                                ctx.drawImage(round_T, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "A") {
                                ctx.drawImage(round_A, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "A2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "G2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "T2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "C2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            }
                        }
                    }
                } else if (map[x][y] === 2) {
                    ctx.drawImage(img_A, x * 25, y * 25 + 20, 25, 25);
                } else if (map[x][y] === 3) {
                    ctx.drawImage(img_G, x * 25, y * 25 + 20, 25, 25);
                } else if (map[x][y] === 4) {
                    ctx.drawImage(img_T, x * 25, y * 25 + 20, 25, 25);
                } else if (map[x][y] === 5) {
                    ctx.drawImage(img_C, x * 25, y * 25 + 20, 25, 25);
                }
            }
        }
        if (active) {
            if (speed > 40) {
                speed = speed - 0.025;
            }
            setTimeout(game_loop, (speed));
        }
    }

    //Called if player has lost the game and the score is high enough to be features on the leaderboard
    //Allows player to enter their name and saves it to a variable
    function enter_name() {
        active = false;
        entering_name = true;
        lost = true;
        draw_background();
        draw_helix();
        document.getElementById("player").style.visibility = "visible";
        document.getElementById("player").focus();
        ctx.fillStyle = "#000000";
        ctx.font = "bold 50px sans-serif";
        ctx.fillText("Game Over!", mycanv.width - 700, 200);
        ctx.fillText("Enter Name", mycanv.width - 700, 280);
    }

    //Called if the player has lost the game and the score is too low to feature on the leaderboard
    function game_over() {
        test_level = false;
        active = false;
        lost = true;
        draw_background();
        draw_helix();
        sort_helix();
        ctx.fillStyle = "#000000";
        ctx.font = "bold 50px sans-serif";
        ctx.fillText("Game Over!", mycanv.width - 700, 140);
        ctx.fillText("Restart Game", mycanv.width - 720, 220);
		ctx.font = "45px sans-serif";
        ctx.fillText("Press Space to practise", mycanv.width - 795, 270);
		ctx.fillText("Press T for Test", mycanv.width - 715, 320);
		ctx.fillText("Press M for Menu", mycanv.width - 730, 370);
    }
	
	function game_over_synthesis(){
		test_level = false;
        active = false;
        lost = true;
		draw_background_synthesis();
		draw_ribosome();
		sort_ribosome();
		ctx.fillStyle = "#000000";
        ctx.font = "bold 50px sans-serif";
        ctx.fillText("Game Over!2", mycanv.width - 700, 140);
        ctx.fillText("Restart Game", mycanv.width - 720, 220);
		ctx.font = "45px sans-serif";
        ctx.fillText("Press Space to practise", mycanv.width - 795, 270);
		ctx.fillText("Press T for Test", mycanv.width - 715, 320);
		ctx.fillText("Press M for Menu", mycanv.width - 730, 370);
	}

    //Gives each part of the snake an X and Y coordinate
    function draw_snake(map) {
        for (var i = 0; i < snake_array.length; i++) {
            snake_array[i] = {
                x: snake_x - i,
                y: snake_y
            };
            map[snake_x - i][snake_y] = 1;
        }
        return map;
    }

    //Gives the letters X and Y coordinates, making sure to not be placed under another letter or the snake.
    //The letters are 'correct' when successfully individually spaced.
    function draw_letters(map) {
        var A_x = Math.floor(Math.random() * 27) + 0;
        var A_y = Math.floor(Math.random() * 18) + 0;
        var G_x = Math.floor(Math.random() * 27) + 0;
        var G_y = Math.floor(Math.random() * 18) + 0;
        var T_x = Math.floor(Math.random() * 27) + 0;
        var T_y = Math.floor(Math.random() * 18) + 0;
        var C_x = Math.floor(Math.random() * 27) + 0;
        var C_y = Math.floor(Math.random() * 18) + 0;
        var A_correct = false;
        var G_correct = false;
        var T_correct = false;
        var C_correct = false;

        while (A_correct == false) {
            if (map[A_x][A_y] != 1 && map[A_x][A_y] != 2 && map[A_x][A_y] != 3 && map[A_x][A_y] != 4 && map[A_x][A_y] != 5) {
                map[A_x][A_y] = 2;
                A_correct = true;
            } else {
                A_x = Math.floor(Math.random() * 28) + 0;
                A_y = Math.floor(Math.random() * 19) + 0;
                A_correct = false;
            }
        }
        while (G_correct == false) {
            if (map[G_x][G_y] != 1 && map[G_x][G_y] != 2 && map[G_x][G_y] != 3 && map[G_x][G_y] != 4 && map[G_x][G_y] != 5) {
                map[G_x][G_y] = 3;
                G_correct = true;
            } else {
                G_x = Math.floor(Math.random() * 28) + 0;
                G_y = Math.floor(Math.random() * 19) + 0;
                G_correct = false;
            }
        }
        while (T_correct == false) {
            if (map[T_x][T_y] != 1 && map[T_x][T_y] != 2 && map[T_x][T_y] != 3 && map[T_x][T_y] != 4 && map[T_x][T_y] != 5) {
                map[T_x][T_y] = 4;
                T_correct = true;
            } else {
                T_x = Math.floor(Math.random() * 28) + 0;
                T_y = Math.floor(Math.random() * 19) + 0;
                T_correct = false;
            }
        }
        while (C_correct == false) {
            if (map[C_x][C_y] != 1 && map[C_x][C_y] != 2 && map[C_x][C_y] != 3 && map[C_x][C_y] != 4 && map[C_x][C_y] != 5) {
                map[C_x][C_y] = 5;
                C_correct = true;
            } else {
                C_x = Math.floor(Math.random() * 28) + 0;
                C_y = Math.floor(Math.random() * 19) + 0;
                C_correct = false;
            }
        }

        return map;
    }

    //draws the background of the canvas and determines if the browser is able to handle session storage.
    function draw_background() {
        my_gradient = ctx.createLinearGradient(0, 0, 670, 0);
        my_gradient.addColorStop(0, "darkslategrey");
        my_gradient.addColorStop(0.5, "teal");
        my_gradient.addColorStop(1, "darkslategrey");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(0, 20, 700, 475);
        ctx.strokeRect(0, 20, 700, 475);
        ctx.strokeRect(700, 20, mycanv.width - 700, 475);
        if (typeof(Storage) !== "undefined") {
            //ctx.fillText("Leader board can be saved", mycanv.width - 530, 17);
        } else {
            ctx.fillText("Leader board cannot be saved", mycanv.width - 530, 17);
        }
    }
	
	//draws the background of the canvas and determines if the browser is able to handle session storage.
    function draw_background_synthesis() {
        my_gradient = ctx.createLinearGradient(0, 0, 670, 0);
        my_gradient.addColorStop(0, "darkslategrey");
        my_gradient.addColorStop(0.5, "teal");
        my_gradient.addColorStop(1, "darkslategrey");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(0, 20, 700, 475);
        ctx.strokeRect(0, 20, 700, 475);
        ctx.strokeRect(700, 20, mycanv.width - 700, 475);
        if (typeof(Storage) !== "undefined") {
            //ctx.fillText("Leader board can be saved", mycanv.width - 530, 17);
        } else {
            ctx.fillText("Leader board cannot be saved", mycanv.width - 530, 17);
        }
    }

	//draws background gradient and ribosome image for level 2
	function draw_ribosome(){
		my_gradient = ctx.createLinearGradient(0, 0, 1600, 0);
        my_gradient.addColorStop(0.44, "darkred");
        my_gradient.addColorStop(0.5, "darkslategrey");
        my_gradient.addColorStop(0.55, "darkred");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(700, 20, mycanv.width - 700, 475);
		ctx.drawImage(ribosome, 790, 140, mycanv.width - 550, 200);
		ctx.drawImage(bond, 750, 115, mycanv.width - 790, 160);
		ctx.drawImage(bond, 750, 165, mycanv.width - 790, 160);
		ctx.drawImage(bond, 750, 215, mycanv.width - 790, 160);
	}
	
	function sort_ribosome(){
		ctx.drawImage(box, 710, 161, 55, 160);
		ctx.drawImage(box, 710, 328, 55, 160);
		var start = 0;
		var end = 3;
		// if (collected_array[2] == undefined) {
            // start = 0;
            // end = 3;
		// } else if (collected_array[5] == undefined) {
            // start = 3;
            // end = 6;
        // } else if (collected_array[8] == undefined) {
            // start = 6;
            // end = 9;
		// } else if (collected_array[11] == undefined) {
            // start = 9;
            // end = 12;
        // } else if (collected_array[14] == undefined) {
            // start = 12;
            // end = 15;
        // } else if (collected_array[17] == undefined) {
            // start = 15;
            // end = 18;
        // } else if (collected_array[20] == undefined) {
            // start = 18;
            // end = 21;
        // } else if (collected_array[23] == undefined) {
            // start = 21;
            // end = 24;
        // } 
		if(collected_array[23] != undefined){
			collected_array = new Array(0);
			new_protein = 0;
            start = 0;
            end = 3;
		}
		var y = 179;
		for (var i = start; i < end; i++){
			if(ribosome_array[i] == "C"){
				ctx.drawImage(grey_C, 725, y, 25, 25);
				if (collected_array[i] == "C_collected") {
					ctx.drawImage(snake_C, 725, y, 25, 25);
				} else if (collected_array[i] != "C_collected" && collected_array[i] != undefined) {
                    ctx.drawImage(black_C, 725, y, 25, 25);
                }
				ctx.drawImage(snake_G, 840, y, 25, 25);
			}
			if(ribosome_array[i] == "G"){
				ctx.drawImage(grey_G, 725, y, 25, 25);
				if (collected_array[i] == "G_collected") {
					ctx.drawImage(snake_G, 725, y, 25, 25);
				} else if (collected_array[i] != "G_collected" && collected_array[i] != undefined) {
                    ctx.drawImage(black_G, 725, y, 25, 25);
                }
				ctx.drawImage(snake_C, 840, y, 25, 25);
			}
			if(ribosome_array[i] == "T"){
				ctx.drawImage(grey_T, 725, y, 25, 25);
				if (collected_array[i] == "T_collected") {
					ctx.drawImage(snake_T, 725, y, 25, 25);
				} else if (collected_array[i] != "T_collected" && collected_array[i] != undefined) {
                    ctx.drawImage(black_T, 725, y, 25, 25);
                }
				ctx.drawImage(snake_A, 840, y, 25, 25);
			}
			if(ribosome_array[i] == "A"){
				ctx.drawImage(grey_A, 725, y, 25, 25);
				if (collected_array[i] == "A_collected") {
					ctx.drawImage(snake_A, 725, y, 25, 25);
				} else if (collected_array[i] != "A_collected" && collected_array[i] != undefined) {
                    ctx.drawImage(black_A, 725, y, 25, 25);
                }
				ctx.drawImage(snake_T, 840, y, 25, 25);
			}
			y = y + 50;
			start = start + 3;
			end = end + 3;
		}
		
		var y = 348;
		for (var i = 3; i < 6; i++){
			if(ribosome_array[i] == "C"){
				ctx.drawImage(grey_C, 725, y, 25, 25);
			}
			if(ribosome_array[i] == "G"){
				ctx.drawImage(grey_G, 725, y, 25, 25);
			}
			if(ribosome_array[i] == "T"){
				ctx.drawImage(grey_T, 725, y, 25, 25);
			}
			if(ribosome_array[i] == "A"){
				ctx.drawImage(grey_A, 725, y, 25, 25);
			}
			y = y + 50;
		}
	}
	
    //draws the background gradient and helix image level 1
    function draw_helix() {
        my_gradient = ctx.createLinearGradient(0, 0, 1600, 0);
        my_gradient.addColorStop(0.44, "darkred");
        my_gradient.addColorStop(0.5, "darkslategrey");
        my_gradient.addColorStop(0.55, "darkred");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(700, 20, mycanv.width - 700, 475);
        ctx.drawImage(helix, 740, 20, mycanv.width - 780, 475);
    }

    //Creates the arrays to coordinate the letters of the helix to the letters on the board
    function sort_helix() {
        var x = 25;
        for (var i = 0; i < single_array.length; i++) {
            if (single_array[i] == "C") {
                double_array.push("G");
            } else if (single_array[i] == "G") {
                double_array.push("C");
            } else if (single_array[i] == "A") {
                double_array.push("T");
            } else if (single_array[i] == "T") {
                double_array.push("A");
            }
            x = x + 40;
        }
        if (collected_array[11] == undefined) {
            var start = 0;
            var end = 12;
        } else {
            start = 12;
            end = 0;
        }
        if (collected_array[23] != undefined) {
            collected_array = new Array(0);
            start = 0;
            end = 12;
        }
        var y = 25;
        for (var j = start; j < double_array.length - end; j++) {
            if (double_array[j] == "C") {
                if (test_level == true) {
                    ctx.drawImage(grey, 710, y, 25, 25);
                } else {
                    ctx.drawImage(grey_C, 710, y, 25, 25);
                }
                if (collected_array[j] == "C_collected") {
                    ctx.drawImage(snake_C, 710, y, 25, 25);
                } else if (collected_array[j] != "C_collected" && collected_array[j] != undefined) {
                    ctx.drawImage(black_C, 710, y, 25, 25);
                }
                ctx.drawImage(snake_G, 865, y, 25, 25);
            } else if (double_array[j] == "G") {
                if (test_level == true) {
                    ctx.drawImage(grey, 710, y, 25, 25);
                } else {
                    ctx.drawImage(grey_G, 710, y, 25, 25);
                }
                if (collected_array[j] == "G_collected") {
                    ctx.drawImage(snake_G, 710, y, 25, 25);
                } else if (collected_array[j] != "G_collected" && collected_array[j] != undefined) {
                    ctx.drawImage(black_G, 710, y, 25, 25);
                }
                ctx.drawImage(snake_C, 865, y, 25, 25);
            } else if (double_array[j] == "A") {
                if (test_level == true) {
                    ctx.drawImage(grey, 710, y, 25, 25);
                } else {
                    ctx.drawImage(grey_A, 710, y, 25, 25);
                }
                if (collected_array[j] == "A_collected") {
                    ctx.drawImage(snake_A, 710, y, 25, 25);
                } else if (collected_array[j] != "A_collected" && collected_array[j] != undefined) {
                    ctx.drawImage(black_A, 710, y, 25, 25);
                }
                ctx.drawImage(snake_T, 865, y, 25, 25);
            } else if (double_array[j] == "T") {
                if (test_level == true) {
                    ctx.drawImage(grey, 710, y, 25, 25);
                } else {
                    ctx.drawImage(grey_T, 710, y, 25, 25);
                }
                if (collected_array[j] == "T_collected") {
                    ctx.drawImage(snake_T, 710, y, 25, 25);
                } else if (collected_array[j] != "T_collected" && collected_array[j] != undefined) {
                    ctx.drawImage(black_T, 710, y, 25, 25);
                }
                ctx.drawImage(snake_A, 865, y, 25, 25);
            }
            y = y + 40;
        }
    }

    //When the snake is ordered to change direction, these functions are called to change the X or Y coordinates.
    function move_left() {
        snake_array[0] = {
            x: snake_array[0].x - 1,
            y: snake_array[0].y
        }
    }

    function move_up() {
        snake_array[0] = {
            x: snake_array[0].x,
            y: snake_array[0].y - 1
        }
    }

    function move_right() {
        snake_array[0] = {
            x: snake_array[0].x + 1,
            y: snake_array[0].y
        }
    }

    function move_down() {
        snake_array[0] = {
            x: snake_array[0].x,
            y: snake_array[0].y + 1
        }
    }

    //This changes the letters so that only one is coloured and the rest are black.
    //This is currently random but in time will be in the order of a gene.
    function correct_letter() {
        img_A.src = "images/A.png";
        img_T.src = "images/T.jpg";
        img_G.src = "images/G.jpg";
        img_C.src = "images/C.jpg";
		if(menu == "replication"){
			if (test_level == true) {
				if (double_array[new_protein] == "A") {
					protein = 0;
				} else if (double_array[new_protein] == "G") {
					protein = 1;
				} else if (double_array[new_protein] == "T") {
					protein = 2;
				} else if (double_array[new_protein] == "C") {
					protein = 3;
				}
			} else {
				if (double_array[new_protein] == "A") {
					img_A.src = "images/A3.png";
					img_T.src = "images/T.jpg";
					img_G.src = "images/G.jpg";
					img_C.src = "images/C.jpg";
					protein = 0;
				} else if (double_array[new_protein] == "G") {
					img_A.src = "images/A.png";
					img_T.src = "images/T.jpg";
					img_G.src = "images/G3.jpg";
					img_C.src = "images/C.jpg";
					protein = 1;
				} else if (double_array[new_protein] == "T") {
					img_A.src = "images/A.png";
					img_T.src = "images/T3.jpg";
					img_G.src = "images/G.jpg";
					img_C.src = "images/C.jpg";
					protein = 2;
				} else if (double_array[new_protein] == "C") {
					img_A.src = "images/A.png";
					img_T.src = "images/T.jpg";
					img_G.src = "images/G.jpg";
					img_C.src = "images/C3.jpg";
					protein = 3;
				}
			}
		}else if(menu == "synthesis"){
			// if (test_level == true) {
				// if (ribosome_array[new_protein] == "A") {
					// protein = 0;
				// } else if (ribosome_array[new_protein] == "G") {
					// protein = 1;
				// } else if (ribosome_array[new_protein] == "T") {
					// protein = 2;
				// } else if (ribosome_array[new_protein] == "C") {
					// protein = 3;
				// }
			// } else {
				if (ribosome_array[new_protein] == "A") {
					img_A.src = "images/A3.png";
					img_T.src = "images/T.jpg";
					img_G.src = "images/G.jpg";
					img_C.src = "images/C.jpg";
					protein = 0;
				} else if (ribosome_array[new_protein] == "G") {
					img_A.src = "images/A.png";
					img_T.src = "images/T.jpg";
					img_G.src = "images/G3.jpg";
					img_C.src = "images/C.jpg";
					protein = 1;
				} else if (ribosome_array[new_protein] == "T") {
					img_A.src = "images/A.png";
					img_T.src = "images/T3.jpg";
					img_G.src = "images/G.jpg";
					img_C.src = "images/C.jpg";
					protein = 2;
				} else if (ribosome_array[new_protein] == "C") {
					img_A.src = "images/A.png";
					img_T.src = "images/T.jpg";
					img_G.src = "images/G.jpg";
					img_C.src = "images/C3.jpg";
					protein = 3;
				}
			//}
		}
    }

    //When the game loads for the first time, the scores amd names are undefined.
    //Cannot compare 'undefined' with new score so score and name must be given a value at load.
    function sort_leaderboard() {
        if (sessionStorage.highscore == undefined) {
            sessionStorage.highscore = -100;
            sessionStorage.highscore_name = " ";
        }
        if (sessionStorage.second == undefined) {
            sessionStorage.second = -100;
            sessionStorage.second_name = " ";
        }
        if (sessionStorage.third == undefined) {
            sessionStorage.third = -100;
            sessionStorage.third_name = " ";
        }
        if (sessionStorage.fourth == undefined) {
            sessionStorage.fourth = -100;
            sessionStorage.fourth_name = " ";
        }
        if (sessionStorage.fifth == undefined) {
            sessionStorage.fifth = -100;
            sessionStorage.fifth_name = " ";
        }
        if (sessionStorage.sixth == undefined) {
            sessionStorage.sixth = -100;
            sessionStorage.sixth_name = " ";
        }
        if (sessionStorage.seventh == undefined) {
            sessionStorage.seventh = -100;
            sessionStorage.seventh_name = " ";
        }
        if (sessionStorage.eighth == undefined) {
            sessionStorage.eighth = -100;
            sessionStorage.eighth_name = " ";
        }
        if (sessionStorage.ninth == undefined) {
            sessionStorage.ninth = -100;
            sessionStorage.ninth_name = " ";
        }
        if (sessionStorage.tenth == undefined) {
            sessionStorage.tenth = -100;
            sessionStorage.tenth_name = " ";
        }
    }


    //When the game loads for the first time, the scores amd names are undefined.
    //Cannot compare 'undefined' with new score so score and name must be given a value at load.
    function shift_scores(place) {
        if (score > sessionStorage.highscore) {
            sessionStorage.tenth = sessionStorage.ninth;
            sessionStorage.ninth = sessionStorage.eighth;
            sessionStorage.eighth = sessionStorage.seventh;
            sessionStorage.seventh = sessionStorage.sixth;
            sessionStorage.sixth = sessionStorage.fifth;
            sessionStorage.fifth = sessionStorage.fourth;
            sessionStorage.fourth = sessionStorage.third;
            sessionStorage.third = sessionStorage.second;
            sessionStorage.second = sessionStorage.highscore;
            sessionStorage.highscore = score;
            sessionStorage.tenth_name = sessionStorage.ninth_name;
            sessionStorage.ninth_name = sessionStorage.eighth_name;
            sessionStorage.eighth_name = sessionStorage.seventh_name;
            sessionStorage.seventh_name = sessionStorage.sixth_name;
            sessionStorage.sixth_name = sessionStorage.fifth_name;
            sessionStorage.fifth_name = sessionStorage.fourth_name;
            sessionStorage.fourth_name = sessionStorage.third_name;
            sessionStorage.third_name = sessionStorage.second_name;
            sessionStorage.second_name = sessionStorage.highscore_name;
            sessionStorage.highscore_name = player_name.toUpperCase();
        } else {
            if (score > sessionStorage.second) {
                sessionStorage.tenth = sessionStorage.ninth;
                sessionStorage.ninth = sessionStorage.eighth;
                sessionStorage.eighth = sessionStorage.seventh;
                sessionStorage.seventh = sessionStorage.sixth;
                sessionStorage.sixth = sessionStorage.fifth;
                sessionStorage.fifth = sessionStorage.fourth;
                sessionStorage.fourth = sessionStorage.third;
                sessionStorage.third = sessionStorage.second;
                sessionStorage.second = score;
                sessionStorage.tenth_name = sessionStorage.ninth_name;
                sessionStorage.ninth_name = sessionStorage.eighth_name;
                sessionStorage.eighth_name = sessionStorage.seventh_name;
                sessionStorage.seventh_name = sessionStorage.sixth_name;
                sessionStorage.sixth_name = sessionStorage.fifth_name;
                sessionStorage.fifth_name = sessionStorage.fourth_name;
                sessionStorage.fourth_name = sessionStorage.third_name;
                sessionStorage.third_name = sessionStorage.second_name;
                sessionStorage.second_name = player_name.toUpperCase();
            } else {
                if (score > sessionStorage.third) {
                    sessionStorage.tenth = sessionStorage.ninth;
                    sessionStorage.ninth = sessionStorage.eighth;
                    sessionStorage.eighth = sessionStorage.seventh;
                    sessionStorage.seventh = sessionStorage.sixth;
                    sessionStorage.sixth = sessionStorage.fifth;
                    sessionStorage.fifth = sessionStorage.fourth;
                    sessionStorage.fourth = sessionStorage.third;
                    sessionStorage.third = score;
                    sessionStorage.tenth_name = sessionStorage.ninth_name;
                    sessionStorage.ninth_name = sessionStorage.eighth_name;
                    sessionStorage.eighth_name = sessionStorage.seventh_name;
                    sessionStorage.seventh_name = sessionStorage.sixth_name;
                    sessionStorage.sixth_name = sessionStorage.fifth_name;
                    sessionStorage.fifth_name = sessionStorage.fourth_name;
                    sessionStorage.fourth_name = sessionStorage.third_name;
                    sessionStorage.third_name = player_name.toUpperCase();
                } else {
                    if (score > sessionStorage.fourth) {
                        sessionStorage.tenth = sessionStorage.ninth;
                        sessionStorage.ninth = sessionStorage.eighth;
                        sessionStorage.eighth = sessionStorage.seventh;
                        sessionStorage.seventh = sessionStorage.sixth;
                        sessionStorage.sixth = sessionStorage.fifth;
                        sessionStorage.fifth = sessionStorage.fourth;
                        sessionStorage.fourth = score;
                        sessionStorage.tenth_name = sessionStorage.ninth_name;
                        sessionStorage.ninth_name = sessionStorage.eighth_name;
                        sessionStorage.eighth_name = sessionStorage.seventh_name;
                        sessionStorage.seventh_name = sessionStorage.sixth_name;
                        sessionStorage.sixth_name = sessionStorage.fifth_name;
                        sessionStorage.fifth_name = sessionStorage.fourth_name;
                        sessionStorage.fourth_name = player_name.toUpperCase();
                    } else {
                        if (score > sessionStorage.fifth) {
                            sessionStorage.tenth = sessionStorage.ninth;
                            sessionStorage.ninth = sessionStorage.eighth;
                            sessionStorage.eighth = sessionStorage.seventh;
                            sessionStorage.seventh = sessionStorage.sixth;
                            sessionStorage.sixth = sessionStorage.fifth;
                            sessionStorage.fifth = score;
                            sessionStorage.tenth_name = sessionStorage.ninth_name;
                            sessionStorage.ninth_name = sessionStorage.eighth_name;
                            sessionStorage.eighth_name = sessionStorage.seventh_name;
                            sessionStorage.seventh_name = sessionStorage.sixth_name;
                            sessionStorage.sixth_name = sessionStorage.fifth_name;
                            sessionStorage.fifth_name = player_name.toUpperCase();
                        } else {
                            if (score > sessionStorage.sixth) {
                                sessionStorage.tenth = sessionStorage.ninth;
                                sessionStorage.ninth = sessionStorage.eighth;
                                sessionStorage.eighth = sessionStorage.seventh;
                                sessionStorage.seventh = sessionStorage.sixth;
                                sessionStorage.sixth = score;
                                sessionStorage.tenth_name = sessionStorage.ninth_name;
                                sessionStorage.ninth_name = sessionStorage.eighth_name;
                                sessionStorage.eighth_name = sessionStorage.seventh_name;
                                sessionStorage.seventh_name = sessionStorage.sixth_name;
                                sessionStorage.sixth_name = player_name.toUpperCase();
                            } else {
                                if (score > sessionStorage.seventh) {
                                    sessionStorage.tenth = sessionStorage.ninth;
                                    sessionStorage.ninth = sessionStorage.eighth;
                                    sessionStorage.eighth = sessionStorage.seventh;
                                    sessionStorage.seventh = score;
                                    sessionStorage.tenth_name = sessionStorage.ninth_name;
                                    sessionStorage.ninth_name = sessionStorage.eighth_name;
                                    sessionStorage.eighth_name = sessionStorage.seventh_name;
                                    sessionStorage.seventh_name = player_name.toUpperCase();
                                } else {
                                    if (score > sessionStorage.eighth) {
                                        sessionStorage.tenth = sessionStorage.ninth;
                                        sessionStorage.ninth = sessionStorage.eighth;
                                        sessionStorage.eighth = score;
                                        sessionStorage.tenth_name = sessionStorage.ninth_name;
                                        sessionStorage.ninth_name = sessionStorage.eighth_name;
                                        sessionStorage.eighth_name = player_name.toUpperCase();
                                    } else {
                                        if (score > sessionStorage.ninth) {
                                            sessionStorage.tenth = sessionStorage.ninth;
                                            sessionStorage.ninth = score;
                                            sessionStorage.tenth_name = sessionStorage.ninth_name;
                                            sessionStorage.ninth_name = player_name.toUpperCase();
                                        } else {
                                            if (score > sessionStorage.tenth) {
                                                sessionStorage.tenth = score;
                                                sessionStorage.tenth_name = player_name.toUpperCase();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};