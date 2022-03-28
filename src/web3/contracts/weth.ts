import React from 'react';
import BigNumber from 'bignumber.js';

import { useReload } from 'hooks/useReload';
import { useAsyncEffect } from 'hooks/useAsyncEffect';
import { useWallet } from 'wallets/wallet';
import Web3Contract from 'web3/contract';

const CONTRACT_WETH_ADDRESS = String(process.env.REACT_APP_MATIC_WETH);
const CONTRACT_MXHK_ADDRESS = String(process.env.REACT_APP_CONTRACT_MXHK);

type WethData = {
  balance: BigNumber;
  allowance: BigNumber;
};

export type WethContract = WethData & {
  contract: Web3Contract;
  reload(): void;
  approve: (amount: BigNumber) => Promise<any>;
};

const InitialData: WethData = {
  balance: new BigNumber(0),
  allowance: new BigNumber(0),
};

export function useWethContract(): WethContract {
  const [reload] = useReload();
  const wallet = useWallet();
  const contract = React.useMemo<Web3Contract>(() => {
    return new Web3Contract(
      require('web3/abi/weth.json'),
      CONTRACT_WETH_ADDRESS,
      'WETH',
    );
  }, []);

  const [data, setData] = React.useState<WethData>(InitialData);

  useAsyncEffect(async () => {
    let [balance, allowance] = await contract.batch([
      {
        method: 'balanceOf',
        methodArgs: [wallet.account],
        transform: (value: string) => new BigNumber(value),
      },
      {
        method: 'allowance',
        methodArgs: [wallet.account, CONTRACT_MXHK_ADDRESS]
      },
    ]);
    
    setData(prevState => ({
      ...prevState,
      balance,
      allowance,
    }));
  }, [wallet, reload]);

  const approve = React.useCallback(async (amount: BigNumber): Promise<any> => {
    if (!wallet.account) {
      return Promise.reject();
    }

    const result = await contract.send('approve', [CONTRACT_MXHK_ADDRESS, amount.toString(10)], {
      from: wallet.account
    }, reload);
    return result;
  }, [reload, contract, wallet.account]);


  return React.useMemo<WethContract>(() => ({
    ...data,
    contract,
    reload,
    approve
  }), [
    data,
    contract,
    reload,
    approve
  ]);
}
