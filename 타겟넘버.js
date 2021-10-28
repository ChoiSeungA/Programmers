var answer = 0;
var numArr = [];
var numTarget = 0;
function solution(numbers, target) {
    // numbers 배열 안의 숫자로 -, + 를 사용해 target 숫자를 만들기
    // 타겟 넘버를 만드는 방법의 수를 return 하도록!
    numArr = numbers;
    numTarget = target;
    DFS(0, 0);

    return answer;
}

function DFS(index, sum) {
    if(index === numArr.length){
        if(sum === numTarget)   answer++;
        return;
    } else {
        DFS(index+1, sum+numArr[index]);
        DFS(index+1, sum-numArr[index]);
    }
}