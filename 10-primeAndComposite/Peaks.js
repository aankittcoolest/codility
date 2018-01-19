function solution(A) {
    let i = 2;
    let set = new Set();
    while (i * i < A.length) {
        if (A.length % i == 0) {
            set.add(i);
            set.add(A.length / i);
        }
        i++;
    }

    if (set.length == 0) {
        return 0;
    }

    let subArrays = 0;

    for (let value of set) {
        i = 1;
        let lowIndex = 1;
        let flag = 0;
        let found = false;
        let valid = false;
        while (i < A.length) {

            if (i >= lowIndex * value && !found) {
                valid = false;
                break;
            } else if (i >= lowIndex * value && found && i < A.length) {
                lowIndex++;
                valid = false;
                found = false;
            }
            if (A[i] > A[i - 1] && A[i] > A[i + 1] && i < value * lowIndex) {
                i = lowIndex * value;
                valid = true;
                found = true;
                continue;
            }
            i++;
        }

        if (valid) {
            if (subArrays < A.length / value) {
                subArrays = A.length / value;
            }
        }

    }
    return subArrays;
}
