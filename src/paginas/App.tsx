import './App.css'

function App() {

  return (
    <main className='h-screen w-full flex flex-col items-center justify-center gap-4'>
      <h1>DevBank</h1>
        <div>
          <input className = 'rounded-lg' type = "url" placeholder='Coloque o Endpoint da Sua API'/>
        </div>
    </main>
  )
}

export default App
