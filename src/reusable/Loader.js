const Loader = () => {
  let circleCommonClasses = "h-2.5 w-2.5 rounded-full";

  return (
    <div className="flex">
      <div
        className={`${circleCommonClasses} mr-1 bg-black  dark:bg-white animate-bounce`}
      ></div>
      <div
        className={`${circleCommonClasses} mr-1 dark:bg-white bg-black animate-bounce200`}
      ></div>
      <div
        className={`${circleCommonClasses} bg-black  dark:bg-white animate-bounce400`}
      ></div>
    </div>
  );
};

export default Loader;
