'use client';

import type { FreeTrialTableUsecaseProps } from '@/views/free-trial/models/converter/interface';
import { ExpandedRowData } from '@/views/free-trial/models/interface';
import { useInitialFreeTrialTable } from '@/views/free-trial/services/usecase/useInitialFreeTrialTable';

// features
import ExportButton from '@/features/export-csv-free-trial-student/ui/ExportButton';

interface WrappingExportButtonProps extends FreeTrialTableUsecaseProps<ExpandedRowData, unknown> {
  fileName: string;
}

const WrappingExportButton = ({ columns, tableData, fileName }: WrappingExportButtonProps) => {
  const { table } = useInitialFreeTrialTable({ columns, tableData });

  return <ExportButton table={table} fileName={fileName} data={tableData} />;
};

export default WrappingExportButton;
