class Posts{
constructor(){
    this.id=1
    this.dados=[]
    
}
    salvar(){
       
        
        
        const btnVaga=document.querySelector("#btnVaga")
        const iten=document.querySelector("#input_requisitos")
        btnVaga.addEventListener("click",(evt)=>{
             evt.preventDefault
            //  const lista= document.querySelector('#input_post')
          
         let dadosRecebidos=document.querySelector("#input_titulo").target
        
             console.log(iten)
        })
    }
    

    lerDados(){
        const titulo=document.querySelector("#input_post").value
        const img=document.querySelector("#input_img").value
        const requerimento=document.querySelector("#input_requisitos").value
        const funcao=document.querySelector("#input_funcao").value
        const descricao=document.querySelector("#input_descricao").value
        const cidade=document.querySelector("#input_cidade").value
    
       
       
    }
    recebeDados(lerDados){
        
        console.log(lerDados)
    }
    
    
}
var post=new Posts()
post.salvar()





