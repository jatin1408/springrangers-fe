import * as API_ENDPOINT from '../constants/api-endpoints';

const combineBaseURLAndRelativePath = (...argsParam: any) => {
  const args = argsParam.map((item: string, index: number) => {
    if (index > 0 && item && item.charAt(0) !== '/') {
      item = '/' + item;
    }
    return item;
  });
  return args.join('');
};

export const registerURL = () => {
  return combineBaseURLAndRelativePath(
    process.env.NEXT_PUBLIC_BASE_URI,
    API_ENDPOINT.NEXT_PUBLIC_REGISTER
  );
};
export const loginURL = () => {
  return combineBaseURLAndRelativePath(
    process.env.NEXT_PUBLIC_BASE_URI,
    API_ENDPOINT.NEXT_PUBLIC_LOGIN
  );
};
export const createOrderURL = () => {
  return combineBaseURLAndRelativePath(
    process.env.NEXT_PUBLIC_BASE_URI,
    API_ENDPOINT.NEXT_PUBLIC_CREATE_ORDER
  );
};

export const getOrderURL = (id: any) => {
  let getOrder = API_ENDPOINT.NEXT_PUBLIC_GET_ORDER;
  getOrder = getOrder?.replace(':id', id);
  return combineBaseURLAndRelativePath(process.env.NEXT_PUBLIC_BASE_URI, getOrder);
};
