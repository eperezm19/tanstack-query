import { useRandomNumber } from "../hooks/useRandomNumber";

export default function CryptoContainer() {
  const { randomQuery } = useRandomNumber();

  if (randomQuery.isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h2>Numero random {randomQuery.data}</h2>
      <button onClick={() => randomQuery.refetch()}>Genera numero</button>
      {randomQuery.error && (
        <h2>
          Error
          {randomQuery.error.message}
        </h2>
      )}
    </div>
  );
}
