import ILink from "@/models/ILink";

export default function NavbarLink({ label, url }: ILink) {
    return (
        <a href={url} className="bg-transparent block py-2 pl-3 pr-4 text-white rounded" aria-current="page">{label}</a>
    )
}