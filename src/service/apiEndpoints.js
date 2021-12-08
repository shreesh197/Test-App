import Api from "./apiConfig";

export const getDetails = (data) => {
  const url = `http://app.zestmoney.in/Pricing/V2/Quote/AvailableEmiPlans?merchantId=${data.merchantId}&basketAmount=${data.basketAmount}&paymentGatewayId=${data.paymentGatewayId}`;
  return Api()
    .get(url)
    .then((result) => {
      return result.data;
    });
};
