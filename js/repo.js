 function showCurrentRepos() {
    var x = document.getElementById('currentRepos');
    var y = document.getElementById('devRepos');
    var z = document.getElementById('cur-repo-button');
    var a = document.getElementById('dev-repo-button');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        y.style.display = 'none';
        a.style.background = 'rgba(255, 255, 255, 0.45)'; 
        z.style.background = 'rgb(0, 97, 168)';   
    } 
}

function showDevelopingRepos() {
    var x = document.getElementById('currentRepos');
    var y = document.getElementById('devRepos');
    var z = document.getElementById('cur-repo-button');
    var a = document.getElementById('dev-repo-button');

    if (y.style.display === 'none') {
        x.style.display = 'none';
        y.style.display = 'block';
        a.style.background = 'rgb(0, 97, 168)'; 
        z.style.background = 'rgba(255, 255, 255, 0.45)';   
    } 
}  