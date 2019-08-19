$(".newgame").hide();
$(document).ready(function () {
    var guesses = [];
    var hot = $(".hot");
    var cold = $(".cold");
    var rand = Math.floor((Math.random() * 100) + 1);
    var count = 1;
    var index = 0;
    console.log(rand);
    $(".input").keydown(function (e) {
        if (e.which == 13) {
            var input = parseInt($(".input").val());
            if (jQuery.inArray(input, guesses) == -1 && input <= 100) {
                guesses.push(input);
                if (input < 0) {
                    $(".aviso").text("Digite um número positivo.");
                    $(".input").val("");
                    guesses.pop(input);
                } else {
                    if (input > 100) {
                        $(".aviso").text("Digite um número de 1 a 100.");
                        $(".input").val("");
                    } else if (Number.isInteger(input) && parseInt(input) == rand) {
                        $(".aviso").text("Acertou!");
                        if (input < 10) {
                            $("#lista" + index).append("<li>" + "0" + input + "</li>");
                        } else {
                            $("#lista" + index).append("<li>" + input + "</li>");
                        }

                        hot.css("width", "100%");
                        cold.css("width", "0%");
                        $(".input").val("");
                    } else if (Number.isInteger(input)) {
                        var dif = Math.abs(input - rand);
                        cold.css("width", dif + "%");
                        hot.css("width", 100 - dif + "%");
                        if (dif < 10) {
                            $(".aviso").text("Tá muito quente!");
                        } else if (dif < 20) {
                            $(".aviso").text("Tá quente!");
                        } else if (dif < 30) {
                            $(".aviso").text("Tá esquentando.");
                        } else if (dif < 40) {
                            $(".aviso").text("Tá morno.");
                        } else if (dif > 50) {
                            $(".aviso").text("Tá frio.");
                        }
                        $(".input").val("");
                        $(".hot h1").hide();
                        $(".cold h1").hide();
                        $(".or").hide();
                        $(".newgame").show();
                        $(".aviso").css("margin-top", +120 + 20 + "px");
                        if (count % 10 == 0) {
                            if (input < 10) {
                                $("#lista" + index).append("<li>" + "0" + input + "</li>");
                            } else {
                                $("#lista" + index).append("<li>" + input + "</li>");
                                var box_t = parseInt($(".box").css("height"));
                                var body_t = parseInt($("body").css("height"));
                                console.log(box_t);
                                $("body").css("height", body_t + 70 + "px");
                                $(".box").css("height", box_t + 70 + "px");
                                console.log($(".box").css("height"));
                            }
                            index += 1;
                            count = 1;
                            $(".ab").append("<ul id='lista" + index + "'</ul>");
                        } else {
                            count += 1;
                            if (input < 10) {
                                $("#lista" + index).append("<li>" + "0" + input + "</li>");
                            } else {
                                $("#lista" + index).append("<li>" + input + "</li>");
                            }
                        }
                    } else {
                        alert("Digite um número.");
                        $(".input").val("");
                    }
                }
            } else {
                if (input > 100) {
                    $(".aviso").text("Digite um número de 1 a 100.");
                    $(".input").val("");
                } else {
                    $(".aviso").text("Você já digitou esse número.");
                    $(".input").val("");
                }
            }
        }
    });
    $(".newgame").mousedown(function () {
        guesses = [];
        index = 0;
        count = 1;
        var rand = Math.floor((Math.random() * 100) + 1);
        console.log(rand);
        hot.css("width", "50%");
        cold.css("width", "50%");
        $(".newgame").hide();
        $(".hot h1").show();
        $(".cold h1").show();
        $(".or").show();
        $(".aviso").css("margin-top", 20 + "px");
        $(".aviso").text("Neutro");
        $("li").remove();

    });
});