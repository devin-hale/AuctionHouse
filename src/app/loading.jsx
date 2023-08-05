const Loading = () => {
  return (
    <div className="mt-[300px] relative m-auto">
      <div className="loadingAnim h-[100px] w-[100px] m-auto text-center">
        <img
          src="./assets/icons/coinLogo.svg"
          alt=""
          className="h-[100px] w-[100px] absolute inset-y-0 inset-x-0"
        />
      </div>
    </div>
  );
};

export default Loading;
