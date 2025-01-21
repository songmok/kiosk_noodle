interface InstructionType {
  mainText: string;
  subText: string;
}

const Instruction = ({ mainText, subText }: InstructionType) => {
  return (
    <div className="text-center mb-[77px]">
      <span className="font-bold text-[68px] text-blueColor tracking-[0.02em]">
        {mainText} <b className="block">{subText}</b>
      </span>
    </div>
  );
};

export default Instruction;
