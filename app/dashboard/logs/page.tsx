import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import InvoicesTable from '@/app/ui/logs/table';
import LogsTable from '@/app/ui/invoices/table';


export const metadata: Metadata = {
    title: 'Logs',
};

export default async function Page() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Logs</h1>
            </div>
            <LogsTable />
        </div>
    )
}