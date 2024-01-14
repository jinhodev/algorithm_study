function solution(ineq, eq, n, m) {
    var proc = (eq == "=" ? eval(n+ineq+eq+m) : eval(n+ineq+m));
    var answer = proc == true ? 1 : 0;
    return answer;
}