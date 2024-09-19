function solution(code) {
    mode = 0;
    ret = [];
    sp = code.split("");
        
        for(let i = 0; i <= code.length-1;i++){
            if(sp[i] == "1"){
                if(mode == 1){
                    mode = 0;
                }
                
                else{
                    mode = 1;
                }   
            
            }
            
            else{
            
                if(mode == 0){
                
                    if(i%2==0){
                        ret.push(sp[i]) 
                    }
                }
            
                else if(mode == 1){
                    if(i%2==1){
                        ret.push(sp[i]) 
                    }
                }
            }
        
        
        }
    
        ret = ret.join("");
        
        if(!ret){
            ret = "EMPTY"; 
        }
    
    
    var answer = ret;
    
    return answer;
}