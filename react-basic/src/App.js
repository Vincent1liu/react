const isLogin = true;

function App() {
  // const handleClick = () => {console.log('button was clicked')};


  // 获取事件参数 e
  const handleClick = (e) => {console.log('e button was clicked',e)};

  // 获取自定义参数
  const handleClick1 = (e) => {console.log('e button was clicked 2',e)};
  return (
    <div className="App">
      This is a React App

      { /*条件渲染 */ }
      {isLogin && <span> This is span </span>}
      {isLogin ?  <span> isLogin is true </span> :  <span> This is loading </span>}

      { /* 事件绑定 */ }
      <button onClick = {handleClick}> click me </button>
      <button onClick = {()=> handleClick1("Vincent")}> click me 1 </button>
    </div>
  );
}

export default App;
