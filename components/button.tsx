export default function Button({ type = 'primary', small = false, children, onClick }: { small?: boolean, type?: 'primary' | 'secondary', children: JSX.Element, onClick: React.MouseEventHandler }) {
    return (
        <button onClick={onClick} className={
            [
                "px-5 py-2 rounded shadow-sm font-bold",
                type == 'primary' && "bg-blue-500 hover:bg-blue-600 text-white",
                type == 'secondary' && "bg-gray-200 hover:bg-gray-300 text-black",
                small && "text-sm",
                "noprint"
            ].join(' ')
        }
        >
            { children }
        </button>
    );
}