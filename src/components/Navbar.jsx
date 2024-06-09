export default function Navbar() {
    return (
        <div className="w-[80%] h-16 flex mt-6 custom-shadow bg-primary items-center justify-center gap-12 rounded-full border-2 border-black">
            <a href="" className="font-semibold after:w-0 after:hover:w-full relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-0.5 transition-all after:transition-all text-secondary">Home</a>
            <a href="" className="font-normal after:w-0 after:hover:w-full relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-0.5 transition-all after:transition-all text-slate-600">Projects</a>
            <a href="" className="font-normal after:w-0 after:hover:w-full relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-0.5 transition-all after:transition-all text-slate-600">Blogs</a>
            <a href="" className="font-normal after:w-0 after:hover:w-full relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-0.5 transition-all after:transition-all text-slate-600">Shop</a>
            <a href="" className="font-normal after:w-0 after:hover:w-full relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-0.5 transition-all after:transition-all text-slate-600">About</a>
            <a href="" className="font-normal after:w-0 after:hover:w-full relative after:absolute after:left-0 after:bottom-0 after:bg-black after:h-0.5 transition-all after:transition-all text-slate-600">Contact</a>
        </div>
    );
}
