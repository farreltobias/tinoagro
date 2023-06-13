import Link from 'next/link';

export const Contact: React.FC = () => {
  return (
    <div className="relative bg-blue-lighter">
      <section className="absolute -top-1/4 left-1/2 flex h-64 w-full max-w-screen-lg -translate-x-1/2 items-center rounded-3xl rounded-r-[2.5rem] bg-white">
        <div className="w-1/2 px-20 text-4xl font-bold leading-snug text-blue-dark">
          Quero contratar a Tinoagro!
        </div>
        <Link
          href="https://wa.me/5543996654101"
          target="_blank"
          className="flex h-full flex-1 items-center justify-center rounded-r-[2.5rem] rounded-bl-[5.625rem] bg-green text-3xl text-white"
        >
          <span>
            Chamar no <b>WhatsApp</b>
          </span>
        </Link>
      </section>

      <ul className="container flex max-w-screen-lg justify-between pb-32 pt-64 text-xl text-white">
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
