import { useEffect } from 'react';
import useEthereum from '@/hooks/useEthereum';
import AddressDisplay from '../AddressDisplay';

const ConnectButton = () => {
  const info = useEthereum();

  return (
    <>
    <span>{info.loading ? '加载中' : '加载完成'}</span>
    <span>{info.currentChainCode}</span>
    <span>{info.accounts.map((account) => <span>{account}</span>)}</span>
    <button
      onClick={async () => {
        if (!window.ethereum) {
          alert('请先安装钱包');
          return;
        }
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log(accounts);
      }}
      className="
        relative group
        px-6 py-2.5
        rounded-xl
        bg-gradient-to-r from-[#FFB800]/90 via-[#FFAA00]/85 to-[#FF9500]/90
        hover:from-[#FFB800] hover:via-[#FFAA00] hover:to-[#FF9500]
        transition-all duration-500 ease-out
        shadow-[0_4px_25px_-4px_rgba(255,184,0,0.25)]
        hover:shadow-[0_8px_30px_-4px_rgba(255,184,0,0.3),0_4px_15px_-1px_rgba(255,149,0,0.2)]
        hover:scale-[1.02]
        overflow-hidden
        backdrop-blur-sm
      "
    >
      {/* 按钮文字 */}
      <span className="
        relative z-10
        font-medium text-white text-lg
        tracking-wide
        drop-shadow-[0_1px_3px_rgba(0,0,0,0.2)]
      ">
        Connect Wallet
      </span>

      {/* 玻璃态背景 */}
      <div className="
        absolute inset-0
        bg-white/[0.075]
        backdrop-blur-md
        transition-opacity duration-300
      "/>

      {/* 增强的流光效果 */}
      <div className="
        absolute inset-0
        bg-gradient-to-r from-transparent via-white/40 to-transparent
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-transform duration-1000 ease-in-out
        group-hover:opacity-100 opacity-0
      "/>

      {/* 主光晕效果 */}
      <div className="
        absolute -inset-1
        bg-gradient-to-r from-[#FFB800]/30 via-[#FFAA00]/25 to-[#FF9500]/30
        blur-xl
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500 ease-in-out
        -z-10
        animate-pulse-slow
      "/>

      {/* 内部光晕 */}
      <div className="
        absolute inset-0
        bg-gradient-to-t from-[#FF9500]/15 via-[#FFAA00]/10 to-[#FFB800]/15
        group-hover:opacity-75
        transition-opacity duration-300
      "/>

      {/* 渐变边框 */}
      <div className="
        absolute inset-0 rounded-xl
        p-[1px]
        bg-gradient-to-r from-[#FFB800]/30 via-[#FFAA00]/30 to-[#FF9500]/30
        group-hover:from-[#FFB800]/40 group-hover:via-[#FFAA00]/40 group-hover:to-[#FF9500]/40
        transition-all duration-300
      ">
        <div className="
          absolute inset-0
          rounded-xl
          shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]
        "/>
      </div>

      {/* 漂亮的顶部光泽 */}
      <div className="
        absolute inset-x-0 top-0 h-[50%]
        bg-gradient-to-b from-white/10 to-transparent
        opacity-50 group-hover:opacity-70
        transition-opacity duration-300
      "/>
    </button>
    </>
  );
};

export default ConnectButton;
