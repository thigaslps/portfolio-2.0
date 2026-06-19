import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBolt,
  faChartLine,
  faCode,
  faMagnifyingGlassChart,
} from "@fortawesome/free-solid-svg-icons";

export default function Services() {
  const whatsappLink =
    "https://wa.me/5562986251491?text=Ol%C3%A1%2C%20Thiago!%20Vim%20do%20seu%20site%20e%20quero%20conversar%20sobre%20um%20projeto.";

  const services = [
    {
      icon: faChartLine,
      title: "Landing pages para vender",
      description:
        "Páginas rápidas, responsivas e focadas em transformar tráfego em conversas pelo WhatsApp, formulários ou agenda.",
      items: ["Copy orientada a conversão", "SEO técnico", "Métricas e eventos"],
    },
    {
      icon: faCode,
      title: "Sistemas web sob medida",
      description:
        "Dashboards, portais, áreas internas e produtos digitais com interface clara, API, banco de dados e deploy.",
      items: ["Front-end moderno", "Back-end escalável", "Painéis administrativos"],
    },
    {
      icon: faBolt,
      title: "Integrações e automações",
      description:
        "Conecto ferramentas, APIs e processos para reduzir trabalho manual e deixar sua operação mais previsível.",
      items: ["APIs e webhooks", "Fluxos automatizados", "Manutenção evolutiva"],
    },
  ];

  const steps = [
    "Diagnóstico do objetivo",
    "Protótipo e escopo claro",
    "Desenvolvimento com entregas",
    "Publicação e acompanhamento",
  ];

  return (
    <div id="servicesSection" className="mb-[8rem] pt-8">
      <div className="flex flex-col gap-10">
        <div className="grid min-w-0 grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div className="flex min-w-0 flex-col gap-4">
            <span className="w-fit max-w-full break-words font-inter text-sm font-semibold uppercase tracking-[0.18em] text-generalText [overflow-wrap:anywhere] sm:tracking-[0.24em]">
              Serviços
            </span>
            <h2 className="break-words font-anton text-5xl leading-none text-lightText [overflow-wrap:anywhere] sm:text-6xl">
              O que posso construir para o seu negócio
            </h2>
          </div>
          <p className="break-words font-inter text-base leading-7 text-subtitleColor [overflow-wrap:anywhere] lg:max-w-2xl">
            Trabalho do planejamento ao deploy para você ter uma solução bonita,
            rápida e pronta para receber clientes. A prioridade é simples: cada
            tela precisa deixar a próxima ação óbvia.
          </p>
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex min-h-[360px] min-w-0 flex-col justify-between rounded-md border border-white/10 bg-white/[0.04] p-5 shadow-custom transition-colors hover:border-generalText/70 sm:p-6"
            >
              <div className="flex flex-col gap-5">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-generalText text-primary">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <div className="flex min-w-0 flex-col gap-3">
                  <h3 className="break-words font-anton text-3xl leading-none text-lightText [overflow-wrap:anywhere]">
                    {service.title}
                  </h3>
                  <p className="break-words font-inter text-sm leading-6 text-subtitleColor [overflow-wrap:anywhere]">
                    {service.description}
                  </p>
                </div>
              </div>

              <ul className="mt-8 flex flex-col gap-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 font-inter text-sm text-middleGrayColor"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-generalText" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="grid min-w-0 grid-cols-1 gap-6 border-y border-white/10 py-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex min-w-0 flex-col gap-4">
            <div className="flex items-center gap-3 text-generalText">
              <FontAwesomeIcon icon={faMagnifyingGlassChart} />
              <span className="min-w-0 break-words font-inter text-xs font-semibold uppercase tracking-[0.16em] [overflow-wrap:anywhere] sm:tracking-[0.22em]">
                Processo sem ruído
              </span>
            </div>
            <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-generalText/50 font-anton text-sm text-generalText">
                    {index + 1}
                  </span>
                  <span className="font-inter text-sm text-subtitleColor">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-lightText px-4 text-center font-inter text-sm font-bold uppercase tracking-[0.12em] text-primary transition-colors hover:bg-generalText sm:w-auto sm:px-5 sm:tracking-[0.18em]"
          >
            Conversar agora
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        </div>
      </div>
    </div>
  );
}
