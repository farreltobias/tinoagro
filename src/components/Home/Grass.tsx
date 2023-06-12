import Image from 'next/image';

import grass from '@public/grass.png';

export const Grass: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray pt-20">
      <div className="flex overflow-hidden">
        {Array.from({ length: 10 }).map(() => (
          <>
            <Image src={grass} alt="grass" className="h-32" />
            <Image src={grass} alt="grass" className="h-32 scale-x-[-1]" />
          </>
        ))}
      </div>
    </div>
  );
};
