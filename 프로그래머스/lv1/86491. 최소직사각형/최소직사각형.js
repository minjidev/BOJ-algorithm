function solution(sizes) {
    let wMax = 0, hMax = 0;
    sizes.forEach(x => x.sort((a,b) => b-a));
    for (let i=0;i<sizes.length;i++) {
        wMax = Math.max(wMax, sizes[i][0]);
        hMax = Math.max(hMax, sizes[i][1]);
    }
    return wMax*hMax
}