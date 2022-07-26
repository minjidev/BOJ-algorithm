function solution(s) {
    s = s.toLowerCase();
    var words = s.split('');
    var idx = 0;
    for (var i=0;i<words.length;i++) {
        if (words[i] === " ") { idx = 0; }
        else {
            if (idx%2===0) {words[i]=words[i].toUpperCase();}
            idx++;
        }
    }
    return words.join('');
}
