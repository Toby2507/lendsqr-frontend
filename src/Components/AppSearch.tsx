import { SubmitHandler, useForm } from 'react-hook-form';
import { AiOutlineSearch } from 'react-icons/ai';

interface searchInterface {
  parentClass: string;
}
interface searchInputInterface {
  search: string;
}

const AppSearch = ({ parentClass }: searchInterface) => {
  const { register, handleSubmit, reset } = useForm<searchInputInterface>();

  const onSearch: SubmitHandler<searchInputInterface> = () => { reset(); };
  return (
    <form className={`${parentClass}-nav__search`} onSubmit={handleSubmit(onSearch)}>
      <input type="search" id="search" {...register('search')} placeholder='Search for anything' />
      <button type="submit"><AiOutlineSearch /></button>
    </form>
  );
};

export default AppSearch;