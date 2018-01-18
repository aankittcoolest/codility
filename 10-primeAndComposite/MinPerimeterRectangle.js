function solution(N) {
    let i = 1;
    let sum = 1+N;

    while(i*i<=N) {
        if(N%i==0) {
             let num=N/i;
             if(num+i < sum) {
             sum=num+i;
            }
        }
        i++;
    }

    return sum*2;

}

solution(30)
