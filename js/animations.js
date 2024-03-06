const imgurls = ["https://media.tenor.com/m7zXY95vlL8AAAAM/zyzz-son-of-zeus.gif",
    "https://media.tenor.com/0ERBon0Q-jkAAAAM/zyzz-miring.gif",
    "https://media.tenor.com/nLTNJ5c6a2MAAAAM/mad-elevator.gif",
    "https://media.tenor.com/c5q_k0K-sXkAAAAM/zyzz-zyzz-question-marks.gif",
    "https://media.tenor.com/tgOwOCREoP4AAAAM/illuzory-irl-zyzz-flex-illuzory.gif"];

window.setInterval(event, 2000);

function event()
{
    var value = imgurls[(Math.floor(Math.random() * imgurls.length))].toString();

    $('body').css('background-image', 'url(' + value  + ')');

}