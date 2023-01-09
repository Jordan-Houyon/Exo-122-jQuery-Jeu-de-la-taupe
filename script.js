const holes = $('.hole');
const scoreBoard =$('.score');
const moles =$('.mole');

function startGame() {
    const gameTime = 10000;

    let score = 0


    let startTime = setInterval(function () {
        let hole = holes.eq(Math.floor(Math.random() * holes.length));
        hole.addClass('up');

        let duration = Math.random() * (1000 - 200) + 200;
        setTimeout(function () {
            hole.removeClass('up');
        }, duration);

        hole.click(function () {
            score++;
            $(this).removeClass('up');
            scoreBoard.text(score)
        });
    }, 200);

    setTimeout(function () {
        clearInterval(startTime);
        alert("La partie est terminé! ")

    }, gameTime);

}
