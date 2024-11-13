import { useEffect, useState } from 'react';

const useEthereum = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [currentChainCode, setCurrentChainCode] = useState<string>('');

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
        fillCurrentAccounts,
        fillCurrentChainCode,
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

  const handleAccountsChanged = (...args: any[]) => {
    setAccounts(args);
  };

  const timer = setInterval(() => {
    if (window.ethereum) {
      const a = (window.ethereum as any).isConnected();
      console.log(a);
    }
  }, 1000);

  useEffect(() => {
    fillBaseInfo();
    if (window.ethereum) {
      window.ethereum.on('connect', handleConnect);
      window.ethereum.on('disconnect', handleDisconnect);
      window.ethereum.on('chainChanged', handleChainChanged);
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      return () => {
        window.ethereum?.removeListener('connect', handleConnect);
        window.ethereum?.removeListener('disconnect', handleDisconnect);
        window.ethereum?.removeListener('chainChanged', handleChainChanged);
        window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
        clearInterval(timer);
      };
    }
  }, []);

  return {
    accounts,
    currentChainCode,
  };
};

export default useEthereum;
