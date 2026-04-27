type Props = {
  q: any;
  selected: string | null;
  onSelect: (opt: string) => void;
};

export default function QuestionCard({ q, selected, onSelect }: Props) {
  return (
    <div>
      <h2 className="mb-4 text-lg">{q.question}</h2>

      <div className="grid gap-3">
        {q.options.map((opt: string) => (
          <button
            key={opt}
            onClick={() => onSelect(opt)}
            className={`p-3 rounded ${
              selected === opt
                ? opt === q.answer
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-gray-800"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}