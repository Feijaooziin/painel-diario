export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <section className="w-full max-w-lg rounded-xl border border-border bg-card p-8 shadow-sm">
        <div className="space-y-2">
          <span className="text-sm font-medium text-secondary">
            PAINEL OPERACIONAL
          </span>

          <h1 className="text-3xl font-bold tracking-tight text-primary">
            Controle da operação
          </h1>

          <p className="text-sm leading-6 text-text-secondary">
            Acompanhe produção, metas, desempenho e indicadores operacionais em
            um único lugar.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="rounded-lg border border-border p-4">
            <span className="text-xs text-text-secondary">Produção</span>

            <strong className="mt-1 block text-xl font-bold text-primary">
              92%
            </strong>
          </div>

          <div className="rounded-lg border border-border p-4">
            <span className="text-xs text-text-secondary">Meta</span>

            <strong className="mt-1 block text-xl font-bold text-success">
              100%
            </strong>
          </div>

          <div className="rounded-lg border border-border p-4">
            <span className="text-xs text-text-secondary">Alertas</span>

            <strong className="mt-1 block text-xl font-bold text-warning">
              03
            </strong>
          </div>
        </div>
      </section>
    </main>
  );
}
