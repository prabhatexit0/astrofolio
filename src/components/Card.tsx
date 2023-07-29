type CardType = {
  title: string;
  children: React.ReactNode;
};

export function Card({ title, children }: CardType) {
  return (
    <div className="py-4">
      <H>{title}</H>
      <div className="text-gray-400">{children}</div>
    </div>
  );
}

function H({ children }: { children: React.ReactNode }) {
  const isSecret = children == 'Secret';
  const className = `font-bold text-lg ${isSecret ? 'text-gray-950' : 'text-gray-600'}`;
  return <h1 className={className}># {children}</h1>;
}
