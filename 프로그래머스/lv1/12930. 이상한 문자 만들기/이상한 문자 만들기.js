function solution(s) {
    var words = s.split('');
    var idx = 0;
    for (var i=0;i<words.length;i++) {
        if (words[i] === " ") { idx = 0; }
        else {
            if (idx%2===0) {words[i]=words[i].toUpperCase();}
            else {words[i]= words[i].toLowerCase();}
            idx++;
        }
    }
    return words.join('');
}
