import BrowserBody from "./BrowserBody";
import BrowserHeader from "./BrowserHeader";

export default function BrowserComponent() {
  return (
    <div className="w-[85%] h-auto pb-16 flex flex-col mt-6 custom-shadow bg-primary items-start overflow-hidden justify-start gap-12 rounded-3xl border-2 border-black">
      <BrowserHeader />
      <BrowserBody />
    </div>
  )
}
