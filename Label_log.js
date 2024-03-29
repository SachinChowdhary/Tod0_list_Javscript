var a=90
labelCancelLoop : while(a){
                   if(false){
                    console.log('a')
                   }
                   else{
                    console.log('b')
                    continue labelCancelLoop
                    console.log('c')
                   }
}