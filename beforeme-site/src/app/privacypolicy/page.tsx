import { colors } from "../../colors";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <header className="border-b border-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <div className="flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src="/logo.gif" alt="BeforeMe" className="h-10 w-10 rounded-md shadow-sm" style={{ background: `linear-gradient(to bottom right, ${colors.accent}33, ${colors.secondary}33, ${colors.primary}33)` }} />
              <div>
                <h1 className="text-lg font-semibold tracking-tight">BeforeMe</h1>
                <p className="text-xs text-slate-500">Automates the three-before-me Pinterest workflow</p>
              </div>
            </div>
            <div className="text-sm text-slate-500">Built for Etsy sellers — Early access</div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 mb-8">Privacy Policy</h2>

        <div className="prose prose-slate max-w-none">
          <p>BeforeMe respects your privacy.</p>

          <p>BeforeMe is an early-stage application built as part of a university Sandbox program. We only access Pinterest data that users explicitly authorize through Pinterest's authentication process.</p>

          <h3>Information We Access</h3>
          <p>When you connect your Pinterest account, BeforeMe may access basic account information, boards, and pins solely for the purpose of automating the three-before-me pinning workflow.</p>

          <h3>How We Use Information</h3>
          <p>Authorized data is used only to perform actions requested by the user, such as saving pins to selected boards. We do not sell, share, or use your data for advertising.</p>

          <h3>Data Storage</h3>
          <p>We store only the minimum information necessary to operate the service. We do not store Pinterest passwords.</p>

          <h3>Third Parties</h3>
          <p>BeforeMe uses Pinterest&apos;s API in accordance with Pinterest&apos;s developer policies. We are not affiliated with or endorsed by Pinterest.</p>

          <h3>Contact</h3>
          <p>If you have any questions about this policy, you may contact:</p>
          <p>Stephanie — stephanie.sithu@gmail.com</p>
        </div>
      </main>

      <footer className="border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-slate-500">© {new Date().getFullYear()} BeforeMe — Sandbox student project</div>
      </footer>
    </div>
  );
}