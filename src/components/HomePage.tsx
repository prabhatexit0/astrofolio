import { Card } from './Card';

export function HomePage() {
  return (
    <div className="lg:w-max">
      <Card title="Prabhat Sachdeva">
        <p>Software developer, experienced in web development and interested in programming languages and compilers</p>
      </Card>
      <Card title="Contributing to">
        <a
          href="https://github.com/carbon-language/carbon-lang"
          className="underline mr-4"
          target="_blank"
          rel="noreferer"
        >
          Carbon Lang
        </a>
        <a
          href="https://github.com/carbon-language/carbon-lang/commits?author=prabhatexit0"
          className="underline mr-4"
          target="_blank"
          rel="noreferer"
        >
          Commits
        </a>
        <a
          href="https://summerofcode.withgoogle.com/programs/2023/projects/MV1y9Ngq"
          className="underline"
          target="_blank"
          rel="noreferer"
        >
          Google Summer of Code 2023
        </a>
      </Card>
      <Card title="Building">
        <a className="underline" href="https://quik.run/" target="_blank" rel="noreferer">
          quik.run
        </a>
      </Card>
      <Card title="Technologies Known">
        <p>{`C, C++, TypeScript, JavaScript, Python, React with related libraries / frameworks, Learning more ...`}</p>
      </Card>
      <Card title="Connect with me">
        <div>
          {[
            {
              link: 'https://twitter.com/prabhatexit0',
              title: 'Twitter',
            },
            { link: 'https://github.com/prabhatexit0', title: 'GitHub' },
            { link: 'https://linkedin.com/in/prabhatexit0', title: 'LinkedIn' },
            { link: 'https://discord.gg/pzFm9UZaVb', title: 'Discord' },
          ].map(({ link, title }, idx) => (
            <a href={link} target="_blank" className="underline mr-4">
              {title}
            </a>
          ))}
        </div>
      </Card>
      <Card title="Secret">
        <p className="text-zinc-950">Learning OCaml in free time (cs3110)</p>
      </Card>
    </div>
  );
}
