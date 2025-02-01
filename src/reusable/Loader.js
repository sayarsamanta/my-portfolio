const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 bg-current rounded-full";

  return (
    <div className="flex">
      <div
        className={`${circleCommonClasses} mr-1 dark:bg-white animate-bounce`}
      ></div>
      <div
        className={`${circleCommonClasses} mr-1 dark:bg-white animate-bounce200`}
      ></div>
      <div
        className={`${circleCommonClasses}  dark:bg-white animate-bounce400`}
      ></div>
    </div>
  );
};

export default Loader;
