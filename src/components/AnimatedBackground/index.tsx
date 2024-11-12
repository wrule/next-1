const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-primary-200/50 to-purple-200/35">
      {/* 主动态背景 - 减弱紫色的存在感 */}
      <div 
        className="
          absolute inset-0 
          bg-[length:400%_400%]
          animate-gradient-x
          bg-gradient-to-r from-primary-300/40 via-purple-300/25 to-primary-300/40
        "
      />
      
      {/* 动态光斑层 */}
      <div className="absolute inset-0">
        {/* 明亮的黄色光斑 */}
        <div 
          className="
            absolute left-[10%] top-[15%]
            w-[600px] h-[600px] 
            bg-gradient-to-br from-primary-500/45 via-primary-400/40 to-primary-300/35
            rounded-full 
            blur-3xl
            animate-blob
            mix-blend-soft-light
          "
        />
        {/* 柔和的紫色光斑 */}
        <div 
          className="
            absolute right-[10%] bottom-[15%]
            w-[800px] h-[800px] 
            bg-gradient-to-tr from-purple-400/20 via-purple-300/18 to-purple-200/15
            rounded-full 
            blur-[100px]
            animate-blob-reverse
            mix-blend-soft-light
          "
        />
      </div>

      {/* 额外的装饰光斑 */}
      <div className="absolute inset-0">
        <div 
          className="
            absolute left-[60%] top-[60%]
            w-[300px] h-[300px]
            bg-gradient-to-r from-primary-400/25 to-primary-300/15
            rounded-full
            blur-2xl
            animate-float
            mix-blend-soft-light
          "
        />
        <div 
          className="
            absolute right-[60%] bottom-[60%]
            w-[250px] h-[250px]
            bg-gradient-to-l from-purple-300/15 to-purple-200/10
            rounded-full
            blur-2xl
            animate-float-reverse
            mix-blend-soft-light
          "
        />
      </div>

      {/* 微妙的纹理层 */}
      <div 
        className="
          absolute inset-0 
          bg-gradient-to-t from-white/[0.03] to-transparent
          mix-blend-overlay
        "
      />
    </div>
  );
};

export default AnimatedBackground;
