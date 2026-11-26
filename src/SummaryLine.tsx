import memoryImg from './assets/icon-memory.svg'
import reactionImg from './assets/icon-reaction.svg'
import verbalImg from './assets/icon-verbal.svg'
import visualImg from './assets/icon-visual.svg'

function SummaryLine({category, score}: {category: string, score: number}) {
  let image;
  
  switch(category) {
    case "Reaction":
      image = reactionImg;
      break;
    case "Memory":
      image = memoryImg;
      break;
    case "Verbal":
      image = verbalImg;
      break;
    case "Visual":
      image = visualImg;
      break;
    default:
      image = memoryImg;
  }

  return (
    <div className="flex justify-between p-2">
      <div className="flex items-center space-x-2">
        <img src={image} alt="Memory" className="w-4 h-4 pr-1" />
        <span className="text-xs">{category}</span>
      </div>
      <div>
        <span className="text-gray-500 text-xs">
          <strong className="font-bold text-gray-900">{score}</strong> {" / 100"}
        </span>
      </div>
    </div>
  );
}

export default SummaryLine;