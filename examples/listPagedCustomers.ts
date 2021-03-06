import { Customer } from '../src';

/**
 * PaginatedResponse usage demo
 *
 * This could take a while if your shop has a lot of customers!
 */
export async function listPagedCustomers(): Promise<Customer[]> {
  let allCustomers: Customer[] = [];

  let search = () => Customer.find({}, { limit: 250 });

  while (true) {
    const [customers, pagination] = await search();

    console.log(`Page ${pagination.page} has ${customers.length} customers`);
    allCustomers = allCustomers.concat(customers);

    // On next loop, use query the next page instead.
    if (pagination.next) {
      search = pagination.next;
    } else {
      // No next page available, break out of the loop
      break;
    }
  }

  console.log(`You have ${allCustomers.length} customers!`);

  return allCustomers;
}
