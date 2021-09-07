import Result from '../../Result/Hit';

export default function ResultsLoader({ results, location }) {
  return (
    <>
      {results.isLoading &&
        [0, 1, 2, 3, 4, 5].map((i) => {
          return <Result key={i} />;
        })}

      {results?.data?.map((result) => {
        return (
          <Result
            key={result.id}
            hit={result}
            score={result?._score}
            location={location}
          />
        );
      })}
    </>
  );
}
