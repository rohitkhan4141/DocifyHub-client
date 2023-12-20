const Loading = () => {
  return (
    <div className='flex items-center justify-center mt-20'>
      <div>
        <div className='relative'>
          <div className='w-20 h-20 border-s-teal-200	 border-4 rounded-full'></div>
          <div className='w-20 h-20 border-s-teal-700	 border-t-4 animate-spin rounded-full absolute left-0 top-0'></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
