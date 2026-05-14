import React from 'react';
import { Todo } from '../../types/deal';
import clsx from 'clsx';
import { UserInfo } from '../UserInfo';
import UsersFromServer from '../../api/users';

type Props = {
  todo: Todo;
};

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  const currentUser = UsersFromServer.find(user => user.id === todo.userId);

  return (
    <article
      data-id={todo.id}
      className={clsx('TodoInfo', todo.completed && 'TodoInfo--completed')}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>

      {currentUser !== undefined && <UserInfo user={currentUser} />}
    </article>
  );
};
