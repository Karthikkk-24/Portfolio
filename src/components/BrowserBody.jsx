export default function BrowserBody() {
    return (
        <div className="flex h-auto items-start gap-20 justify-start py-6 px-28 w-full">
            <div className="h-auto custom-shadow w-3/5 border-4 border-black rounded-xl flex items-center justify-center p-5 flex-col">
                <h1 className="text-5xl font-semibold">Karthik Shettigar</h1>
            </div>
            <div className="h-auto custom-shadow w-1/3 border-4 overflow-hidden border-black rounded-xl flex items-center justify-center p-0 flex-col">
                <img src="/images/img.jpg" className="object-cover" alt="" />
            </div>
        </div>
    );
}
