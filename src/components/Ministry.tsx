const Ministry = ({
  header,
  title,
  description,
}: {
  header: string;
  title: string;
  description: string;
}) => {
  return (
    <div className='max-w-72 border-stone-300 border rounded-lg '>
      <div className='bg-[#202020] flex items-center justify-center rounded-t-lg h-40'>
        <span className='text-white text-3xl font-bold'>{header}</span>
      </div>
      <div className='flex flex-col mt-8 p-6'>
        <span className='font-bold text-2xl'>{title}</span>
        <span className='mt-4 text-stone-500'>{description}</span>
      </div>
    </div>
  );
};

export default Ministry;
