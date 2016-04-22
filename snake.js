window.onload = function() {
    "use strict";
    var mycanv = document.getElementById("canvas1");
    var ctx = mycanv.getContext("2d");
    var snake_array = new Array(4);
    var protein_array = new Array("head", "A2", "A2");
	var single_array = new Array(0);
    var double_array = new Array(0);
    var collected_array = new Array(0);
    var ribosome_array = new Array("C", "G", "A", "G", "U", "U", "C", "A", "G", "U", "C", "A", "U", "G", "A", "C", "C", "U", "A", "U", "G", "C", "G", "C");
    var correct = Math.floor(Math.random() * 4) + 0;
    var direction = 0;
    var score = 0;
    var speed;
    var active = false;
    var start = true;
    var lost = false;
    var test_level = false;
    var entering_name = false;
    var how_to_page = false;
    var player_name;
    var new_protein = 0;
    var protein;
    var position = 25;
    var menu = "main";
    var menu_type = "main";
    var counter = 0;
    var codon = false;
    var start_loop;
    var end_loop;
	var success_sound = new Audio("audio/success.mp3");
	var fail_sound = new Audio("audio/fail.mp3");
    var img_A = new Image(),
        img_G = new Image(),
        img_C = new Image(),
        img_T = new Image();
    var helix = new Image();
    var helix_s = new Image();
    var ribosome = new Image();
    var snake_A = new Image(),
        snake_G = new Image(),
        snake_T = new Image(),
        snake_C = new Image(),
        snake_U = new Image();
    var black_A = new Image(),
        black_G = new Image(),
        black_T = new Image(),
        black_C = new Image(),
        black_U = new Image();
    var grey_A = new Image(),
        grey_G = new Image(),
        grey_T = new Image(),
        grey_C = new Image(),
        grey_U = new Image();
    var img_head = new Image();
    var round_A = new Image(),
        round_C = new Image(),
        round_G = new Image(),
        round_T = new Image(),
        round_black = new Image();
    var grey = new Image();
    var bond = new Image();
    var triple = new Image();
    var box = new Image();
    var arrow = new Image(),
        arrow2 = new Image(),
        arrow3 = new Image();
    var ribosome_letters = new Image();
    var helix_letters = new Image();
    var three_colour = new Image();
    var three_black = new Image();
    var helix_1 = new Image(),
        helix_2 = new Image(),
        helix_3 = new Image(),
        helix_4 = new Image(),
        helix_5 = new Image(),
        helix_6 = new Image(),
        helix_7 = new Image(),
        helix_8 = new Image(),
        helix_9 = new Image(),
        helix_10 = new Image(),
        helix_11 = new Image(),
        helix_12 = new Image();
    var cross = new Image();

    // Creates the 2-dimentional matrix for the game
    var map = new Array(60);
    for (var i = 0; i < map.length; i++) {
        map[i] = new Array(60);
    }

    initialise_images();
	create_bases();
    start_menu();

    function initialise_images() {
        cross.src = "images/cross.png";
        helix_1.src = "images/helix/1.png";
        helix_2.src = "images/helix/2.png";
        helix_3.src = "images/helix/3.png";
        helix_4.src = "images/helix/4.png";
        helix_5.src = "images/helix/5.png";
        helix_6.src = "images/helix/6.png";
        helix_7.src = "images/helix/7.png";
        helix_8.src = "images/helix/8.png";
        helix_9.src = "images/helix/9.png";
        helix_10.src = "images/helix/10.png";
        helix_11.src = "images/helix/11.png";
        helix_12.src = "images/helix/12.png";
        three_colour.src = "images/three_colour.png";
        three_black.src = "images/three_black.png";
        arrow.src = "images/arrow.png";
        arrow2.src = "images/arrow2.png";
        arrow3.src = "images/arrow3.png";
        helix_letters.src = "images/helix_letters.png";
        ribosome_letters.src = "images/ribosome_letters.png";
        box.src = "images/box.png";
        grey.src = "images/grey.jpg";
        round_black.src = "images/black.png";
        round_A.src = "images/A5.png";
        round_C.src = "images/C5.png";
        round_G.src = "images/G5.png";
        round_T.src = "images/T5.png";
        black_A.src = "images/A8.png";
        black_G.src = "images/G8.png";
        black_T.src = "images/T8.png";
        black_C.src = "images/C8.png";
        black_U.src = "images/U8.png";
        snake_A.src = "images/A7.png";
        snake_T.src = "images/T7.png";
        snake_G.src = "images/G7.png";
        snake_C.src = "images/C7.png";
        snake_U.src = "images/U7.png";
        grey_A.src = "images/A9.png";
        grey_G.src = "images/G9.png";
        grey_T.src = "images/T9.png";
        grey_C.src = "images/C9.png";
        grey_U.src = "images/U9.png";
        helix.src = "images/double-helix4.png";
        helix_s.src = "images/single-helix.png";
        ribosome.src = "images/ribosome.png";
        img_head.src = "images/head_right.png";
        bond.src = "images/bond.png";
        triple.src = "images/triple.png";
    }

    function start_menu() {
		 // document.getElementById("skip").style.visibility = "hidden";
		// document.getElementById("tutorial_1").style.visibility = "hidden";
        // document.getElementById("tutorial_2").style.visibility = "hidden";
        document.getElementById("score").style.visibility = "hidden";
        document.getElementById("r_menu").style.visibility = "visible";
        document.getElementById("s_menu").style.visibility = "visible";
        document.getElementById("main_menu").style.visibility = "visible";
        document.getElementById("lvl_one").style.visibility = "visible";
        document.getElementById("lvl_two").style.visibility = "visible";
        document.getElementById("clear_leader").style.visibility = "visible";
		var tutorial_1 = document.getElementById("tutorial_1");
		var tutorial_1_image = document.getElementById("tutorial_1_image");
		var tutorial_2 = document.getElementById("tutorial_2");
		var tutorial_2_image = document.getElementById("tutorial_2_image");
		tutorial_1.href = "tutorial/tutorial_1/index_videolb/vdbplayer.swf?volume=100&url=video/tutorial_1_finished.mp4";
		tutorial_1_image.src="tutorial/tutorial_1/index_videolb/thumbnails/tutorial_1_finished.png";
		tutorial_2.href = "tutorial/tutorial_2/index_videolb/vdbplayer.swf?volume=100&url=video/tutorial_2_finished.mp4";
		tutorial_2_image.src="tutorial/tutorial_2/index_videolb/thumbnails/tutorial_2_finished.png";
        hide_how_to();
        hide_game_over();
        hide_menus();
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        var my_gradient = ctx.createLinearGradient(0, 0, 670, 0);
        my_gradient.addColorStop(0, "darkslategrey");
        my_gradient.addColorStop(0.68, "teal");
        my_gradient.addColorStop(1, "darkslategrey");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(0, 20, mycanv.width, 475);
        ctx.strokeRect(0, 20, mycanv.width, 475);
        snake_array = new Array(4);
        protein_array = new Array("head", "A2", "A2");
        collected_array = new Array(0)
        double_array = new Array(0);
        position = 25;
        new_protein = 0;
        lost = false;
        var protein;
        img_head.src = "images/head_right.png";
        for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[0].length; y++) {
                map[x][y] = 0;
            }
        }
        menu = "main";
        document.getElementById("r_menu").onclick = replication_menu;
        document.getElementById("s_menu").onclick = synthesis_menu;
        document.getElementById("m_menu").onclick = change_menu;
		document.getElementById("skip").onclick = change_menu;
        document.getElementById("clear_leader").onclick = clear_board;
        document.getElementById("speedminus").onclick = change_speed_minus;
        document.getElementById("speedplus").onclick = change_speed_plus;
        sort_leaderboard();
        sort_leaderboard_synthesis();
    }

    function synthesis_menu() {
        document.getElementById("score").style.visibility = "hidden";
        document.getElementById("m_menu").style.visibility = "visible";
        document.getElementById("speedminus").style.visibility = "visible";
        document.getElementById("speed").style.visibility = "visible";
        document.getElementById("speedplus").style.visibility = "visible";
        document.getElementById("protein_s").style.visibility = "visible";
        document.getElementById("start_p").style.visibility = "visible";
        document.getElementById("press_s").style.visibility = "visible";
        document.getElementById("take_t").style.visibility = "visible";
        document.getElementById("press_t").style.visibility = "visible";
        document.getElementById("how_play").style.visibility = "visible";
        document.getElementById("press_h").style.visibility = "visible";
        hide_game_over();
        hide_start();
        hide_how_to();
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        draw_background_synthesis();
        draw_ribosome();
        sort_leaderboard_synthesis();
        ctx.drawImage(bond, 750, 160, mycanv.width - 790, 130);
        ctx.drawImage(bond, 750, 180, mycanv.width - 790, 160);
        ctx.drawImage(bond, 750, 215, mycanv.width - 790, 160);
        collected_array = new Array(0);
        entering_name = false;
        snake_array = new Array(4);
        protein_array = new Array("head", "A2", "A2");
        direction = 0;
        score = 0;
        check_speed();
        menu = "synthesis";
        menu_type = "first";
        how_to_page = false;
        start = false;
        if (active == true) {
            menu_type = "second";
            correct_letter();
            map = draw_snake(map);
            map = draw_letters_synthesis(map);
            game_loop_synthesis();
        }
    }

    //similar to synthesis_menu function but is caled when game has been lost, 
    //therefore to play again, some vaiables need to be redefined and the map cleared
    function restart_game_synthesis() {
        document.getElementById("m_menu").style.visibility = "visible";
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        snake_array = new Array(4);
        protein_array = new Array("head", "A2", "A2");
        collected_array = new Array(0)
        direction = 0;
        score = 0;
        check_speed();
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
            map = draw_letters_synthesis(map);
            game_loop_synthesis();
        } 
    }

    //Menu shown at start of the game, shows options and starts game 
    function replication_menu() {
        document.getElementById("score").style.visibility = "hidden";
		document.getElementById("skip").style.visibility = "hidden";
        document.getElementById("m_menu").style.visibility = "visible";
        document.getElementById("speedminus").style.visibility = "visible";
        document.getElementById("speed").style.visibility = "visible";
        document.getElementById("speedplus").style.visibility = "visible";
        document.getElementById("DNA_r").style.visibility = "visible";
        document.getElementById("start_p").style.visibility = "visible";
        document.getElementById("press_s").style.visibility = "visible";
        document.getElementById("take_t").style.visibility = "visible";
        document.getElementById("press_t").style.visibility = "visible";
        document.getElementById("how_play").style.visibility = "visible";
        document.getElementById("press_h").style.visibility = "visible";
        hide_game_over();
        hide_start();
        hide_how_to();
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        draw_background();
        sort_helix();
        draw_helix();
        sort_leaderboard();
        how_to_page = false;
        entering_name = false;
        menu = "replication";
        menu_type = "first";
        snake_array = new Array(4);
        protein_array = new Array("head", "A2", "A2");
        direction = 0;
        score = 0;
        check_speed();
        start = false;
        if (active == true) {
			create_bases();
            correct_letter();
            map = draw_snake(map);
            map = draw_letters(map);
            game_loop();
        }
    }

    //similar to replication_menu function but is caled when game has been lost, 
    //therefore to play again, some vaiables need to be redefined and the map cleared
    function restart_game() {
        document.getElementById("m_menu").style.visibility = "visible";
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        snake_array = new Array(4);
        protein_array = new Array("head", "A2", "A2");
        collected_array = new Array(0)
        direction = 0;
        score = 0;
        check_speed();
        lost = false;
        var protein;
        img_head.src = "images/head_right.png";
        for (var x = 0; x < map.length; x++) {
            for (var y = 0; y < map[0].length; y++) {
                map[x][y] = 0;
            }
        }
        if (active == true) {
			create_bases();
            new_protein = 0;
            position = 25;
            correct_letter();
            map = draw_snake(map);
            map = draw_letters(map);
            game_loop();
        } 
    }

    //Takes user to the appropriate level depending where in the game they are
    function change_menu() {
        if (menu_type == "second") {
            if (menu == "replication") {
                replication_menu();
            } else if (menu == "synthesis") {
                synthesis_menu();
            }
        } else if (menu_type == "first") {
            start_menu();
        }
    }

    function change_speed_minus() {
        if (document.getElementById("speed").innerHTML == "Fast") {
            speed = 200;
            document.getElementById("speed").innerHTML = "Average";
        } else if (document.getElementById("speed").innerHTML == "Average") {
            speed = 300;
            document.getElementById("speed").innerHTML = "Slow";
        } else if (document.getElementById("speed").innerHTML == "Cyflym") {
            speed = 200;
            document.getElementById("speed").innerHTML = "Cyfartalog";
        } else if (document.getElementById("speed").innerHTML == "Cyfartalog") {
            speed = 300;
            document.getElementById("speed").innerHTML = "Araf";
        }
    }

    function change_speed_plus() {
        if (document.getElementById("speed").innerHTML == "Slow") {
            speed = 200;
            document.getElementById("speed").innerHTML = "Average";
        } else if (document.getElementById("speed").innerHTML == "Average") {
            speed = 90;
            document.getElementById("speed").innerHTML = "Fast";
        } else if (document.getElementById("speed").innerHTML == "Araf") {
            speed = 200;
            document.getElementById("speed").innerHTML = "Cyfartalog";
        } else if (document.getElementById("speed").innerHTML == "Cyfartalog") {
            speed = 90;
            document.getElementById("speed").innerHTML = "Cyflym";
        }
    }

    function check_speed() {
        if (document.getElementById("speed").innerHTML == "Slow" || document.getElementById("speed").innerHTML == "Araf") {
            speed = 300;
        } else if (document.getElementById("speed").innerHTML == "Average" || document.getElementById("speed").innerHTML == "Cyfartalog") {
            speed = 200;
        } else if (document.getElementById("speed").innerHTML == "Fast" || document.getElementById("speed").innerHTML == "Cyflym") {
            speed = 90;
        }
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
            // } else if (e.keyCode == 76 && active == false && entering_name == false && start == false) { //L
            // if(menu != "synthesis"){
            // leader_board();
            // }
        } else if (e.keyCode == 77 && active == false && entering_name == false && start == false) { //m
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
                ctx.fillText("Please enter three letters", mycanv.width - 695, 470);
            } else if (!/^[a-zA-Z]*$/g.test(player_name)) {
                ctx.fillStyle = "#000000";
                ctx.font = "bold 24px sans-serif";
                ctx.fillText("Please enter three letters", mycanv.width - 695, 470);
            } else {
                if (menu == "replication") {
                    shift_scores();
                    document.getElementById('player').value = "";
                    replication_menu();
                } else if (menu == "synthesis") {
                    shift_scores_synthesis();
                    document.getElementById('player').value = "";
                    synthesis_menu();
                }
            }
        } else if (e.keyCode == 49 && start == true && entering_name == false && active == false && lost == false) { //1
            start = false;
            replication_menu();
        } else if (e.keyCode == 50 && entering_name == false && start == true) { //2
            synthesis_menu();
        }
        if (e.keyCode == 76 && entering_name == false && active == false && menu != "main" && menu_type == "first") { //L
            if (menu == "replication") {
                how_to_replication();
            } else {
                how_to_synthesis();
            }
        }
        if (e.keyCode == 84 && start == false && active == false && entering_name == false && lost == false && how_to_page == false) { //t
            if (menu == "replication") {
                test_level = true;
                active = true;
                start = false;
                replication_menu();
            } else if (menu == "synthesis") {
                test_level = true;
                active = true;
                start = false;
                synthesis_menu();
            }
        }
        if (e.keyCode == 84 && lost == true && active == false && entering_name == false && start == false && how_to_page == false) { //t
            if (menu == "replication") {
                test_level = true;
                active = true;
                restart_game();
            } else if (menu == "synthesis") {
                test_level = true;
                active = true;
                restart_game_synthesis();
            }
        }
        if (e.keyCode == 32) { //space 
            if (start == false && entering_name == false && active == false && lost == false && menu == "replication" && how_to_page == false) {
                active = true;
                replication_menu();
            } else if (start == false && entering_name == false && active == false && lost == false && menu == "synthesis" && how_to_page == false) {
                active = true;
                synthesis_menu();
            }
        }
        if (e.keyCode == 32) { //space
            if (lost == true && entering_name == false && active == false && menu == "replication" && how_to_page == false) {
                active = true;
                restart_game();
            } else if (lost == true && entering_name == false && active == false && menu == "synthesis" && how_to_page == false) {
                active = true;
                restart_game_synthesis();
            }
        }
    });

    //controls everything that happens once the game is active, including movement, collision detection
    //and drawing the elements of the game
    function game_loop_synthesis() {
        menu_type = "second";
        document.getElementById("score").style.visibility = "visible";
        if (score > 30 && test_level == true) {
            hide_how_to();
        } else {
            document.getElementById("reminder").style.visibility = "visible";
            document.getElementById("A").style.visibility = "visible";
            document.getElementById("bond").style.visibility = "visible";
            document.getElementById("U").style.visibility = "visible";
            document.getElementById("C").style.visibility = "visible";
            document.getElementById("triple").style.visibility = "visible";
            document.getElementById("G").style.visibility = "visible";
        }
        hide_game_over();
        hide_menus();
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        ctx.fillStyle = "#000000";
        ctx.font = "bold 24px sans-serif";
        ctx.fillText(score + " ", 90, 17);
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
                        if (score >= sessionStorage.tenth_2 && score > 0) {
                            enter_name_synthesis();
                        } else {
                            game_over_synthesis();
                        }
                    } else {
                        game_over_synthesis();
                    }
                    return;
                }
                if (map[snake_array[0].x][snake_array[0].y] === 1) {
                    if (test_level == true) {
                        if (score >= sessionStorage.tenth_2 && score > 0) {
                            enter_name_synthesis();
                        } else {
                            game_over_synthesis();
                        }
                    } else {
                        game_over_synthesis();
                    }

                    return;
                }
                if (map[snake_array[0].x][snake_array[0].y] === 2 || map[snake_array[0].x][snake_array[0].y] === 3 || map[snake_array[0].x][snake_array[0].y] === 4 || map[snake_array[0].x][snake_array[0].y] === 5 || map[snake_array[0].x][snake_array[0].y] === 22 || map[snake_array[0].x][snake_array[0].y] === 33 || map[snake_array[0].x][snake_array[0].y] === 44 || map[snake_array[0].x][snake_array[0].y] === 55) {
                    if (map[snake_array[0].x][snake_array[0].y] === 2) {
                        protein_array.splice(1, 0, "A2");
                        collected_array.push("A_not_collected");
						fail_sound.play();
                        codon = false;
                        score = score - 5;
                        counter = counter + 1;

                    } else if (map[snake_array[0].x][snake_array[0].y] === 3) {
                        protein_array.splice(1, 0, "G2");
                        collected_array.push("G_not_collected");
						fail_sound.play();
                        codon = false;
                        score = score - 5;
                        counter = counter + 1;
                    } else if (map[snake_array[0].x][snake_array[0].y] === 4) {
                        protein_array.splice(1, 0, "U2");
                        collected_array.push("U_not_collected");
						fail_sound.play();
                        codon = false;
                        score = score - 5;
                        counter = counter + 1;
                    } else if (map[snake_array[0].x][snake_array[0].y] === 5) {
                        protein_array.splice(1, 0, "C2");
                        collected_array.push("C_not_collected");
						fail_sound.play();
                        codon = false;
                        score = score - 5;
                        counter = counter + 1;
                    } else if (map[snake_array[0].x][snake_array[0].y] === 22) {
                        protein_array.splice(1, 0, "A");
                        collected_array.push("A_collected");
						success_sound.play();
                        codon = true;
                        score = score + 5;
                        counter = counter + 1;
                    } else if (map[snake_array[0].x][snake_array[0].y] === 33) {
                        protein_array.splice(1, 0, "G");
                        collected_array.push("G_collected");
						success_sound.play();
                        codon = true;
                        score = score + 5;
                        counter = counter + 1;

                    } else if (map[snake_array[0].x][snake_array[0].y] === 44) {
                        protein_array.splice(1, 0, "U");
                        collected_array.push("U_collected");
						success_sound.play();
                        codon = true;
                        score = score + 5;
                        counter = counter + 1;

                    } else if (map[snake_array[0].x][snake_array[0].y] === 55) {
                        protein_array.splice(1, 0, "C");
                        collected_array.push("C_collected");
						success_sound.play();
                        codon = true;
                        score = score + 5;
                        counter = counter + 1;
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
                    new_protein = new_protein + 3;
                    if (collected_array[7] != undefined) {
                        collected_array = new Array(0);
                        new_protein = 0;
                    }
                map[snake_array[0].x][snake_array[0].y] = 1;
                    correct_letter();
                    draw_letters_synthesis(map);
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
                            } else if (protein_array[j] == "U") {
                                ctx.drawImage(round_T, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "A") {
                                ctx.drawImage(round_A, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "A2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "G2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "U2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            } else if (protein_array[j] == "C2") {
                                ctx.drawImage(round_black, x * 25, y * 25 + 20, 25, 25);
                            }
                        }
                    }
                } else if (map[x][y] === 2) {
                    ctx.drawImage(black_A, x * 25, y * 25 + 20, 25, 25);
                } else if (map[x][y] === 3) {
                    ctx.drawImage(black_G, x * 25, y * 25 + 20, 25, 25);
                } else if (map[x][y] === 4) {
                    ctx.drawImage(black_U, x * 25, y * 25 + 20, 25, 25);
                } else if (map[x][y] === 5) {
                    ctx.drawImage(black_C, x * 25, y * 25 + 20, 25, 25);
                } else if (map[x][y] === 22) {
                    if (test_level == true) {
                        ctx.drawImage(black_A, x * 25, y * 25 + 20, 25, 25);
                    } else {
                        ctx.drawImage(snake_A, x * 25, y * 25 + 20, 25, 25);
                    }
                } else if (map[x][y] === 33) {
                    if (test_level == true) {
                        ctx.drawImage(black_G, x * 25, y * 25 + 20, 25, 25);
                    } else {
                        ctx.drawImage(snake_G, x * 25, y * 25 + 20, 25, 25);
                    }
                } else if (map[x][y] === 44) {
                    if (test_level == true) {
                        ctx.drawImage(black_U, x * 25, y * 25 + 20, 25, 25);
                    } else {
                        ctx.drawImage(snake_U, x * 25, y * 25 + 20, 25, 25);
                    }
                } else if (map[x][y] === 55) {
                    if (test_level == true) {
                        ctx.drawImage(black_C, x * 25, y * 25 + 20, 25, 25);
                    } else {
                        ctx.drawImage(snake_C, x * 25, y * 25 + 20, 25, 25);
                    }
                }
            }
        }
        if (active) {
            if (speed > 40) {
                speed = speed - 0.025;
            }
            setTimeout(game_loop_synthesis, (speed));
        }
    }

    function game_loop() {
        menu_type = "second";
        document.getElementById("score").style.visibility = "visible";
        if (score > 30 && test_level == true) {
            hide_how_to();
        } else {
            document.getElementById("reminder").style.visibility = "visible";
            document.getElementById("A").style.visibility = "visible";
            document.getElementById("bond").style.visibility = "visible";
            document.getElementById("T").style.visibility = "visible";
            document.getElementById("C").style.visibility = "visible";
            document.getElementById("triple").style.visibility = "visible";
            document.getElementById("G").style.visibility = "visible";
        }
        hide_game_over();
        hide_menus();
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        ctx.fillStyle = "#000000";
        ctx.font = "bold 24px sans-serif";
        ctx.fillText(score + " ", 90, 17);
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
                        if (score >= sessionStorage.tenth && score > 0) {
                            enter_name();
                        } else {
                            game_over();
                        }
                    } else {
                        game_over();
                    }
                    return;
                }

                if (map[snake_array[0].x][snake_array[0].y] === 1) {
                    if (test_level == true && menu == "replication") {
                        if (score >= sessionStorage.tenth && score > 0) {
                            enter_name();
                        } else {
                            game_over();
                        }
                    } else {
                        game_over();
                    }
                    return;
                }

                if (map[snake_array[0].x][snake_array[0].y] === 2 || map[snake_array[0].x][snake_array[0].y] === 3 || map[snake_array[0].x][snake_array[0].y] === 4 || map[snake_array[0].x][snake_array[0].y] === 5) {
                    if (map[snake_array[0].x][snake_array[0].y] === 2) {
                        if (double_array[new_protein] != "A") {
                            protein_array.splice(1, 0, "A2");
                            collected_array.push("A_not_collected");
							fail_sound.play();
                        } else {
                            protein_array.splice(1, 0, "A");
                            collected_array.push("A_collected");
							success_sound.play();
                        }
                        if (protein == 0) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
                        start_loop = start_loop + 1;
                        end_loop = end_loop - 1;
                    } else if (map[snake_array[0].x][snake_array[0].y] === 3) {
                        if (double_array[new_protein] != "G") {
                            protein_array.splice(1, 0, "G2");
                            collected_array.push("G_not_collected");
							fail_sound.play();
                        } else {
                            protein_array.splice(1, 0, "G");
                            collected_array.push("G_collected");
							success_sound.play();
                        }
                        if (protein == 1) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
                        start_loop = start_loop + 1;
                        end_loop = end_loop - 1;
                    } else if (map[snake_array[0].x][snake_array[0].y] === 4) {
                        if (double_array[new_protein] != "T") {
                            protein_array.splice(1, 0, "T2");
                            collected_array.push("T_not_collected");
							fail_sound.play();
                        } else {
                            protein_array.splice(1, 0, "T");
                            collected_array.push("T_collected");
							success_sound.play();
                        }
                        if (protein == 2) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
                        start_loop = start_loop + 1;
                        end_loop = end_loop - 1;
                    } else if (map[snake_array[0].x][snake_array[0].y] === 5) {
                        if (double_array[new_protein] != "C") {
                            protein_array.splice(1, 0, "C2");
                            collected_array.push("C_not_collected");
							fail_sound.play();
                        } else {
                            protein_array.splice(1, 0, "C");
                            collected_array.push("C_collected");
							success_sound.play();
                        }
                        if (protein == 3) {
                            score = score + 5;
                        } else {
                            score = score - 5;
                        }
                        start_loop = start_loop + 1;
                        end_loop = end_loop - 1;
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
                map[snake_array[0].x][snake_array[0].y] = 1;
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
        draw_helix_s();
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
            if (speed > 50) {
                speed = speed - 0.08;
            }
            setTimeout(game_loop, (speed));
        }
    }

    //Called if player has lost the game and the score is high enough to be features on the leaderboard
    //Allows player to enter their name and saves it to a variable
    function enter_name() {
        document.getElementById("over").style.visibility = "visible";
        document.getElementById("over_leader").style.visibility = "visible";
        document.getElementById("enter3").style.visibility = "visible";
        document.getElementById("press_e").style.visibility = "visible";
        hide_how_to();
        menu_type = "second";
        active = false;
        entering_name = true;
        lost = true;
        test_level = false;
        draw_background();
        draw_helix_s();
        sort_helix();
        document.getElementById("player").style.visibility = "visible";
        document.getElementById("player").focus();
    }

    function enter_name_synthesis() {
        document.getElementById("over").style.visibility = "visible";
        document.getElementById("over_leader").style.visibility = "visible";
        document.getElementById("enter3").style.visibility = "visible";
        document.getElementById("press_e").style.visibility = "visible";
        hide_how_to();
        menu_type = "second";
        active = false;
        entering_name = true;
        lost = true;
        test_level = false;
        draw_background_synthesis();
        draw_ribosome();
        document.getElementById("player").style.visibility = "visible";
        document.getElementById("player").focus();
    }

    //Called if the player has lost the game and the score is too low to feature on the leaderboard
    function game_over() {
        menu_type = "second";
        document.getElementById("m_menu").style.visibility = "visible";
        document.getElementById("over").style.visibility = "visible";
        document.getElementById("start_p_over").style.visibility = "visible";
        document.getElementById("press_s_over").style.visibility = "visible";
        document.getElementById("take_t_over").style.visibility = "visible";
        document.getElementById("press_t_over").style.visibility = "visible";
        hide_how_to();
        test_level = false;
        active = false;
        lost = true;
        draw_background();
        draw_helix_s();
        sort_helix();
    }

    function game_over_synthesis() {
        menu_type = "second";
        document.getElementById("m_menu").style.visibility = "visible";
        document.getElementById("over").style.visibility = "visible";
        document.getElementById("start_p_over").style.visibility = "visible";
        document.getElementById("press_s_over").style.visibility = "visible";
        document.getElementById("take_t_over").style.visibility = "visible";
        document.getElementById("press_t_over").style.visibility = "visible";
        hide_how_to();
        test_level = false;
        active = false;
        lost = true;
        draw_background_synthesis();
        draw_ribosome();
        sort_ribosome();
    }

    //This page explains to the user how to play the game and what its all about
    function how_to_replication() {
        menu_type = "second";
        how_to_page = true;
        document.getElementById("para_1").style.visibility = "visible";
        document.getElementById("para_2").style.visibility = "visible";
        document.getElementById("para_3").style.visibility = "visible";
        document.getElementById("para_4").style.visibility = "visible";
        document.getElementById("start").style.visibility = "visible";
        hide_menus();
        document.getElementById("m_menu").style.visibility = "visible";
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        var my_gradient = ctx.createLinearGradient(0, 0, 670, 0);
        my_gradient.addColorStop(0, "darkslategrey");
        my_gradient.addColorStop(0.68, "teal");
        my_gradient.addColorStop(1, "darkslategrey");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(0, 20, mycanv.width, 475);
        ctx.strokeRect(0, 20, mycanv.width, 475);
        ctx.drawImage(bond, 160, 310, 100, 130);
        ctx.drawImage(triple, 310, 307, 100, 130);
        ctx.drawImage(snake_A, 150, 360, 25, 25);
        ctx.drawImage(snake_T, 240, 360, 25, 25);
        ctx.drawImage(snake_C, 300, 360, 25, 25);
        ctx.drawImage(snake_G, 390, 360, 25, 25);
        ctx.drawImage(arrow, 685, 50, 45, 20);
        ctx.drawImage(helix_letters, 730, 50, mycanv.width - 750, 335);
        document.getElementById("how_to").style.visibility = "visible";
    }

    function how_to_synthesis() {
        how_to_page = true;
        menu_type = "second";
        document.getElementById("para_5").style.visibility = "visible";
        document.getElementById("para_6").style.visibility = "visible";
        document.getElementById("para_7").style.visibility = "visible";
        document.getElementById("collect").style.visibility = "visible";
        document.getElementById("a_collect").style.visibility = "visible";
        document.getElementById("next").style.visibility = "visible";
        hide_menus();
        document.getElementById("m_menu").style.visibility = "visible";
        ctx.clearRect(0, 0, mycanv.width, mycanv.height);
        var my_gradient = ctx.createLinearGradient(0, 0, 670, 0);
        my_gradient.addColorStop(0, "darkslategrey");
        my_gradient.addColorStop(0.68, "teal");
        my_gradient.addColorStop(1, "darkslategrey");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(0, 20, mycanv.width, 475);
        ctx.strokeRect(0, 20, mycanv.width, 475);
        ctx.drawImage(snake_T, 250, 190, 25, 25);
        ctx.drawImage(snake_U, 390, 190, 25, 25);
        ctx.drawImage(arrow, 300, 186, 75, 30);
        ctx.drawImage(three_colour, 300, 465, 75, 25);
        ctx.drawImage(three_black, 450, 465, 75, 25);
        ctx.drawImage(ribosome_letters, 730, 70, mycanv.width - 750, 385);
        ctx.drawImage(arrow2, 680, 216, 65, 40);
        ctx.drawImage(arrow2, 760, 45, 65, 40);
        ctx.drawImage(arrow3, 760, 440, 60, 50);
        document.getElementById("how_to").style.visibility = "visible";
    }

    //Gives each part of the snake an X and Y coordinate
    function draw_snake(map) {
    var snake_x = 5,
        snake_y = 5;
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
    function draw_letters_synthesis(map) {
        var first_x = Math.floor(Math.random() * 25) + 0;
        var first_y = Math.floor(Math.random() * 18) + 0;
        var second_x = Math.floor(Math.random() * 25) + 0;
        var second_y = Math.floor(Math.random() * 18) + 0;
        var third_x = Math.floor(Math.random() * 25) + 0;
        var third_y = Math.floor(Math.random() * 18) + 0;
        var fourth_x = Math.floor(Math.random() * 25) + 0;
        var fourth_y = Math.floor(Math.random() * 18) + 0;
        var first_correct = false;
        var second_correct = false;
        var third_correct = false;
        var fourth_correct = false;

        while (first_correct == false) {
            if (map[first_x][first_y] == 0 && map[first_x + 1][first_y] == 0 && map[first_x + 2][first_y] == 0) {
                if (ribosome_array[new_protein] == "U") {
                    map[first_x][first_y] = 22;
                } else if (ribosome_array[new_protein] == "C") {
                    map[first_x][first_y] = 33;
                } else if (ribosome_array[new_protein] == "A") {
                    map[first_x][first_y] = 44;
                } else if (ribosome_array[new_protein] == "G") {
                    map[first_x][first_y] = 55;
                }
                if (ribosome_array[new_protein + 1] == "U") {
                    map[first_x + 1][first_y] = 22;
                } else if (ribosome_array[new_protein + 1] == "C") {
                    map[first_x + 1][first_y] = 33;
                } else if (ribosome_array[new_protein + 1] == "A") {
                    map[first_x + 1][first_y] = 44;
                } else if (ribosome_array[new_protein + 1] == "G") {
                    map[first_x + 1][first_y] = 55;
                }
                if (ribosome_array[new_protein + 2] == "U") {
                    map[first_x + 2][first_y] = 22;
                } else if (ribosome_array[new_protein + 2] == "C") {
                    map[first_x + 2][first_y] = 33;
                } else if (ribosome_array[new_protein + 2] == "A") {
                    map[first_x + 2][first_y] = 44;
                } else if (ribosome_array[new_protein + 2] == "G") {
                    map[first_x + 2][first_y] = 55;
                }
                first_correct = true;
            } else {
                first_x = Math.floor(Math.random() * 25) + 0;
                first_y = Math.floor(Math.random() * 18) + 0;
                first_correct = false;
            }
        }

        while (second_correct == false) {
            if (map[second_x][second_y] == 0 && map[second_x + 1][second_y] == 0 && map[second_x + 2][second_y] == 0) {
                map[second_x][second_y] = Math.floor(Math.random() * 4) + 2;
                map[second_x + 1][second_y] = Math.floor(Math.random() * 4) + 2;
                map[second_x + 2][second_y] = Math.floor(Math.random() * 4) + 2;
                second_correct = true;
            } else {
                second_x = Math.floor(Math.random() * 25) + 0;
                second_y = Math.floor(Math.random() * 18) + 0;
                second_correct = false;
            }
        }

        while (third_correct == false) {
            if (map[third_x][third_y] == 0 && map[third_x + 1][third_y] == 0 && map[third_x + 2][third_y] == 0) {
                map[third_x][third_y] = Math.floor(Math.random() * 4) + 2;
                map[third_x + 1][third_y] = Math.floor(Math.random() * 4) + 2;
                map[third_x + 2][third_y] = Math.floor(Math.random() * 4) + 2;
                third_correct = true;
            } else {
                third_x = Math.floor(Math.random() * 25) + 0;
                third_y = Math.floor(Math.random() * 18) + 0;
                third_correct = false;
            }
        }

        while (fourth_correct == false) {
            if (map[fourth_x][fourth_y] == 0 && map[fourth_x + 1][fourth_y] == 0 && map[fourth_x + 2][fourth_y] == 0) {
                map[fourth_x][fourth_y] = Math.floor(Math.random() * 4) + 2;
                map[fourth_x + 1][fourth_y] = Math.floor(Math.random() * 4) + 2;
                map[fourth_x + 2][fourth_y] = Math.floor(Math.random() * 4) + 2;
                fourth_correct = true;
            } else {
                fourth_x = Math.floor(Math.random() * 25) + 0;
                fourth_y = Math.floor(Math.random() * 18) + 0;
                fourth_correct = false;
            }
        }
        return map;
    }

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

        while (map[A_x][A_y] == 1 || map[A_x][A_y] == 2 || map[A_x][A_y] == 3 || map[A_x][A_y] == 4 || map[A_x][A_y] == 5) {
            A_x = Math.floor(Math.random() * 27) + 0;
            A_y = Math.floor(Math.random() * 18) + 0;
        } 
		map[A_x][A_y] = 2;
		
        while (map[G_x][G_y] == 1 || map[G_x][G_y] == 2 || map[G_x][G_y] == 3 || map[G_x][G_y] == 4 || map[G_x][G_y] == 5) {
            G_x = Math.floor(Math.random() * 27) + 0;
            G_y = Math.floor(Math.random() * 18) + 0;
        }
        map[G_x][G_y] = 3;
		
        while (map[T_x][T_y] == 1 || map[T_x][T_y] == 2 || map[T_x][T_y] == 3 || map[T_x][T_y] == 4 || map[T_x][T_y] == 5) {
            T_x = Math.floor(Math.random() * 27) + 0;
            T_y = Math.floor(Math.random() * 18) + 0;
        }
        map[T_x][T_y] = 4;
				
        while (map[C_x][C_y] == 1 || map[C_x][C_y] == 2 || map[C_x][C_y] == 3 || map[C_x][C_y] == 4 || map[C_x][C_y] == 5) {
                C_x = Math.floor(Math.random() * 27) + 0;
                C_y = Math.floor(Math.random() * 18) + 0;
        }
        map[C_x][C_y] = 5;

        return map;
    }

    //draws the background of the canvas and determines if the browser is able to handle session storage.
    function draw_background() {
        var my_gradient = ctx.createLinearGradient(0, 0, 670, 0);
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
        var my_gradient = ctx.createLinearGradient(0, 0, 670, 0);
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
    function draw_ribosome() {
        var my_gradient = ctx.createLinearGradient(0, 0, 1600, 0);
        my_gradient.addColorStop(0.44, "darkred");
        my_gradient.addColorStop(0.5, "darkslategrey");
        my_gradient.addColorStop(0.55, "darkred");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(700, 20, mycanv.width - 700, 475);
        ctx.drawImage(ribosome, 708, 160, mycanv.width - 690, 200);
        ctx.drawImage(box, 825, 34, 55, 130);
        //ctx.drawImage(box, 710, 190, 55, 130);
        ctx.drawImage(box, 825, 352, 55, 130);
    }

    function sort_ribosome() {
        var start = 0;
        var end = 3;
        var start2 = 0;
        var end2 = 3;
        var start3 = 3;
        var end3 = 6;
        if (collected_array[0] == undefined) {
            start = 21;
            end = 24;
            start2 = 0;
            end2 = 3;
            start3 = 3;
            end3 = 6;
        } else if (collected_array[1] == undefined) {
            start = 0;
            end = 3;
            start2 = 3;
            end2 = 6;
            start3 = 6;
            end3 = 9;
        } else if (collected_array[2] == undefined) {
            start = 3;
            end = 6;
            start2 = 6;
            end2 = 9;
            start3 = 9;
            end3 = 12;
        } else if (collected_array[3] == undefined) {
            start = 6;
            end = 9;
            start2 = 9;
            end2 = 12;
            start3 = 12;
            end3 = 15;
        } else if (collected_array[4] == undefined) {
            start = 9;
            end = 12;
            start2 = 12;
            end2 = 15;
            start3 = 15;
            end3 = 18;
        } else if (collected_array[5] == undefined) {
            start = 12;
            end = 15;
            start2 = 15;
            end2 = 18;
            start3 = 18;
            end3 = 21;
        } else if (collected_array[6] == undefined) {
            start = 15;
            end = 18;
            start2 = 18;
            end2 = 21;
            start3 = 21;
            end3 = 24;
        } else if (collected_array[7] == undefined) {
            start = 18;
            end = 21;
            start2 = 21;
            end2 = 24;
            start3 = 0;
            end3 = 3;
        }
        if (collected_array[7] != undefined) {
            collected_array = new Array(0);
            counter = 0;
            new_protein = 0;
            start = 21;
            end = 24;
            start2 = 0;
            end2 = 3;
            start3 = 3;
            end3 = 6;
        }

        var y = 52;
        for (var i = start; i < end; i++) {
            if (ribosome_array[i] == "C") {
                if (codon == true) {
                    ctx.drawImage(snake_C, 840, y, 25, 25);
                } else {
                    ctx.drawImage(black_C, 840, y, 25, 25);
                }
            }
            if (ribosome_array[i] == "G") {
                if (codon == true) {
                    ctx.drawImage(snake_G, 840, y, 25, 25);
                } else {
                    ctx.drawImage(black_G, 840, y, 25, 25);
                }
            }
            if (ribosome_array[i] == "U") {
                if (codon == true) {
                    ctx.drawImage(snake_U, 840, y, 25, 25);
                } else {
                    ctx.drawImage(black_U, 840, y, 25, 25);
                }
            }
            if (ribosome_array[i] == "A") {
                if (codon == true) {
                    ctx.drawImage(snake_A, 840, y, 25, 25);
                } else {
                    ctx.drawImage(black_A, 840, y, 25, 25);
                }
            }
            y = y + 35;
        }

        var y = 209;
        for (var i = start2; i < end2; i++) {
            if (ribosome_array[i] == "C") {
                ctx.drawImage(triple, 750, y - 68, mycanv.width - 790, 160);
                if (test_level == true) {
                    ctx.drawImage(grey, 730, y, 25, 25);
                } else {
                    ctx.drawImage(snake_G, 730, y, 25, 25);
                }
                ctx.drawImage(snake_C, 840, y, 25, 25);
            }
            if (ribosome_array[i] == "G") {
                ctx.drawImage(triple, 750, y - 68, mycanv.width - 790, 160);
                if (test_level == true) {
                    ctx.drawImage(grey, 730, y, 25, 25);
                } else {
                    ctx.drawImage(snake_C, 730, y, 25, 25);
                }
                ctx.drawImage(snake_G, 840, y, 25, 25);
            }
            if (ribosome_array[i] == "U") {
                ctx.drawImage(bond, 750, y - 63, mycanv.width - 790, 160);
                if (test_level == true) {
                    ctx.drawImage(grey, 730, y, 25, 25);
                } else {
                    ctx.drawImage(snake_A, 730, y, 25, 25);
                }
                ctx.drawImage(snake_U, 840, y, 25, 25);
            }
            if (ribosome_array[i] == "A") {
                ctx.drawImage(bond, 750, y - 63, mycanv.width - 790, 160);
                if (test_level == true) {
                    ctx.drawImage(grey, 730, y, 25, 25);
                } else {
                    ctx.drawImage(snake_U, 730, y, 25, 25);
                }
                ctx.drawImage(snake_A, 840, y, 25, 25);
            }
            y = y + 35;
        }

        var y = 370;
        for (var i = start3; i < end3; i++) {
            if (ribosome_array[i] == "C") {
                if (test_level == true) {
                    ctx.drawImage(grey, 840, y, 25, 25);
                } else {
                    ctx.drawImage(grey_C, 840, y, 25, 25);
                }
            }
            if (ribosome_array[i] == "G") {
                if (test_level == true) {
                    ctx.drawImage(grey, 840, y, 25, 25);
                } else {
                    ctx.drawImage(grey_G, 840, y, 25, 25);
                }
            }
            if (ribosome_array[i] == "U") {
                if (test_level == true) {
                    ctx.drawImage(grey, 840, y, 25, 25);
                } else {
                    ctx.drawImage(grey_U, 840, y, 25, 25);
                }
            }
            if (ribosome_array[i] == "A") {
                if (test_level == true) {
                    ctx.drawImage(grey, 840, y, 25, 25);
                } else {
                    ctx.drawImage(grey_A, 840, y, 25, 25);
                }
            }
            y = y + 35;
        }
    }

    //draws the background gradient and helix image level 1
    function draw_helix() {
        var my_gradient = ctx.createLinearGradient(0, 0, 1600, 0);
        my_gradient.addColorStop(0.44, "darkred");
        my_gradient.addColorStop(0.5, "darkslategrey");
        my_gradient.addColorStop(0.55, "darkred");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(700, 20, mycanv.width - 700, 475);
        ctx.drawImage(helix, 740, 20, mycanv.width - 780, 475);
    }

    //draws the background gradient and helix image level 1
    function draw_helix_s() {
        var my_gradient = ctx.createLinearGradient(0, 0, 1600, 0);
        my_gradient.addColorStop(0.44, "darkred");
        my_gradient.addColorStop(0.5, "darkslategrey");
        my_gradient.addColorStop(0.55, "darkred");
        ctx.fillStyle = my_gradient;
        ctx.fillRect(700, 20, mycanv.width - 700, 475);
        ctx.drawImage(helix_s, 740, 20, mycanv.width - 780, 475);
    }

	function create_bases(){
		var helix = Math.floor(Math.random() * 6) + 1;
		if (helix == 1){
			single_array = new Array("C", "G", "A", "G", "T", "T", "C", "A", "G", "T", "C", "A", "T", "G", "A", "C", "C", "T", "A", "T", "G", "C", "G", "A");
		} else if (helix == 2){
			single_array = new Array("G", "C", "C", "A", "G", "G", "T", "G", "T", "T", "C", "T", "G", "A", "C", "T", "C", "C", "C", "A", "G", "C", "G", "T");
        } else if (helix == 3){
			single_array = new Array("C", "G", "A", "G", "A", "T", "C", "A", "T", "G", "C", "T", "A", "C", "T", "G", "C", "A", "G", "T", "C", "T", "A", "G");
		} else if (helix == 4){	
			single_array = new Array("T", "T", "G", "C", "T", "G", "A", "T", "A", "G", "G", "T", "G", "G", "C", "C", "A", "T", "C", "T", "C", "T", "G", "G");
		} else if (helix == 5){
			single_array = new Array("A", "T", "A", "G", "C", "C", "A", "G", "T", "A", "G", "T", "A", "T", "T", "C", "G", "A", "T", "G", "T", "A", "T", "G");
		} else if (helix == 6){
			single_array = new Array("A", "T", "T", "C", "A", "G", "C", "A", "G", "T", "G", "C", "T", "G", "T", "C", "T", "G", "G", "C", "A", "T", "T", "C");
	    }
		
		for (var j = 0; j < 58; j++){
			 helix = Math.floor(Math.random() * 4) + 1;
			 if (helix == 1){
				 single_array.push("A");
			} else if (helix == 2){
				single_array.push("T");
			} else if (helix == 3){
				single_array.push("C");
			} else if (helix == 4){	
				single_array.push("G");
			 }
		}
		double_array = new Array();
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
        }
	}
	
    //Creates the arrays to coordinate the letters of the helix to the letters on the board
    function sort_helix() {	
        if (collected_array[6] == undefined) {
            start_loop = 0;
            end_loop = 12;
        }

        // if (collected_array[23] != undefined) {
			// collected_array = new Array(0);
			// start_loop = 0;
			// end_loop = 12;
			// new_protein = 0;
        // }
        var y = 25;
        for (var j = start_loop; j < double_array.length - end_loop; j++) {
            if (double_array[j] == "C") {
                if (test_level == true) {
                    ctx.drawImage(grey, 710, y, 25, 25);
                } else {
                    ctx.drawImage(grey_C, 710, y, 25, 25);
                }
                if (collected_array[j] == "C_collected") {
                    ctx.drawImage(snake_C, 710, y, 25, 25);
                    build_helix(y);
                } else if (collected_array[j] != "C_collected" && collected_array[j] != undefined) {
                    ctx.drawImage(black_C, 710, y, 25, 25);
                    draw_cross(y);
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
                    build_helix(y);
                } else if (collected_array[j] != "G_collected" && collected_array[j] != undefined) {
                    ctx.drawImage(black_G, 710, y, 25, 25);
                    draw_cross(y);
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
                    build_helix(y);
                } else if (collected_array[j] != "A_collected" && collected_array[j] != undefined) {
                    ctx.drawImage(black_A, 710, y, 25, 25);
                    draw_cross(y);
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
                    build_helix(y);
                } else if (collected_array[j] != "T_collected" && collected_array[j] != undefined) {
                    ctx.drawImage(black_T, 710, y, 25, 25);
                    draw_cross(y);
                }
                ctx.drawImage(snake_A, 865, y, 25, 25);
            }
            y = y + 40;
        }
    }

    function draw_cross(y) {
        if (y == 25) {
            ctx.drawImage(cross, 745, 25, 25, 25);
        } else if (y == 65) {
            ctx.drawImage(cross, 740, 65, 25, 25);
        } else if (y == 105) {
            ctx.drawImage(cross, 755, 105, 25, 25);
        } else if (y == 145) {
            ctx.drawImage(cross, 810, 145, 25, 25);
        } else if (y == 185) {
            ctx.drawImage(cross, 820, 185, 25, 25);
        } else if (y == 225) {
            ctx.drawImage(cross, 830, 225, 25, 25);
        } else if (y == 265) {
            ctx.drawImage(cross, 820, 265, 25, 25);
        } else if (y == 305) {
            ctx.drawImage(cross, 810, 305, 25, 25);
        } else if (y == 345) {
            ctx.drawImage(cross, 755, 345, 25, 25);
        } else if (y == 385) {
            ctx.drawImage(cross, 750, 385, 25, 25);
        } else if (y == 425) {
            ctx.drawImage(cross, 740, 425, 25, 25);
        } else if (y == 465) {
            ctx.drawImage(cross, 755, 465, 25, 25);
        }
    }

    function build_helix(y) {
        if (y == 25) {
            ctx.drawImage(helix_1, 740, 20, 60, 32);
        } else if (y == 65) {
            ctx.drawImage(helix_2, 740, 52, 60, 40);
        } else if (y == 105) {
            ctx.drawImage(helix_3, 740, 92, 60, 46);
        } else if (y == 145) {
            ctx.drawImage(helix_4, 800, 138, 59, 38);
        } else if (y == 185) {
            ctx.drawImage(helix_5, 800, 175, 59, 40);
        } else if (y == 225) {
            ctx.drawImage(helix_6, 800, 215, 59, 41.5);
        } else if (y == 265) {
            ctx.drawImage(helix_7, 800, 256, 59, 40);
        } else if (y == 305) {
            ctx.drawImage(helix_8, 800, 295, 59, 39);
        } else if (y == 345) {
            ctx.drawImage(helix_9, 740, 334, 60, 42);
        } else if (y == 385) {
            ctx.drawImage(helix_10, 740, 376, 60, 44);
        } else if (y == 425) {
            ctx.drawImage(helix_11, 740, 419, 60, 44);
        } else if (y == 465) {
            ctx.drawImage(helix_12, 740, 463, 60, 32);
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

    function clear_board() {
        sessionStorage.highscore = " ";
        sessionStorage.highscore_name = " ";
        sessionStorage.second = " ";
        sessionStorage.second_name = " ";
        sessionStorage.third = " ";
        sessionStorage.third_name = " ";
        sessionStorage.fourth = " ";
        sessionStorage.fourth_name = " ";
        sessionStorage.fifth = " ";
        sessionStorage.fifth_name = " ";
        sessionStorage.sixth = " ";
        sessionStorage.sixth_name = " ";
        sessionStorage.seventh = " ";
        sessionStorage.seventh_name = " ";
        sessionStorage.eighth = " ";
        sessionStorage.eighth_name = " ";
        sessionStorage.ninth = " ";
        sessionStorage.ninth_name = " ";
        sessionStorage.tenth = " ";
        sessionStorage.tenth_name = " ";
        sessionStorage.highscore_2 = " ";
        sessionStorage.highscore_name_2 = " ";
        sessionStorage.second_2 = " ";
        sessionStorage.second_name_2 = " ";
        sessionStorage.third_2 = " ";
        sessionStorage.third_name_2 = " ";
        sessionStorage.fourth_2 = " ";
        sessionStorage.fourth_name_2 = " ";
        sessionStorage.fifth_2 = " ";
        sessionStorage.fifth_name_2 = " ";
        sessionStorage.sixth_2 = " ";
        sessionStorage.sixth_name_2 = " ";
        sessionStorage.seventh_2 = " ";
        sessionStorage.seventh_name_2 = " ";
        sessionStorage.eighth_2 = " ";
        sessionStorage.eighth_name_2 = " ";
        sessionStorage.ninth_2 = " ";
        sessionStorage.ninth_name_2 = " ";
        sessionStorage.tenth_2 = " ";
        sessionStorage.tenth_name_2 = " ";
        sort_leaderboard();
        sort_leaderboard_synthesis();
    }

    //This changes the letters so that only one is coloured and the rest are black.
    //This is currently random but in time will be in the order of a gene.
    function correct_letter() {
        img_A.src = "images/A8.png";
        img_T.src = "images/T8.png";
        img_G.src = "images/G8.png";
        img_C.src = "images/C8.png";
       // if (menu == "replication") {
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
                    img_A.src = "images/A7.png";
                    img_T.src = "images/T8.png";
                    img_G.src = "images/G8.png";
                    img_C.src = "images/C8.png";
                    protein = 0;
                } else if (double_array[new_protein] == "G") {
                    img_A.src = "images/A8.png";
                    img_T.src = "images/T8.png";
                    img_G.src = "images/G7.png";
                    img_C.src = "images/C8.png";
                    protein = 1;
                } else if (double_array[new_protein] == "T") {
                    img_A.src = "images/A8.png";
                    img_T.src = "images/T7.png";
                    img_G.src = "images/G8.png";
                    img_C.src = "images/C8.png";
                    protein = 2;
                } else if (double_array[new_protein] == "C") {
                    img_A.src = "images/A8.png";
                    img_T.src = "images/T8.png";
                    img_G.src = "images/G8.png";
                    img_C.src = "images/C7.png";
                    protein = 3;
                }
            }
      //  }
    }

    //The functions below hide text depending on where in the game the user is
    function hide_how_to() {
        document.getElementById("player").style.visibility = "hidden";
        document.getElementById("how_to").style.visibility = "hidden";
        document.getElementById("para_1").style.visibility = "hidden";
        document.getElementById("para_2").style.visibility = "hidden";
        document.getElementById("para_3").style.visibility = "hidden";
        document.getElementById("para_4").style.visibility = "hidden";
        document.getElementById("para_5").style.visibility = "hidden";
        document.getElementById("para_6").style.visibility = "hidden";
        document.getElementById("para_7").style.visibility = "hidden";
        document.getElementById("start").style.visibility = "hidden";
        document.getElementById("collect").style.visibility = "hidden";
        document.getElementById("a_collect").style.visibility = "hidden";
        document.getElementById("next").style.visibility = "hidden";
        document.getElementById("reminder").style.visibility = "hidden";
        document.getElementById("A").style.visibility = "hidden";
        document.getElementById("bond").style.visibility = "hidden";
        document.getElementById("T").style.visibility = "hidden";
        document.getElementById("U").style.visibility = "hidden";
        document.getElementById("C").style.visibility = "hidden";
        document.getElementById("triple").style.visibility = "hidden";
        document.getElementById("G").style.visibility = "hidden";
    }

    function hide_start() {
        document.getElementById("s_menu").style.visibility = "hidden";
        document.getElementById("main_menu").style.visibility = "hidden";
        document.getElementById("lvl_one").style.visibility = "hidden";
        document.getElementById("lvl_two").style.visibility = "hidden";
        document.getElementById("r_menu").style.visibility = "hidden";
        document.getElementById("clear_leader").style.visibility = "hidden";
    }

    function hide_game_over() {
        document.getElementById("over").style.visibility = "hidden";
        document.getElementById("start_p_over").style.visibility = "hidden";
        document.getElementById("press_s_over").style.visibility = "hidden";
        document.getElementById("take_t_over").style.visibility = "hidden";
        document.getElementById("press_t_over").style.visibility = "hidden";
        document.getElementById("over_leader").style.visibility = "hidden";
        document.getElementById("enter3").style.visibility = "hidden";
        document.getElementById("press_e").style.visibility = "hidden";
    }

    function hide_menus() {
        document.getElementById("speedminus").style.visibility = "hidden";
        document.getElementById("speed").style.visibility = "hidden";
        document.getElementById("speedplus").style.visibility = "hidden";
        document.getElementById("DNA_r").style.visibility = "hidden";
        document.getElementById("protein_s").style.visibility = "hidden";
        document.getElementById("start_p").style.visibility = "hidden";
        document.getElementById("press_s").style.visibility = "hidden";
        document.getElementById("take_t").style.visibility = "hidden";
        document.getElementById("press_t").style.visibility = "hidden";
        document.getElementById("how_play").style.visibility = "hidden";
        document.getElementById("press_h").style.visibility = "hidden";
        document.getElementById("m_menu").style.visibility = "hidden";
    }

    //When the game loads for the first time, the scores amd names are undefined.
    //Cannot compare 'undefined' with new score so score and name must be given a value at load.
    function sort_leaderboard() {
        if (sessionStorage.highscore == undefined) {
            sessionStorage.highscore = " ";
            sessionStorage.highscore_name = " ";
            sessionStorage.second = " ";
            sessionStorage.second_name = " ";
            sessionStorage.third = " ";
            sessionStorage.third_name = " ";
            sessionStorage.fourth = " ";
            sessionStorage.fourth_name = " ";
            sessionStorage.fifth = " ";
            sessionStorage.fifth_name = " ";
            sessionStorage.sixth = " ";
            sessionStorage.sixth_name = " ";
            sessionStorage.seventh = " ";
            sessionStorage.seventh_name = " ";
            sessionStorage.eighth = " ";
            sessionStorage.eighth_name = " ";
            sessionStorage.ninth = " ";
            sessionStorage.ninth_name = " ";
            sessionStorage.tenth = " ";
            sessionStorage.tenth_name = " ";
        }
        document.getElementById("1_name").innerHTML = (sessionStorage.highscore_name);
        document.getElementById("1_score").innerHTML = (sessionStorage.highscore);
        document.getElementById("2_name").innerHTML = (sessionStorage.second_name);
        document.getElementById("2_score").innerHTML = (sessionStorage.second);
        document.getElementById("3_name").innerHTML = (sessionStorage.third_name);
        document.getElementById("3_score").innerHTML = (sessionStorage.third);
        document.getElementById("4_name").innerHTML = (sessionStorage.fourth_name);
        document.getElementById("4_score").innerHTML = (sessionStorage.fourth);
        document.getElementById("5_name").innerHTML = (sessionStorage.fifth_name);
        document.getElementById("5_score").innerHTML = (sessionStorage.fifth);
        document.getElementById("6_name").innerHTML = (sessionStorage.sixth_name);
        document.getElementById("6_score").innerHTML = (sessionStorage.sixth);
        document.getElementById("7_name").innerHTML = (sessionStorage.seventh_name);
        document.getElementById("7_score").innerHTML = (sessionStorage.seventh);
        document.getElementById("8_name").innerHTML = (sessionStorage.eighth_name);
        document.getElementById("8_score").innerHTML = (sessionStorage.eighth);
        document.getElementById("9_name").innerHTML = (sessionStorage.ninth_name);
        document.getElementById("9_score").innerHTML = (sessionStorage.ninth);
        document.getElementById("10_name").innerHTML = (sessionStorage.tenth_name);
        document.getElementById("10_score").innerHTML = (sessionStorage.tenth);
    }

    function sort_leaderboard_synthesis() {
        if (sessionStorage.highscore_2 == undefined) {
            sessionStorage.highscore_2 = " ";
            sessionStorage.highscore_name_2 = " ";
            sessionStorage.second_2 = " ";
            sessionStorage.second_name_2 = " ";
            sessionStorage.third_2 = " ";
            sessionStorage.third_name_2 = " ";
            sessionStorage.fourth_2 = " ";
            sessionStorage.fourth_name_2 = " ";
            sessionStorage.fifth_2 = " ";
            sessionStorage.fifth_name_2 = " ";
            sessionStorage.sixth_2 = " ";
            sessionStorage.sixth_name_2 = " ";
            sessionStorage.seventh_2 = " ";
            sessionStorage.seventh_name_2 = " ";
            sessionStorage.eighth_2 = " ";
            sessionStorage.eighth_name_2 = " ";
            sessionStorage.ninth_2 = " ";
            sessionStorage.ninth_name_2 = " ";
            sessionStorage.tenth_2 = " ";
            sessionStorage.tenth_name_2 = " ";
        }
        document.getElementById("2_1_name").innerHTML = (sessionStorage.highscore_name_2);
        document.getElementById("2_1_score").innerHTML = (sessionStorage.highscore_2);
        document.getElementById("2_2_name").innerHTML = (sessionStorage.second_name_2);
        document.getElementById("2_2_score").innerHTML = (sessionStorage.second_2);
        document.getElementById("2_3_name").innerHTML = (sessionStorage.third_name_2);
        document.getElementById("2_3_score").innerHTML = (sessionStorage.third_2);
        document.getElementById("2_4_name").innerHTML = (sessionStorage.fourth_name_2);
        document.getElementById("2_4_score").innerHTML = (sessionStorage.fourth_2);
        document.getElementById("2_5_name").innerHTML = (sessionStorage.fifth_name_2);
        document.getElementById("2_5_score").innerHTML = (sessionStorage.fifth_2);
        document.getElementById("2_6_name").innerHTML = (sessionStorage.sixth_name_2);
        document.getElementById("2_6_score").innerHTML = (sessionStorage.sixth_2);
        document.getElementById("2_7_name").innerHTML = (sessionStorage.seventh_name_2);
        document.getElementById("2_7_score").innerHTML = (sessionStorage.seventh_2);
        document.getElementById("2_8_name").innerHTML = (sessionStorage.eighth_name_2);
        document.getElementById("2_8_score").innerHTML = (sessionStorage.eighth_2);
        document.getElementById("2_9_name").innerHTML = (sessionStorage.ninth_name_2);
        document.getElementById("2_9_score").innerHTML = (sessionStorage.ninth_2);
        document.getElementById("2_10_name").innerHTML = (sessionStorage.tenth_name_2);
        document.getElementById("2_10_score").innerHTML = (sessionStorage.tenth_2);
    }

    //highlights text red for 1 and a half seconds
    //modified from http://stackoverflow.com/questions/5600351/javascript-change-css-color-for-5-seconds
    function highlight(obj) {
        var orig = obj.style.color;
        obj.style.color = 'red';
        setTimeout(function() {
            obj.style.color = orig;
        }, 1500);
    }

    //When a new score reaches the leader board, depending on how high the score is
    //all of the scores need to be shifted down to accomodate for it
    function shift_scores() {
        if (score >= sessionStorage.highscore) {
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
            highlight(document.getElementById('first_1'));
            highlight(document.getElementById('1_name'));
            highlight(document.getElementById('1_score'));
        } else {
            if (score >= sessionStorage.second) {
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
                highlight(document.getElementById('second_1'));
                highlight(document.getElementById('2_name'));
                highlight(document.getElementById('2_score'));
            } else {
                if (score >= sessionStorage.third) {
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
                    highlight(document.getElementById('third_1'));
                    highlight(document.getElementById('3_name'));
                    highlight(document.getElementById('3_score'));
                } else {
                    if (score >= sessionStorage.fourth) {
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
                        highlight(document.getElementById('fourth_1'));
                        highlight(document.getElementById('4_name'));
                        highlight(document.getElementById('4_score'));
                    } else {
                        if (score >= sessionStorage.fifth) {
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
                            highlight(document.getElementById('fifth_1'));
                            highlight(document.getElementById('5_name'));
                            highlight(document.getElementById('5_score'));
                        } else {
                            if (score >= sessionStorage.sixth) {
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
                                highlight(document.getElementById('sixth_1'));
                                highlight(document.getElementById('6_name'));
                                highlight(document.getElementById('6_score'));
                            } else {
                                if (score >= sessionStorage.seventh) {
                                    sessionStorage.tenth = sessionStorage.ninth;
                                    sessionStorage.ninth = sessionStorage.eighth;
                                    sessionStorage.eighth = sessionStorage.seventh;
                                    sessionStorage.seventh = score;
                                    sessionStorage.tenth_name = sessionStorage.ninth_name;
                                    sessionStorage.ninth_name = sessionStorage.eighth_name;
                                    sessionStorage.eighth_name = sessionStorage.seventh_name;
                                    sessionStorage.seventh_name = player_name.toUpperCase();
                                    highlight(document.getElementById('seventh_1'));
                                    highlight(document.getElementById('7_name'));
                                    highlight(document.getElementById('7_score'));
                                } else {
                                    if (score >= sessionStorage.eighth) {
                                        sessionStorage.tenth = sessionStorage.ninth;
                                        sessionStorage.ninth = sessionStorage.eighth;
                                        sessionStorage.eighth = score;
                                        sessionStorage.tenth_name = sessionStorage.ninth_name;
                                        sessionStorage.ninth_name = sessionStorage.eighth_name;
                                        sessionStorage.eighth_name = player_name.toUpperCase();
                                        highlight(document.getElementById('eighth_1'));
                                        highlight(document.getElementById('8_name'));
                                        highlight(document.getElementById('8_score'));
                                    } else {
                                        if (score >= sessionStorage.ninth) {
                                            sessionStorage.tenth = sessionStorage.ninth;
                                            sessionStorage.ninth = score;
                                            sessionStorage.tenth_name = sessionStorage.ninth_name;
                                            sessionStorage.ninth_name = player_name.toUpperCase();
                                            highlight(document.getElementById('ninth_1'));
                                            highlight(document.getElementById('9_name'));
                                            highlight(document.getElementById('9_score'));
                                        } else {
                                            if (score >= sessionStorage.tenth) {
                                                sessionStorage.tenth = score;
                                                sessionStorage.tenth_name = player_name.toUpperCase();
                                                highlight(document.getElementById('tenth_1'));
                                                highlight(document.getElementById('10_name'));
                                                highlight(document.getElementById('10_score'));
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

    function shift_scores_synthesis() {
        if (score >= sessionStorage.highscore_2) {
            sessionStorage.tenth_2 = sessionStorage.ninth_2;
            sessionStorage.ninth_2 = sessionStorage.eighth_2;
            sessionStorage.eighth_2 = sessionStorage.seventh_2;
            sessionStorage.seventh_2 = sessionStorage.sixth_2;
            sessionStorage.sixth_2 = sessionStorage.fifth_2;
            sessionStorage.fifth_2 = sessionStorage.fourth_2;
            sessionStorage.fourth_2 = sessionStorage.third_2;
            sessionStorage.third_2 = sessionStorage.second_2;
            sessionStorage.second_2 = sessionStorage.highscore_2;
            sessionStorage.highscore_2 = score;
            sessionStorage.tenth_name_2 = sessionStorage.ninth_name_2;
            sessionStorage.ninth_name_2 = sessionStorage.eighth_name_2;
            sessionStorage.eighth_name_2 = sessionStorage.seventh_name_2;
            sessionStorage.seventh_name_2 = sessionStorage.sixth_name_2;
            sessionStorage.sixth_name_2 = sessionStorage.fifth_name_2;
            sessionStorage.fifth_name_2 = sessionStorage.fourth_name_2;
            sessionStorage.fourth_name_2 = sessionStorage.third_name_2;
            sessionStorage.third_name_2 = sessionStorage.second_name_2;
            sessionStorage.second_name_2 = sessionStorage.highscore_name_2;
            sessionStorage.highscore_name_2 = player_name.toUpperCase();
            highlight(document.getElementById('first_2'));
            highlight(document.getElementById('2_1_name'));
            highlight(document.getElementById('2_1_score'));
        } else {
            if (score >= sessionStorage.second_2) {
                sessionStorage.tenth_2 = sessionStorage.ninth_2;
                sessionStorage.ninth_2 = sessionStorage.eighth_2;
                sessionStorage.eighth_2 = sessionStorage.seventh_2;
                sessionStorage.seventh_2 = sessionStorage.sixth_2;
                sessionStorage.sixth_2 = sessionStorage.fifth_2;
                sessionStorage.fifth_2 = sessionStorage.fourth_2;
                sessionStorage.fourth_2 = sessionStorage.third_2;
                sessionStorage.third_2 = sessionStorage.second_2;
                sessionStorage.second_2 = score;
                sessionStorage.tenth_name_2 = sessionStorage.ninth_name_2;
                sessionStorage.ninth_name_2 = sessionStorage.eighth_name_2;
                sessionStorage.eighth_name_2 = sessionStorage.seventh_name_2;
                sessionStorage.seventh_name_2 = sessionStorage.sixth_name_2;
                sessionStorage.sixth_name_2 = sessionStorage.fifth_name_2;
                sessionStorage.fifth_name_2 = sessionStorage.fourth_name_2;
                sessionStorage.fourth_name_2 = sessionStorage.third_name_2;
                sessionStorage.third_name_2 = sessionStorage.second_name_2;
                sessionStorage.second_name_2 = player_name.toUpperCase();
                highlight(document.getElementById('second_2'));
                highlight(document.getElementById('2_2_name'));
                highlight(document.getElementById('2_2_score'));
            } else {
                if (score >= sessionStorage.third_2) {
                    sessionStorage.tenth_2 = sessionStorage.ninth_2;
                    sessionStorage.ninth_2 = sessionStorage.eighth_2;
                    sessionStorage.eighth_2 = sessionStorage.seventh_2;
                    sessionStorage.seventh_2 = sessionStorage.sixth_2;
                    sessionStorage.sixth_2 = sessionStorage.fifth_2;
                    sessionStorage.fifth_2 = sessionStorage.fourth_2;
                    sessionStorage.fourth_2 = sessionStorage.third_2;
                    sessionStorage.third_2 = score;
                    sessionStorage.tenth_name_2 = sessionStorage.ninth_name_2;
                    sessionStorage.ninth_name_2 = sessionStorage.eighth_name_2;
                    sessionStorage.eighth_name_2 = sessionStorage.seventh_name_2;
                    sessionStorage.seventh_name_2 = sessionStorage.sixth_name_2;
                    sessionStorage.sixth_name_2 = sessionStorage.fifth_name_2;
                    sessionStorage.fifth_name_2 = sessionStorage.fourth_name_2;
                    sessionStorage.fourth_name_2 = sessionStorage.third_name_2;
                    sessionStorage.third_name_2 = player_name.toUpperCase();
                    highlight(document.getElementById('third_2'));
                    highlight(document.getElementById('2_3_name'));
                    highlight(document.getElementById('2_3_score'));
                } else {
                    if (score >= sessionStorage.fourth_2) {
                        sessionStorage.tenth_2 = sessionStorage.ninth_2;
                        sessionStorage.ninth_2 = sessionStorage.eighth_2;
                        sessionStorage.eighth_2 = sessionStorage.seventh_2;
                        sessionStorage.seventh_2 = sessionStorage.sixth_2;
                        sessionStorage.sixth_2 = sessionStorage.fifth_2;
                        sessionStorage.fifth_2 = sessionStorage.fourth_2;
                        sessionStorage.fourth_2 = score;
                        sessionStorage.tenth_name_2 = sessionStorage.ninth_name_2;
                        sessionStorage.ninth_name_2 = sessionStorage.eighth_name_2;
                        sessionStorage.eighth_name_2 = sessionStorage.seventh_name_2;
                        sessionStorage.seventh_name_2 = sessionStorage.sixth_name_2;
                        sessionStorage.sixth_name_2 = sessionStorage.fifth_name_2;
                        sessionStorage.fifth_name_2 = sessionStorage.fourth_name_2;
                        sessionStorage.fourth_name_2 = player_name.toUpperCase();
                        highlight(document.getElementById('fourth_2'));
                        highlight(document.getElementById('2_4_name'));
                        highlight(document.getElementById('2_4_score'));
                    } else {
                        if (score >= sessionStorage.fifth_2) {
                            sessionStorage.tenth_2 = sessionStorage.ninth_2;
                            sessionStorage.ninth_2 = sessionStorage.eighth_2;
                            sessionStorage.eighth_2 = sessionStorage.seventh_2;
                            sessionStorage.seventh_2 = sessionStorage.sixth_2;
                            sessionStorage.sixth_2 = sessionStorage.fifth_2;
                            sessionStorage.fifth_2 = score;
                            sessionStorage.tenth_name_2 = sessionStorage.ninth_name_2;
                            sessionStorage.ninth_name_2 = sessionStorage.eighth_name_2;
                            sessionStorage.eighth_name_2 = sessionStorage.seventh_name_2;
                            sessionStorage.seventh_name_2 = sessionStorage.sixth_name_2;
                            sessionStorage.sixth_name_2 = sessionStorage.fifth_name_2;
                            sessionStorage.fifth_name_2 = player_name.toUpperCase();
                            highlight(document.getElementById('fifth_2'));
                            highlight(document.getElementById('2_5_name'));
                            highlight(document.getElementById('2_5_score'));
                        } else {
                            if (score >= sessionStorage.sixth_2) {
                                sessionStorage.tenth_2 = sessionStorage.ninth_2;
                                sessionStorage.ninth_2 = sessionStorage.eighth_2;
                                sessionStorage.eighth_2 = sessionStorage.seventh_2;
                                sessionStorage.seventh_2 = sessionStorage.sixth_2;
                                sessionStorage.sixth_2 = score;
                                sessionStorage.tenth_name_2 = sessionStorage.ninth_name_2;
                                sessionStorage.ninth_name_2 = sessionStorage.eighth_name_2;
                                sessionStorage.eighth_name_2 = sessionStorage.seventh_name_2;
                                sessionStorage.seventh_name_2 = sessionStorage.sixth_name_2;
                                sessionStorage.sixth_name_2 = player_name.toUpperCase();
                                highlight(document.getElementById('sixth_2'));
                                highlight(document.getElementById('2_6_name'));
                                highlight(document.getElementById('2_6_score'));
                            } else {
                                if (score >= sessionStorage.seventh_2) {
                                    sessionStorage.tenth_2 = sessionStorage.ninth_2;
                                    sessionStorage.ninth_2 = sessionStorage.eighth_2;
                                    sessionStorage.eighth_2 = sessionStorage.seventh_2;
                                    sessionStorage.seventh_2 = score;
                                    sessionStorage.tenth_name_2 = sessionStorage.ninth_name_2;
                                    sessionStorage.ninth_name_2 = sessionStorage.eighth_name_2;
                                    sessionStorage.eighth_name_2 = sessionStorage.seventh_name_2;
                                    sessionStorage.seventh_name_2 = player_name.toUpperCase();
                                    highlight(document.getElementById('seventh_2'));
                                    highlight(document.getElementById('2_7_name'));
                                    highlight(document.getElementById('2_7_score'));
                                } else {
                                    if (score >= sessionStorage.eighth_2) {
                                        sessionStorage.tenth_2 = sessionStorage.ninth_2;
                                        sessionStorage.ninth_2 = sessionStorage.eighth_2;
                                        sessionStorage.eighth_2 = score;
                                        sessionStorage.tenth_name_2 = sessionStorage.ninth_name_2;
                                        sessionStorage.ninth_name_2 = sessionStorage.eighth_name_2;
                                        sessionStorage.eighth_name_2 = player_name.toUpperCase();
                                        highlight(document.getElementById('eighth_2'));
                                        highlight(document.getElementById('2_8_name'));
                                        highlight(document.getElementById('2_8_score'));
                                    } else {
                                        if (score >= sessionStorage.ninth_2) {
                                            sessionStorage.tenth_2 = sessionStorage.ninth_2;
                                            sessionStorage.ninth_2 = score;
                                            sessionStorage.tenth_name_2 = sessionStorage.ninth_name_2;
                                            sessionStorage.ninth_name_2 = player_name.toUpperCase();
                                            highlight(document.getElementById('ninth_2'));
                                            highlight(document.getElementById('2_9_name'));
                                            highlight(document.getElementById('2_9_score'));
                                        } else {
                                            if (score >= sessionStorage.tenth_2) {
                                                sessionStorage.tenth_2 = score;
                                                sessionStorage.tenth_name_2 = player_name.toUpperCase();
                                                highlight(document.getElementById('tenth_2'));
                                                highlight(document.getElementById('2_10_name'));
                                                highlight(document.getElementById('2_10_score'));
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