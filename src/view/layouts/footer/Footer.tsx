import Image from "next/image";

export default function Footer() {
  const whatsappLink =
    "https://wa.me/5562986251491?text=Ol%C3%A1%2C%20Thiago!%20Vim%20do%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto.";
  const emailLink =
    "https://mail.google.com/mail/?view=cm&fs=1&to=thiagolpssouza@gmail.com&su=Quero%20desenvolver%20um%20site%20ou%20sistema&body=Oi%20Thiago%2C%20vim%20do%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto.";

  return (
    <>
      <footer className="pt-[6rem]">
        <div className="mb-10 rounded-md border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="flex min-w-0 flex-col gap-4">
              <span className="w-fit max-w-full break-words font-inter text-sm font-semibold uppercase tracking-[0.18em] text-generalText [overflow-wrap:anywhere] sm:tracking-[0.24em]">
                Próximo passo
              </span>
              <h2 className="break-words font-anton text-5xl leading-none text-lightText [overflow-wrap:anywhere] sm:text-6xl">
                Seu site pode ser um canal de aquisição, não só uma vitrine.
              </h2>
              <p className="max-w-2xl break-words font-inter text-base leading-7 text-subtitleColor [overflow-wrap:anywhere]">
                Me chame com uma ideia, problema ou referência. Eu te ajudo a
                transformar isso em escopo, prioridade e uma primeira entrega.
              </p>
            </div>

            <div className="flex min-w-0 flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-generalText px-4 text-center font-inter text-sm font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:bg-[#ffbd4f] sm:px-5 sm:tracking-[0.18em]"
              >
                <Image src="/icons/whatsapp.png" alt="" width={22} height={22} />
                Chamar no WhatsApp
              </a>
              <a
                href={emailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md border border-white/20 px-4 text-center font-inter text-sm font-bold uppercase tracking-[0.12em] text-lightText transition-colors hover:border-generalText hover:text-generalText sm:px-5 sm:tracking-[0.18em]"
              >
                Enviar briefing
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
