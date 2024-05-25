let current_likes = 0;
function incrementLikes () {
    current_likes+=1;
    document.getElementById('num').innerText = current_likes;
}