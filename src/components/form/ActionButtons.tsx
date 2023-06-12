interface ActionButtonsProps {
  cleanUser: () => void;
}

const ActionButtons = ({ cleanUser }: ActionButtonsProps) => {
  return (
    <div className="flex items-center py-16 sm:justify-between md:w-[600px]">
      <div className="md:w-1/3">
        <div className="flex justify-end">
          <button
            className="inline-flex flex-row flex-nowrap items-center rounded-full border-2 border-black bg-white px-[24px] py-[8px] text-[16px] text-black hover:border-white hover:bg-black hover:text-white"
            onClick={cleanUser}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="md:w-2/3">
        <div className="flex justify-end">
          <button
            className="inline-flex flex-row flex-nowrap items-center rounded-full border-2 border-black bg-black px-[24px] py-[8px] text-[16px] text-white hover:border-black hover:bg-white hover:text-black"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActionButtons;
