import Dots from './Dots';

export default function BrowserHeader() {
    return (
        <div className="w-full h-16 bg-slate-50 flex items-center justify-start gap-16 pl-10 pr-10">
            <div className="w-auto h-full flex items-center gap-2 justify-start">
                <Dots color="red" />
                <Dots color="amber" />
                <Dots color="green" />
            </div>
            <div className="w-2/3 h-full flex items-center gap-6 justify-start">
                <div className="flex items-center justify-center gap-3">
                    <div className="w-12 h-12 cursor-pointer aspect-square rounded-lg border-4 border-black flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M15 6l-6 6l6 6" />
                        </svg>
                    </div>
                    <div className="w-12 h-12 cursor-pointer aspect-square rounded-lg border-4 border-black flex items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 6l6 6l-6 6" />
                        </svg>
                    </div>
                </div>
                <div className="w-auto h-full flex items-center justify-center">
                    <input
                        type="text"
                        readOnly
                        className="h-12 font-semibold cursor-pointer tracking-wide border-4 border-black pl-3 pr-3 w-[30rem] rounded-lg"
                        value={'https://www.thecodinghacker.com'}
                    />
                </div>
                <div className="w-auto h-full flex items-center justify-center">
                    <div className="w-12 h-12 aspect-square rounded-lg flex border-4 border-black cursor-pointer items-center justify-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="icon icon-tabler icons-tabler-outline icon-tabler-refresh"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" />
                            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
