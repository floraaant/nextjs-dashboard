'use client';

import { CustomerForm } from '@/app/lib/definitions';
import {
    AtSymbolIcon,
    PhotoIcon,
    UserCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { Button } from '@/app/ui/button';
import { updateCustomer } from '@/app/lib/actions';
import { useFormState } from 'react-dom';


export default function EditCustomerForm({
    customer,
}: {
    customer: CustomerForm;
}) {
    const updateCustomerWithId = updateCustomer.bind(null, customer.id);

    const initialState = { message: null, errors: {} };
    const [state, dispatch] = useFormState(updateCustomerWithId, initialState);
    return (
        <form action={dispatch}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">

                {/* Customer Name */}
                <div className="mb-4">
                    <label htmlFor="name" className="mb-2 block text-sm font-medium">
                        Set name
                    </label>
                    <div className="relative">
                        <input
                            name="name"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            placeholder="Enter a name"
                            aria-describedby="name-error"
                            defaultValue={customer.name}
                        />
                        <UserCircleIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />

                    </div>
                    {state.errors?.name ? (
                        <div
                            id="name-error"
                            aria-live="polite"
                            className="mt-2 text-sm text-red-500"
                        >
                            {state.errors.name.map((error: string) => (
                                <p key={error}>{error}</p>
                            ))}
                        </div>
                    ) : null}
                </div>
                {/* Customer Email */}
                <div className="mb-4">
                    <label htmlFor="email" className="mb-2 block text-sm font-medium">
                        Set email
                    </label>
                    <div className="relative">
                        <input
                            name="email"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            placeholder="Enter an email"
                            aria-describedby="email-error"
                            type='email'
                            defaultValue={customer.email}
                        />
                        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />

                    </div>
                    {state.errors?.email ? (
                        <div
                            id="name-error"
                            aria-live="polite"
                            className="mt-2 text-sm text-red-500"
                        >
                            {state.errors.email.map((error: string) => (
                                <p key={error}>{error}</p>
                            ))}
                        </div>
                    ) : null}
                </div>
                {/* Customer Email */}
                <div className="mb-4">
                    <label htmlFor="image_url" className="mb-2 block text-sm font-medium">
                        Set image
                    </label>
                    <div className="relative">
                        <input
                            name="image_url"
                            className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                            placeholder="Enter an image"
                            aria-describedby="image_url-error"
                            type='text'
                            defaultValue={customer.image_url}
                        />
                        <PhotoIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
                    </div>
                    {state.errors?.image_url ? (
                        <div
                            id="image-error"
                            aria-live="polite"
                            className="mt-2 text-sm text-red-500"
                        >
                            {state.errors.image_url.map((error: string) => (
                                <p key={error}>{error}</p>
                            ))}
                        </div>
                    ) : null}
                </div>
                {state.message ? (
                    <div aria-live="polite" className="my-2 text-sm text-red-500">
                        <p>{state.message}</p>
                    </div>
                ) : null}
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/dashboard/customers"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button type="submit">Update Invoice</Button>
                </div>
            </div>

        </form>
    );
}
