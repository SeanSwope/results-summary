import memoryImg from './assets/icon-memory.svg'
import reactionImg from './assets/icon-reaction.svg'
import verbalImg from './assets/icon-verbal.svg'
import visualImg from './assets/icon-visual.svg'

// Light red: hsl(0, 100%, 67%)
// Orangey yellow: hsl(39, 100%, 56%)
// Green teal: hsl(166, 100%, 37%)
// Cobalt blue: hsl(234, 85%, 45%)

function SummaryLine({category, score}: {category: string, score: number}) {
  let image;
  let colorClass;
  let bgColorClass;
  
  switch(category) {
    case 'Reaction':
      image = reactionImg;
      colorClass = 'text-[hsl(0_100%_67%)]';
      bgColorClass = 'bg-[hsl(0_100%_67%)]/10';
      break;
    case 'Memory':
      image = memoryImg;
      colorClass = 'text-[hsl(39_100%_56%)]';
      bgColorClass = 'bg-[hsl(39_100%_56%)]/10';
      break;
    case 'Verbal':
      image = verbalImg;
      colorClass = 'text-[hsl(166_100%_37%)]';
      bgColorClass = 'bg-[hsl(166_100%_37%)]/10';
      break;
    case 'Visual':
      image = visualImg;
      colorClass = 'text-[hsl(234_85%_45%)]';
      bgColorClass = 'bg-[hsl(234_85%_45%)]/10';
      break;
    default:
      image = memoryImg;
      colorClass = 'text-[hsl(39_100%_56%)]';
      bgColorClass = 'bg-[hsl(39_100%_56%)]/10';
  }

  return (
    <div className={`flex justify-between text-md p-2 mx-3 ${bgColorClass}`}>
      <div className={`flex items-center space-x-2`}>
        <img src={image} alt={category} className={`w-4 h-4 pr-1 ${colorClass}`} />
        <span className={`text-md ${colorClass}`}>{category}</span>
      </div>
      <div>
        <span className='text-gray-500 text-xs'>
          <strong className='font-bold text-gray-900'>{score}</strong> {' / 100'}
        </span>
      </div>
    </div>
  );
}

export default SummaryLine;