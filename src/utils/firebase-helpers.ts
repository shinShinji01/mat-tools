export const errorHandler = (error: any) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.error('code:', errorCode);
  console.error('message:', errorMessage);
};
