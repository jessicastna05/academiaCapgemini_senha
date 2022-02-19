function checkPassword(){

const maxLength = 6

var password = document.getElementById("input").value
console.log(password)

if(password.length == ''){
    window.alert("Por favor, digite ao menos 01 caracter.")
}else{

if(password.length < maxLength){

    let calc = (maxLength - password.length )
  

     if(calc < maxLength){
        window.alert("Por favor, digite mais " + calc + " números." )
    }
}
    else{
      
        let maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        

        let m  = []
        for(i=0; i < password.length;i++){

            m.push(maiuscula.indexOf(password.charAt(i)))
            
        }

            let validNum = Math.max.apply(null,m)
            console.log (validNum)

            if(validNum < 0 ){
                window.alert("A senha deve possuir ao menos 01 letra maíuscula." )
            }

            else{

                 let specialCaracter = '!@#$%^&*()-+'

                 let c = []

                 for(i=0; i< password.length; i++){

                    c.push(specialCaracter.indexOf(password.charAt(i)))

                    }
                    let validNum = Math.max.apply(null,c)
                    if(validNum < 0){
                        window.alert("A senha deve possuir ao menos 01 caracter especial." )
                    }else{

                        window.alert("Senha criada com sucesso!" )
                    }
                    

                }
                    
                



            

                

        }   

        

    }
        

}
        
    
    




