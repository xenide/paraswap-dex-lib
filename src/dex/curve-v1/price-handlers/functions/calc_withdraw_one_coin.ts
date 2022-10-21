import { PoolState } from '../../types';
import { get_D } from './get_D';
import { get_y_D } from './get_y_D';
import { _A } from './_A';
import { _calc_withdraw_one_coin } from './_calc_withdraw_one_coin';
import { _xp_mem } from './_xp_mem';

export interface DependantFuncs {
  _calc_withdraw_one_coin: _calc_withdraw_one_coin;
  _A: _A;
  _xp_mem: _xp_mem;
  get_D: get_D;
  get_y_D: get_y_D;
}

export type calc_withdraw_one_coin = (
  state: PoolState,
  funcs: DependantFuncs,
  _burn_amount: bigint,
  i: number,
) => bigint;

const _default: calc_withdraw_one_coin = (
  state: PoolState,
  funcs: DependantFuncs,
  _burn_amount: bigint,
  i: number,
): bigint => {
  return funcs._calc_withdraw_one_coin(state, funcs, _burn_amount, i)[0];
};

export enum variations {
  DEFAULT = 'default',
}

export const mappings: Record<variations, calc_withdraw_one_coin> = {
  [variations.DEFAULT]: _default,
};
