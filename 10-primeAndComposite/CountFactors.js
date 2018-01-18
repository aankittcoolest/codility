function solution(N) {
    let i = 1;
    let total = 0;

    while(i*i<=N) {
        if(N%i==0) {
             let num=N/i;
             if(num!=i) {
                 total = total +2;
             } 
             else {
                 total++;
             }
        }
        i++;
    }

    return total;

}

solution(24)
