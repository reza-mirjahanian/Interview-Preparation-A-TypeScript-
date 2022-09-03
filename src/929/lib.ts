// 929. Unique Email Addresses

export default function func(emails: string[]): number {
  const emailsSet = new Set<string>()

  for (const email of emails) {
    const [name, domain] = email.split('@')
    const [realName] = name.split('+')
    emailsSet.add(realName.replace(/\.+/g, '') + '@' + domain)
  }

  return emailsSet.size
};
