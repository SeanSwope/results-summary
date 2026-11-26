import SummaryLine from './SummaryLine';

function ResultSummary() {
  return ( 
    <>
      <div className="bg-white md:flex md:flex-row rounded-lg w-full text-right md:shadow-md">
        <div className="flex flex-col justify-center items-center bg-linear-to-b from-[hsl(252_100%_67%)] to-[hsl(241_81%_54%)] rounded-lg p-4 w-full md:w-1/2 text-center">
          <span className="text-white/70 text-l mb-2">Your Result</span>
          <div className="flex flex-col text-center gap-1 h-24 w-24 items-center justify-center rounded-full bg-blue-800 text-4xl font-bold text-white">
            <span>76</span>
            <span className="text-white/70 text-xs block text-center leading-none">of 100</span>
          </div>
          <span className="text-white text-sm mt-2">Great</span>
          <span className="text-white/70 text-xs mt-2">You scored higher than 65% of the people that have taken these tests.</span>

        </div>

        <div className="flex flex-col rounded-lg p-1 w-full md:w-1/2 text-center md:text-left gap-2">
          <span className="p-2 text-md font-bold text-left">Summary</span>

          <SummaryLine category="Reaction" score={80} />
          <SummaryLine category="Memory" score={92} />
          <SummaryLine category="Verbal" score={61} />
          <SummaryLine category="Visual" score={72} />

          <div className="flex justify-center p-2 mt-4">
            <button className="bg-black text-white/70 text-xs h-12 md:h-6 w-3/4 mx-auto rounded-3xl transition-all duration-200 hover:bg-linear-to-r hover:from-indigo-500 hover:to-purple-500 hover:text-white active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2">Continue</button>
          </div>
        </div>
      </div>
    </> 
  );
}

export default ResultSummary;