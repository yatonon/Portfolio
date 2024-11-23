import { HeaderContent } from '@/components/header/contents/content';

interface HeaderProps {
  contents: Array<string>;
  onItemClick: (index: number) => void;
}

const Header = ({ contents, onItemClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 bg-gray-800 text-gray-400 h-16 w-full">
      <nav className="h-full">
        <ul className="flex items-center h-full w-full">
          {contents.map((content, index) => (
            <HeaderContent key={index} onClick={() => onItemClick(index)}>
              {content}
            </HeaderContent>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export { Header }