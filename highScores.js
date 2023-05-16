const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highScores
    .map(score => {
        return ("<h2><li class='highScore'>"+score.name+" - "+score.score+'</li></h2>');
    })
    .join("");
