function solution(str1, str2) {
    a = str1.split("");
    b = str2.split("");
    for(let i = 1; i<(str1.length*2); i+=2){
        a.splice(i,0, b[(i-1)/2]);
    }
    var answer = a.join("");
    return answer;
}