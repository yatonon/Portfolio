type Props = {
    children: string,
    onClick: () => void
}

const HeaderContent = ({ children, onClick }: Props) => {
    return (
    <li className="text-xs md:text-2xl lg:text-3xl flex-1 h-full flex items-center justify-center border-l border-gray-500 hover:text-white cursor-pointer" onClick={onClick}>
        {children}
    </li>
    );
}
    
export {HeaderContent}