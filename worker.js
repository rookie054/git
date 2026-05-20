   self.onmessage= ()=>{ 
        var sum=0;
        for(let i=1;i<=1000;i++){
            
         sum+=i;  
           
        }
         console.log(sum);
         self.postMessage(sum);                                 
    }   