import { DexParams } from './types';
import { DexConfigMap, AdapterMappings } from '../../types';
import { Network, SwapSide } from '../../constants';

export const ReservoirConfig: DexConfigMap<DexParams> = {
  ReservoirFinance: {
    [Network.AVALANCHE]: {
      subgraphURL:
        'https://data.staging.arkiver.net/robolabs/reservoir-mainnet-v2/graphql',
      factory: '0xDd723D9273642D82c5761a4467fD5265d94a22da',
      router: '0x9Fc6B082DfB632bC11156f6fD2dc5F97F9B865F0',
    },
  },
};

export const Adapters: Record<number, AdapterMappings> = {
  // TODO: to fill in when paraswap team has deployed adapter contracts
  [Network.AVALANCHE]: {
    // [SwapSide.SELL]: [
    //   {
    //     name: 'AvaxSellAdapter',
    //     index: 0,
    //   },
    // ],
    // [SwapSide.BUY]: [
    //   {
    //     name: 'AvaxBuyAdapter',
    //     index: 0,
    //   },
    // ],
  },
};
