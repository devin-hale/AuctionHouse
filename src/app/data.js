import { useGetTokenQuery } from "@/services/blizzardApi";

export const Data = () => {
  const { data, error, isLoading } = useGetTokenQuery();

  console.log(data);
  return (
    <>
      <div>
        {isLoading ? (
          <p>Loading</p>
        ) : error ? (
          <p>Error</p>
        ) : (
          <p>{data.access_token}</p>
        )}
      </div>
    </>
  );
};
