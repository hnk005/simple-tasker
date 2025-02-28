const Loader = ({ fullScreen = false }: { fullScreen?: boolean }) => {
  return (
    <div
      className={`flex justify-center items-center ${fullScreen ? "fixed inset-0 bg-white/70 backdrop-blur-sm" : "py-4"
        }`}
    >
      <div className="w-12 h-12 border-4 border-green-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
