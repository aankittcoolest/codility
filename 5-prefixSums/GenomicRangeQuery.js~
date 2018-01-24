function solution(S, P, Q) {
    let s = S.split('');
    let Z=[]

    for(let i=0;i<P.length;i++) {
        var arr = S.slice(P[i],Q[i]+1)

        if(/A/.test(arr)) {
            Z.push(1)
        }
        else if(/C/.test(arr)) {
            Z.push(2)
        }
        else if(/G/.test(arr)) {
            Z.push(3)
        }
        else if(/T/.test(arr)) {
            Z.push(4)
        }
    }
    return Z;

}



solution('CAGCCTA',[2,5,0],[4,5,6]);
