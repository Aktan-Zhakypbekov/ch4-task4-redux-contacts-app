import ListItem from './ListItem';
let arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function HomePage() {
  return (
    <div className='home-page'>
      <div className='display'>
        <div className='list-funcs'>
          <div className='list-funcs__search-cont'>
            <input type='text' className='list-funcs__search-cont__search' />
          </div>
          <div className='list-funcs__funcs-cont'>
            <button className='list-funcs__funcs-cont__filter-favs btn'>
              Filter
            </button>
            <button className='list-funcs__funcs-cont__sort-a-z btn'>
              A-Z
            </button>
            <button className='list-funcs__funcs-cont__sort-z-a btn'>
              Z-A
            </button>
          </div>
        </div>
        <div className='list'>
          {arr.map((elem) => {
            return <ListItem />;
          })}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
