import ILink from '@/models/ILink';

export default function NavbarLink({ label, url }: ILink) {
  return (
    <a href={url} className="block rounded bg-transparent py-2 pl-3 pr-4 text-white" aria-current="page">
      {label}
    </a>
  );
}
