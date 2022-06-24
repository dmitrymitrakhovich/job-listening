import { useDispatch, useSelector } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { clearFilter, removeFilter } from '../store/filters/filter-actions';
import { selectFilters } from '../store/filters/filter-selectors';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilters);

  if (!currentFilter.length) {
    return null;
  }

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {currentFilter.map((filter) => (
            <Badge
              key={filter}
              variant='clearable'
              onClick={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter)}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
