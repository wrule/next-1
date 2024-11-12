const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* 主背景层 */}
      <div className="absolute inset-0 bg-gradient-to-r from-rose-100 to-teal-100 animate-gradient-slow">
        {/* 动态渐变层 */}
        <div className="absolute inset-0 bg-gradient-to-r from-violet-200/40 via-transparent to-fuchsia-200/40 animate-gradient-medium" />
        
        {/* 呼吸光晕 */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse-delay" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse-slow" />
        </div>
        
        {/* 微光效果 */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent animate-shimmer" />
      </div>
    </div>
  );
};

export default AnimatedBackground;
