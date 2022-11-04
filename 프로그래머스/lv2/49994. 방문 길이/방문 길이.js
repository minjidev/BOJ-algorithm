// 배열 내에 있는 배열 확인  
function isArrayInArray(arr, item) {
    var item_as_string = JSON.stringify(item);

    var contains = arr.some(function (ele) {
        return JSON.stringify(ele) === item_as_string;
    });
    return contains;
}

function solution(dirs) {
    let ch = []
    let cnt = 0
    // 매뉴얼대로 움직이기
    function moveCharacter(x, y) {
        for (let i=0;i<dirs.length;i++) {
            let [nx, ny] = [x, y]
            if (dirs[i]==='U') nx = x-1
            else if (dirs[i]==='D') nx = x+1
            else if (dirs[i]==='R') ny = y+1
            else ny = y-1
            // 시작점, 끝점이 ch 배열에 있는지 확인
            if (nx>=-5 && nx<=5 && ny >= -5 && ny <= 5) {
                if (!isArrayInArray(ch, [[x, y], [nx, ny]])) {
                    cnt++
                    // 시작점, 끝점 표시 
                    ch.push([[x, y], [nx, ny]])
                    ch.push([[nx, ny], [x, y]])
                }
                    x = nx
                    y = ny // 시작점을 이전 끝점으로 할당 
            }
        }
    }
    
    moveCharacter(0, 0)
    return cnt
    
}