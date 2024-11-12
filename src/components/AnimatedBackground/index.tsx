const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* 主动态背景 */}
      <div 
        className="
          absolute inset-0 
          bg-[length:400%_400%]
          animate-gradient-x
          bg-gradient-to-r from-violet-300 via-blue-300 to-violet-300
        "
      />
      
      {/* 交叉渐变层 */}
      <div 
        className="
          absolute inset-0 
          bg-[length:400%_400%]
          animate-gradient-y
          bg-gradient-to-b from-transparent via-fuchsia-200/30 to-transparent
        "
      />

      {/* 动态光斑 */}
      <div className="absolute inset-0">
        <div 
          className="
            absolute -left-20 top-1/4 
            w-72 h-72 
            bg-blue-400/30 
            rounded-full 
            blur-3xl
            animate-blob-spin
          "
        />
        <div 
          className="
            absolute -right-20 top-1/3 
            w-72 h-72 
            bg-purple-400/30 
            rounded-full 
            blur-3xl
            animate-blob-spin-slow
          "
        />
        <div 
          className="
            absolute left-1/3 bottom-1/4 
            w-72 h-72 
            bg-pink-400/30 
            rounded-full 
            blur-3xl
            animate-blob
          "
        />
      </div>

      {/* 闪光效果层 */}
      <div 
        className="
          absolute inset-0 
          bg-gradient-to-t from-white/10 to-transparent 
          animate-shine
        "
      />
    </div>
  );
};

export default AnimatedBackground;
