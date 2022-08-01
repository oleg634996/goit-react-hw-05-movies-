import { useSearchParams } from 'react-router-dom';

function Form({ onSubmit }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handelSubmit = event => {
    event.preventDefault();
    const value = event.target.elements.search.value;

    setSearchParams({ search: value });
    onSubmit(search.toLowerCase().trim());
  };

  return (
    <form onSubmit={handelSubmit}>
      <input type="text" name="search" />
      <button type="submit">search</button>
    </form>
  );
}

export default Form;
