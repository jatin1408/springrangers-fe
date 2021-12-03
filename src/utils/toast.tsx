import { toast } from 'react-toastify';

const toastConfig: any = {
  position: toast.POSITION.BOTTOM_RIGHT,
  autoClose: 5000,
  theme: 'colored',
  pauseOnFocusLoss: false,
  hideProgressBar: true,
  draggable: false
};

/**
 * @description Usage: Toast.type(message)
 */

var Toast: any = {
  error: function ({ msg, args }: any) {
    toast.error(msg, { ...toastConfig, ...args });
  },
  info: function ({ msg, args }: any) {
    toast.info(msg, { ...toastConfig, ...args });
  },
  success: function ({ msg, args }: any) {
    toast.success(msg, { ...toastConfig, ...args });
  },
  warning: function ({ msg, args }: any) {
    toast.warn(msg, { ...toastConfig, ...args });
  }
};

export default Toast;
