import { toast } from 'materialize-css';

const PopUp = {
  showMessage: (status, msg) => {
    const color = status === 'success' ? 'green' : 'red';
    toast({ html: msg, classes: color, displayLength: 2000 });
  }
}

export default PopUp;