const DueList = {
    getDueList: (content, start = 0)=> {
        return [
            {content: content.toString(), due: 1 + start, isRecap: false},
            {content: content.toString(), due: 1 + start, isRecap: true},
            {content: content.toString(), due: 2 + start, isRecap: true},
            {content: content.toString(), due: 4 + start, isRecap: true},
            {content: content.toString(), due: 7 + start, isRecap: true},
            {content: content.toString(), due: 15 + start, isRecap: true},
            {content: content.toString(), due: 30 + start, isRecap: true}
        ]
    },

    getMultipleDueList: (contentList)=> {
        let result = [];
        contentList.forEach((element, idx) => {
            result = result.concat(DueList.getDueList(element, idx))
        });

        return result;
    }
} 

module.exports = DueList;