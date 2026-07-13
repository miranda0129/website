import Link from "next/link";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Photo Gallery", href: "/gallery" },
  // { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
  { label: "Guestbook", href: "/guestbook" }
];

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center justify-between bg-dark-blue px-8 py-4 text-white">

      <nav>
        <ul className="flex gap-8">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="transition hover:text-light-blue"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}