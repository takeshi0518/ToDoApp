import { todoReducer } from '../../context/TodoContext';

describe('todoReducerの動作確認', () => {
  test('get: stateの初期化', () => {
    const initTodo = [];
    const action = {
      type: 'get',
      payload: [{ _id: 'abc123', content: 'テストタスク' }],
    };
    const newTodo = todoReducer(initTodo, action);
    expect(newTodo).toEqual([{ _id: 'abc123', content: 'テストタスク' }]);
  });

  test('post: タスクを追加', () => {
    const initTodo = [{ _id: 'abc123', content: '既存のタスク' }];
    const action = {
      type: 'post',
      payload: { _id: 'def456', content: '追加タスク' },
    };
    const newTodo = todoReducer(initTodo, action);
    expect(newTodo).toEqual([
      { _id: 'abc123', content: '既存のタスク' },
      { _id: 'def456', content: '追加タスク' },
    ]);
  });

  test('delete: タスクの削除', () => {
    const initTodo = [
      { _id: 'abc123', content: '残すタスク' },
      { _id: 'def456', content: '削除するタスク' },
    ];
    const action = {
      type: 'delete',
      payload: 'def456',
    };
    const newTodo = todoReducer(initTodo, action);
    expect(newTodo).toEqual([{ _id: 'abc123', content: '残すタスク' }]);
  });

  test('patch: タスクの更新', () => {
    const initTodo = [
      { _id: 'abc123', content: 'テストタスク' },
      { _id: 'def456', content: '更新前のタスク' },
    ];
    const action = {
      type: 'patch',
      payload: { _id: 'def456', content: '更新後のタスク' },
    };
    const newTodo = todoReducer(initTodo, action);
    expect(newTodo).toEqual([
      { _id: 'abc123', content: 'テストタスク' },
      { _id: 'def456', content: '更新後のタスク' },
    ]);
  });
});
