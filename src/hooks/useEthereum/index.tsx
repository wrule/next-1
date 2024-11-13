import { useCallback, useEffect, useMemo, useState } from 'react';
import { formatEther, formatUnits } from 'ethers';

const formatBalance = (hexBalance: string) => {
  const balance = BigInt(hexBalance);
  
  // 转换为 ETH (除以 10^18)
  const ethBalance = Number(balance) / 1e18;
  
  // 格式化显示，保留特定位数
  return ethBalance.toFixed(4);
};

const useEthereum = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [currentChainCode, setCurrentChainCode] = useState<string>('');
  const [balance, setBalance] = useState<string>('');

  const connected = useMemo(() => accounts.length > 0, [accounts]);
  const mainAccount = useMemo(() => accounts[0], [accounts]);

  const ethereum = window.ethereum!;

  const fillCurrentAccounts = async () => {
    const response = await ethereum.request({ method: 'eth_accounts' });
    setAccounts(response);
  };

  const fillCurrentChainCode = async () => {
    const response = await ethereum.request({ method: 'eth_chainId' });
    setCurrentChainCode(response);
  };

  const fillBalance = useCallback(async () => {
    const response = await ethereum.request({
      method: 'eth_getBalance',
      params: [mainAccount, 'latest'],
    });
    setBalance(response);
  }, [mainAccount]);

  const fillBaseInfo = async () => {
    setLoading(true);
    try {
      await Promise.all([
        fillCurrentAccounts(),
        fillCurrentChainCode(),
      ]);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const handleConnect = (...args: any[]) => {
    console.log('connect', args);
  };

  const handleDisconnect = (...args: any[]) => {
    console.log('disconnect', args);
  };

  const handleChainChanged = (chainCode: string) => {
    setCurrentChainCode(chainCode);
  };

  const handleAccountsChanged = (accounts: string[]) => {
    setAccounts(accounts);
  };

  useEffect(() => {
    if (mainAccount) {
      fillBalance();
    }
  }, [mainAccount, currentChainCode]);

  useEffect(() => {
    fillBaseInfo();
    ethereum.on('connect', handleConnect);
    ethereum.on('disconnect', handleDisconnect);
    ethereum.on('chainChanged', handleChainChanged);
    ethereum.on('accountsChanged', handleAccountsChanged);
    return () => {
      ethereum.removeListener('connect', handleConnect);
      ethereum.removeListener('disconnect', handleDisconnect);
      ethereum.removeListener('chainChanged', handleChainChanged);
      ethereum.removeListener('accountsChanged', handleAccountsChanged);
    };
  }, []);

  return {
    loading,
    connected,
    accounts,
    mainAccount,
    balance: Number(formatEther(BigInt(balance))).toFixed(4),
    currentChainCode,
  };
};

export default useEthereum;
