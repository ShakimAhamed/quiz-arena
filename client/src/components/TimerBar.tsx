export default function TimerBar({ time }: { time: number }) {
  return (
    <div className="w-full bg-gray-700 h-2 rounded mb-4">
      <div
        className="bg-green-400 h-2 rounded transition-all"
        style={{ width: `${(time / 10) * 100}%` }}
      />
    </div>
  );
}