import { useState, useMemo } from 'react';
import Avatar from '@mui/material/Avatar';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import lodash from 'lodash';
import { useTranslation } from 'react-i18next';
import { useGetDesignersByPageQuery } from '../../../services/designers';
import PageSection from '../index';
import mapFromDtoToDisplayData from './mappers/fromDtoToDisplayData/fromDtoToDisplayData';

enum SortingColumnNames {
  username = 'username',
  email = 'email',
}

interface Sorting {
  orderBy: string | null;
  order: 'asc' | 'desc';
}

export default function DesignersTableSection() {
  const [page, setPage] = useState(0);
  const [sorting, setSorting] = useState<Sorting>({
    orderBy: null,
    order: 'asc',
  });
  const { t: localize } = useTranslation();
  const { data: designers = { count: 0, results: [] } } =
    // Здесь + 1 т.к. в MUI TablePagination начинает отсчёт с 0, а в API страницы идут с 1.
    useGetDesignersByPageQuery(page + 1);

  const displayData = useMemo(() => {
    if (sorting.orderBy) {
      return lodash.orderBy(
        mapFromDtoToDisplayData(designers.results),
        [sorting.orderBy],
        [sorting.order]
      );
    }

    return mapFromDtoToDisplayData(designers.results);
  }, [designers.results, sorting.order, sorting.orderBy]);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleSorting = (orderBy: string) => () => {
    setSorting((prev) => {
      if (prev.orderBy === orderBy) {
        if (prev.order === 'asc') {
          return { ...prev, order: 'desc' };
        }

        return { orderBy: null, order: 'asc' };
      }

      return {
        order: 'asc',
        orderBy,
      };
    });
  };

  return (
    <PageSection heading={localize('sectionHeadings.designersTable')}>
      <TableContainer component={Paper} sx={{ maxHeight: '60vh' }}>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                {localize('DesignersTable.columnHeadings.avatar')}
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sorting.orderBy === SortingColumnNames.username}
                  direction={sorting.order}
                  onClick={handleSorting(SortingColumnNames.username)}
                />
                {localize('DesignersTable.columnHeadings.username')}
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={sorting.orderBy === SortingColumnNames.email}
                  direction={sorting.order}
                  onClick={handleSorting(SortingColumnNames.email)}
                />
                {localize('DesignersTable.columnHeadings.email')}
              </TableCell>
              <TableCell align="center">
                {localize(
                  'DesignersTable.columnHeadings.inProgressIssuesCount'
                )}
              </TableCell>
              <TableCell align="center">
                {localize('DesignersTable.columnHeadings.doneIssuesCount')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {displayData.map((designer) => (
              <TableRow key={designer.email}>
                <TableCell>
                  <Avatar src={designer.avatar} alt={designer.username} />
                </TableCell>
                <TableCell>{designer.username}</TableCell>
                <TableCell>{designer.email}</TableCell>
                <TableCell align="center">
                  {designer.inProgressIssuesCount}
                </TableCell>
                <TableCell align="center">{designer.doneIssuesCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={designers.count}
        rowsPerPage={17}
        page={page}
        onPageChange={handleChangePage}
        sx={{
          '.MuiTablePagination-select': {
            display: 'none',
          },
          '.MuiTablePagination-selectIcon': {
            display: 'none',
          },
          '.MuiTablePagination-selectLabel': {
            display: 'none',
          },
        }}
      />
    </PageSection>
  );
}
