function solution(a, b) {
    var answer;
    [a, b].join("") > [b, a].join("") ? answer = Number([a, b].join("")) : answer = Number([b, a].join(""));
    return answer;
}