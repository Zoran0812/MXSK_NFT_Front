import React from 'react';
import BigNumber from 'bignumber.js';

import { useReload } from 'hooks/useReload';
import useRefresh from 'hooks/useRefresh'
import { useAsyncEffect } from 'hooks/useAsyncEffect';
import { useWallet } from 'wallets/wallet';
import Web3Contract from 'web3/contract';

export const CONTRACT_MXHK_ADDRESS = String(process.env.REACT_APP_CONTRACT_MXHK);

type MxskData = {
  maxSupply: number;
  maxMintAmount: number;
  cost: BigNumber | undefined;
  paused: boolean;
  revealed: boolean;
  totalSupply: number;
  tokensOfOwner: Array<string>;
};

export type MxskContract = MxskData & {
  contract: Web3Contract;
  reload(): void;
  mint: (_mintAmount: number, ethAmount: BigNumber) => Promise<any>;
};

const InitialData: MxskData = {
  maxSupply: 0,
  maxMintAmount: 0,
  cost: new BigNumber(0),
  paused: true,
  revealed: false,
  totalSupply: 0,  
  tokensOfOwner: undefined
};

export function useMxskContract(): MxskContract {
  const [reload] = useReload();
  const { fastRefresh } = useRefresh()
  const wallet = useWallet();
  const contract = React.useMemo<Web3Contract>(() => {
    return new Web3Contract(
      require('web3/abi/mxsk.json'),
      CONTRACT_MXHK_ADDRESS,
      'MXHK',
    );
  }, []);

  const [data, setData] = React.useState<MxskData>(InitialData);

  useAsyncEffect(async () => {
    let [cost, paused, maxSupply, totalSupply, maxMintAmount] = await contract.batch([
      {
        method: 'cost',
        transform: (value: string) => new BigNumber(value),
      },
      {
        method: 'paused',
      },
      {
        method: 'maxSupply',
      },
      {
        method: 'totalSupply',
      },
      {
        method: 'maxMintAmount',
      },
    ]);

    setData(prevState => ({
      ...prevState,
      cost,
      paused,
      maxSupply,
      totalSupply,
      maxMintAmount,
    }));
  }, [reload]);

  useAsyncEffect(async () => {
    /*
    let [whitelist, tokensOfOwner] = await contract.batch([
      {
        method: 'whitelist',
        methodArgs: [wallet.account]
      },
      {
        method: 'tokensOfOwner',
        methodArgs: [wallet.account]
      },
    ]);

    setData(prevState => ({
      ...prevState,
      whitelist,
      tokensOfOwner,
    }));
    */
  }, [wallet]);

  const mint = React.useCallback(async (_mintAmount: number, ethAmount: BigNumber): Promise<any> => {
    if (!wallet.account) {
      return Promise.reject();
    }

    const result = await contract.send('mint', [_mintAmount], {
      from: wallet.account,
      value: ethAmount.toString(10)
    }, reload);
    return result;
  }, [reload, contract, wallet.account]);


  return React.useMemo<MxskContract>(() => ({
    ...data,
    contract,
    reload,
    mint
  }), [
    data,
    contract,
    reload,
    mint
  ]);
}
