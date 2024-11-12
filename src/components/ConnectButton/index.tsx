const ConnectButton = () => {
  return (
    <button
      className="
        relative group
        px-6 py-2.5
        rounded-xl
        bg-gradient-to-r from-primary-500/90 via-primary-400/85 to-purple-300/70
        hover:from-primary-500 hover:via-primary-400 hover:to-purple-300/80
        transition-all duration-300 ease-out
        shadow-lg hover:shadow-xl
        hover:scale-[1.02]
        overflow-hidden
      "
    >
      {/* 按钮文字 */}
      <span className="
        relative z-10
        font-medium text-white text-lg
        tracking-wide
        drop-shadow-sm
      ">
        Connect Wallet
      </span>

      {/* 流光效果 */}
      <div className="
        absolute inset-0
        bg-gradient-to-r from-white/0 via-white/20 to-white/0
        translate-x-[-100%] group-hover:translate-x-[100%]
        transition-transform duration-1000
      "/>

      {/* 光晕效果 */}
      <div className="
        absolute -inset-1
        bg-gradient-to-r from-primary-400/20 via-primary-300/15 to-purple-200/10
        blur-xl
        opacity-0 group-hover:opacity-100
        transition-opacity duration-300
        -z-10
      "/>

      {/* 边框光效 */}
      <div className="
        absolute inset-0
        rounded-xl
        border border-white/20
      "/>
    </button>
  );
};

export default ConnectButton;
