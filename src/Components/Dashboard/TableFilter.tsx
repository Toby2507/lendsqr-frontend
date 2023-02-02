import { Column } from '@tanstack/react-table';
import { memo, useEffect, useMemo, useState } from 'react';
import { DebouncedInput } from './DebouncedInput';
import filterData from '../../Data/tableFilterOptions.json';

interface filterBoxInterface {
  column: Column<any, unknown>;
  filter: boolean;
  reset: boolean;
  setReset: React.Dispatch<React.SetStateAction<boolean>>;
  setFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setShowBox: React.Dispatch<React.SetStateAction<boolean>>;
}

const TableFilter = ({ column, filter, reset, setFilter, setReset, setShowBox }: filterBoxInterface) => {
  const filterKey = column.id as keyof typeof filters;
  const columnFilterValue = column.getFilterValue();
  const [value, setValue] = useState<string>((columnFilterValue ?? '') as string);
  const filters = filterData;
  const sortedUniqueValues = useMemo(() => Array.from(column.getFacetedUniqueValues().keys()).sort(), [column]);

  useEffect(() => {
    if (filter) {
      column.setFilterValue(value);
      setTimeout(() => setShowBox(false), 100);
      setTimeout(() => setFilter(false), 200);
    }
    if (reset) {
      setValue("");
      setTimeout(() => column.setFilterValue(value), 100);
      setTimeout(() => setShowBox(false), 200);
      setTimeout(() => setReset(false), 300);
    }
  }, [reset, filter, column, value, setFilter, setReset, setShowBox]);

  return (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.map((value, i) => <option value={value} key={i} />)}
      </datalist>
      <div className="table-filter__input">
        <label htmlFor={`search_${column.id}`} className="table-filter__input--label">{filters[filterKey].title}</label>
        <DebouncedInput
          type={filters[filterKey].type}
          id={`search_${column.id}`}
          value={value}
          onChange={value => setValue(value as string)}
          placeholder={filters[filterKey].placeholder}
          className="table-filter__input--input"
          list={column.id + 'list'}
        />
      </div>
    </>
  );
};

export default memo(TableFilter);