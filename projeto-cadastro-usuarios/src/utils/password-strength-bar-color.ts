export const passwordStrengthBarColor = ( passwordStrengthNumber: number ) => {
    const changeColor = document.getElementsByClassName('mdc-linear-progress__bar-inner') as HTMLCollectionOf<HTMLElement>;
    console.log(document.getElementsByClassName('mdc-linear-progress__bar-inner'));
    

    if ( passwordStrengthNumber <= 33 ) {
      changeColor[0].style.borderColor = '#ff4d4d'; // Vermelho para fraca
    } else if ( passwordStrengthNumber <= 66 ) {
      changeColor[0].style.borderColor = '#ffa500'; // Laranja para média
    } else {
      changeColor[0].style.borderColor = '#4caf50'; // Verde para forte
    }
}