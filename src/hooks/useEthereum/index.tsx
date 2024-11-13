import { useEffect, useMemo, useState } from 'react';

const useEthereum = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [currentChainCode, setCurrentChainCode] = useState<string>('');

  const connected = useMemo(() => accounts.length > 0, [accounts]);

  const ethereum = window.ethereum!;

  const fillCurrentAccounts = async () => {
    const response = await ethereum.request({ method: 'eth_accounts' });
    setAccounts(response);
  };

  const fillCurrentChainCode = async () => {
    const response = await ethereum.request({ method: 'eth_chainId' });
    setCurrentChainCode(response);
  };

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
    currentChainCode,
  };
};

export default useEthereum;
