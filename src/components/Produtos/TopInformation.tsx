import Breadcrumbs from '../Breadcrumbs';

export const TopInformation: React.FC = () => {
  return (
    <div className="min-h-[80px] bg-gray ">
      <div className="container flex min-h-inherit w-full max-w-screen-lg justify-between">
        <Breadcrumbs />

        <div className="flex w-full max-w-xs items-end justify-end gap-11">
          <div className="relative ">
            <p className="mb-4 text-base font-bold text-blue-darker">
              Linha Smart
            </p>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-green" />
          </div>
          <div className="relative ">
            <p className="mb-4 text-base font-bold text-gray-light">
              Data Vision
            </p>
            <div className="absolute bottom-0 left-0 h-1 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
