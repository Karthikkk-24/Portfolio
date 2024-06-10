import Dots from "./Dots";

export default function BrowserHeader() {
    return (
        <div className="w-full h-16 bg-slate-50 flex items-center justify-between pl-10 pr-10">
            <div className="w-1/3 h-full flex items-center gap-6 justify-start">
                <Dots color="red" />
                <Dots color="amber" />
                <Dots color="green" />
            </div>
        </div>
    );
}
