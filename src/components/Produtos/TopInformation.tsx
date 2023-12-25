import Breadcrumbs from '../Breadcrumbs';

interface TopInformationProps {
  type: string;
}

export const TopInformation: React.FC<TopInformationProps> = ({ type }) => {
  return (
    <div className="min-h-[80px] bg-gray pt-7 md:pt-0">
      <div className="container flex min-h-inherit w-full max-w-screen-lg flex-col justify-between gap-5 md:flex-row">
        <Breadcrumbs />

        {type === 'linha-smart' && (
          <div className="flex w-full max-w-full items-end gap-11 md:max-w-xs md:justify-end">
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
        )}
      </div>
    </div>
  );
};
