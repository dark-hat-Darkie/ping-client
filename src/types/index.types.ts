export interface DataRow {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  company: string;
  createdAt: string;
}

export interface DataTableProps {
  data: DataRow[];
}
