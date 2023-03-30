function App() {
  return (
    <main className='h-screen w-screen flex justify-center items-center bg-gradient-to-br from-sky-400 via-rose-400 to-yellow-400'>
      <section className='w-full md:max-w-[500px]   flex flex-col text-center justify-center p-4 md:p-10 lg:p-24 h-full md:h-full lg:h-3/4 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg rounded text-zinc-700'>
        {" "}
        <h1 className='text-4xl font-thin'>
          Weather <span className='font-black'>Forecast</span>
        </h1>
        <p className='text-sm my-2'>
          Enter below a place you want to know the weather of and select an
          option from the dropdown
        </p>
        <div className='flex justify-center md:mt-4'>
          <input
            type='text'
            value={"Novi Sad"}
            className='px-3 py-1 rounded-l-md border-2 border-white'
          />
          <button className='rounded-r-md border-2 border-zinc-100 hover:border-zinc-500 hover:text-zinc-500 text-zinc-100 px-2 py-1 cursor-pointer'>
            search
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
