import {
  IAddRelationAction, ICountAction,
  IInsertAction,
  IMutateAction,
  IRemoveRelationAction,
  IReturnAction,
  ISelectAction,
  TAction,
} from '_config/config.handler';
import insertActionHandler from './insert';
import mutateActionHandler from './mutate';
import selectActionHandler from './select';
import returnActionHandler from './return';
import relationActionHandler from './relation';
import countActionHandler from './count';

export interface IActionPayload {
  [key: string]: any;
}

export type TCreateActionHandler<TPayload extends TAction> = (
  payload: TPayload,
) => string;

export interface IActionHandler {
  insert: TCreateActionHandler<IInsertAction>;
  mutate: TCreateActionHandler<IMutateAction>;
  select: TCreateActionHandler<ISelectAction>;
  count: TCreateActionHandler<ICountAction>;
  addRelation: TCreateActionHandler<IAddRelationAction>;
  removeRelation: TCreateActionHandler<IRemoveRelationAction>;
  return: TCreateActionHandler<IReturnAction>;
}

// action handler by action name
const actionHandler: IActionHandler = {
  insert: insertActionHandler,
  mutate: mutateActionHandler,
  select: selectActionHandler,
  count: countActionHandler,
  addRelation: relationActionHandler,
  removeRelation: relationActionHandler,
  return: returnActionHandler,
};

export default actionHandler;
