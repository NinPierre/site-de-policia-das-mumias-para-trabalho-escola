import { createFileRoute } from "@tanstack/react-router";
import anel from "@/assets/anel.jpg";
import suspeito from "@/assets/suspeito-real.png.asset.json";
import badge from "@/assets/badge.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Departamento de Polícia — Caso: O Anel Perdido" },
      { name: "description", content: "Arquivo policial sobre o roubo do Anel de Princesa Nefer — investigação do filme As Múmias e o Anel Perdido." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Special+Elite&family=Roboto+Condensed:wght@400;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen px-4 py-10 md:py-16">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <header className="flex flex-col items-center gap-4 text-center mb-10">
          <img src={badge} alt="Distintivo da Polícia" width={120} height={120} className="drop-shadow-2xl" />
          <p className="tape px-6 py-2 text-sm md:text-base">Confidencial • Arquivo Restrito</p>
          <h1 className="text-4xl md:text-6xl font-bold text-accent">
            DEPARTAMENTO DE POLÍCIA
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl font-display">
            Divisão de Crime das mumias
          </p>
        </header>

        {/* Case file */}
        <section className="file-card rounded-sm p-6 md:p-10 mb-8">
          <div className="flex flex-wrap items-start justify-between gap-4 border-b-2 border-primary/30 pb-4 mb-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary/70">Caso Nº 1923-EG</p>
              <h2 className="text-3xl md:text-4xl text-primary">O Anel Perdido</h2>
              <p className="text-sm text-primary/70 mt-1">Filme de referência: As Múmias e o Anel Perdido (2023)</p>
            </div>
            <span className="stamp text-danger">Procurado</span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <Info label="Data do Crime" value="Século XXI a.C. (relíquia)" />
            <Info label="Local" value="Pirâmide Real — Egito Antigo" />
            <Info label="Status" value="Suspeito foragido" />
          </div>
        </section>

        {/* Evidence: Ring */}
        <section className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="file-card rounded-sm p-6">
            <p className="tape inline-block px-4 py-1 text-xs mb-4">Evidência #01</p>
            <img
              src={anel}
              alt="Anel de Princesa Nefer, evidência fotográfica"
              width={1024} height={1024}
              loading="lazy"
              className="w-full rounded-sm border-4 border-primary/40 shadow-2xl"
            />
            <h3 className="text-2xl text-primary mt-4">O Anel de Nefer</h3>
            <ul className="mt-3 space-y-1 text-primary/90 text-sm leading-relaxed">
              <li><b>Material:</b> Ouro maciço com hieróglifos</li>
              <li><b>Origem:</b> Tesouro real do Faraó</li>
              <li><b>Poder:</b> Une os portadores em casamento sagrado</li>
              <li><b>Valor:</b> Inestimável</li>
            </ul>
          </div>

          {/* Suspect */}
          <div className="file-card rounded-sm p-6">
            <p className="tape inline-block px-4 py-1 text-xs mb-4 bg-danger text-foreground" style={{background:"var(--danger)", color:"white"}}>Suspeito Procurado</p>
            <img
              src={suspeito.url}
              alt="Foto policial de Lorde Sylvester Carnaby"
              width={1024} height={1024}
              loading="lazy"
              className="w-full rounded-sm border-4 border-danger/60 shadow-2xl grayscale-[20%]"
            />
            <h3 className="text-2xl text-primary mt-4">Lorde Sylvester Carnaby</h3>
            <ul className="mt-3 space-y-1 text-primary/90 text-sm leading-relaxed">
              <li><b>Profissão:</b> Arqueólogo / Colecionador britânico</li>
              <li><b>Nacionalidade:</b> Inglesa</li>
              <li><b>Sinais:</b> Monóculo, bigode fino, postura arrogante</li>
              <li><b>Crime:</b> Furto qualificado de relíquia milenar</li>
            </ul>
          </div>
        </section>

        {/* Report */}
        <section className="file-card rounded-sm p-6 md:p-10 mb-8">
          <p className="tape inline-block px-4 py-1 text-xs mb-4">Relatório do Investigador</p>
          <h3 className="text-2xl md:text-3xl text-primary mb-4">Resumo da Ocorrência</h3>
          <div className="space-y-4 text-primary/90 leading-relaxed">
            <p>
              Durante uma escavação no Egito moderno, o arqueólogo britânico
              <b> Lorde Sylvester Carnaby</b> invadiu a câmara real e subtraiu
              o <b>Anel de Nefer</b>, símbolo sagrado que une os noivos por
              vínculo eterno. O suspeito fugiu para Londres carregando consigo
              o objeto roubado e, até o momento, <b>continua foragido</b>.
            </p>
            <p className="border-2 border-danger/60 bg-danger/10 p-4 rounded-sm font-display text-danger text-center">
              ⚠ EM CASO DE AVISTAMENTO DO SUSPEITO, LIGUE IMEDIATAMENTE PARA
              O DISQUE-DENÚNCIA: <b>0800-999-MUMIA</b>.
            </p>
            <p>
              A investigação está em andamento. As autoridades solicitam que
              qualquer informação sobre o paradeiro de Carnaby seja reportada
              imediatamente. O anel ainda não foi recuperado e o suspeito
              permanece <b>PROCURADO</b>.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="file-card rounded-sm p-6 md:p-10 mb-8">
          <p className="tape inline-block px-4 py-1 text-xs mb-6">Linha do Tempo</p>
          <ol className="relative border-l-4 border-primary/40 ml-3 space-y-6">
            {[
              ["01", "Casamento acidental", "Thut e Nefer ficam unidos pelo poder do anel."],
              ["02", "Furto do anel", "Carnaby retira o artefato da câmara real sem autorização."],
              ["03", "Ainda em investigação", "Suspeito foragido em Londres; anel não recuperado."],
            ].map(([n, t, d]) => (
              <li key={n} className="ml-6">
                <span className="absolute -left-5 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground font-display font-bold shadow-lg">
                  {n}
                </span>
                <h4 className="text-lg font-bold text-primary">{t}</h4>
                <p className="text-primary/80 text-sm">{d}</p>
              </li>
            ))}
          </ol>
        </section>

        <footer className="text-center text-muted-foreground text-xs mt-10 font-display tracking-widest">
          ⚖ DOCUMENTO OFICIAL • USO RESTRITO À APRESENTAÇÃO ESCOLAR ⚖
        </footer>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-primary/20 bg-primary/5 p-3 rounded-sm">
      <p className="text-[10px] uppercase tracking-widest text-primary/60">{label}</p>
      <p className="font-display text-primary">{value}</p>
    </div>
  );
}
