
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-primary-100/50 to-purple-100/40">
      {/* 主动态背景 - 优雅的双色渐变 */}
      <div 
        className="
          absolute inset-0 
          bg-[length:400%_400%]
          animate-gradient-x
          bg-gradient-to-r from-primary-200/30 via-purple-200/25 to-primary-200/30
        "
      />
      
      {/* 动态光斑层 */}
      <div className="absolute inset-0">
        {/* 明亮的黄色光斑 */}
        <div 
          className="
            absolute left-[10%] top-[15%]
            w-[600px] h-[600px] 
            bg-gradient-to-br from-primary-300/40 via-primary-200/35 to-primary-100/30
            rounded-full 
            blur-3xl
            animate-blob
            mix-blend-soft-light
          "
        />
        {/* 大型紫色光斑 */}
        <div 
          className="
            absolute right-[10%] bottom-[15%]
            w-[800px] h-[800px] 
            bg-gradient-to-tr from-purple-400/25 via-purple-300/20 to-purple-200/15
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
            bg-gradient-to-r from-primary-200/20 to-transparent
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
            bg-gradient-to-l from-purple-300/15 to-transparent
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
          bg-gradient-to-t from-white/[0.02] to-transparent
          mix-blend-overlay
        "
      />
    </div>
  );
};

export default AnimatedBackground;
