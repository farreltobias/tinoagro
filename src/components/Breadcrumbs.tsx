/* This example requires Tailwind CSS v2.0+ */
import { FaChevronRight } from 'react-icons/fa';

const pages = [
  { name: 'Nossos Produtos', href: '/produtos/slug', current: false },
];

export default function Breadcrumbs() {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-500 text-sm font-normal"
            >
              Início
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name}>
            <div className="flex items-center">
              <FaChevronRight
                className="h-2 w-1 flex-shrink-0 text-green"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className="hover:text-gray-700 ml-4 text-sm font-medium text-blue"
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
