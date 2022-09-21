initSqlJs({ locateFile: filename => `./js/sql-wasm.wasm` }).then(function(SQL){
    const valid = document.getElementById('valid');
    valid.addEventListener("click", (event) => {
        event.preventDefault();
        const db = new SQL.Database();
        db.run("CREATE TABLE client (ID, NAME, EMAIL, AGE);");
        let c = 1;
        const inputID = c++;
        const inputNAME = document.getElementById('inputNAME').value;
        const inputEMAIL = document.getElementById('inputEMAIL').value;
        const inputAGE = document.getElementById('inputAGE').value;
        const showResult = document.getElementById('showResult');
        db.run("INSERT INTO client VALUES ("+inputID+", '"+inputNAME+"', '"+inputEMAIL+"', '"+inputAGE+"')");
        const querySelect = db.exec("SELECT * FROM client");
        const dataColumn = querySelect[0].columns;
        const dataValues = querySelect[0].values;
        console.log(querySelect);
        showResult.innerHTML = dataColumn[1] + ": " + dataValues[0][1] + "</br>" + dataColumn[2] + ": " + dataValues[0][2] + "</br>" + dataColumn[3] + ": " + dataValues[0][3];

    })
  });