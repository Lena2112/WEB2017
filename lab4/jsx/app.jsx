let App = React.createclass ({
   render: function() {
      return (
         <div className="center-block">
            <Canvas/>
            <SettingsForm/>
         </div>
      );
   }
});

let SettingsForm = React.createclass({
    render() {
        return (
            <div className="right-block">
                <form className="form-inline">
                    <BasicSettings/>
                    <CircleSettings/>
                    <RectangleSettings/>
                    <TriangleSettings/>
                    <InfoBlock/>
                </form>
            </div>
        );
    }
});

let BasicSettings  = React.createclass ({
    render() {
        return (
            <div className="form-group">
              <h1>Shape:</h1> 
              <select className="form-control" id="select"> 
                <option value="circle">Circle</option> 
                <option value="rectangle">Rectangle</option> 
                <option value="triangle">Triangle</option> 
              </select> 
              <h2>Fill color:</h2> 
              <input className="form-control" id="fill_color" type="text"></input>  
              <h2>Border color:</h2>
              <input className="form-control" id="border_color" type="text"></input>
			</div>
        )
    }
});

let CircleSettings = React.createclass ({
    render() {
        return (
            <div className="form-group" id="circle">
              <h2>Radius:</h2>
              <input className="form-control" id="radius" type="text"></input>
              <h2>CenterX:</h2>
              <input className="form-control" id="centerX" type="text"></input>
              <h2>CenterY:</h2>
              <input className="form-control" id="centerY" type="text"></input>
            </div>
        )
    }
});

let RectangleSettings = React.createclass ({
    render() {
        return (
            <div className="form-group" id="rectangle">
              <h2>X1:</h2>
              <input className="form-control" id="x1_rectangle" type="text"></input>
              <h2>Y1:</h2>
              <input className="form-control" id="y1_rectangle" type="text"></input>
              <h2>X2:</h2>
              <input className="form-control" id="x2_rectangle" type="text"></input>
              <h2>Y2:</h2>
              <input className="form-control" id="y2_rectangle" type="text"></input>
            </div>
        )
    }
});

let TriangleSettings = React.createclass ({
    render() {
        return (
            <div className="form-group" id="triangle">
              <h2>X1:</h2>
              <input className="form-control" id="x1_triangle" type="text"></input>
              <h2>Y1:</h2>
              <input className="form-control" id="y1_triangle" type="text"></input>
              <h2>X2:</h2>
              <input className="form-control" id="x2_triangle" type="text"></input>
              <h2>Y2:</h2>
              <input className="form-control" id="y2_triangle" type="text"></input>
              <h2>X3:</h2>
              <input className="form-control" id="x3_triangle" type="text"></input>
              <h2>Y3:</h2>
              <input className="form-control" id="y3_triangle" type="text"></input>
            </div>
        )
    }
});

let InfoBlock = React.createclass ({
    render() {
        return (
            <h2 id="perimeter"></h2>
            <h2 id="area"></h2>
        );
    }
});

let Canvas = React.createclass ({
    render() {
        return (
            <div className="left-block">
                <canvas id='canvas'></canvas>
            </div>
        );
    }
});

ReactDOM.render(<App/>, document.getElementById('index'));