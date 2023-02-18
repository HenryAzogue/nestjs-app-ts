import Link from 'next/link';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
];

export default function Navigation() {
  return (
    <header className="bg-blue-400 p-3 rounded-2x1">
      <nav>
        <ul>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
