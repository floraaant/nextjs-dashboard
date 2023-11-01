import Table from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchCustomers, fetchFilteredCustomers } from '@/app/lib/data';
 
export const metadata: Metadata = {
  title: 'Customers',
};
 
export default async function Page({
  searchParams, 
}: {
  searchParams?: {
      query?: string;
  };
}){  
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);
  return (
    <div className="w-full">
      <Table customers={customers} />
    </div>
  );
}