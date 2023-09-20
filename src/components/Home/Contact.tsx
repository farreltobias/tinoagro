import Link from 'next/link';

export const Contact: React.FC = () => {
  return (
    <div className="relative bg-blue-lighter">
      <section className="absolute -top-1/4 left-1/2 flex h-36 w-[95%] max-w-screen-lg -translate-x-1/2 flex-col items-center rounded-3xl rounded-r-[2.5rem] bg-white md:h-64 md:w-full md:flex-row">
        <div className="w-full px-5 py-4 text-center text-lg font-bold leading-snug text-blue-dark md:w-1/2 md:text-left md:text-4xl">
          Quero contratar a Tinoagro!
        </div>

        <Link
          href="https://wa.me/5543996654101"
          target="_blank"
          className="flex h-full w-full flex-1 items-center justify-center rounded-b-2xl bg-green text-lg text-white md:rounded-r-[2.5rem] md:rounded-bl-[5.625rem] md:text-3xl"
        >
          <span>
            Chamar no <b>WhatsApp</b>
          </span>
        </Link>
      </section>

      <ul className="container flex max-w-screen-lg  flex-col justify-between gap-14 pb-20 pt-28 text-xl  text-white md:flex-row md:gap-0 md:pb-32 md:pt-64">
        <li>
          <section className="flex flex-col items-center gap-8">
            <div className="h-[2px] w-8 bg-green" />
            <Link href="tel:+5543996654101" target="_blank">
              Ligar para <b>(43) 996654101</b>
            </Link>
          </section>
        </li>
        <li>
          <section className="flex flex-col items-center gap-8">
            <div className="h-[2px] w-8 bg-green" />
            <Link href="mailto:contato@tinoagro.com.br" target="_blank">
              <b>contato@tinoagro.com.br</b>
            </Link>
          </section>
        </li>
      </ul>
    </div>
  );
};
