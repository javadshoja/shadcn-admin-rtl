import { fa, Faker } from '@faker-js/faker'

export const customFaker = new Faker({
  locale: [fa],
})

export const users = Array.from({ length: 20 }, () => {
  const firstName = customFaker.person.firstName()
  const lastName = customFaker.person.lastName()
  return {
    id: customFaker.string.uuid(),
    firstName,
    lastName,
    username: customFaker.internet
      .username({ firstName, lastName })
      .toLocaleLowerCase(),
    email: customFaker.internet.email({ firstName }).toLocaleLowerCase(),
    phoneNumber: customFaker.phone.number({ style: 'international' }),
    status: customFaker.helpers.arrayElement([
      'active',
      'inactive',
      'invited',
      'suspended',
    ]),
    role: customFaker.helpers.arrayElement([
      'superadmin',
      'admin',
      'cashier',
      'manager',
    ]),
    createdAt: customFaker.date.past(),
    updatedAt: customFaker.date.recent(),
  }
})
