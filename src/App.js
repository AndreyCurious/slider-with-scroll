import { useRef } from 'react';
import './App.css';
import mockData from './mockData.ts';
import { randomForm } from './randomForm.js';

function App() {
  const classes = ['leftLeaf', 'circle', 'rightLeaf', 'bigLeaf'];
  const listRef = useRef(null);

  const scrollContainerBy = (distance) =>
    listRef.current?.scrollBy({ left: distance, behavior: "smooth" });
  let pervForm = '';

  const newData = mockData.map((item) => {
    const newItem = randomForm(item, pervForm, classes);
    pervForm = newItem.form;
    return newItem;
  })
  return (
    <div className="App">
      <h1 className="Title">Полезные Материалы</h1>
      <span className="Description">Собрали для вас полезные исследования схемы кормления и другие материалы, которые пригодятся для лучших результатов на вашем хозяйстве</span>
      <div className="ScrollGallery" ref={listRef}>
        {newData.map((item, index) => (
          <div key={index}>
            <a href='ведет на статью' className="ScrollGallery-card">
              <img className={`ScrollGallery-card-img ${item.form} ${item.long ? 'long' : ''}`} alt='картинка с животным' src={item.img} />
              <span className="ScrollGallery-card-title" >{item.title}</span>
              <span className="ScrollGallery-card-date" >{item.date}</span>
            </a>
          </div>
        ))}
      </div>
      <div className="Buttons">
        <button onClick={() => scrollContainerBy(-344)} className="Buttons-prev" />
        <button onClick={() => scrollContainerBy(344)} className="Buttons-next" />
      </div>
    </div>
  );
}

export default App;
