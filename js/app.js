let correct = 0;
let score = 0;

function guess (){
    $(this).addClass('scale');
    correct = Math.floor(Math.random() * 3);
    let index = $('.option').index(this);
    if(index === correct){
        score += 1;
        $('.result.won').show();
    } else {
        score = 0;
        $('.result.lost').show();
    }
    $('.score span').text(score);
}

$('.option').on('click', guess);
$('.close a').on('click', function() {
    $('.result').hide();
    $('.option').removeClass('scale');
    game();
});

function random(){
    return Math.floor(Math.random() * 255);
}

function game() {
    $(".option").each(function (index) {
        let color = `rgb(${random()},${random()},${random()})`;
        $(this).css("background-color", color);
        if(index===correct){
            $('.question').text(color);
        }
      });
}

game();

