import { useState } from "react";
import reactLogo from "./assets/react.svg";
import styles from "./App.module.css";
import { calculateImc, Level, levels } from "./helpers/imc";
import { GridItem } from "./components/GridItem";
import leftArrow from "./assets/circle-left-solid.svg";

function App() {
  const [heightUser, setHeightUser] = useState<number>(0);
  const [weightUser, setWeightUser] = useState<number>(0);
  const [toshow, setToShow] = useState<Level | null>(null);

  // const heightFn = ()=>{
  //   return heightUser
  // }

  // const weightFn = ()=>{
  //   return weightUser
  // }

  const calcImc = () => {
    if (heightUser && weightUser) {
      setToShow(calculateImc(heightUser, weightUser));
    } else {
      alert("Digite todos os campos.");
    }
  };

  const handleBackButton = () => {
    setToShow(null);
    setHeightUser(0);
    setWeightUser(0);
  };

  return (
    <div className={styles.main}>
      <header className={styles.header}>Alessandro Muratore</header>
      <div className={styles.container}>
        <div className={styles.boxLeft}>
          <h1>Calcule o seu IMC</h1>
          <p>
            IMC é a sigla para o índice de Massa Corpórea, parámetro adotado
            pela OMS, Organização Mundial de Saúde, para calcular o peso ideal
            de cada pessoa.{" "}
          </p>

          <input
            type="number"
            placeholder="Digite sua altura em metros. Ex. 1.50"
            value={heightUser > 0 ? heightUser : ""}
            onChange={(e) => setHeightUser(parseFloat(e.target.value))}
            disabled={toshow ? true : false}
          />
          <input
            className={styles.lastOne}
            type="number"
            placeholder="Digite o seu peso em kg. Ex. 90"
            value={weightUser > 0 ? weightUser : ""}
            onChange={(e) => setWeightUser(parseFloat(e.target.value))}
            disabled={toshow ? true : false}
          />
          <button onClick={calcImc} disabled={toshow ? true : false}>Calcular IMC</button>
        </div>
        <div className={styles.boxRight}>
          {!toshow && (
            <div className={styles.grid}>
              {levels.map((level, key) => (
                <GridItem key={key} item={level} />
              ))}
            </div>
          )}
          {toshow && (
            <div className={styles.rightBig}>
              <div className={styles.rightArrow} onClick={handleBackButton}>
                <img src={leftArrow} alt="" width={30} />
              </div>
              <GridItem item={toshow} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
