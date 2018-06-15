import * as actions from '../boards'
import * as actionTypes from '../../utils/actionTypes'

describe('boards actions ', () => {
  it('選択したboardを開く', () => {
    const boardId = 'board1'
    const expectedAction = {
      type: actionTypes.openSelectedBoard,
      boardId,
    }
    expect(actions.openSelectedBoard(boardId)).toEqual(expectedAction)
  })
  it('boardリストに戻る', () => {
    const expectedAction = {
      type: actionTypes.backToBoardList,
    }
    expect(actions.backToBoardList()).toEqual(expectedAction)
  })
  it('新しいcolumnをboardに登録する', () => {
    const boardId = 'board1'
    const newColumnId = 'column1'
    const expectedAction = {
      type: actionTypes.registerNewColumnToBoard,
      boardId,
      newColumnId,
    }
    expect(actions.registerNewColumnToBoard(boardId, newColumnId)).toEqual(expectedAction)
  })
  it('新しいboardを作る', () => {
    const newBoardId = 'board2'
    const expectedAction = {
      type: actionTypes.createNewBoard,
      newBoardId,
    }
    expect(actions.createNewBoard(newBoardId)).toEqual(expectedAction)
  })
})