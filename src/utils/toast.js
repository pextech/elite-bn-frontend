import Toastify from 'toastify-js';

const successToast = (fullName) => {

  Toastify({
    text: `welcome ${fullName}`,
    duration: 3000,
    close: true,
    position: 'right',
    backgroundColor: 'green',
    color: 'white',
  }).showToast();

}

const errorToast = (errorMessage) => {

  Toastify({
    text: errorMessage,
    duration: 3000,
    close: true,
    position: 'right',
    backgroundColor: 'red',
    color: 'white',
  }).showToast();

}
export { successToast, errorToast }

