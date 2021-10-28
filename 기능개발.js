function solution(progresses, speeds) {
    // progresses : 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
    // speeds : 각 작업의 개발 속도가 적힌 정수 배열
    // output : 각 배포마다 몇 개의 기능이 배포되는지 리턴
    var answer = [];
    // 각 progresses 마다 속도에 맞게 며칠 걸리는지 구하기
    var days = [];
    progresses.forEach((item, index) => {
        var day = Math.ceil((100-item)/speeds[index]);
        days.push(day);
    });

    // 첫번째 작업부터 배포되는 일정을 구함
    // 0이 된 애들은 배포 가능한 상태를 의미함
    var index = 0;
    while(days.length > 0) {
        var finish = 0;
        var first = days[0];
        days = days.map(item => item - first);
        while(true) {
            if(days[0] <= 0) {
                finish++;
                days.shift();
            } else {
                break;
            }
        }
        answer.push(finish);
    }
    return answer;
}