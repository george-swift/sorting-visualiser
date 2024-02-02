import { GithubIcon } from '@/components/icons'
import logoVisualiser from '/visualiser.svg'

export const Header = () => (
  <header>
    <nav
      className="mx-auto flex max-w-7xl items-center justify-between py-5 px-3 xl:px-0"
      aria-label="Global"
    >
      <div className="-m-1.5 pr-1.5 py-1.5 flex items-center gap-x-1">
        <img className="h-8 w-8" src={logoVisualiser} alt="" />
        <span className="text-xl font-extrabold">Sorting Visualiser</span>
      </div>

      <a
        className="flex items-center"
        href="https://github.com/george-swift/sorting-visualiser"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GithubIcon />
      </a>
    </nav>
  </header>
)
