//This program needs to be improved
function solution(A, B) {
    let C = []
    let D = []

    for(let i=0;i<A.length;i++) {
        if(Math.max(A[i], B[i])%Math.min(A[i],B[i]) == 0) {
            C.push(Math.min(A[i],B[i]))
            D.push(Math.max(A[i], B[i])/Math.min(A[i],B[i]))
        }
    }

    var count = 0;
    for(let i=0;i<C.length;i++) {
        var result = solution2(C[i], D[i])
        if(result) {
            count++;
        }
    }

    return count;
}


function solution2(a,b) {
    var numPrimeDivisiors = primeDivisors(a)
    var divisorPrimeDivisors = primeDivisors(b)

    var flag = 0
    for(var element of divisorPrimeDivisors) {
        for(var ele of numPrimeDivisiors) {
            if(element == ele) {
                divisorPrimeDivisors.delete(element)
                if(divisorPrimeDivisors.size == 0) {
                    flag = 1
                    break
                }
            }
        }
        if(flag == 1) {
            break;
        }
    }

    return flag == 1 ? true : false

}

function primeDivisors(num) {
    var set = new Set()
    while(num%2 == 0) {
        set.add(2);
        num = num/2;
    }

    for(let i=3;i <Math.sqrt(num); i+2) {
        while(num%i == 0) {
            set.add(i)
            num = num/i
        }
    }

    if(num>2) {
        set.add(num)
    }

    return set
}

solution([15,10,3], [75,30,5]);
