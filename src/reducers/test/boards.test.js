import reducer from '../boards'
import * as actionTypes from '../../utils/actionTypes'

describe('board reducer ', () => {
  it('初期値を返すこと', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        byId: {
          'board1': {
            id: 'board1',
            name: 'first board',
            columns: ['column1'],
          },
          'board2': {
            id: 'board2',
            name: 'second board',
            columns: ['column2'],
          },
        },
        currentId: 'board1',
        isActive: false,
      }
    )
  })
  it('boardを開く', () => {
    expect(reducer(
      {
        byId: {
          'board1': {
            id: 'board1',
            name: 'first board',
            columns: ['column1'],
          },
        },
        currentId: 'board1',
        isActive: false,
      }, {
        type: actionTypes.openSelectedBoard,
        boardId: 'board1'
      }
    )).toEqual(
      {
        byId: {
          'board1': {
            id: 'board1',
            name: 'first board',
            columns: ['column1'],
          },
        },
        currentId: 'board1',
        isActive: true,
      }
    )
  })
  it('boardリストに戻る', () => {
    expect(reducer(
      {
        byId: {
          'board1': {
            id: 'board1',
            name: 'first board',
            columns: ['column1'],
          },
        },
        currentId: 'board1',
        isActive: true,
      }, {
        type: actionTypes.backToBoardList,
        boardId: 'board1'
      }
    )).toEqual(
      {
        byId: {
          'board1': {
            id: 'board1',
            name: 'first board',
            columns: ['column1'],
          },
        },
        currentId: 'board1',
        isActive: false,
      }
    )
  })
  it('新しいcolumnをboardに追加', () => {
    expect(reducer(
      {
        byId: {
          'board1': {
            id: 'board1',
            name: 'first board',
            columns: ['column1'],
          },
        },
        currentId: 'board1',
        isActive: true,
      }, {
        type: actionTypes.registerNewColumnToBoard,
        boardId: 'board1',
        newColumnId: 'column2',
      }
    )).toEqual(
      {
        byId: {
          'board1': {
            id: 'board1',
            name: 'first board',
            columns: ['column1', 'column2'],
          },
        },
        currentId: 'board1',
        isActive: true,
      }
    )
  })
  it('新しいboardを追加', () => {
    expect(reducer(
      {
        byId: {
          'board1': {
            id: 'board1',
            name: 'first board',
            columns: ['column1'],
          },
        },
        currentId: 'board1',
        isActive: false,
      }, {
        type: actionTypes.createNewBoard,
        newBoardId: 'board2',
      }
    )).toEqual(
      {
        byId: {
          'board1': {
            id: 'board1',
            name: 'first board',
            columns: ['column1'],
          },
          'board2': {
            id: 'board2',
            name: 'new Board',
            columns: [],
          },
        },
        currentId: 'board1',
        isActive: false,
      }
    )
  })
})