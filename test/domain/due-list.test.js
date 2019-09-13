const DueList = require('../../domain/due-list')

test('first task should return default due', ()=> {
    let list = DueList.getDueList(1);
    expect(list.length).toBe(7)

    expect(list[0]).toEqual({content: '1', due: 1, isRecap: false})
    expect(list[1]).toEqual({content: '1', due: 1, isRecap: true})
    expect(list[2]).toEqual({content: '1', due: 2, isRecap: true})
    expect(list[3]).toEqual({content: '1', due: 4, isRecap: true})
    expect(list[4]).toEqual({content: '1', due: 7, isRecap: true})
    expect(list[5]).toEqual({content: '1', due: 15, isRecap: true})
    expect(list[6]).toEqual({content: '1', due: 30, isRecap: true})
})

test('second task should return default due', ()=> {
    let list = DueList.getDueList('b', 3);
    expect(list.length).toBe(7)

    expect(list[0]).toEqual({content: 'b', due: 4, isRecap: false})
    expect(list[1]).toEqual({content: 'b', due: 4, isRecap: true})
})

test('tasks should return 14 due', ()=> {
    let list = DueList.getMultipleDueList(['a', 'b']);
    expect(list.length).toBe(14)

    expect(list[0]).toEqual({content: 'a', due: 1, isRecap: false})
    expect(list[1]).toEqual({content: 'a', due: 1, isRecap: true})

    expect(list[7]).toEqual({content: 'b', due: 2, isRecap: false})
    expect(list[8]).toEqual({content: 'b', due: 2, isRecap: true})
})