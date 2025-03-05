const AnimatedBackground = () => {
    return (
      <div className="absolute w-full h-full overflow-hidden">
        <div className="absolute w-24 h-24 bg-pink-400 rounded-full blur-lg opacity-70 top-10 left-20 animate-move1"></div>
        <div className="absolute w-28 h-28 bg-green-300 rounded-full blur-xl  opacity-70 top-1/2 left-3/4 animate-move2"></div>
        <div className="absolute w-20 h-20 bg-yellow-300 rounded-full blur-xl  opacity-70 top-1/2 left-4/3  animate-move3"></div>
        <div className="absolute w-28 h-28 bg-blue-400 rounded-full blur-xl opacity-70 top-12 right-5 animate-move4"></div>
      </div>
    );
  };
  
  export default AnimatedBackground;
  