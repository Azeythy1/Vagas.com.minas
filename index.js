const content=document.querySelector('.content ')

const vagas=[
    'img1',
    'img2',
    'img3',
    'img4',
    'img5',
    'img6',
   
];
const creatElement=(tag,className)=>{
    const element=document.createElement(tag)
    element.className=className
    return element;
}

const creatCard=(vaga)=>{

    const card=creatElement('div','card')
    const back=creatElement('div','face frente')
    const front=creatElement('div','face verso')


    front.style.backgroundImage =`url('../../../src/img/${vaga}.jpg')`;

    card.appendChild(front)
    card.appendChild(back)
return card
}


const loadPage=()=>{

    vagas.forEach((vaga)=>{
    const card=creatCard(vaga)
    content.appendChild(card)
    })
}

loadPage()
