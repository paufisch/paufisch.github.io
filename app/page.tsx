import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";
import FishMark from "./FishMark";
import FlowThumbnail from "./FlowThumbnail";
import InformationCurves from "./InformationCurves";

const GROUP =
  "https://uni-tuebingen.de/en/fakultaeten/mathematisch-naturwissenschaftliche-fakultaet/fachbereiche/informatik/lehrstuehle/methods-of-machine-learning/start/";

const accounts = [
  { label: "Email", href: "mailto:paul.fischer@uni-tuebingen.de", Icon: Mail },
  { label: "Google Scholar", href: "https://scholar.google.com/citations?user=wj6eJjYAAAAJ&hl=en", Icon: GraduationCap },
  { label: "GitHub", href: "https://github.com/paufisch", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/paul-fischer-895537211/", Icon: Linkedin },
];

// Start delay of an element's entrance on load (see "Entrance" in globals.css).
const enter = (ms: number) => ({ ["--d" as string]: `${ms}ms` });

const papers = [
  {
    title: "Stable and Calibrated Latent Force ODE Filters",
    authors: ["Paul Fischer", "Jonathan Schmidt", "Philipp Hennig"],
    venue: "arXiv preprint, 2026",
    href: "https://arxiv.org/abs/2610.33939",
    thumbnail: <InformationCurves />,
    summary:
      "Latent force ODE filters infer the unobserved forces driving a mechanistic system together with its state. We show what makes them unstable and build a version that is stable and calibrated out of the box.",
  },
  {
    title: "Optimal Lattice Boltzmann Closures through Multi-Agent Reinforcement Learning",
    authors: ["Paul Fischer", "Sebastian Kaltenbach", "Sergey Litvinov", "Sauro Succi", "Petros Koumoutsakos"],
    venue: "ACM Transactions on AI for Science, 2026",
    href: "https://dl.acm.org/doi/abs/10.1145/3822504",
    thumbnail: <FlowThumbnail />,
    summary:
      "Coarse Lattice Boltzmann simulations of turbulence are cheap but unstable. A closure learned with multi-agent reinforcement learning stabilizes them and recovers the energy spectra of much finer simulations.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-[42rem] px-5 pt-16 pb-24 md:pt-28 md:pb-32 text-[1.125rem] leading-[1.65]">
      <FishMark />
      <h1 className="name mt-6 text-[2.25rem] md:text-[2.75rem] leading-[1.05] font-semibold tracking-[-0.02em]">
        <span>Paul Fischer</span>
      </h1>

      <p className="enter mt-6 text-[1.25rem] leading-[1.55]" style={enter(260)}>
        I’m a PhD student in Philipp Hennig’s group,{" "}
        <a href={GROUP}>Methods of Machine Learning</a>, at the University of Tübingen. I am also
        part of <a href="https://imprs.is.mpg.de/" className="[font-variant-caps:all-small-caps]">IMPRS-IS</a> and the{" "}
        <a href="https://ellis.eu/research/phd-postdoc">ELLIS PhD Program</a>. I’m interested in
        how machine learning can model physics and dynamical systems. Before that, I
        studied physics at ETH Zurich and wrote my master’s thesis at Harvard.
      </p>

      <ul className="mt-6 flex gap-5">
        {accounts.map(({ label, href, Icon }, i) => (
          <li key={label} className="enter" style={enter(380 + 50 * i)}>
            <a href={href} aria-label={label} title={label} className="account">
              <Icon size={20} strokeWidth={1.75} />
            </a>
          </li>
        ))}
      </ul>

      <h2 className="enter mt-16 md:mt-24 font-semibold" style={enter(420)}>
        Publications
      </h2>
      <ul className="mt-5 space-y-10">
        {papers.map((p, i) => (
          <li
            key={p.href}
            style={enter(480 + 80 * i)}
            className="paper enter grid grid-cols-[5.5rem_1fr] sm:grid-cols-[9rem_1fr] gap-x-5 sm:gap-x-6 items-start"
          >
            <a
              href={p.href}
              tabIndex={-1}
              aria-hidden
              className="thumbnail relative mt-1.5 block aspect-[4/3] overflow-hidden rounded-[3px] bg-surface"
            >
              {p.thumbnail}
            </a>
            <div>
              <a href={p.href} className="paper__title">
                {p.title}
              </a>
              <div className="text-muted">
                {p.authors.map((a, i) => (
                  <span key={a}>
                    {i > 0 && ", "}
                    {a === "Paul Fischer" ? <span className="text-ink">{a}</span> : a}
                  </span>
                ))}
              </div>
              <div className="text-muted italic">{p.venue}</div>
              <div className="summary">
                <p className="pt-2 text-[1rem] leading-relaxed">{p.summary}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
