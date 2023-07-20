import { TableProps } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { RowData } from 'lib/query/createTableColumnsFromQuery';
import { ReactNode } from 'react';
import { Query } from 'types/api/queryBuilder/queryBuilderData';
import { QueryDataV3 } from 'types/api/widgets/getQuery';

export type QueryTableProps = Omit<
	TableProps<RowData>,
	'columns' | 'dataSource'
> & {
	queryTableData: QueryDataV3[];
	query: Query;
	renderActionCell?: (record: RowData) => ReactNode;
	modifyColumns?: (columns: ColumnsType<RowData>) => ColumnsType<RowData>;
};