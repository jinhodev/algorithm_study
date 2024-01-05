function solution(my_string, overwrite_string, s) {
a = my_string.split("");
b = overwrite_string.split("");

for(let i = s; i<(overwrite_string.length)+s; i++){
    a.splice(i,1, b[i-s]);
}

var answer = a.join("");
return answer;


}