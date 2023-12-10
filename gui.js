function layout(){
    output=""
    for(i=1;i<=10;i++){
        output=output+`
        <tr>
        <td><button type="button" class="btn btn-success" id="${i}" value="${i}" onclick="selectedNumber(${i})">${i} </button></td>
        <td><button type="button" class="btn btn-success" id="${i+10}" value="${i+10}" onclick="selectedNumber(${i+10})">${i+10}</button></td>
        <td><button type="button" class="btn btn-success" id="${i+20}" value="${i+10}" onclick="selectedNumber(${i+20})">${i+20}</button></td>
        <td><button type="button" class="btn btn-success" id="${i+30}" value="${i+20}" onclick="selectedNumber(${i+30})">${i+30}</button></td>
        <td><button type="button" class="btn btn-success" id="${i+40}" value="${i+30}" onclick="selectedNumber(${i+40})">${i+40}</button></td>
        <td><button type="button" class="btn btn-success" id="${i+50}" value="${i+40}" onclick="selectedNumber(${i+50})">${i+50}</button></td>
        <td><button type="button" class="btn btn-success" id="${i+60}" value="${i+50}" onclick="selectedNumber(${i+60})">${i+60}</button></td>
        <td><button type="button" class="btn btn-success" id="${i+70}" value="${i+60}" onclick="selectedNumber(${i+70})">${i+70}</button></td>
        <td><button type="button" class="btn btn-success" id="${i+80}" value="${i+70}" onclick="selectedNumber(${i+80})">${i+80}</button></td>
        <td><button type="button" class="btn btn-success" id="${i+90}" value="${i+80}" onclick="selectedNumber(${i+90})">${i+90}</button></td>
        </tr>`
    }
    tableid=document.getElementById('layoutid').innerHTML=output
}
layout()

const rand=Math.floor(Math.random(100)*100)
console.log(rand);

function selectedNumber(num){
    console.log(num);
    if(num==rand){
          alert("you win")
        }
    else if(num<=rand){
        for(i=1;i<=num;i++){
            currentid=document.getElementById(i)
            currentid.className="btn btn-danger disabled"
            console.log('danger');
        }
    }
    else if(num>=rand){
        for(i=num;i<=100;i++){
            currentid=document.getElementById(i)
            currentid.className="btn btn-danger disabled"
            console.log('danger');
        }
    }
    }
