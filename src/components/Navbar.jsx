import NavItem from "./NavItem";

export default function Navbar() {
    return (
        <div className="w-[80%] h-16 flex mt-6 custom-shadow bg-primary items-center justify-center gap-12 rounded-full border-2 border-black">
            <NavItem title="Home" activeStatus="true" />
            <NavItem title="Projects" />
            <NavItem title="Blogs" />
            <NavItem title="Shop" />
            <NavItem title="About" />
            <NavItem title="Contact" />
        </div>
    );
}
