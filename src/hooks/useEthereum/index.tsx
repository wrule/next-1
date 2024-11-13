import { useEffect, useState } from 'react';

const useEthereum = () => {
  const [accounts, setAccounts] = useState<string[]>([]);
  const [currentChainCode, setCurrentChainCode] = useState<string>('');

  const handleConnect = (...args: any[]) => {
    console.log('connect', args);
  };

  const handleChainChanged = (chainCode: string) => {
    setCurrentChainCode(chainCode);
  };

  const handleAccountsChanged = (...args: any[]) => {
    console.log('accountsChanged', args);
    setAccounts(args);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('connect', handleConnect);
      window.ethereum.on('chainChanged', handleChainChanged);
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      return () => {
        window.ethereum?.removeListener('connect', handleConnect);
        window.ethereum?.removeListener('chainChanged', handleChainChanged);
        window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, []);

  return {
    accounts,
    currentChainCode,
  };
};

export default useEthereum;
