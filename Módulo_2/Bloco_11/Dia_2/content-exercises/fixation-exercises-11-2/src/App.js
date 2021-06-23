import Image from './Image';

const imgInfos = {
  source: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg',
  alternativeText: 'Cute cat staring',
}

function App() {
  return (
    <main>
      <Image imgInfos={imgInfos}/>
    </main>
  );
}

export default App;
