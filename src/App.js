import './App.scss';

function App() {
  return (
    <div className="App">
        <div className="marry1">
            <div className="leaf-left">
                <img src="images/top-1.png" alt="Image" />
            </div>
            <div className="container">
                <div className="box">
                    <div className="box-heading">Chúng tôi cưới</div>
                    <div className="box-leaf">
                        <img src="images/leaf-1.png" alt="Image" />
                    </div>
                    <div className="box-name">
                        Quốc Huy <span>&</span> Yến Chi
                    </div>
                    <div className="box-leaf">
                        <img src="images/leaf-2.png" alt="Image" />
                    </div>
                    <div className="box-date">25.02.2023</div>
                    <div className="box-leaf">
                        <img src="images/leaf-3.png" alt="Image" />
                    </div>
                </div>
            </div>
            <div className="leaf-right">
                <img src="images/top-2.png" alt="Image" />
            </div>
        </div>
    </div>
  );
}

export default App;
