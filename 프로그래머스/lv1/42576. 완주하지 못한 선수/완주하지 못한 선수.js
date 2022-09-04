function solution(participant, completion) {
    const part_dict = participant.reduce((obj, cur) => {
        if (!obj[cur]) {
            obj[cur]=0
        }
        obj[cur]+=1
        return obj
    }, {})
    const comp_dict = completion.reduce((obj, cur) => {
        if (!obj[cur]) {
            obj[cur]=0
        }
        obj[cur]+=1
        return obj
    }, {})
    for (let key in part_dict) {
        if (part_dict[key]!=comp_dict[key]) {
            return key
        }
    }
}