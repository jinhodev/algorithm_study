function solution(a, b) {
    let A = a.toString();
    let B = b.toString();
    
    var answer = A+B < 2*a*b ? 2*a*b : Number(A+B);
    return answer;
}