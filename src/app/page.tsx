export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-primary">Painel Operacional</h1>

        <p className="mt-2 text-text-secondary">
          Sistema operacional logístico
        </p>

        <div className="mt-6 flex gap-3">
          <div className="rounded-lg bg-success px-4 py-2 text-white">
            Sucesso
          </div>

          <div className="rounded-lg bg-warning px-4 py-2 text-white">
            Atenção
          </div>

          <div className="rounded-lg bg-danger px-4 py-2 text-white">Erro</div>
        </div>
      </div>
    </main>
  );
}
