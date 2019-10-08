var p = [1,2,3];
var c = [3,1];

//프로그래머스 -- 완주하지 못한 선수

function solution(participants, completion){
 
    participants.sort();
    completion.sort();

    for(let i in participants){
        if(participants[i] != completion[i]) return participants[i];
    }
}


console.log(solution(p,c));